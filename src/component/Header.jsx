import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveLink(index);
    setIsMenuOpen(false); // Cerrar el menú al hacer clic
    setTimeout(() => setActiveLink(null), 500);
  };

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Cambia el estado del menú
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FontAwesomeIcon icon={faBug} className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Katy Diaz</span>
        </a>
        
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen} // Añadir atributo aria para accesibilidad
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:mx-0"> {/* Agregado md:mx-4 */}
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`} // Cambiar href para enlazar a las secciones
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white md:p-0 ${activeLink === index ? 'bg-blue-700 text-white rounded md:bg-transparent md:text-blue-700' : ''}`}
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

        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse"> {/* Right aligned button */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

