import React from "react"
import { motion } from "framer-motion"
import { Project } from "../types"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

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
      className='py-20 bg-gradient-to-b from-black via-purple-900 to-indigo-900 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-5xl font-extrabold text-center mb-12 text-gray-100'>
          Featured Projects
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transform transition-transform duration-500'>
              <div className='relative'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-64 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-100 mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
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
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center px-6 py-2 bg-gray-700 text-gray-300 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300'>
                      <FaGithub className='mr-2 text-lg' />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300'>
                      <FaExternalLinkAlt className='mr-2 text-lg' />
                      Live Demo
                    </a>
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
