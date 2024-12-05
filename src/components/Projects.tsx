import React from "react"
import { motion } from "framer-motion"
import { Project } from "../types"

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Express"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Real-time task management application with team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    imageUrl: "/projects/task-manager.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with real-time data visualization.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    imageUrl: "/projects/dashboard.jpg",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://dashboard-demo.com",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses and language translation.",
    technologies: ["React", "WebSocket", "OpenAI API", "MongoDB"],
    imageUrl: "/projects/chat-app.jpg",
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://ai-chat-demo.com",
  },
]

const Projects: React.FC = () => {
  return (
    <section
      id='projects'
      className='py-20 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700'>
      <div className='container mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-5xl font-extrabold text-center mb-12 text-white'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500'>
            Featured Projects
          </span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500'>
              <div className='relative group'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-64 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 rounded-t-xl' />
              </div>
              <div className='p-6 relative bg-gradient-to-t from-black to-transparent rounded-b-xl'>
                <motion.h3
                  className='text-2xl font-bold text-white mb-3'
                  whileHover={{ scale: 1.05 }}>
                  {project.title}
                </motion.h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className='px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full'
                      whileHover={{ scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className='flex justify-between gap-4 mt-4'>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      className='px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300'>
                      GitHub
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      className='px-6 py-2 bg-gradient-to-r from-green-400 to-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300'>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
