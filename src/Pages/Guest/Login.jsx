import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-xl">
            <form
                onSubmit={handleSubmit}
                className="bg-white block p-6 max-w-[350px] rounded-lg shadow-lg"
            >
                <p className="text-2xl font-semibold text-center text-black mb-4">
                    Sign in to your account
                </p>

                <div className="relative mb-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white p-4 text-base leading-5 w-[300px] rounded-lg shadow-sm border border-gray-300  outline-none"
                        required
                    />
                </div>

                <div className="relative mb-4">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white p-4 pr-12 text-base leading-5 w-[300px] rounded-lg shadow-sm border border-gray-300 outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="block py-3 px-5 bg-indigo-600 text-white text-base leading-5 font-medium w-full rounded-lg uppercase hover:bg-indigo-700 transition"
                >
                    Sign in
                </button>

                <p className="text-gray-500 text-sm leading-5 text-center mt-4">
                    <Link to="/forgot" className="underline text-indigo-600 hover:text-indigo-800 transition">
                        Forgot Password ?
                    </Link>
                </p>
            </form>
        </div>
    )
}
