import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "about":
        return <AboutPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "headers":
      case "pages":
      case "features":
        return <AboutPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar navigateTo={navigateTo} />
      <main className="flex-grow-1">{renderPage()}</main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
