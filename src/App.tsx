import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CategoriesPage from "./pages/CategoriesPage";

import { AuthContext } from "./context/AuthContext";
import CardId from "./components/card/CardId";
import AdminLayout from "./components/layout/Layout";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<AdminLayout />}>
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categorie/:idx" element={<CardId />} />
          </Route>
        ) : null}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/categorie/:idx" element={<CardId />} />

        <Route
          path="/categories"
          element={
            isAuthenticated ? <CategoriesPage /> : <Navigate to="/login" />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
