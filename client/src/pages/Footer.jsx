import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 mt-16 shadow-inner">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Column 1: About */}
    <div>
      <h5 className="text-lg font-semibold mb-2 text-gray-900">Giriraj Metals</h5>
      <p className="text-sm">
        Serving tradition with purity since 1990. Shop our exclusive range of 
        metalware and pooja utensils.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h5 className="text-lg font-semibold mb-2 text-gray-900">Quick Links</h5>
      <ul className="text-sm space-y-1">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/copper-utensils" className="hover:underline">Copper Items</Link></li>
        <li><a href="#" className="hover:underline">Puja Utensils</a></li>
        <li><a href="#" className="hover:underline">Brass Items</a></li>
        <li><a href="#" className="hover:underline">Steel Ware</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Column 3: Contact Info */}
    <div>
      <h5 className="text-lg font-semibold mb-2 text-gray-900">Contact</h5>
      <p className="text-sm">Email: info@sharmametals.com</p>
      <p className="text-sm">Phone: +91 9876543210</p>
      <p className="text-sm">Address: Ahmedabad, India</p>
    </div>

  </div>
</footer>
  );
};

export default Footer;
