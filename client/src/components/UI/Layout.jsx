import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Show loader on first load and every route change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // duration of loader
    return () => clearTimeout(timeout);
  }, [location.pathname]); // triggers on every path change

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
