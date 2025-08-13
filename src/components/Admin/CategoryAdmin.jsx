import React, { useEffect, useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  ChevronDown,
  ChevronRight,
  Save,
  X,
} from "lucide-react";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../store/api";

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSubcategory, setEditingSubcategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    parentId: null,
  });
  const [createCategory, createStatus] = useCreateCategoryMutation();
  const { data: fetchedCategories, ...getStatus } = useGetCategoryQuery();
  const [deleteCategory, deleteStatus] = useDeleteCategoryMutation();

  useEffect(() => {
    if (fetchedCategories) {
      setCategories(
        fetchedCategories.map((cat) => ({
          ...cat,
          isExpanded: false,
          subcategories: cat.children || [],
        }))
      );
    }
  }, [fetchedCategories]);

  const toggleExpand = (categoryId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, isExpanded: !cat.isExpanded } : cat
      )
    );
  };

  const handleAddCategory = () => {
    createCategory({ name: formData.name, slug: formData.slug });
    resetForm();
  };
  const handleAddSubcategory = (parentId) => {
    createCategory({
      name: formData.name,
      slug: formData.slug,
      parentId: Number(parentId),
    });
    resetForm();
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category.id);
    setFormData({
      name: category.name,
      slug: category.slug,
      parentId: null,
    });
  };

  const handleEditSubcategory = (subcategory, parentId) => {
    setEditingSubcategory(subcategory.id);
    setFormData({
      name: subcategory.name,
      slug: subcategory.slug,
      parentId,
    });
  };

  const saveEdit = () => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingCategory
            ? { ...cat, name: formData.name, slug: formData.slug }
            : cat
        )
      );
      setEditingCategory(null);
    } else if (editingSubcategory) {
      setCategories((prev) =>
        prev.map((cat) => ({
          ...cat,
          subcategories: cat.subcategories.map((sub) =>
            sub.id === editingSubcategory
              ? {
                  ...sub,
                  name: formData.name,
                  slug: formData.slug,
                }
              : sub
          ),
        }))
      );
      setEditingSubcategory(null);
    }
    resetForm();
  };

  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId);
    resetForm();
  };

  // const handleDeleteSubcategory = (subcategoryId) => {};

  const resetForm = () => {
    setFormData({ name: "", slug: "", parentId: null });
    setShowAddForm(false);
    setEditingCategory(null);
    setEditingSubcategory(null);
  };

  return (
    <>
      {createStatus.isLoading && (
        <div className="text-center text-gray-500 py-6">
          Loading categories...
        </div>
      )}

      {createStatus.isError && (
        <div className="text-center text-red-500 py-6">
          Failed to load categories.
        </div>
      )}
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Category Management
                </h1>
                <p className="text-gray-600 mt-2">
                  Manage categories and subcategories for your products
                </p>
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Add Category
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          {(showAddForm || editingCategory || editingSubcategory) && (
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingCategory
                    ? "Edit Category"
                    : editingSubcategory
                    ? "Edit Subcategory"
                    : "Add New SubCategory"}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter category name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        slug: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter slug"
                  />
                </div>
                {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ParentID
                </label>
                <input
                  type="text"
                  value={formData.parentId}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({
                  //     ...prev,
                  //     parentId: e.target.value,
                  //   }))
                  // }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div> */}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={
                    editingCategory || editingSubcategory
                      ? saveEdit
                      : handleAddCategory
                  }
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Save size={16} />
                  {editingCategory || editingSubcategory
                    ? "Save Changes"
                    : "Add Category"}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Categories List */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Categories & Subcategories
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {categories?.map((category) => (
                <div key={category.id} className="p-6">
                  {/* Category Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleExpand(category.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {category.isExpanded ? (
                          <ChevronDown size={20} />
                        ) : (
                          <ChevronRight size={20} />
                        )}
                      </button>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600">{category.slug}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        subcategories
                      </span>
                      <button
                        onClick={() => {
                          setFormData({
                            name: "",
                            slug: "",
                            parentId: category.id,
                          });
                          setShowAddForm(true);
                        }}
                        className="text-green-600 hover:text-green-700 p-1"
                        title="Add Subcategory"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="text-blue-600 hover:text-blue-700 p-1"
                        title="Edit Category"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="text-red-600 hover:text-red-700 p-1"
                        title="Delete Category"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Subcategories */}
                  {category?.isExpanded && (
                    <div className="mt-4 ml-8 space-y-3">
                      {category?.subcategories?.length === 0 ? (
                        <p className="text-gray-500 text-sm italic">
                          No subcategories yet
                        </p>
                      ) : (
                        category.subcategories.map((subcategory) => (
                          <div
                            key={subcategory.id}
                            className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                          >
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {subcategory.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {subcategory.slug}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  handleEditSubcategory(
                                    subcategory,
                                    category.id
                                  )
                                }
                                className="text-blue-600 hover:text-blue-700 p-1"
                                title="Edit Subcategory"
                              >
                                <Edit2 size={14} />
                              </button>
                              <button
                                // onClick={() =>
                                //   deleteSubcategory(subcategory.id)
                                // }
                                className="text-red-600 hover:text-red-700 p-1"
                                title="Delete Subcategory"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}

                      {/* Add Subcategory Button */}
                      {formData.parentId === category.id && showAddForm && (
                        <div className="bg-blue-50 rounded-lg p-4 border-2 border-dashed border-blue-200">
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Subcategory name"
                            />
                            <input
                              type="text"
                              value={formData.slug}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  slug: e.target.value,
                                }))
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Subcategory Slug"
                            />
                            {/* <input
                              type="text"
                              value={formData.parentId}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  parentId: Number(e.target.value),
                                }))
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="ParentId"
                            /> */}
                            <div className="flex gap-2">
                              <button
                                onClick={() =>
                                  handleAddSubcategory(category.id)
                                }
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                              >
                                Add Subcategory
                              </button>
                              <button
                                onClick={resetForm}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {categories.length === 0 && (
                <div className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Plus size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No categories yet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get started by creating your first category
                  </p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Create Category
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryAdmin;
