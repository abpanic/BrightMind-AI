
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaChalkboardTeacher, FaCreditCard, FaCertificate, FaHandsHelping, FaBrain, FaCoins } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      
      {/* Header Section */}
      <div className="flex md:flex-row justify-between items-center py-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-lg p-6 md:p-0">
          <blockquote className="text-4xl font-extrabold italic text-center text-gray-800">
            The{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-pink-500 to-purple-500 relative inline-block transform rotate-1">
              <span className="relative text-white px-2 py-1">BrightMind AI</span>
            </span>Advantage
          </blockquote>
          <p className="text-xl text-gray-700 text-center md:text-left">
            Programs planned by industry professionals from top companies.
          </p>
        </div>
      </div>

      {/* Bento Grid Section */}
      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <BentoGridItem
  title={
    <div className="flex items-center gap-2">
      <FaChalkboardTeacher className="text-4xl text-[#533549]" />
      <h3 className="text-xl font-semibold text-[#533549]">Mentorship by Experts</h3>
    </div>
  }
  description={
    <p className="text-base text-gray-700 mt-2 leading-relaxed">
      <span className="font-bold text-[#533549]">Learn from alumni</span> with proven industry experience at global tech leaders such as <span className="font-bold italic text-[#f66042] ">Microsoft</span> and <span className="font-bold italic text-[#f66042]">Wipro</span>. Our mentors bring <span className="font-semibold">real-world knowledge</span> and <span className="italic">cutting-edge insights</span> directly to you, bridging the gap between theoretical concepts and practical applications. By engaging with <span className="text-[#533549] font-bold">seasoned professionals</span> who have navigated the tech industry's most complex challenges.
    </p>
  }
  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 max-w-full transform hover:scale-105"
  icon={<FaChalkboardTeacher className="hidden" />} // Icon hidden here since it's used in title
/>



        {/* Card 2 */}
        <BentoGridItem
          title="Flexible Payment Options"
          description="Choose between monthly payments or a one-time annual payment with savings."
          icon={<FaCreditCard className="text-4xl text-[#533549]" />}
        />

        {/* Card 3 */}
        <BentoGridItem
          title="Industry Certifications"
          description="Earn certifications recognized by top industry players."
          icon={<FaCertificate className="text-4xl text-[#533549]" />}
        />

        {/* Card 4 */}
        <BentoGridItem
          title="Paid Internships"
          description="Top-performing students get paid internships with housing and food covered."
          icon={<FaHandsHelping className="text-4xl text-[#533549]" />}
        />

        {/* Card 5 */}
        <BentoGridItem
          title="Cutting-Edge Tech"
          description="Learn the latest AI, Cloud, Blockchain, and BareMetal technologies."
          icon={<FaBrain className="text-4xl text-[#533549]" />}
        />

        {/* Card 6 */}
        <BentoGridItem
          title="Multiple Pricing Tiers"
          description="From ₹1K to ₹25K, choose the program that fits your career goals."
          icon={<FaCoins className="text-4xl text-[#533549]" />}
        />

      </BentoGrid>
    </div>
  );
};

export default WhyChooseUs;
