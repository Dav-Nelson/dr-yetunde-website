import { motion } from 'framer-motion';
import profileImage from '../../assets/dy.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero Section with Photo – staggered */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16"
        >
          {/* Profile Image */}
          {profileImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={profileImage}
                alt="Dr. Yetunde Abioye - Professional Headshot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6"
            >
              Dr. Yetunde Abioye
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-gray-700 font-medium mb-4"
            >
              Veterinary Doctor | One Health Expert | Public Health Leader
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg text-gray-600 max-w-3xl"
            >
              Senior Veterinary Officer at NCDC | Mandela Washington Fellow 2025 | National Lassa Fever Incident Manager
            </motion.p>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.section variants={item} className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Professional Summary</h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p>
              Dr. Yetunde Abioye is a dynamic Veterinary Doctor with over ten years of experience in transboundary and zoonotic diseases. 
              She currently serves as a <strong>Senior Veterinary Officer</strong> at the Nigeria Centre for Disease Control and Prevention (NCDC), 
              where she leads the One Health Coordination Unit in the Department of Surveillance and Epidemiology.
            </p>
            <p>
              In addition to her leadership role, she is the <strong>National Incident Manager</strong> of the Lassa Fever Technical Working Group (TWG), 
              coordinating preparedness, response, and recovery from annual outbreaks.
            </p>
          </div>
        </motion.section>

        {/* Career Highlights – staggered cards */}
        <motion.section variants={container} className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Career Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "NCDC Leadership",
                desc: "Leads One Health Coordination and Lassa Fever response at national level."
              },
              {
                title: "Fleming Fund & AMR",
                desc: "Supported final phase of AMR country grant implementation with Mott MacDonald (2021)."
              },
              {
                title: "NVRI-NEF Toxicology Internship",
                desc: "Collaborated with colleagues across 4 African countries in intensive 90-day program (2018)."
              },
              {
                title: "National Youth Service Awards",
                desc: "Awarded State and Presidential NYSC honors (2017 & 2021) for community development projects."
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-3">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests & Collaborations */}
        <motion.section variants={item} className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Areas of Interest & Collaboration</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
            <li>Antimicrobial Resistance (AMR)</li>
            <li>Food Safety</li>
            <li>Toxicology</li>
            <li>Zoonotic and Transboundary Diseases</li>
            <li>Global One Health Policy & Vaccine Research</li>
            <li>Implementation Research</li>
            <li>Risk Communication & Community Engagement</li>
          </ul>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-700 italic"
          >
            Open to exploring new frontiers and collaborations in uncharted areas of public health.
          </motion.p>
        </motion.section>

        {/* Awards & Affiliations – staggered cards */}
        <motion.section variants={container}>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Awards & Affiliations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "2025 Mandela Washington Fellow",
              "NEF-NVRI Toxicology Internship Fellow",
              "Presidential NYSC Award Recipient (2021)",
              "Member, AU-OHDAA"
            ].map((award, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-green-800">{award}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}