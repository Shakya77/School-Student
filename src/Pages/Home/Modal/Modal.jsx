import { MdClose } from "react-icons/md";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-4xl relative">
                {/* Close (X) button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    <MdClose />
                </button>

                {/* Modal Content */}
                {children}
            </div>
        </div>
    );
}
