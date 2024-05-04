import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutPage from "./About";
import DonatePage from "./DonatePage";
import ImpactPage from "./ImpactPage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="impact" element={<ImpactPage />} />

        <Route path="donate" element={<DonatePage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    // <div className="App bg-amber-50">
    //   <Header></Header>
    //   <div className="bg-amber-50 h-[1000px]"></div>
    //   <Footer></Footer>
    // </div>
  );
}

export default App;
