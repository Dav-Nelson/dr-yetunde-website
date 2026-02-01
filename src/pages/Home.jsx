import dyImage from '../assets/dy.jpg';

export default function Home() {
    return (
        <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                    Dr. Yetunde Abioye
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                    Veterinary Doctor | 2025 Mandela Washington Fellow<br />
                    Senior Veterinary Officer, NCDC | One Health & Lassa Fever Expert
                </p>
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                    <img 
                        src={dyImage}
                        alt="Dr. Yetunde Abioye"
                        className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-green-800 shadow-md mb-4"
                    />
                    <p className="text-lg text-gray-600 italic">
                        Leading the charge in One Health and infectious disease control
                    </p>
                </div>
            </div>
        </div>
    );
}