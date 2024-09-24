import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-7xl capitalize font-semibold">
            Master Artificial Intelligence to{" "}
            <span className="text-purple-500 pl-2 capitalize">Advance</span>{" "}
            your <br />
            <span className="text-purple-500 pl-2 capitalize">Career</span>
          </p>
          <p className="text-lg text-gray-600">
            Unlock your potential with industry projects, live mentorship, interview assistance and
            market ready skill development learning designed to help you excel in Emerging Technology
          </p>
          <div className="flex gap-4">
            <button className="btn bg-[#533549] text-[#F6B042] hover:bg-[#6a4961] capitalize px-6 py-3 rounded-md">
              Get Started
            </button>
            <button className="btn bg-[#F6B042] text-[#533549] hover:bg-[#ffc275] capitalize px-6 py-3 rounded-md">
              Get Free Trial
            </button>
          </div>
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
              <Image src="/assets/think.svg" alt="Projects" width={24} height={24} />
              <p>Real-World Projects</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/assets/public.svg" alt="Mentorship" width={24} height={24} />
              <p>Live Mentorship</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/assets/career.svg" alt="Career" width={24} height={24} />
              <p>Career Focused</p>
            </div>
          </div>
        </div>

        <Image 
          src="/assets/hero.png" 
          alt="BrightMind AI Hero" 
          width={500} 
          height={500} 
          layout="intrinsic" 
        />
      </div>
      <Image 
        src="/assets/company.svg" 
        alt="Partner Companies" 
        width={800} 
        height={200} 
        layout="intrinsic" 
      />
    </div>
  );
};

export default Hero;
