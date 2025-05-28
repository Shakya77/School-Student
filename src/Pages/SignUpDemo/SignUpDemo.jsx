import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import usePostRequest from "../../customHooks/usePostRequest";
import { Icon } from '@iconify/react/dist/iconify.js'

function SignUpDemo() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        schoolName: "",
        phone: "",
        message: "",
    });

    const { postData, response, loading, error } = usePostRequest();
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/school/demo`;
        await postData(apiUrl, formData);
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            schoolName: "",
            phone: "",
            message: "",
        });
    };

    // Optional: Reset "submitted" after 5 seconds to show the form again
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

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
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-block bg-blue-600 text-white px-3 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            <Icon icon="tabler:arrow-left" width="20" height="20" />
                        </button>
                        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                            Sign Up for a Free Demo
                        </h1>

                        {loading && <p className="text-blue-600 text-center mb-4">Submitting...</p>}
                        {error && <p className="text-red-600 text-center mb-4">Error: {error.message || error}</p>}
                        {response && response.message && (
                            <p className="text-green-600 text-center mb-4">{response.message}</p>
                        )}

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
                                    required
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
                                    required
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
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Phone Number (Optional)</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none no-spinner"
                                    placeholder="Enter your phone number"
                                    required
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
                                disabled={loading}
                                className={`w-full text-white py-3 rounded-lg transition ${loading
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {loading ? "Submitting..." : "Request Demo"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default SignUpDemo;
