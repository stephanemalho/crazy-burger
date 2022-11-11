import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/pages/login/LoginPage";
import OrderPage from "../components/pages/order/OrderPage";
import Error from "../components/pages/error/Error";

function Path() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:userName" element={<OrderPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Path;
