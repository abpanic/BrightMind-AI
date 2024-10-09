import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center bg-gray-50 py-10'>
      
      <Image 
        className='' 
        src="/assets/logo.svg" 
        alt="Bright-Mind AI Logo" 
        width={150} 
        height={50} 
      />
      
      <p className='text-3xl font-semibold text-center'>
        &quot;Bright-Mind AI transformed my career. The hands-on projects and personalized mentoring 
        prepared me for the AI industry. Highly recommend to anyone looking to upskill!&quot;
      </p>
      
      <Image 
        src="/assets/person.svg" 
        alt="Jacob Jonas" 
        width={100} 
        height={100} 
        className='my-6' 
      />
      
      <p className='text-lg font-medium'>Jacob Jonas</p>
      <p className='text-base text-grey-400 font-medium'>
        AI Engineer, United International University
      </p>
      
      {/* Additional testimonials can be added here */}
      {/* 
      <div className='mt-10'>
        <p className='text-3xl font-semibold text-center'>
          "The live weekend sessions were game-changers. I never felt lost, and the portfolio projects 
          helped me land my first AI job!"
        </p>
        <Image src="/assets/person2.svg" alt="Sara Smith" width={100} height={100} className='my-6' />
        <p className='text-lg font-medium'>Sara Smith</p>
        <p className='text-base text-grey-400 font-medium'>Data Scientist, Tech Innovators Inc.</p>
      </div>
      */}
      
    </div>
  )
}

export default Testimonials
