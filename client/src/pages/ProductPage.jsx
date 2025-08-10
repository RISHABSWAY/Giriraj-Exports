import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./Products";
import PageWrapper from "../components/UI/Pagewrapper";
import { useCart } from "../Context/CartContext";

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(
    product ? product.images[0] : ""
  );
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1, // default quantity
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <PageWrapper>
      <section className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Image gallery */}
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full object-contain"
                style={{ maxHeight: "400px", margin: "0 auto" }}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                    selectedImage === img ? "border-[#D97706]" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#D97706]">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Length:</strong> {product.length}</p>
              <p><strong>Width:</strong> {product.width}</p>
              <p><strong>Weight:</strong> {product.weight}</p>
            </div>
            <div className="text-2xl font-bold text-[#D97706]">{product.price}</div>

            <div className="flex gap-4 mt-6 flex-wrap">
              <button
                onClick={handleAddToCart}
                className="bg-#D97706 text-black px-6 py-2 rounded-lg hover:bg-#c16203 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductPage;
