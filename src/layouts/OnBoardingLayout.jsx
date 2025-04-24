import ToggleButton from "../ToggleTheme/ToggleButton";

export default function OnBoardingLayout({ children }) {

    return (
        <div>
            <nav className="absolute top-0 left-0 z-10 flex items-center justify-between p-4 w-full">
                <ToggleButton />
            </nav>
            {children}
        </div>
    )
}
