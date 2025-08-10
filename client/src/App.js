// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Homepage from "./pages/Homepage";
import CopperUtensilsPage from "./pages/CopperUtensils";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cartpage";
import PageWrapper from "./components/UI/Pagewrapper";
import ScrollToTop from "./components/UI/Scrolltotop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Wrap all routes with Layout */}
        <Route
          path="/"
          element={<Layout />}
        >
          {/* Nested routes with animated PageWrapper */}
          <Route
            index
            element={
              <PageWrapper>
                <Homepage />
              </PageWrapper>
            }
          />
          <Route
            path="cart"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />
          <Route
            path="copper-utensils"
            element={
              <PageWrapper>
                <CopperUtensilsPage />
              </PageWrapper>
            }
          />
          <Route
            path="copper-utensils/:slug"
            element={
              <PageWrapper>
                <ProductPage />
              </PageWrapper>
            }
          />
          {/* Add other routes similarly */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
