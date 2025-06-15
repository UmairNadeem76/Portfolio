'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-secondary dark:text-gray-300 mb-6">
                I am a passionate software engineer with a strong foundation in web development
                and a keen eye for creating beautiful, user-friendly applications. My journey
                in software development began with a curiosity for building things that make
                a difference in people's lives.
              </p>
              <p className="text-lg text-secondary dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through technical writing
                and mentoring.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-dark dark:text-light">Frontend</h3>
                <ul className="text-secondary dark:text-gray-300">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-dark dark:text-light">Backend</h3>
                <ul className="text-secondary dark:text-gray-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 