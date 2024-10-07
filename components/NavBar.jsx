import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
        <li>
            <Link href="/" className="bg-[#533549]-800 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
            🏠              
            </Link>
          </li>
          <li>
            <Link href="/programs" className="bg-[#533549]-800 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                Programs              
            </Link>
          </li>
          <li>
            <Link href="/brightmindedge" className="bg-[#533549]-800 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                BrightMind Edge              
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="bg-[#533549]-800 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                Contact Us              
            </Link>
          </li>
          <li>
            {/*<Link href="/FAQ" className="bg-[#533549]-800 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold">
                FAQ              
            </Link>*/}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
