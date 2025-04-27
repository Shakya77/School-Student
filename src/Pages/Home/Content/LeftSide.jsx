"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import Modal from "../Modal/Modal"

export default function LeftSide() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/login")
    }

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-black dark:text-white">
                    Smart School Management System
                </h1>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                    A comprehensive solution designed to streamline administrative tasks, enhance communication, and improve
                    learning outcomes for educational institutions.
                </p>
                <div className="flex flex-wrap gap-4 font-medium">
                    <button
                        onClick={handleClick}
                        className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group"
                    >
                        <span className="absolute inset-0 bg-blue-500 z-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                        <Icon icon="bi:person-circle" className="mr-2 z-10" width="20" height="20" />
                        <span className="z-10">Login</span>
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="relative overflow-hidden flex items-center px-6 py-3 rounded-md border border-blue-500 text-blue-500 hover:text-white transition-colors duration-300 group"
                    >
                        <span className="absolute inset-0 bg-blue-500 z-0 transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
                        <Icon icon="tabler:info-circle" className="mr-2 z-10" width="20" height="20" />
                        <span className="z-10">Learn More</span>
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
