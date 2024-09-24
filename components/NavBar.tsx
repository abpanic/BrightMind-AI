import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-white shadow-md py-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.svg" alt="BrightMind AI Logo" width={120} height={30} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="./Programs.tsx" className="text-base font-semibold  text-grey-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg">
              Programs            
          </Link>
          <Link href="./WhyChooseUs.tsx" className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              BrightMind's Industry Edge            
          </Link>
          <Link href="./EnterprisePartnerships.tsx"
             className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              Industry Collboration
            
          </Link>
          {/*<Link href="/pricing"
             className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              Pricing
            
          </Link>*/}
          <Link href="/placement"
             className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              Hire from Us
            
          </Link>
          <Link href="/candidateassist"
             className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              Candidate Assistance
            
          </Link>
        </div>

        {/* Sign In */}
        <div className="btn btn-active btn-accent">
          <Link href="/sign-in"
             className="text-base font-semibold   text-gray-800 hover:bg-[#533549] hover:text-[#F6B042] transition-colors duration-200 px-3 py-1 rounded-lg font-marmelad">
              Sign In
            
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
