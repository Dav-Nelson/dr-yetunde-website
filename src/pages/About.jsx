import dyAbout from '../assets/dy-about.jpg';

export default function About() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Hero / Intro - Side-by-side layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-16 md:mb-24">
          {/* Photo */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto md:max-w-none">
              <img
                src={dyAbout}
                alt="Dr. Yetunde Abioye - Professional portrait"
                className="w-full h-full object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-6 tracking-tight">
              Dr. Yetunde Abioye
            </h1>
            <p className="text-xl sm:text-2xl text-green-800 font-medium mb-4">
              Veterinary Doctor | One Health Leader | Public Health Specialist
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Incident Manager, National Lassa Fever EOC • Lead, One Health Coordination Unit, NCDC • Mandela Washington Fellow 2025
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Professional Summary
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
            <p>
              Dr. Yetunde Abioye is the <strong>Incident Manager</strong> for the National Lassa Fever Emergency Operations Centre (EOC) and <strong>Lead</strong> of the One Health Coordination Unit at the Nigeria Centre for Disease Control and Prevention (NCDC).
            </p>
            <p>
              Her professional journey spans progressive experience across clinical practice, surveillance and epidemiology, zoonotic diseases, antimicrobial resistance, food safety, food security, public health, health security, and One Health initiatives, policy, and multisectoral partnerships.
            </p>
            <p>
              She brings extensive field experience in outbreak investigation and control, joint risk assessment, implementation of the International Health Regulations (2005), monitoring and evaluation, policy development, human-centred design, and community-led interventions aligned with the Global Health Security Agenda.
            </p>
            <p>
              Known for her collaborative spirit and results-driven approach, Dr. Abioye is deeply committed to community-led initiatives and to inspiring the next generation of public health leaders.
            </p>
          </div>
        </section>

        {/* Education & Training */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Education & Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Doctor of Veterinary Medicine (DVM)</h3>
              <p className="text-gray-700 leading-relaxed">University of Nigeria</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">MSc, Public Health</h3>
              <p className="text-gray-700 leading-relaxed">Anglia Ruskin University, UK</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Pandemic Preparedness Training</h3>
              <p className="text-gray-700 leading-relaxed">London School of Hygiene & Tropical Medicine</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Leadership in Public Management</h3>
              <p className="text-gray-700 leading-relaxed">Certificate, Wayne State University (US)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Transboundary Disease Risk Communication (TD-RCCE)</h3>
              <p className="text-gray-700 leading-relaxed">One Health Approach, AFROHUN Academy</p>
            </div>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Areas of Interest & Collaboration
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
              <li>Outbreak Investigation & Control</li>
              <li>Zoonotic and Transboundary Diseases</li>
              <li>Antimicrobial Resistance (AMR)</li>
              <li>Food Safety & Food Security</li>
              <li>International Health Regulations (IHR 2005) Implementation</li>
              <li>Policy Development & Multisectoral Partnerships</li>
              <li>Human-Centred Design & Community-Led Interventions</li>
            </ul>
            <p className="mt-8 text-lg text-gray-700 italic">
              Open to exploring new frontiers and collaborations in uncharted areas of public health.
            </p>
          </div>
        </section>

        {/* Awards & Affiliations */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Awards & Affiliations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800">2025 Mandela Washington Fellow</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800">NEF-NVRI Toxicology Internship Fellow</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800">Presidential NYSC Award Recipient (2021)</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800">Member, AU-OHDAA</h3>
            </div>
          </div>
        </section>

        {/* Beyond Work */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Beyond Work
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-800 leading-relaxed">
              Outside of work, Dr. Abioye enjoys watching movies, travelling, and exploring the role of storytelling in policy making and implementation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
