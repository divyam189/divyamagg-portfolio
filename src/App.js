import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";




function App() {
  const [showButton, setShowButton] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-all duration-500 font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-widest text-gray-900 dark:text-white">
            DIVYAM AGGARWAL
          </h1>

          <div className="flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Certifications", id: "certifications" },
              { name: "Contact", id: "contact" },
            ].map((link, i) => (
              <a
                key={i}
                href={`#${link.id}`}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
              title="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-44 px-6">
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className="text-gray-500 dark:text-gray-300">Divyam Aggarwal 👋</span>
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A passionate{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Java Full Stack Developer
          </span>{" "}
          building scalable, efficient, and secure web applications using{" "}
          <span className="font-semibold text-gray-900 dark:text-white">Spring Boot</span>,{" "}
          <span className="font-semibold text-gray-900 dark:text-white">React.js</span>, 
           <span className="font-semibold text-gray-900 dark:text-white">Node.js</span>, and{" "}
          <span className="font-semibold text-gray-900 dark:text-white">PostgreSQL</span>.
        </motion.p>
        <div className="flex gap-5 flex-wrap justify-center">
       <a
  href="/resumev2.pdf"
  target="_blank"
  rel="noreferrer"
  className="bg-black dark:bg-white dark:text-black text-white hover:opacity-80 px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
>
  View Resume
</a>

          <button
  onClick={() => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-gray-400 dark:border-white px-8 py-3 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
>
  Get in Touch
</button>

          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-28 px-6 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed text-center font-medium">
          I’m a Computer Science student at{" "}
          <span className="font-semibold text-black dark:text-white">Chitkara University</span>, 
          passionate about building modern and efficient software systems.  
          Skilled in{" "}
          <span className="font-semibold text-black dark:text-white">Java, React.js, Spring Boot 
           and cloud technologies</span>, I love turning ideas into clean, functional applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 dark:bg-neutral-950 py-24 px-6 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Programming", items: "Java, JavaScript, SQL, Bash" },
            { title: "Frameworks", items: "Spring Boot, Node.js, React.js" },
            { title: "Databases", items: "PostgreSQL, MongoDB, MySQL" },
            { title: "Cloud", items: "AWS, Git, Maven" },
            { title: "Concepts", items: "OOP, REST APIs, DSA, Agile" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-black dark:hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Wristify - E-Commerce Website",
              desc: "Built a full-stack e-commerce platform with authentication and payment gateway integration.",
            },
            {
              title: "Campus Lost & Found System",
              desc: "Secure platform for managing lost and found items with JWT authentication.",
            },
            {
              title: "Book Store Management System",
              desc: "REST APIs for book and order management using Node.js and MongoDB.",
            },
            {
              title: "Online Bank Management System",
              desc: "Core banking app with account creation, fund transfer, and transaction tracking.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-black dark:hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-gray-100 dark:bg-neutral-950 py-24 px-6 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Certifications</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Oracle AI Foundations",
            "Deloitte Data Analytics",
            "Deloitte Technology",
            "Deloitte Cyber",
            "AWS Cloud Practitioner (In Progress)",
            "Red Hat Academy Certified Fundamentals",
          ].map((cert, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 p-6 rounded-xl text-center text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="py-24 text-center px-6 scroll-mt-20">
  <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
  <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
    Let’s connect for collaborations or opportunities 🚀
  </p>

  <div className="flex justify-center gap-10 flex-wrap">
    {/* Email */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=divyamaggarwal189@gmail.com&su=Let's%20Connect&body=Hi%20Divyam,"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
    >
      <FaEnvelope className="text-2xl" />
      Email
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/divyam-aggarwal-4ba19a28b/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-[#0077b5] transition-all duration-200"
    >
      <FaLinkedin className="text-2xl" />
      LinkedIn
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-100 transition-all duration-200"
    >
      <FaGithub className="text-2xl" />
      GitHub
    </a>
  </div>
</section>




      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-500 text-sm">
        © 2025 Divyam Aggarwal | Built with ❤️ using React & Tailwind CSS
      </footer>

      {/* Back-to-Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}

export default App;
