import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const categories = [
  { name: "Copper Utensils", subcategories: ["Thali", "Kalash", "Diyas"] },
  { name: "Puja Utensils", subcategories: ["Thali", "Kalash", "Diyas"] },
  { name: "Brass Utensils", subcategories: ["Bottle", "Glass", "Handi"] },
  { name: "Bronze Utensils", subcategories: ["Bottle", "Glass", "Handi"] },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const { cart } = useCart();
  const totalItems = (cart || []).reduce((sum, item) => sum + item.quantity, 0);


  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/Assets/LogoinSide.svg" alt="Giriraj Metals" className="h-10 sm:h-12" />
          <span className="text-[#D97706] text-xl sm:text-2xl font-semibold tracking-wide">
            Giriraj Metals
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#D97706]">Home</Link>
          {categories.map((cat) => (
            <div key={cat.name} className="relative group">
              <div className="cursor-pointer hover:text-[#D97706]">{cat.name}</div>
              <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                {cat.subcategories.map((sub) => (
                  <Link key={sub} to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="#" className="hover:text-[#D97706]">Contact</Link>

          {/* Search */}
          <div ref={wrapperRef} className="relative">
            <button onClick={() => setShowSearch((prev) => !prev)} className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} color="#D97706" />
            </button>
            {showSearch && (
              <div className="absolute right-0 mt-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-48 sm:w-56 px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-md focus:ring-[#D97706] focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-[#D97706]">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#D97706] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setShowSearch((prev) => !prev)} className="p-1">
            <Search size={20} color="#D97706" />
          </button>
          <button onClick={() => setMobileMenu(prev => !prev)} className="p-1">
            <Menu size={24} color="#D97706" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1 py-2 px-4 text-gray-700">
            <Link to="/" className="hover:text-[#D97706]">Home</Link>
            {categories.map(cat => (
              <div key={cat.name}>
                <div className="font-semibold">{cat.name}</div>
                <div className="pl-4">
                  {cat.subcategories.map(sub => (
                    <Link key={sub} to="#" className="block py-1 text-sm hover:text-[#D97706]">
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="#" className="hover:text-[#D97706]">Contact</Link>
            <Link to="/cart" className="hover:text-[#D97706]">
              Cart {totalItems > 0 && (
                <span className="ml-1 text-xs text-white bg-[#D97706] px-2 py-0.5 rounded-full">{totalItems}</span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
