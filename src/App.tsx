import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./About";
import DonatePage from "./DonatePage";
import ImpactPage from "./ImpactPage";
import ContactPage from "./ContactPage";
import WomensPage from "./WomensPage";
import ChildrensPage from "./ChildrensPage";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const [isHeaderLocked, setIsHeaderLocked] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header isLocked={isHeaderLocked} setIsLocked={setIsHeaderLocked} />
      <main
        style={{ paddingTop: isHomePage ? "0vh" : "80px" }}
        className="#fbfbec"
      >
        <Routes>
          <Route path="/" element={<HomePage isLocked={isHeaderLocked} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="impact/women" element={<WomensPage />} />
          <Route path="impact/children" element={<ChildrensPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
