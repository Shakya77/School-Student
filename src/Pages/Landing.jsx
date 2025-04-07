import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div className='flex flex-col h-screen items-center justify-center gap-5'>
            <div className="text-3xl">
                Welcome To Donbosco Student Portal
            </div>
            <button onClick={handleLogin} className="px-8 py-3 text-xl bg-blue-500 text-white rounded-lg">Login</button>
        </div>
    )
}
