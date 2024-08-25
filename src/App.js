import { useCallback, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { ToastContainer } from "react-toastify";
import AdminScreen from "./pages/admin";
import AdminProducts from "./pages/admin/products";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
