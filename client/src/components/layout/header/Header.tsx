import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="py-2 px-4 flex absolute w-screen bg-neutral-100 z-10 top-0">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink
                    to="/"
                    className="flex items-center mx-4 transition duration-1000 basis-1/5"
                >
                    <img
                        src="/logo-alt.png" // Replace with your logo URL
                        alt="cai Logo"
                        className="w-48 mr-2 mix-blend-multiply"
                    />
                </NavLink>
                <div className="flex items-center justify-end basis-1/5">
                    <NavLink
                        to="/chat"
                        className="py-3 px-6 mr-6 text-lg text-white font-semibold rounded-xl bg-black hover:scale-105 transition duration-500 shadow-lg"
                    >
                        Check it Out
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
