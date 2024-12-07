import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Project } from "../types"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform that allows users to browse products, add items to the cart, make payments, and manage their orders.",
    technologies: ["React", "HTML5", "SASS", "MySQL", "MUI", "Django"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/rajeshk1909",
    liveUrl: "https://hellofixy.com/",
  },
  {
    id: 2,
    title: "Linksphere",
    description:
      "A fully animated social networking platform that allows users to connect, share, and discover content with smooth animations and interactions.",
    technologies: [
      "React",
      "HTML5",
      "Vite",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
    ],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/rajeshk1909",
    liveUrl: "https://linksphere.onrender.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "A task management application that helps users to create, update, and track their tasks, with features like prioritization and due dates.",
    technologies: [
      "React Vite",
      "HTML5",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
    ],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/rajeshk1909/ClickMe",
    liveUrl: "https://clickme-ymxe.onrender.com",
  },
  {
    id: 4,
    title: "Role-Based Access System",
    description:
      "A system that implements role-based access control, allowing admins to assign and manage user roles for different access permissions.",
    technologies: [
      "React vite",
      "Tailwind CSS",
      "HTML5",
      "Redux",
      "TypeScript",
      "MUI",
    ],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/rajeshk1909/RBAC-FE",
    liveUrl: "https://rbac-ui.onrender.com",
  },
]

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })
  }, [])

  return (
    <section
      id='projects'
      className='py-20 bg-gradient-to-b from-black via-purple-900 to-indigo-900 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='md:text-5xl text-2xl font-bold font-montserrat text-center mb-12 text-gray-100'>
          Project Experience
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projects.map((project, index) => (
            <motion.div
              data-aos='fade-right'
              key={index}
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative bg-gray-800 rounded-xl shadow-lg overflow-hidden  hover:shadow-xl transform transition-transform duration-500'>
              <div className='relative'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-64 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold font-montserrat text-gray-100 mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-400 font-medium font-kufam mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className='px-4 py-2 cursor-default font-medium font-lexend text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg'
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
                      className={`flex items-center hover:scale-105 sm:px-6 px-4 py-2 font-medium bg-gradient-to-t from-purple-600 via-purple-600 to-blue-500 hover:from-blue-500 hover:via-purple-600 hover:to-purple-600 rounded-full font-kufam text-gray-300 text-sm sm:text-base shadow-lg hover:bg-gray-600 transition-all duration-300`}>
                      <FaGithub className='mr-2 sm:text-lg' />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center hover:scale-105 sm:px-6 px-4 py-2 bg-gradient-to-t from-purple-600 via-purple-600 to-blue-500 hover:from-blue-500 hover:via-purple-600 hover:to-purple-600 text-white font-medium font-kufam rounded-full shadow-lg sm:text-base hover:bg-blue-500 text-sm transition-all duration-300'>
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
