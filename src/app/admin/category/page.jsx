"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import toast from "react-hot-toast";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
  name: "",
  slug: "",
});
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category");
      const data = await res.json();

      if (data.success) {
        setCategories(data.data);
      }
    } catch (err) {
      toast.error("Failed to load categories");
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
    ...(name === "name" && {
      slug: generateSlug(value),
    }),
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
  return toast.error("Category name is required");
}

    setLoading(true);

    try {
      const url = editing
        ? `/api/category/${editing}`
        : "/api/category";

      const method = editing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);

        setFormData({
  name: "",
  slug: "",
});
        setEditing(null);
        fetchCategories();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this category?")) return;

    try {
      const res = await fetch(`/api/category/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        fetchCategories();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleEdit = (cat) => {
   setEditing(cat._id);

setFormData({
  name: cat.name,
  slug: cat.slug,
});
  };


 const cancelEdit = () => {
  setEditing(null);

  setFormData({
    name: "",
    slug: "",
  });
};
 

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="bg-white text-black rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-5">
            {editing ? "Edit Category" : "Add Category"}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-rows-2 gap-3">

          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Category Name"
    className=" border rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"

/>

<input
  type="text"
  name="slug"
  value={formData.slug}
  readOnly
    className="w-full mt-3 border rounded-lg px-4 py-3 bg-gray-100 text-gray-600"

/>

            <button
              disabled={loading}
              className="bg-blue-600 text-white px-5 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <Plus size={18} />
              {editing ? "Update" : "Add"}
            </button>

            {editing && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-400 text-white px-4 rounded-lg"
              >
                <X size={18} />
              </button>
            )}
          </form>
        </div>

        <div className="bg-white rounded-xl shadow">

          <div className="border-b text-black px-6 py-4">
            <h2 className="font-bold text-xl">
              All Categories
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-50 text-black">

              <tr>
                <th className="text-left  text-black px-6 py-4">#</th>
                <th className="text-left text-b px-6 py-4">
                  Category
                </th>
                <th className="text-center px-6 py-4">
                  Created
                </th>
                <th className="text-center px-6 py-4">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {categories.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-8 text-black"
                  >
                    No Categories Found
                  </td>
                </tr>
              )}

              {categories.map((cat, index) => (
                <tr
                  key={cat._id}
                  className="border-t text-black hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {cat.name}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {new Date(cat.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => handleEdit(cat)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(cat._id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}