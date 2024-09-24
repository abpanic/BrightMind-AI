import React from "react";
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-7xl capitalize font-semibold">
          Why Choose{" "}
            <span className="text-purple-500 pl-2 capitalize">BrightMind AI?</span>{" "}
          </p>
          <div className="flex gap-4">
            <button className="btn bg-purple-500 border-none capitalize btn-lg">
              Get Started
            </button>
            <button className="btn bg-purple-100 text-purple-500 border-none capitalize btn-lg">
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
              <p>Internship Opportunities</p>
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

export default WhyChooseUs;