export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left - Bio short */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Dr. Yetunde Abioye</h3>
                        <p className="text-sm">
                            Veterinary Doctor | Mandela Washington Fellow 2025<br />
                            Senior Veterinary Officer, NCDC | One Health Advocate
                        </p>
                    </div>

                    {/* Middle - Quick links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a hre="/about" className="hover:text-green-400">About</a></li>
                            <li><a hre="/blog" className="hover:text-green-400">Blog</a></li>
                            <li><a hre="/speaking" className="hover:text-green-400">Speaking Engagements</a></li>
                            <li><a hre="/contact" className="hover:text-green-400">Contact & Bookings</a></li>
                        </ul>
                    </div>

                    {/* Right - Social & Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://wwww.linkedin.com/in/dr-yetunde-abioye-711903173/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                                LinkedIn
                            </a>

                            {/* Add Twitter/X, Instagram when you have  links */}
                            <a href="https://wwww.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                                Twitter/X
                            </a>
                            <a href="https://wwww.Instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                                Instagram
                            </a>
                        </div>
                        <p className="text-sm">
                            Email: <a href="mailto:babyabioyebitcada@gmail.com" className="hover:text-green-400">babyabioyebitcada@gmail.com</a> <br />
                            WhatsApp: <a href="https://wa.me/2348030969306" className="hover:text-green-400">+234 803 096 9306</a>
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    © {new Date().getFullYear()} Dr. Yetunde Abioye. All rights reserved.
                </div>
            </div>
        </footer>
    );
}