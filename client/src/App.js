import "./Reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import About from "./pages/about-us/About-us";
import Contact from "./pages/contact-us/Contact-us";
import Student from "./pages/Student/student";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/student" element={<Student />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
