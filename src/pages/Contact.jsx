import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 lg:p-16">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 text-center">
              Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Interested in collaborations, speaking engagements, consultations, or simply want to connect? I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Email & WhatsApp */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Direct Contact</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-medium text-gray-700 mb-2">Email</p>
                    <a
                      href="mailto:babyabioyebitcada@gmail.com"
                      className="text-xl text-green-700 hover:text-green-900 transition-colors font-medium"
                    >
                      babyabioyebitcada@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-lg font-medium text-gray-700 mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/2348030969306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-green-700 hover:text-green-900 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      +234 803 096 9306
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Follow Me</h3>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/dr-yetunde-abioye-711903173/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/>
                    </svg>
                  </a>

                  {/* Twitter/X - placeholder */}
                  <a
                    href="#"
                    className="text-2xl text-gray-400 cursor-not-allowed"
                    aria-label="Twitter/X (coming soon)"
                  >
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* Instagram - placeholder */}
                  <a
                    href="#"
                    className="text-2xl text-gray-400 cursor-not-allowed"
                    aria-label="Instagram (coming soon)"
                  >
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.225.227 2.692.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.225 4.358 2.692 6.826 7.052 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.225 6.826-2.692 6.981-7.052.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.225-4.36-2.692-6.827-7.052-6.981C15.668.014 15.259 0 12 0z"/>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}