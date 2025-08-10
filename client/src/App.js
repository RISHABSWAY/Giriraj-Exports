import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Homepage from "./pages/Homepage";
import CopperUtensilsPage from "./pages/CopperUtensils";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/UI/Scrolltotop";
import Cart from "./pages/Cartpage"; // NEW


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll resets on route change */}
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/copper-utensils" element={<CopperUtensilsPage />} />
          <Route path="/copper-utensils/:slug" element={<ProductPage />} />
          {/* Add similar routes for other utensil categories here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
