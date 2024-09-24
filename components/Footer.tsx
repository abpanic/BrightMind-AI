import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#101828]'>
      <div className="container mx-auto py-10">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-white">
          <div className="flex flex-col gap-4">
            <Image 
              src="/assets/logo_light.svg" 
              alt="BrightMind AI Logo" 
              width={150} 
              height={50} 
            />
            <p>Empowering minds through AI education to create future leaders in the tech world.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-gray-500 text-xl font-semibold'>Courses</p>
            <p className='text-lg font-medium'>Overview</p>
            <p className='text-lg font-medium'>Curriculum</p>
            <p className='text-lg font-medium'>Live Sessions</p>
            <p className='text-lg font-medium'>Workshops</p>
            <p className='text-lg font-medium'>Pricing</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-gray-500 text-xl font-semibold'>About</p>
            <p className='text-lg font-medium'>Our Story</p>
            <p className='text-lg font-medium'>Careers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-gray-500 text-xl font-semibold'>Connect</p>
            <p className='text-lg font-medium'>Facebook</p>
            <p className='text-lg font-medium'>YouTube</p>
            <p className='text-lg font-medium'>Twitter</p>
            <p className='text-lg font-medium'>LinkedIn</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-gray-500 text-xl font-semibold'>Support</p>
            <p className='text-lg font-medium'>Terms</p>
            <p className='text-lg font-medium'>Privacy</p>
            <p className='text-lg font-medium'>Cookies</p>
            <p className='text-lg font-medium'>Contact</p>
          </div>
        </div> 
        <div className="flex justify-between items-center pt-20 pb-5">
          <p className='text-gray-500'>© 2024 BrightMind AI. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <BsFacebook className='text-gray-500 hover:text-purple-500' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BsInstagram className='text-gray-500 hover:text-purple-500' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <BsTwitter className='text-gray-500 hover:text-purple-500' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BsLinkedin className='text-gray-500 hover:text-purple-500' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
