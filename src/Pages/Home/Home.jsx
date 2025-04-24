import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../../ToggleTheme/ToggleButton";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    const title = "Smart School Management System";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen flex items-center justify-center">
            <ToggleButton />
            {/* Main content */}
            <div className="max-w-7xl mx-auto">
                <div className="lg:flex lg:items-center lg:space-x-12">
                    {/* Text content */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            Smart School Management System
                        </h1>
                        <p className="text-lg mb-8 text-darkgrey dark:text-grey">
                            A comprehensive solution designed to streamline administrative tasks,
                            enhance communication, and improve learning outcomes for educational
                            institutions.
                        </p>
                        <div className="flex flex-wrap gap-4 font-medium">
                            <button
                                onClick={handleClick}
                                className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group">
                                <span className="absolute inset-0 bg-blue-500 z-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                                <Icon icon="bi:person-circle" className="mr-2 z-10" width="20" height="20" />
                                <span className="z-10">Login</span>
                            </button>
                            <button className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group">
                                <span className="absolute inset-0 bg-blue-500 z-0 transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
                                <Icon icon="tabler:info-circle" className="mr-2 z-10" width="20" height="20" />
                                <span className="z-10">Learn More</span>
                            </button>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="lg:w-1/2 z-10">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl" id="hero-image">
                            <img
                                src="https://www.eymockup.com/wp-content/uploads/2022/04/Free-PSD-iPhone-Mockup-2.jpg"
                                alt="School Software Dashboard"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
