import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";
import TelegramWeb from "./telegramWeb";
export const isInTelegramWebApp = () => {
  return !!window.Telegram?.WebApp?.initDataUnsafe?.user;
};

function App() {
  const isTelegram = isInTelegramWebApp();

  isTelegram && <TelegramWeb />;

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
