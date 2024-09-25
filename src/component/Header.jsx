function Header() {
    return (
      <header className="bg-white border-b border-gray-200 p-4">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-black">
            Katy Diaz
          </a>
          
          {/* Menu Items */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-black hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">About me</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">Studies</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  