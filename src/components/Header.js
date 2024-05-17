import Link from 'next/link';
import logo from '../app/assets/images/pngegg.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-300 to-white py-4 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src={logo} alt="ToDo App" className="h-10 w-10 mr-2" /> */}
          <div className="flex items-center bg-red-400 p-1 rounded-md shadow-6xl">
            <span className="text-2xl font-bold text-gray-100 mr-2 sm:text-2xl">ToDo</span>
            <span className="text-1xl text-gray-300 sm:text-1xl">App</span>
          </div>
        </div>
        <nav className="hidden sm:block text-red-400">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
