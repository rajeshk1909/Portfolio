import * as React from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
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
        isScrolled
          ? "bg-gradient-to-r from-indigo-800 to-purple-800 shadow-lg"
          : "bg-transparent"
      }`}>
      <div className='container md:px-10 px-5 flex justify-between items-center'>
        {/* Logo/Brand */}
        <Link
          to='home'
          smooth={true}
          className='text-3xl font-bold font-montserrat text-white cursor-pointer tracking-wide'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='flex items-center space-x-2'>
            <span className=''>Portfolio</span>
          </motion.div>
        </Link>

        {/* Menu Items (Desktop) */}
        <div className='hidden md:flex space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              className='flex font-lexend font-medium items-center space-x-2 text-gray-300 hover:text-white cursor-pointer capitalize tracking-wide transition-all duration-300'>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-800 to-purple-800 text-center py-4 shadow-lg'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              onClick={() => setIsMenuOpen(false)}
              className='flex items-center justify-center space-x-2 text-gray-300 py-3 hover:text-white text-lg font-medium capitalize tracking-wide'>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
