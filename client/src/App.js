import "../src/Reset.css";
import "./App.css";
import About from "./pages/about-us/About-us";
import StudentRegister from "./components/StudentRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <About/>
    </div>
  );
}

export default App;
