import * as React from "react"
import { Link } from "react-scroll"
import { AnimatePresence, motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome /> },
    { id: "projects", label: "Projects", icon: <AiOutlineProject /> },
    { id: "skills", label: "Skills", icon: <BiCodeAlt /> },
    { id: "contact", label: "Contact", icon: <AiOutlineMail /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 py-5 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-800 shadow-lg"
          : "bg-transparent"
      }`}>
      <div className='container md:px-10 px-5 flex justify-between items-center'>
        {/* Logo/Brand */}
        <Link
          to='home'
          smooth={true}
          className='lg:text-3xl md:text-2xl text-xl font-bold font-montserrat text-white cursor-pointer tracking-wide'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='flex items-center space-x-2'>
            <span>Portfolio</span>
          </motion.div>
        </Link>

        {/* Menu Items (Desktop) */}
        <div className='hidden md:flex space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              className='flex font-montserrat font-medium items-center space-x-2 text-gray-300 hover:text-white cursor-pointer capitalize tracking-wide transition-all duration-300'>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isMenuOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{ duration: 0.3 }}
            className='md:hidden absolute w-full bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-800 text-white shadow-lg'>
            {/* Background Curve */}
            <div className='relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 transform rotate-12 -skew-x-12'></div>
              <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-l from-indigo-700 via-purple-600 to-blue-800 transform rotate-6'></div>
            </div>

            {/* Menu Items */}
            <div className='relative z-10 flex flex-col items-center py-6 space-y-6 px-4'>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 w-full max-w-xs mx-auto'>
                  <div className='text-2xl'>{item.icon}</div>
                  <span className='text-lg font-semibold'>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
