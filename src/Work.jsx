import { motion } from 'framer-motion'

const projects = [
  {
    title: "Blog Website & Mentor Dashboard",
    description: "AI-powered full-stack platform to write blogs and book mentors. Includes authentication, CRUD, and dashboards.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AI/ML"],
    link: "https://github.com/BlogWebiste/Blogwebsite"
  },
  {
    title: "E-commerce Website",
    description: "Fully functional shopping platform with Razorpay, Google Pay, and PhonePe integrations.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Hritik-ukey"
  },
  {
    title: "Password Manager",
    description: "Secure web app to manage, update and delete passwords with clean UI/UX.",
    tech: ["React", "JavaScript", "LocalStorage"],
    link: "https://github.com/Hritik-ukey"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio showcasing my projects, experience and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Hritik-ukey"
  }
]

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">My Work</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Left Card - Projects */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Personal Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.description}</p>
              <p className="text-sm mt-1 text-yellow-500">{project.tech.join(', ')}</p>
              <a
                href={project.link}
                className="text-rose-500 font-semibold text-sm mt-2 inline-block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </motion.div>

        {/* Right Card - Skills + Experience */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Skills Section */}
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Personal Experience & Skills</h3>
            <div className="text-sm text-gray-800">
              <h4 className="text-lg font-semibold text-gray-800">Skills</h4>
              <p><span className="font-semibold">Languages:</span> C, C++, JavaScript, C#</p>
              <p><span className="font-semibold">Frontend:</span> HTML, CSS, React.js, Next.js, Tailwind CSS, TypeScript</p>
              <p><span className="font-semibold">Backend:</span> Node.js, Express.js</p>
              <p><span className="font-semibold">Databases:</span> MongoDB, MySQL, SQL</p>
              <p><span className="font-semibold">Tools:</span> Git, GitHub, Linux, Firebase, REST APIs, Google Cloud</p>
            </div>
          </div>

          {/* Intern - UptoSkills */}
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h4 className="text-lg font-semibold text-gray-800">Web Developer Intern</h4>
            <p className="text-sm italic text-gray-500">UptoSkills • Remote • Oct–Dec 2024</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Mentored interns on frontend and MERN stack development.</li>
              <li>Led architecture and development of Mentor Dashboard app.</li>
            </ul>
          </div>

          {/* Indigo */}
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h4 className="text-lg font-semibold text-gray-800">Customer Service Executive Intern</h4>
            <p className="text-sm italic text-gray-500">INDIGO • Bhopal • 3 Months</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Resolved technical queries and supported ticketing tools.</li>
              <li>Boosted customer service efficiency and communication.</li>
            </ul>
          </div>

          {/* ASHORT */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Sales Executive</h4>
            <p className="text-sm italic text-gray-500">ASHORT • Bhopal • 3 Months</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Assisted India’s first co-commerce platform in sales execution.</li>
              <li>Onboarded customers and handled product demos.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("goHome"))}
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  )
}
