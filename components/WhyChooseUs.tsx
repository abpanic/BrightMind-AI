
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
  title={
    <div className="flex items-center gap-2">
      <FaCreditCard className="text-4xl text-[#533549]" />
      <h3 className="text-xl font-semibold text-[#533549]">Flexible Payment Options</h3>
    </div>
  }
  description={
    <p className="text-base text-gray-700 mt-2 leading-relaxed">
      Choose between <span className="font-bold text-[#f66042]">monthly</span> or a save with <span className="font-bold text-[#f66042]">one-time annual payment</span>. Pricing models designed to be accessible for everyone, no matter your financial situation.
      <br />
      Programs priced and planned so that they have a proven market value of <span className="font-bold text-[#533549]">10 times</span> the program fee, making this an investment that pays off quickly in your career.
    </p>
  }
  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 max-w-full transform hover:scale-105"
  icon={<FaCreditCard className="hidden" />} // Icon hidden here since it's used in title
/>


        {/* Card 3 */}
        <BentoGridItem
  title={
    <div className="flex items-center gap-2">
      <FaCertificate className="text-4xl text-[#533549]" />
      <h3 className="text-xl font-semibold text-[#533549]">Industry Certifications</h3>
    </div>
  }
  description={
    <p className="text-base text-gray-700 mt-2 leading-relaxed">
      Earn <span className="font-bold text-[#533549]">certifications</span> and skills that are recognized by top companies. You complete with portfolio of industry projects<span className="italic text-[#f66042]">practical, hands-on experience</span> through industry scenarios.
      <br />
      <span className="font-bold text-[#f66042]">Hands-on industry projects</span> allow you to apply your knowledge in solving real-world problems, ensuring you're prepared for the demands of the tech industry.
    </p>
  }
  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 max-w-full transform hover:scale-105"
/>



        {/* Card 4 */}
        <BentoGridItem
  title={
    <div className="flex items-center gap-2">
      <FaHandsHelping className="text-4xl text-[#533549]" />
      <h3 className="text-xl font-semibold text-[#533549]">Paid Internships</h3>
    </div>
  }
  description={
    <p className="text-base text-gray-700 mt-2 leading-relaxed">
      Top-performing students will have the opportunity to participate in <span className="font-bold text-[#f66042]">paid internships</span>, offering hands-on experience in industrial projects.
      <br />
      These internships go beyond classroom learning, providing practical exposure in a professional environment. The program covers <span className="font-bold text-[#533549]">housing and food</span> for the duration of the internship, making it an immersive learning experience.
      
    </p>
  }
  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 max-w-full transform hover:scale-105"
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
