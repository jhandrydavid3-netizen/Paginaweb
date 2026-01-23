
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import DashboardPage from "../pages/Dashboard.jsx";
import HomePage from "../pages/Home.jsx";
import RegisterPage from "../pages/Register.jsx";

function RouterPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ingreso" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<HomePage />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterPages;