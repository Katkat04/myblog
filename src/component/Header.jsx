import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-[#181d20] p-4">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white hover:text-[#7f69a5]">
        <FontAwesomeIcon icon={faBug}/> Katy Diaz
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-[#7f69a5]">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#7f69a5]">Skills</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#7f69a5]">Projects</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#7f69a5]">Education</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#7f69a5]">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
