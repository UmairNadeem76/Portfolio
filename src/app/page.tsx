'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { FaLinkedin, FaGithub, FaJava, FaPython, FaNodeJs } from 'react-icons/fa'
import { SiPython, SiKotlin, SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiDotnet, SiMongodb, SiMysql, SiDocker } from 'react-icons/si'
import React from 'react'

const skills = [
  // Programming Languages
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'C#', icon: '/csharp.png', color: '#239120' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  // Frontend Development
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  // Backend Management
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
]

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: 'Android App Development',
    issuer: 'Meta',
    image: '/android-cert.jpg',
    link: '/Coursera HK6XAL3QCTF7.pdf'
  },
  {
    title: 'Developing Front-End Apps with React',
    issuer: 'IBM',
    image: '/react-cert.jpg',
    link: '/Coursera QZM25NXGE7G3.pdf'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM',
    image: '/node-cert.jpg',
    link: '/Coursera 0LRPUYHNB6AY.pdf'
  },
  {
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM',
    image: '/python-cert.jpg',
    link: '/Coursera MF5X0RQUIK5E.pdf'
  },
  {
    title: 'GIT Fundamentals',
    issuer: '10Pearls University',
    image: '/git-cert.jpg',
    link: '/GIT Fundamentals Certificate.pdf'
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { theme, setTheme } = useTheme()
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-50 dark:bg-gray-900 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Muhammad Umair Nadeem</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#about" className="nav-link">About</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#certifications" className="nav-link">Certifications</a>
                <a href="#contact" className="nav-link">Contact</a>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-white dark:bg-gray-800"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-3 space-y-3">
                <a
                  href="#about"
                  className="block nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="block nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#certifications"
                  className="block nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certifications
                </a>
                <a
                  href="#contact"
                  className="block nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark dark:text-light mb-6">
                Hi, I'm <span className="text-primary">Muhammad Umair Nadeem</span>
              </h1>
              <p className="text-xl text-secondary dark:text-gray-300 mb-8">
                Software Engineer Passionate About Building Responsive, Scalable, And User-Focused Applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="btn-primary"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-secondary hover:bg-secondary/90"
                >
                  View Resume
                </motion.a>
              </div>
              <div className="flex gap-6 mt-8 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/m-umair-nadeem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-8 h-8 text-[#0077B5] dark:text-[#0077B5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/UmairNadeem76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-8 h-8 text-gray-900 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-80 h-80 mx-auto md:ml-8 md:mr-0 order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-justify">
              I'm Muhammad Umair Nadeem, a driven <span className="text-primary font-semibold">Software Engineering</span> student with a passion for crafting <span className="text-primary font-semibold">Full-Stack Web Applications</span> that are both high-performing and user-centric. I specialize in modern <span className="text-primary font-semibold">Frontend & Backend Technologies</span> including <span className="text-primary font-semibold">React, TypeScript, .NET, & Node.js</span>, and have experience working on real-world projects like Brain Tumor Detection System Using Artificial Intelligence, Task Management App, Restaurant Management System, and more. During my time at <span className="text-primary font-semibold">10Pearls</span> as a <span className="text-primary font-semibold">.NET Full Stack Intern</span>, I collaborated with mentors to build robust systems using <span className="text-primary font-semibold">Secure APIs, JWT Authentication, & Scalable Databases</span>.
              My work blends clean code, thoughtful design, and a strong understanding of both frontend aesthetics and backend reliability. Whether it's building AI-powered applications, optimizing UI performance, or implementing real-time data features, I bring a detail-oriented and solution-driven mindset to everything I do. When I'm not coding, I enjoy playing games, content writing, and continuously exploring new technologies that push the boundaries of what the web can offer.
            </p>

            {/* Skills Flow */}
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-marquee whitespace-nowrap w-max">
                <div className="flex">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mx-8"
                    >
                      <div className="text-4xl mb-2" style={{ color: skill.color }}>
                        {typeof skill.icon === 'string' ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
                          />
                        ) : (
                          React.createElement(skill.icon)
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  {skills.map((skill, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex flex-col items-center justify-center mx-8"
                    >
                      <div className="text-4xl mb-2" style={{ color: skill.color }}>
                        {typeof skill.icon === 'string' ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
                          />
                        ) : (
                          React.createElement(skill.icon)
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="relative border-l border-gray-300 dark:border-gray-700 pl-8 max-w-3xl mx-auto">
            {/* Experience Entry Example */}
            <div className="mb-12 relative">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-gray-900"></span>
              <span className="text-xs font-mono text-primary">Sep 2024 - Nov 2024</span>
              <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">.NET Full Stack Developer Intern</h3>
              <div className="text-primary mb-2">10Pearls Pakistan <span className="text-primary/80">- Shine Internship Program</span></div>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                During my internship at 10Pearls, I developed a full-stack task management application using ASP.NET Core (.NET 8) and React.js with TypeScript. I implemented JWT-based authentication, role-based access control, real-time updates, and dynamic server-side filtering. The backend featured Entity Framework Core with SQL Server, soft deletes, and optimized queries. I also integrated structured logging via Serilog, tested thoroughly with XUnit, and maintained high code quality with SonarQube. On the frontend, I built responsive UI components with form validation using React Hook Form and Zod. I collaborated using Git, participated in regular mentor sync-ups, and gained experience in building scalable, production-ready systems.
              </p>
            </div>
            {/* Add more entries as needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <Projects />
      </div>

      {/* Courses & Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Courses & Certifications</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:-translate-y-4 transition-all duration-200 ease-in-out"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{certificate.issuer}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <Contact />
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors z-50"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
} 