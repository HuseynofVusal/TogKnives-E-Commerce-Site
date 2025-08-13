import React, { useState } from "react";
import {
  Package,
  ShoppingCart,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Star,
  User,
  Settings,
  Menu,
  X,
  Eye,
  Save,
  AlertCircle,
} from "lucide-react";

import {
  useDeleteCategoryMutation,
  useDeleteProductMutation,
  useGetCategoryQuery,
  useGetProductByCategoryIdQuery,
  useGetProductQuery,
} from "../../store/api";
import toast from "react-hot-toast";
import AddProductModal from "./AddProductModal";
import { GiCancel } from "react-icons/gi";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // Add this missing state

  const [baskets, setBaskets] = useState([
    {
      id: 1,
      userId: "user_001",
      items: 3,
      total: 789.97,
      status: "active",
      lastUpdated: "2025-01-28",
    },
    {
      id: 2,
      userId: "user_002",
      items: 1,
      total: 299.99,
      status: "active",
      lastUpdated: "2025-01-28",
    },
    {
      id: 3,
      userId: "user_003",
      items: 5,
      total: 1249.95,
      status: "checkout",
      lastUpdated: "2025-01-27",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const [
    deleteCategory,
    {
      data: { ...isLoadi },
    },
  ] = useDeleteCategoryMutation();
  const [deleteProduct, { data: isLoad }] = useDeleteProductMutation();
  isLoadi, isLoad;

  const { data: categories = [] } = useGetCategoryQuery();

  // Get filtered products based on category selection
  const { data: filteredProducts = [], isLoading: isLoadingProducts } =
    filterCategory === "all"
      ? useGetProductQuery() // Get all products if "all" is selected
      : useGetProductByCategoryIdQuery(filterCategory, {
          skip: !filterCategory,
        }); // Get products by selected category

  // Loading state for the component
  const isLoading = isLoadingProducts;

  // Additional client-side filtering for search term
  const finalFilteredProducts = filteredProducts?.filter((product) => {
    if (!searchTerm) return true;
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleAddProduct = () => {
    setModalType("add-product");
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setModalType("edit-product");
    setSelectedItem(product);
    setShowModal(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const handleViewBasket = (basket) => {
    setModalType("view-basket");
    setSelectedItem(basket);
    setShowModal(true);
  };

  const handleDeleteBasket = (basketId) => {
    if (window.confirm("Are you sure you want to delete this basket?")) {
      setBaskets(baskets.filter((b) => b.id !== basketId));
    }
  };

  const BasketModal = () => {
    const basketItems = [
      { id: 1, name: "Wireless Headphones", price: 299.99, quantity: 2 },
      { id: 2, name: "Smart Watch", price: 399.99, quantity: 1 },
    ];

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              Basket Details - {selectedItem?.userId}
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Items:</span>
                  <span className="ml-2 font-medium">
                    {selectedItem?.items}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="ml-2 font-medium">
                    ${selectedItem?.total}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      selectedItem?.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedItem?.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="ml-2 font-medium">
                    {selectedItem?.lastUpdated}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Items in Basket</h4>
              <div className="space-y-2">
                {basketItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Clear Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === "products"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Package size={20} />
              Products
            </button>

            <button
              onClick={() => setActiveTab("baskets")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === "baskets"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ShoppingCart size={20} />
              Baskets
            </button>
            <button
              onClick={() => setActiveTab("addcategory")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === "addcategory"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              CreateCategory
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                {activeTab}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Star className="text-yellow-500 mr-1" size={16} />
                4.9 Rating
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === "products" && (
            <div>
              {/* Controls */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleAddProduct}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus size={16} />
                    Add Product
                  </button>
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-gray-500">Loading products...</div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Stock
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Images
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {finalFilteredProducts?.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                                  <Package
                                    size={20}
                                    className="text-gray-500"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    ID: {product.id}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                {product.category?.name || "No Category"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap max-w-20 overflow-auto">
                              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                {product.description}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              ${product.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  product.stock > 20
                                    ? "bg-green-100 text-green-800"
                                    : product.stock > 5
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {product.stock} units
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <Star
                                  size={14}
                                  className="text-yellow-500 fill-current"
                                />
                                <span className="text-sm font-medium overflow-y-auto h-20">
                                  {product.images?.map((item) => (
                                    <div key={item.id} className="relative">
                                      <img
                                        src={item.url}
                                        alt={`Product ${product.name}`}
                                      />
                                      <GiCancel
                                        className={
                                          "absolute top-1 right-1 text-white cursor-pointer"
                                        }
                                      />
                                    </div>
                                  )) || "No images"}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleEditProduct(product)}
                                  className="text-blue-600 hover:text-blue-900 p-1 rounded"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteProduct(product.id)
                                  }
                                  className="text-red-600 hover:text-red-900 p-1 rounded"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "baskets" && (
            <div>
              {/* Baskets Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">
                    Customer Baskets
                  </h3>
                  <p className="text-sm text-gray-500">
                    Manage customer shopping baskets and orders
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Basket ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Items
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Updated
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {baskets.map((basket) => (
                        <tr key={basket.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #{basket.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {basket.userId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {basket.items} items
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${basket.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                basket.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {basket.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {basket.lastUpdated}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleViewBasket(basket)}
                                className="text-blue-600 hover:text-blue-900 p-1 rounded"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => handleDeleteBasket(basket.id)}
                                className="text-red-600 hover:text-red-900 p-1 rounded"
                              >
                                <Trash2 size={16} />
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
          )}
          {activeTab === "addcategory" && (
            <div>
              <CreateCategory />
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {showModal &&
        (modalType === "add-product" || modalType === "edit-product") && (
          <AddProductModal
            setShowModal={setShowModal}
            selectedItem={selectedItem}
          />
        )}
      {showModal && modalType === "view-basket" && <BasketModal />}

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPanel;
