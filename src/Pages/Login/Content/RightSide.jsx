import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom';

export default function RightSide() {
    return (
        <div className="w-full lg:w-1/2 bg-blue-500 flex flex-col justify-center items-center px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md px-8 py-12">
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="User Icon"
                        className="w-18 h-20 rounded-full mb-2 m-2"
                    />
                    <h2 className="text-xl font-semibold mb-6 p-2">Login</h2>
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Login ID"
                        className="w-full border border-gray-100 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-100 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
                    />
                    <button
                        type="submit"
                        className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded flex justify-center items-center"
                    >
                        <Icon icon="tabler:login-2" className="mr-2" />
                        Login
                    </button>
                    <label className="inline-flex items-center mt-2">
                        <input type="checkbox" className="form-checkbox text-teal-600" />
                        <span className="ml-2 text-sm">Remember Me</span>
                    </label>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Developed by <NavLink to={"https://github.com/Shakya77"} className="text-blue-600">Bijan Shakya</NavLink>
                </p>
            </div>
        </div>
    )
}
