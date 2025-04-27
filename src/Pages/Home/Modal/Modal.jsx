"use client"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Modal({ isOpen, onClose }) {
    const navigate = useNavigate()

    const handleSignUpDemo = () => {
        navigate("/signup")
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                >
                    <Icon icon="mdi:close" width={24} height={24} />
                </button>

                {/* Modal Header */}
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">All-in-One School Management Solution</h2>

                <p className="text-gray-600 mb-6 text-center">
                    Empower your school with smart tools to automate tasks, boost productivity, and improve communication between
                    teachers, parents, and students.
                </p>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h3 className="font-semibold mb-3">Core Features:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2">✅</span> Student Enrollment & Admission
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✅</span> Attendance Tracking & Reports
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✅</span> Fee Management & Invoicing
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✅</span> Timetable Scheduling
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✅</span> Exam Management & Grade Reports
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Benefits:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2">🚀</span> Save Administrative Time
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">🔒</span> Secure Data Management
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📈</span> Better Academic Performance Insights
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📱</span> Mobile & Cloud Access
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">🤝</span> Stronger Parent-Teacher Communication
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-50 p-6 rounded-md mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-center text-blue-700">Ready to Experience It?</h3>
                    <p className="text-blue-600 mb-4 text-center">
                        Sign up for a <strong>free live demo</strong> today and see how we can transform your school's operations!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            onClick={handleSignUpDemo}
                            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full sm:w-auto"
                        >
                            Sign Up for Demo
                        </button>
                        <button
                            onClick={onClose}
                            className="px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition w-full sm:w-auto"
                        >
                            Maybe Later
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm">
                    Have questions? Contact us at{" "}
                    <a href="mailto:bijanshakya145@gmail.com" className="text-blue-600 hover:underline">
                        bijanshakya145@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}
