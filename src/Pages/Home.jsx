import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen flex items-center justify-center">
            {/* Background overlays */}
            <div className="absolute inset-0 bg-grey/5 dark:bg-lightblack/20 -z-10"></div>
            <div className="absolute inset-0 -z-20">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow/10 dark:bg-yellow/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-lightgreen/10 dark:bg-lightgreen/5 rounded-tr-full"></div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto">
                <div className="lg:flex lg:items-center lg:space-x-12">
                    {/* Text content */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            Smart School Management System
                        </h1>
                        <p className="text-lg mb-8 text-darkgrey dark:text-grey">
                            A comprehensive solution designed to streamline administrative tasks,
                            enhance communication, and improve learning outcomes for educational
                            institutions.
                        </p>
                        <div className="flex flex-wrap gap-4 font-medium">
                            <button onClick={handleClick} className="text-white flex items-center bg-blue-500 px-6 py-3 rounded-md shadow-lg">
                                <Icon icon="tabler:presentation" className="mr-2" width="20" height="20" />
                                Login
                            </button>
                            <a href="#" className=" flex items-center px-6 py-3 rounded-md border border-blue-500">
                                <Icon icon="tabler:info-circle" className="mr-2" width="20" height="20" />
                                Learn More
                            </a>
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
