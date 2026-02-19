export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Left - Bio short */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              Dr. Yetunde Abioye
            </h3>
            <p className="text-sm leading-relaxed">
              Veterinary Doctor | Mandela Washington Fellow 2025<br />
              Senior Veterinary Officer, NCDC | One Health Advocate
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-green-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/speaking" className="hover:text-green-400 transition-colors duration-200">
                  Speaking Engagements
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400 transition-colors duration-200">
                  Contact & Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              Connect
            </h3>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a
                href="https://www.linkedin.com/in/dr-yetunde-abioye-711903173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/>
                </svg>
              </a>

              {/* Twitter/X - placeholder */}
              <a
                href="#"
                className="text-gray-500 cursor-not-allowed"
                aria-label="Twitter/X (coming soon)"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram - placeholder */}
              <a
                href="#"
                className="text-gray-500 cursor-not-allowed"
                aria-label="Instagram (coming soon)"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.225.227 2.692.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.225 4.358 2.692 6.826 7.052 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.225 6.826-2.692 6.981-7.052.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.225-4.36-2.692-6.827-7.052-6.981C15.668.014 15.259 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>

            {/* Email & WhatsApp */}
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-400">Email:</span>{' '}
                <a
                  href="mailto:abioyeyetunde.ay@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  abioyeyetunde.ay@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-400">WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/2348030969306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  +234 803 096 9306
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-green-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dr. Yetunde Abioye. All rights reserved.
        </div>
      </div>
    </footer>
  );
}