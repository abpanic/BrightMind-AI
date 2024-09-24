import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-white shadow-md py-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.svg" alt="BrightMind AI Logo" width={120} height={40} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/programs" className="text-base font-medium text-gray-800 hover:bg-purple-500 hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg">
              Programs            
          </Link>
          <Link href="/enterprise"
             className="text-base font-medium text-gray-800 hover:bg-purple-500 hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg">
              Enterprise
            
          </Link>
          <Link href="/pricing"
             className="text-base font-medium text-gray-800 hover:bg-purple-500 hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg">
              Pricing
            
          </Link>
        </div>

        {/* Sign In */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in"
             className="text-base font-medium text-gray-800 hover:bg-purple-500 hover:text-white transition-colors duration-200 px-3 py-1 rounded-lg">
              Sign In
            
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
