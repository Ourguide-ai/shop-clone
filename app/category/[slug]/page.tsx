import { Metadata } from "next";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/db/mongoose";
import Product from "@/lib/db/models/Product";
import Review from "@/lib/db/models/Review";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import CategoryPageContent from "./CategoryPageContent";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.name} — eBay`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} — eBay`,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  await dbConnect();

  const products = await Product.find({ category: cat.name }).lean();

  // Aggregate average ratings
  const productIds = products.map((p) => p.productId);
  const ratingAgg = await Review.aggregate([
    { $match: { productId: { $in: productIds } } },
    {
      $group: {
        _id: "$productId",
        avgRating: { $avg: "$rating" },
        reviewCount: { $sum: 1 },
      },
    },
  ]);

  const ratingMap = new Map(
    ratingAgg.map((r: { _id: number; avgRating: number; reviewCount: number }) => [
      r._id,
      { avgRating: r.avgRating, reviewCount: r.reviewCount },
    ])
  );

  const serializedProducts = products.map((p) => {
    const ratings = ratingMap.get(p.productId);
    return {
      id: p.productId,
      title: p.title,
      description: p.description,
      price: p.price,
      image: p.image,
      category: p.category,
      avgRating: ratings?.avgRating ?? 0,
      reviewCount: ratings?.reviewCount ?? 0,
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    description: cat.description,
    numberOfItems: serializedProducts.length,
    itemListElement: serializedProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.title,
        description: p.description,
        image: p.image,
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "USD",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CategoryPageContent
        category={cat}
        products={serializedProducts}
        totalCount={serializedProducts.length}
      />
    </>
  );
}
