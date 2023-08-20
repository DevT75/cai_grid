import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Chat from "../pages/chat/Chat";

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    );
}

export default PageRoutes;
