import ProductsPage from "./Components/ProductsPage";
import ProductSinglePage from "./Pages/ProductSinglePage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductSinglePage />} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
