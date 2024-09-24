import React from "react";
import Image from 'next/image';
import { FaChalkboardTeacher, FaCreditCard, FaCertificate, FaHandsHelping, FaBrain, FaCoins } from "react-icons/fa"; // Importing icons

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-lg p-6 md:p-0">
    <blockquote className="text-4xl font-extrabold italic text-center text-gray-800">
      Why Choose{" "}
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-pink-500 to-purple-500 relative inline-block transform rotate-1">
        <span className="relative text-white px-2 py-1">BrightMind AI</span>
      </span>?
    </blockquote>
    <p className="text-xl text-gray-700 text-center md:text-left">
      Our expert services tailored to boost your career goals in AI and Data Science.
    </p>
  </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full p-4 rounded-box carousel-center">
        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaChalkboardTeacher className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Mentorship by Experts</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Learn from alumni of Microsoft and Wipro with proven industry experience.
            </p>
          </div>
        </div>

        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Flexible Payment Options</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Choose between monthly payments or a one-time annual payment with savings.
            </p>
          </div>
        </div>

        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaCertificate className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Industry Certifications</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Earn certifications recognized by top industry players.
            </p>
          </div>
        </div>

        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaHandsHelping className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Paid Internships</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Top-performing students get paid internships with housing and food covered.
            </p>
          </div>
        </div>

        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
            <div className="flex items-center gap-4">
              <FaBrain className="text-4xl text-[#533549]" />
              <h3 className="text-2xl font-bold">Cutting-Edge Tech</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Learn the latest AI, Cloud, Blockchain, and BareMetal technologies.
            </p>
          </div>
        </div>

        <div className="carousel-item w-80">
          <div className="card bg-white shadow-lg mx-4 p-6 rounded-md">
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
