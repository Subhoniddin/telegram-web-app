import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";
import TelegramWeb from "./telegramWeb";
import { useEffect, useState } from "react";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [isTelegramUser, setIsTelegramUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      const tg = window.Telegram?.WebApp;
      if (!tg) {
        setIsTelegramUser(false);
        setIsReady(true);
        return;
      }

      tg.ready(); // WebApp tayyor
      await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms kutish

      const user = tg.initDataUnsafe?.user;
      setIsTelegramUser(!!user);
      setIsReady(true);
    };

    init();
  }, []);

  if (!isReady || isTelegramUser === null) {
    return <div>⏳ Yuklanmoqda...</div>;
  }

  if (!isTelegramUser) {
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
