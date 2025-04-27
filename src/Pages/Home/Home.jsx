import { useEffect } from "react"
import InOne from "./InOne"
import OnBoardingLayout from "../../layouts/OnBoardingLayout"

export default function Home() {
    const title = "Smart School Management System"
    const description =
        "A comprehensive solution for educational institutions to streamline administrative tasks and enhance communication"

    useEffect(() => {
        document.title = title

        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute("content", description)
        }
    }, [title, description])

    return (
        <OnBoardingLayout>
            <InOne />
        </OnBoardingLayout>
    )
}
