import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ToggleButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { theme, setTheme } = useTheme();

    const dropdownOptions = [
        { label: "System", icon: "fa:desktop", value: "system" },
        { label: "Light", icon: "fa:sun-o", value: "light" },
        { label: "Dark", icon: "fa:moon-o", value: "dark" }
    ];

    const selectedOption = dropdownOptions.find(opt => opt.value === theme);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex flex-row">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center px-3 py-2 rounded-md border border-black dark:border-white dark:text-white">
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
                <div className="absolute z-10 mt-1 w-32 rounded-lg shadow-xl ring-1 ring-black/5 bg-white dark:bg-gray-800">
                    <ul className="py-2 text-sm text-black dark:text-white">
                        {dropdownOptions.map((option) => (
                            <li key={option.value}>
                                <button
                                    className="w-full px-4 py-2 hover:bg-gray-600 hover:text-white text-left"
                                    onClick={() => {
                                        setTheme(option.value);
                                        setIsDropdownOpen(false);
                                    }}>
                                    <div className="flex items-center">
                                        {option.label}
                                        <Icon icon={option.icon} className="ml-2" width="16" height="16" />
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
