import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'

export default function LeftSide() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    const handleDemo = () => {
        navigate("/signup");
    };

    return (
        <div className="lg:w-1/2 lg:flex hidden flex-col justify-center px-10 py-16 ">
            <div className="max-w-xl mx-auto">
                <h1 className="sm:text-5xl font-bold leading-tight mb-6 dark:text-white">
                    Smart School Management System
                </h1>
                <p className="font-semibold text-gray-600 mb-8">
                    A comprehensive solution designed to streamline administrative tasks,
                    enhance communication, and improve learning outcomes for educational
                    institutions.
                </p>
                <div className="flex gap-4 font-medium ">
                    <button onClick={handleDemo} className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group">
                        <span className="absolute inset-0 bg-blue-500 -z-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                        <Icon icon="tabler:presentation" className="mr-2 z-10" width="20" height="20" />
                        <span className="z-10">Request Demo</span>
                    </button>
                    <button onClick={handleClick} className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group">
                        <span className="absolute inset-0 bg-blue-500 -z-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                        <Icon icon="tabler:arrow-left" className="mr-2 z-10" width="20" height="20" />
                        <span className="z-10">
                            Back
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
