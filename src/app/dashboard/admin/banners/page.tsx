"use client";

import { useState, useEffect } from "react";
import {
  Upload,
  Image as ImageIcon,
  Edit,
  Eye,
  Save,
  X,
} from "lucide-react";
// import { useSession } from "next-auth/react";

interface Banner {
  _id: string;
  page: "home" | "about";
  imageUrl: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  updatedAt: string;
  updatedBy: string;
}

export default function BannerManagementPage() {
  // const { data: session } = useSession();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");

  // Mock data - replace with actual API call
  useEffect(() => {
    setTimeout(() => {
      setBanners([
        {
          _id: "1",
          page: "home",
          imageUrl: "/Hero/hero-image.png",
          title: "Master IELTS with Confidence",
          subtitle: "Comprehensive preparation with expert guidance and practice tests",
          isActive: true,
          updatedAt: "2026-02-15T10:00:00Z",
          updatedBy: "Admin User",
        },
        {
          _id: "2",
          page: "about",
          imageUrl: "/about-banner.jpg",
          title: "About IELTS Pro",
          subtitle: "Your trusted partner in IELTS preparation journey",
          isActive: true,
          updatedAt: "2026-02-10T14:30:00Z",
          updatedBy: "Super Admin",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setPreviewImage(banner.imageUrl);
    setShowModal(true);
  };

  const handleSave = () => {
    // API call to save banner changes
    console.log("Saving banner:", editingBanner);
    setShowModal(false);
    setEditingBanner(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        if (editingBanner) {
          setEditingBanner({
            ...editingBanner,
            imageUrl: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getPageBadge = (page: string) => {
    return page === "home" 
      ? "bg-blue-100 text-blue-800" 
      : "bg-purple-100 text-purple-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Banner Management
          </h1>
          <p className="text-gray-500">
            Manage banners for Home and About pages
          </p>
        </div>
      </div>

      {/* Banners Grid */}
      {loading ? (
        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading banners...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Banner Preview */}
              <div className="relative h-64 bg-gray-100">
                {banner.imageUrl ? (
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-gray-300" />
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getPageBadge(
                      banner.page
                    )}`}
                  >
                    {banner.page} Page
                  </span>
                </div>
                {banner.isActive && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                )}
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-bold mb-1">{banner.title}</h3>
                    <p className="text-sm text-gray-200">{banner.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Banner Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <p>
                      Last updated:{" "}
                      {new Date(banner.updatedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <p>By: {banner.updatedBy}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(banner)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Banner
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {showModal && editingBanner && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Edit {editingBanner.page.charAt(0).toUpperCase() + editingBanner.page.slice(1)} Page Banner
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update banner image and content
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Preview */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Image
                </label>
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer">
                      <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">Upload New Image</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Recommended size: 1920x600px. Max file size: 2MB
                </p>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Title
                </label>
                <input
                  type="text"
                  value={editingBanner.title}
                  onChange={(e) =>
                    setEditingBanner({
                      ...editingBanner,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter banner title"
                />
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Subtitle
                </label>
                <textarea
                  rows={3}
                  value={editingBanner.subtitle}
                  onChange={(e) =>
                    setEditingBanner({
                      ...editingBanner,
                      subtitle: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter banner subtitle"
                ></textarea>
              </div>

              {/* Active Status */}
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={editingBanner.isActive}
                    onChange={(e) =>
                      setEditingBanner({
                        ...editingBanner,
                        isActive: e.target.checked,
                      })
                    }
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Set as active banner
                  </span>
                </label>
              </div>

              {/* Preview Card */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Preview:
                </p>
                <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="text-lg font-bold mb-1">
                        {editingBanner.title || "Banner Title"}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {editingBanner.subtitle || "Banner Subtitle"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
