import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginData } from "../../interfaces/user";
import { useNavigate } from "react-router-dom";
import * as api from "../../api/auth";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import toast from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loggedIn, setLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            console.log("logged in already.");
            navigate("/chat");
        }
    }, [loggedIn]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // login data
        const userData: LoginData = {
            email: email,
            password: password,
        };
        // to send req for login
        try {
            const data = await api.LoginUser(userData);
            // Add auth token to local storage
            localStorage.setItem("auth", data.auth);
            // Update auth context state to true
            setLoggedIn(true);
            toast.success("Succesfully logged in!")
            navigate('/chat');
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <Header/>
            <section
                style={{ backgroundImage: "url('/bg/layers-white.jpg')" }}
                className="flex flex-col flex-1 items-center justify-center relative w-full h-[100%] py-32"
            >
                <div className="flex flex-col bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-12 w-[28rem] h-[28rem] relative shadow-md border border-black">
                    <a
                        href="/register"
                        className="text-right text-black p-8 hover:underline text-sm"
                        style={{ position: "absolute", top: "0", right: "0" }}
                    >
                        Not registered? Register here
                    </a>
                    <h2 className="text-2xl font-semibold mb-3 text-black py-6">
                        Log In
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4 h-96">
                        <div className="space-y-4">
                            <label className="text-sm border-black text-zinc-800 block">
                                Email
                            </label>
                            <input required
                                className="rounded shadow-lg border-2 border-transparent bg-white bg-opacity-10 text-black w-full py-2 px-3 focus:outline-0 focus:ring-0 focus:border-black"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-sm text-gray-700 block">
                                Password
                            </label>
                            <input required
                                className="rounded shadow-lg border-2 border-transparent bg-white bg-opacity-10 text-black w-full py-2 px-3 focus:outline-0 focus:ring-0 focus:border-black"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`py-3 px-6 text-lg text-white font-semibold rounded-xl bg-black hover:scale-105 transition duration-500 shadow-lg mt-4`}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
