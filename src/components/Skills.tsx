import * as React from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiRedux, SiMongodb, SiTailwindcss } from "react-icons/si"

interface Skill {
  name: string
  icon: JSX.Element
  level: number
}

const skills: Skill[] = [
  { name: "React", icon: <FaReact color='#61DAFB' />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript color='#3178C6' />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs color='#83CD29' />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb color='#47A248' />, level: 80 },
  { name: "Redux", icon: <SiRedux color='#764ABC' />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss color='#06B6D4' />, level: 90 },
]

const Skills: React.FC = () => {
  return (
    <section
      id='skills'
      className='py-24 bg-gradient-to-r from-purple-700 via-indigo-900 to-black'>
      <div className='container mx-auto px-6'>
        <h2 className='text-5xl font-bold text-center text-white mb-16'>
          My Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='relative bg-gradient-to-r from-gray-800 to-gray-700 shadow-xl rounded-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
              <div className='flex items-center mb-6'>
                <div className='w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full text-4xl shadow-md'>
                  {skill.icon}
                </div>
                <h3 className='ml-6 text-2xl font-semibold text-white'>
                  {skill.name}
                </h3>
              </div>
              <div className='relative w-full bg-gray-600 rounded-full h-4 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className='absolute top-0 left-0 bg-gradient-to-r from-teal-500 to-indigo-500 h-4 rounded-full'
                />
              </div>
              <span className='text-white text-sm mt-4 block text-right'>
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
