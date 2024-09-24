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
          <Link href="./Programs.tsx" className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Programs            
          </Link>
          <Link href="./WhyChooseUs.tsx" className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              BrightMind's Industry Edge            
          </Link>
          <Link href="./EnterprisePartnerships.tsx"
             className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Industry Collboration
            
          </Link>
          {/*<Link href="/pricing"
             className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Pricing
            
          </Link>*/}
          <Link href="/placement"
             className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Hire from Us
            
          </Link>
          <Link href="/candidateassist"
             className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Candidate Assistance
            
          </Link>
        </div>

        {/* Sign In */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in"
             className="text-base font-medium text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Sign In
            
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
