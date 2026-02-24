"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import RequireAuth from "@/components/RequireAuth";
import Toast from "@/components/Toast";

export default function AccountPage() {
  return (
    <RequireAuth>
      <AccountSettings />
    </RequireAuth>
  );
}

function AccountSettings() {
  const { user, updateProfile, changePassword, deleteAccount } = useAuth();
  const router = useRouter();

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Profile state
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [dob, setDob] = useState(user?.dob ?? "");
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({});
  const [profileSuccess, setProfileSuccess] = useState(false);

  // Address state
  const [street, setStreet] = useState(user?.address?.street ?? "");
  const [city, setCity] = useState(user?.address?.city ?? "");
  const [addrState, setAddrState] = useState(user?.address?.state ?? "");
  const [zipCode, setZipCode] = useState(user?.address?.zipCode ?? "");
  const [country, setCountry] = useState(user?.address?.country ?? "");
  const [addressErrors, setAddressErrors] = useState<Record<string, string>>({});
  const [addressSuccess, setAddressSuccess] = useState(false);

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});

  // Delete state
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function validateProfile(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    setProfileErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleProfileSubmit(e: FormEvent) {
    e.preventDefault();
    setProfileSuccess(false);
    if (!validateProfile()) return;

    const result = await updateProfile({ name, email, dob });
    if (result.success) {
      setProfileSuccess(true);
      setToastMessage("Profile updated successfully");
      setToastVisible(true);
    } else {
      setProfileErrors({ email: result.error ?? "Update failed" });
    }
  }

  async function handleAddressSubmit(e: FormEvent) {
    e.preventDefault();
    setAddressSuccess(false);
    const next: Record<string, string> = {};
    if (!street.trim()) next.street = "Street address is required";
    if (!city.trim()) next.city = "City is required";
    if (!addrState.trim()) next.addrState = "State is required";
    if (!zipCode.trim()) next.zipCode = "ZIP code is required";
    if (!country.trim()) next.country = "Country is required";
    setAddressErrors(next);
    if (Object.keys(next).length > 0) return;

    const result = await updateProfile({
      address: { street, city, state: addrState, zipCode, country },
    });
    if (result.success) {
      setAddressSuccess(true);
      setToastMessage("Address updated successfully");
      setToastVisible(true);
    } else {
      setAddressErrors({ street: result.error ?? "Update failed" });
    }
  }

  function validatePassword(): boolean {
    const next: Record<string, string> = {};
    if (!currentPassword) next.currentPassword = "Current password is required";
    if (!newPassword) {
      next.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      next.newPassword = "Password must be at least 6 characters";
    }
    if (!confirmNewPassword) {
      next.confirmNewPassword = "Please confirm your new password";
    } else if (newPassword !== confirmNewPassword) {
      next.confirmNewPassword = "Passwords do not match";
    }
    setPasswordErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handlePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validatePassword()) return;

    const result = await changePassword(currentPassword, newPassword);
    if (result.success) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordErrors({});
      setToastMessage("Password changed successfully");
      setToastVisible(true);
    } else {
      setPasswordErrors({ currentPassword: result.error ?? "Password change failed" });
    }
  }

  async function handleDeleteAccount(e: FormEvent) {
    e.preventDefault();
    setDeleteError("");

    if (!deletePassword) {
      setDeleteError("Password is required");
      return;
    }

    const result = await deleteAccount(deletePassword);
    if (result.success) {
      router.push("/");
    } else {
      setDeleteError(result.error ?? "Delete failed");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h1>

      {/* Profile Information */}
      <section className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
        <form onSubmit={handleProfileSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setProfileSuccess(false);
                if (profileErrors.name) setProfileErrors((prev) => ({ ...prev, name: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                profileErrors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="First and last name"
            />
            {profileErrors.name && (
              <p className="text-xs text-red-600 mt-1">{profileErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setProfileSuccess(false);
                if (profileErrors.email) setProfileErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                profileErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {profileErrors.email && (
              <p className="text-xs text-red-600 mt-1">{profileErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-900 mb-1">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setProfileSuccess(false);
              }}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
            >
              Save Changes
            </button>
            {profileSuccess && (
              <span className="text-sm text-green-600 font-medium">Saved!</span>
            )}
          </div>
        </form>
      </section>

      {/* Shipping Address */}
      <section className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
        <form onSubmit={handleAddressSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-900 mb-1">
              Street Address
            </label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
                setAddressSuccess(false);
                if (addressErrors.street) setAddressErrors((prev) => ({ ...prev, street: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                addressErrors.street ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="123 Main Street, Apt 4B"
            />
            {addressErrors.street && (
              <p className="text-xs text-red-600 mt-1">{addressErrors.street}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setAddressSuccess(false);
                  if (addressErrors.city) setAddressErrors((prev) => ({ ...prev, city: "" }));
                }}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  addressErrors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="San Francisco"
              />
              {addressErrors.city && (
                <p className="text-xs text-red-600 mt-1">{addressErrors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="addrState" className="block text-sm font-medium text-gray-900 mb-1">
                State
              </label>
              <input
                id="addrState"
                type="text"
                value={addrState}
                onChange={(e) => {
                  setAddrState(e.target.value);
                  setAddressSuccess(false);
                  if (addressErrors.addrState) setAddressErrors((prev) => ({ ...prev, addrState: "" }));
                }}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  addressErrors.addrState ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="CA"
              />
              {addressErrors.addrState && (
                <p className="text-xs text-red-600 mt-1">{addressErrors.addrState}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-900 mb-1">
                ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                  setAddressSuccess(false);
                  if (addressErrors.zipCode) setAddressErrors((prev) => ({ ...prev, zipCode: "" }));
                }}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  addressErrors.zipCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="94102"
              />
              {addressErrors.zipCode && (
                <p className="text-xs text-red-600 mt-1">{addressErrors.zipCode}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-1">
                Country
              </label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setAddressSuccess(false);
                  if (addressErrors.country) setAddressErrors((prev) => ({ ...prev, country: "" }));
                }}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  addressErrors.country ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="United States"
              />
              {addressErrors.country && (
                <p className="text-xs text-red-600 mt-1">{addressErrors.country}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
            >
              Save Address
            </button>
            {addressSuccess && (
              <span className="text-sm text-green-600 font-medium">Saved!</span>
            )}
          </div>
        </form>
      </section>

      {/* Change Password */}
      <section className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-900 mb-1">
              Current Password
            </label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                if (passwordErrors.currentPassword) setPasswordErrors((prev) => ({ ...prev, currentPassword: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                passwordErrors.currentPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {passwordErrors.currentPassword && (
              <p className="text-xs text-red-600 mt-1">{passwordErrors.currentPassword}</p>
            )}
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-900 mb-1">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (passwordErrors.newPassword) setPasswordErrors((prev) => ({ ...prev, newPassword: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                passwordErrors.newPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="At least 6 characters"
            />
            {passwordErrors.newPassword && (
              <p className="text-xs text-red-600 mt-1">{passwordErrors.newPassword}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-900 mb-1">
              Confirm New Password
            </label>
            <input
              id="confirmNewPassword"
              type="password"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
                if (passwordErrors.confirmNewPassword) setPasswordErrors((prev) => ({ ...prev, confirmNewPassword: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                passwordErrors.confirmNewPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {passwordErrors.confirmNewPassword && (
              <p className="text-xs text-red-600 mt-1">{passwordErrors.confirmNewPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
          >
            Update Password
          </button>
        </form>
      </section>

      {/* Notification Preferences */}
      <section className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Order updates and shipping notifications</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Deals and promotional emails</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Product recommendations</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Account security alerts</span>
          </label>
        </div>
      </section>

      {/* Delete Account */}
      <section className="border border-red-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-red-700 mb-2">Delete Account</h2>
        <p className="text-sm text-gray-600 mb-4">
          Permanently delete your account and all associated data including orders and cart items. This action cannot be undone.
        </p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="bg-white border border-red-300 text-red-700 hover:bg-red-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            Delete Account
          </button>
        ) : (
          <form onSubmit={handleDeleteAccount} className="space-y-4" noValidate>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm font-medium text-red-800 mb-3">
                Are you sure? Enter your password to confirm.
              </p>
              <input
                type="password"
                value={deletePassword}
                onChange={(e) => {
                  setDeletePassword(e.target.value);
                  if (deleteError) setDeleteError("");
                }}
                placeholder="Enter your password"
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  deleteError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {deleteError && (
                <p className="text-xs text-red-600 mt-1">{deleteError}</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
              >
                Permanently Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeletePassword("");
                  setDeleteError("");
                }}
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
