import * as api from "../../api/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../../interfaces/user";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { loggedIn } = useAuth();

    useEffect(() => {
        if (loggedIn) {
            console.log("logged in already.");
            navigate("/chat");
        }
    }, [loggedIn]);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        //userData
        const userData: RegisterData = {
            email: email,
            username: username,
            password: password,
        };

        try {
            await api.RegisterUser(userData);
            toast.success("Successfully registered!");
            navigate("/login");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section
                style={{ backgroundImage: "url('/bg/layers-white.jpg')" }}
                className="flex flex-col flex-1 items-center justify-center relative w-full h-[100%] py-32"
            >
                <div className="flex flex-col bg-white bg-opacity-40 backdrop-blur-lg rounded-xl p-12 w-96 space-y-6 relative shadow-md border border-black">
                    <a
                        href="/login"
                        className="text-right text-black  p-8 hover:underline text-xs"
                        style={{ position: "absolute", top: "0", right: "0" }}
                    >
                        Already a user? Login here
                    </a>
                    <h2 className="text-2xl font-semibold mb-4 text-black">
                        Register
                    </h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
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
                        <div className="space-y-2">
                            <label className="text-sm border-black text-zinc-800 block">
                                Username
                            </label>
                            <input required
                                className="rounded shadow-lg border-2 border-transparent bg-white bg-opacity-10 text-black w-full py-2 px-3 focus:outline-0 focus:ring-0 focus:border-black"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
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
                            className={`py-3 px-6 text-lg text-white font-semibold rounded-xl bg-black hover:scale-105 transition duration-500 shadow-lg`}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Register;
