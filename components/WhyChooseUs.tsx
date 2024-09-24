import React from "react";
import Image from 'next/image';
import { FaChalkboardTeacher, FaCreditCard, FaCertificate, FaHandsHelping, FaBrain, FaCoins } from "react-icons/fa"; // Importing icons

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold capitalize">
            Why Choose{" "}
            <span className="text-[#533549] pl-1">BrightMind AI?</span>
          </h1>
          <p className="text-lg text-gray-600">
            Empower yourself with cutting-edge AI technologies, industry-recognized certifications, and real-world experience at BrightMind AI.
          </p>

        </div>

        {/* Hero Image */}
        <div className="pt-10 md:pt-0">
          <Image 
            src="/assets/hero.png" 
            alt="BrightMind AI Hero" 
            width={500} 
            height={500} 
            layout="intrinsic" 
            priority
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full space-x-4 carousel-center bg-gray-100 p-4 rounded-box">
        
        {/* Card 1 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaChalkboardTeacher className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Mentorship by Experts</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Learn from alumni of Microsoft and Wipro with proven industry experience.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Flexible Payment Options</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Choose between monthly payments or a one-time annual payment with savings.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaCertificate className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Industry Certifications</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Earn certifications recognized by top industry players.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaHandsHelping className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Paid Internships</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Top-performing students get paid internships with housing and food covered.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaBrain className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Cutting-Edge Tech</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Learn the latest AI, Cloud, Blockchain, and BareMetal technologies.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="carousel-item">
          <div className="card w-80 bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaCoins className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Multiple Pricing Tiers</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              From ₹1K to ₹25K, choose the program that fits your career goals.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
