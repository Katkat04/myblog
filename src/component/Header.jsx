import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (index) => {
    setActiveLink(index)
    setIsMenuOpen(false)
    setTimeout(() => setActiveLink(null), 500)
  }
  const handleMouseEnter = (index) => {
    setHoveredLink(index)
  }
  const handleMouseLeave = () => {
    setHoveredLink(null)
  }
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="bg-[#181d20] p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse text-white font-bold hover:text-[#7f69a5]">
          <FontAwesomeIcon icon={faBug} className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Katy Diaz</span>
        </a>
        
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#7f69a5]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen} 
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white md:mx-0"> 
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block py-2 px-3 text-white hover:text-[#7f69a5]  md:p-0 `}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hoveredLink === index ? `✨ ${link} ✨` : link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-white text-[#7f69a5] hover:text-white hover:bg-[#7f69a5] font-medium rounded-lg text-sm px-4 py-2"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header