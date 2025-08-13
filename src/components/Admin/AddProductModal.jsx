import React, { useState } from "react";
import {
  useUploadImageMutation,
  useCreateProductMutation,
  useGetCategoryQuery,
} from "../../store/api";

const AddProductModal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    brandId: 1,
    colors: [],
    sizes: [],
    images: [],
    categoryId: "",
    slug: "",
  });
  console.log(formData);

  const [colorInput, setColorInput] = useState("Red");
  const [sizeInput, setSizeInput] = useState("XS");
  const [uploadImage, { data: uploadResponse }] = useUploadImageMutation();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();

  const { data: categories = [] } = useGetCategoryQuery();

  uploadResponse;

  const handleUploadImage = async (e) => {
    const files = Array.from(e.target.files);

    for (let file of files) {
      const formDataImage = new FormData();
      formDataImage.append("image", file);

      try {
        const response = await uploadImage(formDataImage).unwrap();

        console.log(response);

        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, response?.id],
        }));
      } catch (err) {
        console.error("Upload error", err);
      }
    }
  };

  const handleAddColor = () => {
    if (colorInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        colors: [...prev.colors, colorInput.trim()],
      }));
      setColorInput("");
    }
  };

  const handleRemoveColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, idx) => idx !== index),
    }));
  };

  const handleAddSize = () => {
    if (sizeInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        sizes: [...prev.sizes, sizeInput.trim()],
      }));
      setSizeInput("");
    }
  };

  const handleRemoveSize = (index) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmit = async () => {
    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };

      await createProduct(productData).unwrap();

      alert("Product yaradıldı!");
      setShowModal(false);
    } catch (err) {
      console.error("Product yaratmaqda xəta:", err);
      alert("Xəta oldu!");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto fixed top-0 right-0 bg-white rounded shadow overflow-y-auto max-h-screen">
      <h2 className="text-xl mb-4 font-bold">Yeni Product Əlavə Et</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="border p-2 mb-2 w-full"
      />

      <input
        type="text"
        placeholder="Slug"
        value={formData.name.toLowerCase().trim()}
        // onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="number"
        placeholder="Stock"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
        className="border p-2 mb-2 w-full"
      />

      <select
        value={formData.categoryId}
        onInput={(e) =>
          setFormData({ ...formData, categoryId: e.target.value })
        }
        className="border p-2 mb-2 w-full"
      >
        <option value="">-- Kateqoriya seçin --</option>
        {categories?.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Colors */}
      <div className="mb-2">
        <div className="flex gap-2 mb-1">
          <input
            type="text"
            placeholder="Color əlavə et"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            className="border p-2 flex-1"
          />
          <button
            onClick={handleAddColor}
            className="bg-green-500 text-white px-4 rounded"
          >
            Əlavə et
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.colors.map((color, idx) => (
            <div
              key={idx}
              className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
            >
              {color}
              <button
                onClick={() => handleRemoveColor(idx)}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-2">
        <div className="flex gap-2 mb-1">
          <input
            type="text"
            placeholder="Size əlavə et"
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
            className="border p-2 flex-1"
          />
          <button
            onClick={handleAddSize}
            className="bg-green-500 text-white px-4 rounded"
          >
            Əlavə et
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.sizes.map((size, idx) => (
            <div
              key={idx}
              className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
            >
              {size}
              <button
                onClick={() => handleRemoveSize(idx)}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Images */}
      <input
        type="file"
        onChange={handleUploadImage}
        multiple
        className="border p-2 mb-2 w-full"
      />
      <div className="flex flex-wrap gap-2 mb-2">
        {formData.images.map((imgId, idx) => (
          <span
            key={idx}
            className="bg-blue-200 px-2 py-1 rounded text-xs text-blue-900"
          >
            Image ID: {imgId}
          </span>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isCreating}
        className="bg-blue-500 text-white p-2 rounded w-full mt-4"
      >
        {isCreating ? "Yüklənir..." : "Product Əlavə Et"}
      </button>
    </div>
  );
};

export default AddProductModal;
