import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";

function App() {
  // Telegram Web App ma'lumotlarini olish
  const data = window.Telegram?.WebApp?.initDataUnsafe || {};
  const user = data.user || null;
  let statusMessage = "";

  // Telegram Web App muhitini tekshirish
  if (!window.Telegram) {
    statusMessage = "❌ Telegram obyekti mavjud emas. SDK yuklanmagan.";
  } else if (!window.Telegram.WebApp) {
    statusMessage =
      "❌ Telegram Web App mavjud emas. Ilova Telegram muhitida ochilmagan.";
  } else {
    window.Telegram.WebApp.ready();
    statusMessage = user?.id
      ? "✅ Ma'lumotlar muvaffaqiyatli yuklandi"
      : "❌ Foydalanuvchi ma'lumotlari mavjud emas";
  }

  return (
    <ThemeProvider>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Telegram Web App Test</h2>

        {/* Status xabarini ko'rsatish */}
        <p style={{ color: statusMessage.includes("❌") ? "red" : "green" }}>
          {statusMessage}
        </p>

        {/* Foydalanuvchi ma'lumotlari */}
        {user?.id ? (
          <div>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> @{user.username || "Noma'lum"}
            </p>
            <p>
              <strong>First name:</strong> {user.first_name || "Noma'lum"}
            </p>
          </div>
        ) : (
          <p style={{ color: "red" }}>
            ❌ Foydalanuvchi ma’lumotlari mavjud emas
          </p>
        )}

        <hr />

        {/* initDataUnsafe ma'lumotlari */}
        <h3>initDataUnsafe</h3>
        <pre style={{ textAlign: "left", fontSize: "14px" }}>
          {JSON.stringify(data, null, 2) || "Ma'lumotlar yuklanmadi"}
        </pre>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="category/:id" element={<CategoryPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
