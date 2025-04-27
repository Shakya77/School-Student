"use client"

import { useEffect } from "react"
import OnBoardingLayout from "../../layouts/OnBoardingLayout"
import LeftSide from "./Content/LeftSide"
import RightSide from "./Content/RightSide"

export default function Home() {
    const title = "Smart School Management System"
    const description =
        "A comprehensive solution for educational institutions to streamline administrative tasks and enhance communication"

    useEffect(() => {
        // Update document title and meta description
        document.title = title

        // Optional: Update meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute("content", description)
        }
    }, [title, description])

    return (
        <OnBoardingLayout>
            <main className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
                {/* Hero section with split content layout */}
                <div className="max-w-7xl mx-auto w-full">
                    <div className="lg:flex lg:items-center lg:gap-12">
                        {/* Left side: Text content and CTA buttons */}
                        <LeftSide />

                        {/* Right side: Feature illustration/screenshot */}
                        <RightSide />
                    </div>
                </div>
            </main>
        </OnBoardingLayout>
    )
}
