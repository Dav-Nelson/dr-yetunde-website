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
                    <p className="text-lg text-gray-600">
                        {/* Hero image placeholder */}
                        [Professional headshot / hero image goes here]
                    </p>
                </div>
            </div>
        </div>
    );
}