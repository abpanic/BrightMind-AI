import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="block">
            <Image
              src="/assets/logo.svg"
              alt="Bright-Mind AI Logo"
              width={120} // Set the width of the logo
              height={40} // Set the height of the logo
              className="transparent" // Optional styling for transparency
            />
          
        </Link>
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden block text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Navbar Links */}
        <ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link href="/" className="text-white px-4 py-2 rounded-full hover:bg-gradient-to-br from-violet-300 via-green-300 to-red-300 hover:bg-gray-600 font-semibold">
                🏠 Home
              
            </Link>
          </li>
          <li>
            <Link href="/programs" className="text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                Programs
              
            </Link>
          </li>
          <li>
            <Link href="/brightmindedge" className=" text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                Bright-Mind Edge
              
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                Contact Us
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
