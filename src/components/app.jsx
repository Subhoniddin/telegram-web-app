import { Route, Routes } from "react-router";
import Home from "../pages/home";
import { ThemeProvider } from "./provider/theme-provider";
import Product from "../pages/product";
import CategoryPage from "@/pages/category";

function App() {
  const data = window.Telegram?.WebApp?.initDataUnsafe;
  const user = data?.user;

  console.log("Telegram initDataUnsafe:", data);

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Telegram Web App Test</h2>

        {user?.id ? (
          <div>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> @{user.username}
            </p>
            <p>
              <strong>First name:</strong> {user.first_name}
            </p>
          </div>
        ) : (
          <p style={{ color: "red" }}>
            ❌ Foydalanuvchi ma’lumotlari mavjud emas
          </p>
        )}

        <hr />

        <h3>initDataUnsafe</h3>
        <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <ThemeProvider>
        <pre>
          salom bu user
          {JSON.stringify(window.Telegram?.WebApp?.initDataUnsafe, null, 2)}
        </pre>
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
