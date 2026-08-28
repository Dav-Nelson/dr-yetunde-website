export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">

          {/* Bio */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-tight">
              Dr. Yetunde Abioye
            </h3>
            <p className="text-sm leading-relaxed">
              Incident Manager, National Lassa Fever EOC<br />
              Lead, One Health Coordination Unit, NCDC
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li><a href="/about" className="hover:text-green-400 transition-colors duration-200">About</a></li>
              <li><a href="/blog" className="hover:text-green-400 transition-colors duration-200">Blog</a></li>
              <li><a href="/speaking" className="hover:text-green-400 transition-colors duration-200">Speaking Engagements</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors duration-200">Contact & Bookings</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-tight">
              Connect
            </h3>

            <div className="flex flex-col items-center md:items-start gap-3 mb-5">
              <a
                href="mailto:abioyeyetunde.ay@gmail.com"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>

              <a
                href="https://wa.me/2348030969306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
                aria-label="Message on WhatsApp"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://www.linkedin.com/in/dr-yetunde-abioye-711903173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/>
                </svg>
              </a>

              <a href="#" className="text-gray-500 cursor-not-allowed" aria-label="Twitter/X (coming soon)">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a href="#" className="text-gray-500 cursor-not-allowed" aria-label="Instagram (coming soon)">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.225.227 2.692.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.225 4.358 2.692 6.826 7.052 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.225 6.826-2.692 6.981-7.052.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.225-4.36-2.692-6.827-7.052-6.981C15.668.014 15.259 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-800 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Dr. Yetunde Abioye. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
