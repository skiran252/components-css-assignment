import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
