import "./Reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import News from "./pages/news/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About-us />} />
          <Route path="/contact-us" element={<Contact-us />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
