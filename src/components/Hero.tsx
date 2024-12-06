import * as React from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaArrowRight, FaDownload } from "react-icons/fa"

const Hero: React.FC = () => {
  const [deviceType, setDeviceType] = React.useState<string>("")

  React.useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth

      if (width < 640) {
        setDeviceType("mobile")
      } else if (width >= 640 && width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("laptop")
      }
    }

    updateDeviceType()

    window.addEventListener("resize", updateDeviceType)

    return () => window.removeEventListener("resize", updateDeviceType)
  }, [])

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "rajesh_resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className='relative h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black overflow-hidden'>
      {/* Dynamic Background with Motion */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-800 opacity-80'
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration:
            deviceType === "mobile" ? 3.5 : deviceType === "tablet" ? 5 : 7,
          repeat: Infinity,
          ease: "linear",
        }}></motion.div>
      <div className='absolute inset-0 bg-black opacity-40 z-0'></div>
      {/* Dark overlay for contrast */}
      <div className='container mx-auto px-6 text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat text-white mb-6 tracking-tight leading-tight'>
            Hi, I'm <span className='text-gradient'>Rajesh Kumar</span>
          </h1>
          <div className='text-2xl sm:text-3xl tracking-wide font-medium font-lexend md:text-4xl text-gray-300 mb-10'>
            <TypeAnimation
              sequence={[
                "Software Engineer..!",
                2000,
                "Frontend Developer..!",
                2000,
              ]}
              wrapper='span'
              speed={60}
              repeat={Infinity}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center'>
            <a
              href='#contact'
              className='font-semibold font-lexend bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:from-teal-400 hover:to-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center gap-3'>
              <span>Get In Touch</span>
              <FaArrowRight className='w-6 h-6' />
            </a>

            <button
              onClick={handleDownloadResume}
              className='font-semibold font-lexend bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg flex items-center justify-center gap-3 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out shadow-lg'>
              <FaDownload className='text-xl' />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
