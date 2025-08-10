import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Puja Utensils", image: "/Images/puja.png", link: "#" },
  { name: "Copper Items", image: "/Images/Bronze.png", link: "/copper-utensils" },
  { name: "Brass Items", image: "/Images/Brass.png", link: "#" },
  { name: "Steel Ware", image: "/Images/Copper.png", link: "#" },
];

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col text-gray-900">
      {/* Hero Banner */}
      <section className="bg-gray-50 text-center py-16 sm:py-24 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#D97706] mb-4 leading-tight">
          Pure. Timeless. Craftsmanship.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Explore our premium Copper, Brass, Bronze and Steel utensils.
        </p>
        <div className="mt-6 sm:mt-8">
          <Link
            to="/shop"
            className="inline-block bg-[#D97706] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#B45309] transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6 text-center">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link key={idx} to={cat.link}>
                <div
                  className="relative group h-64 rounded-xl overflow-hidden border border-gray-200 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${cat.image})` }}
                >
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-white/70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-gray-900 text-xl font-semibold group-hover:opacity-0 transition-opacity">
                      {cat.name}
                    </span>
                    <span className="absolute text-[#D97706] text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-10 bg-white"> 
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="bg-gray-100 h-40 mb-4 rounded-lg"></div>
                <h4 className="font-medium text-lg">Product {id}</h4>
                <p className="text-sm text-gray-600 mt-1">₹999</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
