export default function About() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Hero / Intro */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-6 tracking-tight">
            Dr. Yetunde Abioye
          </h1>
          <p className="text-xl sm:text-2xl text-green-800 font-medium mb-4">
            Veterinary Doctor | One Health Expert | Public Health Leader
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Senior Veterinary Officer at NCDC • Mandela Washington Fellow 2025 • National Lassa Fever Incident Manager
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Professional Summary
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
            <p>
              Dr. Yetunde Abioye is a dynamic Veterinary Doctor with over ten years of experience in transboundary and zoonotic diseases. 
              She currently serves as a <strong>Senior Veterinary Officer</strong> at the Nigeria Centre for Disease Control and Prevention (NCDC), 
              where she leads the One Health Coordination Unit in the Department of Surveillance and Epidemiology.
            </p>

            <p>
              In addition to her leadership role, she is the <strong>National Incident Manager</strong> of the Lassa Fever Technical Working Group (TWG), 
              coordinating preparedness, response, and recovery from annual outbreaks.
            </p>

            <p>
              Prior to NCDC, she supported the final phase of the AMR country grant implementation with Mott MacDonald (2021) as Project Assistant for LifeStock Management Services Ltd., 
              one of the partners in the First Nigeria Fleming Fund Consortium.
            </p>

            <p>
              In 2018, she was selected for the prestigious NVRI-NEF Toxicology Internship program, collaborating with colleagues across four African countries in an intensive 90-day period. 
              Her National Youth Service (2017) earned both State and Presidential NYSC awards (2017 & 2021) for her community development projects, shaping her career in public health.
            </p>
          </div>
        </section>

        {/* Career Highlights – card grid */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Career Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                NCDC Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Leads One Health Coordination Unit and serves as National Incident Manager for Lassa Fever Technical Working Group, driving national preparedness and response.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                AMR & Fleming Fund
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Supported final phase of AMR country grant implementation with Mott MacDonald (2021) as Project Assistant for LifeStock Management Services Ltd.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                NVRI-NEF Toxicology Internship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborated with colleagues across 4 African countries in an intensive 90-day program (2018).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                NYSC Awards
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Awarded State and Presidential National Youth Service honors (2017 & 2021) for outstanding community development projects.
              </p>
            </div>
          </div>
        </section>

        {/* Interests & Collaborations */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center md:text-left">
            Areas of Interest & Collaboration
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
              <li>Antimicrobial Resistance (AMR)</li>
              <li>Food Safety</li>
              <li>Toxicology</li>
              <li>Zoonotic and Transboundary Diseases</li>
              <li>Global One Health Policy & Vaccine Research</li>
              <li>Implementation Research</li>
              <li>Risk Communication & Community Engagement</li>
            </ul>
            <p className="mt-8 text-lg text-gray-700 italic">
              Open to exploring new frontiers and collaborations in uncharted areas of public health.
            </p>
          </div>
        </section>

        {/* Awards & Affiliations */}
        <section>
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
      </div>
    </div>
  );
}