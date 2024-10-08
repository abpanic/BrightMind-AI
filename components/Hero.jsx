import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import Image from 'next/image'; // For image handling
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const JobCarousel = () => {
  const jobData = [
    {
      title: "Data Scientist- Gen AI",
      salary: "₹40L - ₹60L",
      company: "HDFC Bank",
      image: "/assets/career1.jpg",
    },
    {
      title: "Data Scientist",
      salary: "₹15L - ₹25L",
      company: "TelUS International",
      image: "/assets/career2.jpg",
    },
    {
      title: "Data Scientist",
      salary: "₹18L - ₹35L",
      company: "Royal Cyber",
      image: "/assets/career3.jpg",
    },
    {
      title: "AI Engineer",
      salary: "₹37L - ₹60L",
      company: "Jetty Consulting Services",
      image: "/assets/career4.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Hero Heading */}
      <div className="text-center mb-8">
        
      <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Unlock{" "}
          <RoughNotation type="highlight" show={true} color="#4a148c">
            High-Paying
          </RoughNotation>{" "}
          AI Careers with Industry-Backed Skills
        </h1>
        <p className="text-sm text-gray-300 mt-2">
          <small>Below are from Naukri.com posted on September</small>
        </p>
      </div>

      {/* Card Carousel */}
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        showIndicators={true}
      >
        {jobData.map((job, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center mx-auto max-w-md">
            <figure>
              <Image 
                src={job.image}
                alt={job.title}
                width={600}
                height={300}
                className="rounded-md object-cover"
              />
            </figure>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-lg text-red-800 font-bold">{job.salary}</p>
              <p className="text-indigo-800 font-semibold">{job.company}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Subheading */}
      <p className="text-2xl font-semibold text-[#f66042] text-center mt-8">
        🚀 Industry Projects  👨‍🏫 1:1 Expert Guidance  🎓 Career Advancement
      </p>

      {/* Key Features */}
      <p className="text-lg text-gray-200 text-center mt-4">
        Unlock your potential with personalized mentorship, industry projects, and interview assistance designed to help you excel in Deep Technology fields.
      </p>

      {/* Call-to-Action */}
      <div className="flex justify-center gap-4 mt-6">
      <Link href="/ContactUs" passHref>
        <button className="bg-[#533549] text-[#F6B042] hover:bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 hover:bg-gray-600 font-semibold] px-6 py-3 rounded-md font-semibold">
          Enroll Now
        </button>
        </Link>
      </div>

      {/* Features */}
      <div className="flex justify-center gap-8 items-center pt-6">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#F6B042]">1:1 Mentorship</p>
          <p className="text-sm text-white font-semibold">With Technology Experts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#F6B042]">5+</p>
          <p className="text-sm text-white font-semibold">Technical Interviews</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#F6B042]">43+</p>
          <p className="text-sm text-white font-semibold">Industry Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#F6B042]">100%</p>
          <p className="text-sm text-white font-semibold">Placement Assistance</p>
        </div>
      </div>
    </div>
  );
};

export default JobCarousel;
