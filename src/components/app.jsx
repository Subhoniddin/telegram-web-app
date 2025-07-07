import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";
import TelegramWeb from "./telegramWeb";
import { useEffect } from "react";

function App() {
  let isTelegram = null;
  useEffect(() => {
    isTelegram = !!window.Telegram?.WebApp?.initDataUnsafe?.user;
  }, []);

  if (!isTelegram) {
    return <TelegramWeb />;
  }

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
