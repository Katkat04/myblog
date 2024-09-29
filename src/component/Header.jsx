import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faBars, faTimes, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  }

  const handleMouseLeave = () => {
    setHoveredLink(null);
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className="bg-[#181d20] p-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center space-x-3 text-white font-bold hover:text-[#7f69a5]">
          <FontAwesomeIcon icon={faBug} className="h-8" />
          <span className="self-center text-2xl font-semibold">Katy Diaz</span>
        </a>

        <div className="flex items-center md:order-2 space-x-3">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#7f69a5]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          
          <div className="relative inline-block">
            <button
              className="p-2 text-xs bg-[#7f69a5] items-center text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white hover:text-[#967ebc]"
              data-tooltip-target="left-tooltip"
              onMouseEnter={() => setHoveredLink('popover')}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={faFileArrowDown}/>
            </button>
            <div
              className="absolute right-full invisible top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[#7f69a5] py-2 px-4 text-xs text-gray-800 font-medium transition-opacity duration-300 shadow-[12px_0px_30px_-4px_rgba(16,24,40,0.08)]"
              role="tooltip"
              id="left-tooltip"
              style={{ visibility: hoveredLink === 'popover' ? 'visible' : 'hidden' }}
            >
              <span className="absolute -right-1.5 top-1/2 -z-10 h-3 w-3 -translate-y-1/2 rotate-45 rounded-sm bg-[#7f69a5]"></span>
              <h5 className="mb-1 text-sm text-white font-medium text-left">Download CV</h5>
              <p className="text-sm text-white font-normal">Click to download my CV!</p>
            </div>
          </div>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col font-bold text-lg p-4 mt-4 md:space-x-8 md:flex-row md:mt-0 md:border-0 text-[#7f69a5]">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block py-2 px-3 md:p-0`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hoveredLink === index ? `✨ ${link} ✨` : link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;