import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-[#533549] shadow-md py-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.svg" alt="BrightMind AI Logo" width={120} height={30} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="./programs" className="text-base font-semibold text-[#F6B042] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              Programs            
          </Link>
          <Link href="./whychooseus" className="text-base font-semibold text-[#F6B042] hover:bg-[#533549] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              BrightMind's Industry Edge            
          </Link>
          <Link href="./EnterprisePartnerships"
             className="text-base font-semibold text-[#F6B042] hover:bg-[#533549] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              Industry Collaboration
            
          </Link>
          <Link href="/placement"
             className="text-base font-semibold text-[#F6B042] hover:bg-[#533549] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              Hire from Us
            
          </Link>
          <Link href="/candidateassist"
             className="text-base font-semibold text-[#F6B042] hover:bg-[#533549] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              Candidate Assistance
            
          </Link>
        </div>

        {/* Sign In */}
        <div className="btn btn-primary rounded-full background-color: black">
          <Link href="/sign-in"
             className="text-base text-white hover:text-grey-800 transition-colors duration-200 px-3 py-1 rounded-full font-marmelad">
              Sign In
            
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
