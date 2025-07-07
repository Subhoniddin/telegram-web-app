import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";

function App() {
  const telegramId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;

  return (
    <>
      <ThemeProvider>
        <p>telegram id: {telegramId}</p>;
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
