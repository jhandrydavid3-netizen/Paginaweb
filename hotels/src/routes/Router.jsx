
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import DashboardPage from "../pages/Dashboard.jsx";
import HomePage from "../pages/Home.jsx";
import RegisterPage from "../pages/Register.jsx";

import SessionGuard from "./SessionGuard.jsx";
import AuthAdmin from "./AuthAdmin.jsx";

import RegisterHotel from "../pages/Admin/components/RegisterHotel.jsx";
import Hotels from "../pages/Admin/components/Hotels.jsx";
import LayoutAdmin from "../pages/Admin/index.jsx";
function RouterPages() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/ingreso" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
            //? Protected Routes

                <Route element={<AuthAdmin></AuthAdmin>}>
                    <Route
                        path="/dashboard"
                        element={<LayoutAdmin></LayoutAdmin>}
                    >

                    //?  = /dashboard/registrohotel
                        <Route path="registrohotel" element={<RegisterHotel />} />

                    //? = /dashboard/gestionhoteles
                        <Route path="gestionhoteles" element={<Hotels />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}
export default RouterPages;