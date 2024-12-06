import * as React from "react"
import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"
import { SiTypescript, SiRedux, SiMongodb, SiTailwindcss } from "react-icons/si"

interface Skill {
  name: string
  icon: JSX.Element
  level: number
}

const skills: Skill[] = [
  { name: "React", icon: <FaReact color='#61DAFB' />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript color='#3178C6' />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs color='#83CD29' />, level: 60 },
  { name: "MongoDB", icon: <SiMongodb color='#47A248' />, level: 70 },
  { name: "Redux", icon: <SiRedux color='#764ABC' />, level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss color='#06B6D4' />, level: 90 },
  { name: "HTML", icon: <FaHtml5 color='#E44D26' />, level: 85 },
  { name: "CSS", icon: <FaCss3Alt color='#1572B6' />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare color='#F7DF1E' />, level: 80 },
]

const Skills: React.FC = () => {
  return (
    <section
      id='skills'
      className='py-24 bg-gradient-to-b from-indigo-900 via-purple-900 to-black overflow-hidden'>
      <div className='container mx-auto px-6'>
        <h2 className='text-5xl font-bold text-center text-white mb-16 font-montserrat'>
          My Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='relative bg-gradient-to-r from-gray-800 to-gray-700 shadow-xl rounded-xl p-7 hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full text-4xl shadow-md'>
                  {skill.icon}
                </div>
                <h3 className='ml-6 text-xl font-lexend tracking-wide font-medium text-white'>
                  {skill.name}
                </h3>
              </div>

              {/* Skill Progress Bar */}
              <div className='relative w-full bg-gray-600 rounded-full h-4 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className='absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500'
                />
                {/* Skill Level Percentage */}
                <span className='text-white font-kufam text-xs absolute top-[1px] right-0 pr-2'>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
