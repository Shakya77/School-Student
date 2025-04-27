export default function RightSide() {
    return (
        <div className="lg:w-1/2 z-10">
            <div className="relative rounded-xl overflow-hidden shadow-2xl" id="hero-image">
                <img
                    src="https://www.eymockup.com/wp-content/uploads/2022/04/Free-PSD-iPhone-Mockup-2.jpg"
                    alt="School Software Dashboard"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
        </div>
    )
}
