import { useCallback, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { ToastContainer } from "react-toastify";
import AdminScreen from "./pages/admin";
import AdminProducts from "./pages/admin/products";
import Customer from "./pages/customer";
import AdminUsers from "./pages/admin/users";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/customer/products" element={<Customer />} />

        {/* ------- admin routes ----- */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        {/* ------- admin routes ----- */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
