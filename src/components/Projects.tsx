'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Task Management System',
    description: 'Built a robust task management app using ASP.NET Core (.NET 8) and React.js with TypeScript during the 10Pearls Shine Internship. Implemented JWT-based auth, role-based access, real-time updates, dynamic filtering, and secure exception handling. Ensured quality with XUnit tests, Serilog logging, and SonarQube integration.',
    technologies: ['ASP.NET Core (.NET 8)', 'React', 'TypeScript', 'C#', 'SQL Server', 'XUnit', 'Serilog', 'SonarQube', 'Git'],
    image: '/project1.jpg',
    link: 'https://github.com/UmairNadeem76/Task-Management-System'
  },
  {
    title: 'Brain Tumor Detection System Using Artificial Intelligence',
    description: 'Built a responsive React (TypeScript) frontend for a tumor classification system powered by a TensorFlow CNN model. Included JWT auth, drag-and-drop image uploads with validation, animated UI, and a personalized dashboard. Integrated with a NestJS + MongoDB backend for secure data handling and prediction history.',
    technologies: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'TensorFlow', 'REST API'],
    image: '/project2.jpg',
    link: 'https://github.com/UmairNadeem76/Final-Year-Project'
  },
  {
    title: 'Restaurant Management System',
    description: 'Designed and developed a full-featured restaurant management system using Java and MongoDB. Implemented core modules like order processing, inventory tracking, and billing, with a user-friendly GUI focused on smooth navigation for staff and management.',
    technologies: ['Java', 'MongoDB', 'Java Swing'],
    image: '/project3.jpg',
    link: 'https://github.com/UmairNadeem76/Restaurant-Management-System'
  },
  {
    title: 'Dog Breed Identification System',
    description: 'Built a dog breed prediction tool using a fine-tuned NasNetLarge model on a curated image dataset. Designed a clean Streamlit interface for uploading images and viewing predictions, with iterative model optimization for improved accuracy.',
    technologies: ['Python', 'NasNetLarge', 'TensorFlow / Keras', 'Streamlit'],
    image: '/project4.jpg',
    link: 'https://github.com/UmairNadeem76/Dog-Breed-Identification-System'
  },
  {
    title: 'Image Search Web Application Using Unsplash API',
    description: 'Created a responsive image search app using HTML, CSS, and vanilla JavaScript. Integrated the Unsplash API for dynamic image fetching based on user input, with asynchronous calls and a mobile-friendly UI.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Unsplash API'],
    image: '/project5.jpg',
    link: 'https://github.com/UmairNadeem76/Image-Search-Application-Using-Unsplash-API'
  },
  {
    title: 'To-Do List App',
    description: "A simple and efficient Android To-Do list application developed using Java and Kotlin. The app allows users to add, update, and delete tasks with a clean user interface and persistent storage. Designed with a focus on usability and performance, it's a lightweight productivity tool tailored for mobile users.",
    technologies: ['Java', 'Kotlin', 'Android Views', 'Gradle'],
    image: '/project6.jpg',
    link: 'https://github.com/UmairNadeem76/To-Do-List-App'
  },
  {
    title: 'Quotes App',
    description: 'A clean and lightweight Android app built in Java that displays motivational and categorized quotes. Users can swipe manually to browse through quotes, with smooth transitions and organized categories enhancing readability and engagement. Designed for simplicity and a positive user experience.',
    technologies: ['Java', 'RecyclerView', 'XML Layouts', 'Gradle'],
    image: '/project7.jpg',
    link: 'https://github.com/UmairNadeem76/Quotes-App'
  },
  {
    title: 'Weather App',
    description: 'An intuitive Kotlin-based weather app that allows users to search for real-time weather updates by city. The app fetches data via API, showing current temperature, conditions, and other weather metrics in a clean, user-friendly interface. Designed to be fast, responsive, and easy to navigate.',
    technologies: ['Kotlin', 'XML Layouts', 'Gradle'],
    image: '/project8.jpg',
    link: 'https://github.com/UmairNadeem76/Weather-App'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-4 transition-all duration-200 ease-in-out"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-dark dark:text-light">
                    {project.title}
                  </h3>
                  <p className="text-secondary dark:text-gray-300 mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 