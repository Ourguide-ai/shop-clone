export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "electronics",
    name: "Electronics",
    description:
      "Discover the latest gadgets, devices, and tech accessories for every need.",
  },
  {
    slug: "clothing",
    name: "Clothing",
    description:
      "Fashion for every occasion — from everyday essentials to standout pieces.",
  },
  {
    slug: "home",
    name: "Home",
    description:
      "Everything for your living space — decor, kitchen, and lifestyle products.",
  },
  {
    slug: "books",
    name: "Books",
    description:
      "Explore our curated collection of bestsellers, classics, and new releases.",
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
}

export function getAllCategories(): CategoryMeta[] {
  return CATEGORIES;
}
