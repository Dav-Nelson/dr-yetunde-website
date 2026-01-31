export default function Home() {
    return (
        <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
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
                        Email: <a href="mailto:yetundeabioye@gmail.com" className="hover:text-green-400">yetundeabioye@gmail.com</a>
                        WhatsApp: <a href="https://wa.me/2348030969306" className="hover:text-green-400">+234 803 096 9306</a>
                    </p>
                </div>
            </div>
        </div>
    );
}