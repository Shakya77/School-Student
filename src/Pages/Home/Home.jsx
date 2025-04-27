import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OnBoardingLayout from "../../layouts/OnBoardingLayout";
import Modal from "./Modal/Modal";

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleClick = () => {
        navigate("/login");
    };

    const handleSignUpDemp = () => {
        navigate("/signup");
    }

    const title = "Smart School Management System";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <OnBoardingLayout>
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
                {/* Main content */}
                <div className="max-w-7xl mx-auto">
                    <div className="lg:flex lg:items-center lg:space-x-12">
                        {/* Text content */}
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-black dark:text-white">
                                Smart School Management System
                            </h1>
                            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
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
                                <button onClick={openModal} className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group">
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
            <Modal isOpen={isOpen} onClose={closeModal}>
                {/* You can pass anything inside modal via children */}
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">All-in-One School Management Solution</h2>

                <p className="text-gray-700 mb-6 text-lg text-center">
                    Empower your school with smart tools to automate tasks, boost productivity, and improve communication between teachers, parents, and students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Core Features:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>✅ Student Enrollment & Admission</li>
                            <li>✅ Attendance Tracking & Reports</li>
                            <li>✅ Fee Management & Invoicing</li>
                            <li>✅ Timetable Scheduling</li>
                            <li>✅ Exam Management & Grade Reports</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>🚀 Save Administrative Time</li>
                            <li>🔒 Secure Data Management</li>
                            <li>📈 Better Academic Performance Insights</li>
                            <li>📱 Mobile & Cloud Access</li>
                            <li>🤝 Stronger Parent-Teacher Communication</li>
                        </ul>
                    </div>
                </div>

                {/* Demo CTA */}
                <div className="bg-blue-100 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-800 text-center">Ready to Experience It?</h3>
                    <p className="text-blue-700 mb-4 text-center">
                        Sign up for a <strong>free live demo</strong> today and see how we can transform your school's operations!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button onClick={handleSignUpDemp} className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full md:w-auto">
                            Sign Up for Demo
                        </button>
                        <button onClick={closeModal} className="px-5 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition w-full md:w-auto">
                            Maybe Later
                        </button>
                    </div>
                </div>

                {/* Footer Info */}
                <p className="text-center text-gray-500 text-sm">
                    Have questions? Contact us at <a href="mailto:bijanshakya145@gmail.com" className="text-blue-600 underline">bijanshakya145@gmail.com</a>
                </p>
            </Modal>
        </OnBoardingLayout>
    );
}
