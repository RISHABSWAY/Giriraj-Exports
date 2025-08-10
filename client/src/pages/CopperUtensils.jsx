import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "./Products";
import PageWrapper from "../components/UI/Pagewrapper";


const CopperUtensilsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageWrapper>
      <section className="bg-white min-h-screen text-gray-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-[#D97706] mb-2">
              Copper Utensils
            </h1>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Discover our premium handcrafted copper utensils designed for everyday and spiritual use.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/copper-utensils/${product.slug}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden block"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto object-contain bg-white"
                  style={{ maxHeight: "300px", margin: "0 auto" }}
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[#D97706]">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-[#D97706] font-bold">
                      {product.price}
                    </span>
                    <span className="bg-[#D97706] text-white px-3 py-1 rounded-full text-sm">
                      Buy Now
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CopperUtensilsPage;
