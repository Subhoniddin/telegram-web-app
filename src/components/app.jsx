import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="category/:id" element={<CategoryPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
