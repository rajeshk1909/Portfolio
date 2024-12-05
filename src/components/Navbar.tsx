import * as React from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-indigo-900 to-purple-900 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        {/* Logo/Brand */}
        <Link
          to='home'
          smooth={true}
          className='text-2xl font-bold text-white cursor-pointer tracking-wide'>
          Portfolio
        </Link>

        {/* Menu Items (Desktop) */}
        <div className='hidden md:flex space-x-8'>
          {["home", "projects", "skills", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              className='text-gray-300 hover:text-white cursor-pointer capitalize tracking-wide transition-all duration-300'>
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional) */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-indigo-900 to-purple-900 text-center py-4 shadow-lg'>
          {["home", "projects", "skills", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              onClick={() => setIsMenuOpen(false)}
              className='block text-gray-300 py-2 hover:text-white text-lg font-medium capitalize tracking-wide'>
              {item}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
