import React from "react";

const Hero = () => {
  
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col justify-between items-center">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white text-center">
          Upskill in AI & Data Science with Personal Mentorship
        </h1>
        
        
        {/* Subheading */}
        <p className="text-2xl font-semibold text-[#f66042] text-center">
            🚀 Industry Projects  👨‍🏫 1:1 Expert Guidance  🎓 Career Advancement
        </p>

        
        {/* Key Features */}
        <p className="text-lg text-gray-200 text-center mt-4">
          Unlock your potential with personalized mentorship, industry projects, and interview assistance designed to help you excel in the AI & Data Science fields.
        </p>

        {/* Call-to-Action */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="btn bg-[#F6B042] text-[#533549] hover:bg-[#ffc275] capitalize px-6 py-3 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-8 items-center pt-6">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#F6B042]">1:1 Mentorship</p>
            <p className="text-sm text-gray-300">With AI Experts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#F6B042]">200+ Hrs</p>
            <p className="text-sm text-gray-300">Comprehensive Learning</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#F6B042]">10+</p>
            <p className="text-sm text-gray-300">Real-World Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#F6B042]">100%</p>
            <p className="text-sm text-gray-300">Placement Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
