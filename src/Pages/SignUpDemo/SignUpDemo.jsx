import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUpDemo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        schoolName: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
                {submitted ? (
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
                        <p className="text-gray-700 mb-6">
                            Your request for a demo has been received. We'll get in touch with you shortly!
                        </p>
                        <NavLink
                            to={"/"}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                        >
                            Back to Home
                        </NavLink>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Sign Up for a Free Demo</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"

                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"

                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">School Name</label>
                                <input
                                    type="text"
                                    name="schoolName"

                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    placeholder="Enter your school name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"

                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    rows="4"
                                    placeholder="Any specific requirements or questions?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Request Demo
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default SignUpDemo;
