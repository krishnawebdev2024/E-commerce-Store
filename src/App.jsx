import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import ProductProvider from "./context/ProductContext";

import FetchApi from "./FetchApi";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <FetchApi />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BasketPage" element={<BasketPage />} />
        </Routes>
      </Router>
      <Footer />
    </ProductProvider>
  );
};

export default App;
