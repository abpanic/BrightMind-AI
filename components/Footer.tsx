import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import TermsOfUse from './terms'

const Footer = () => {
  return (
    <div className='bg-[#533549]'>
      <div className="container mx-auto py-5">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
         
          <div className="flex flex-col gap-4">
            <Image 
              src="/assets/logo.svg" 
              alt="BrightMind AI Logo" 
              width={150} 
              height={50} 
            />
            <p>Empowering minds through AI education to create future leaders in the tech world.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className='text-[#F6B042] text-l font-semibold'>Courses</p>
            <Link href="/" className='text-base font-medium'>Overview</Link>
            <Link href="/"  className='text-base font-medium'>Curriculum</Link>
            <Link href="/"  className='text-base font-medium'>Live Sessions</Link>
            <Link href="/"  className='text-base font-medium'>Workshops</Link>
            <Link href="/pricing"  className='text-base font-medium'>Pricing</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className='text-[#F6B042] text-xl font-semibold'>About</p>
            <Link href="/"  className='text-base font-medium'>Our Story</Link>
            <Link href="/"  className='text-base font-medium'>Careers</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className='text-[#F6B042] text-xl font-semibold'>Support</p>
            <Link href="./terms.tsx"  className='text-base font-medium'>Terms</Link>
            <Link href="/privacy"  className='text-base font-medium'>Privacy</Link>
            <Link href="/cookies"  className='text-base font-medium'>Cookies</Link>
            <Link href="/contact"  className='text-base font-medium'>Contact</Link>
          </div>
        </div> 
        <div className="flex justify-between items-center pt-20 pb-5">
          <p className='text-[#F6B042] text-base'>© 2024 BrightMind AI. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook className='text-[#F6B042] hover:text-purple-500' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BsInstagram className='text-[#F6B042] hover:text-purple-500' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <BsTwitter className='text-[#F6B042] hover:text-purple-500' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BsLinkedin className='text-[#F6B042] hover:text-purple-500' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
