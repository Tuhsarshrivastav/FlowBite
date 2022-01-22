import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
