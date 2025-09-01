import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./Context/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Context/CartContext.jsx";
import SidebarProvider from "./Context/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
