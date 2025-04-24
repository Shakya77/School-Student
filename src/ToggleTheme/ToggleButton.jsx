import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef, useEffect } from "react";

export default function ToggleButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState({
        label: "Dropdown",
        icon: "fa:angle-down"
    });

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Close dropdown if click happens outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const dropdownOptions = [
        { label: "System", icon: "fa:desktop" },
        { label: "Light", icon: "fa:sun-o" },
        { label: "Dark", icon: "fa:moon-o" }
    ];


    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex flex-row">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center px-3 py-2 rounded-md border border-transparent border-black"
                >
                    {selectedOption.label}
                    <Icon
                        icon={selectedOption.icon}
                        className={`ml-2 transition-transform duration-300`}
                        width="16"
                        height="16"
                    />
                </button>
            </div>

            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-32 rounded-lg shadow-xl ring-1 ring-black/5">
                    <ul className="py-2 text-sm text-gray-700">
                        {dropdownOptions.map((option) => (
                            <li key={option.label}>
                                <button
                                    className="w-full px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        setSelectedOption(option);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <div className="flex items-center">
                                        <Icon icon={option.icon} className="mr-2" width="16" height="16" />
                                        {option.label}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
}
