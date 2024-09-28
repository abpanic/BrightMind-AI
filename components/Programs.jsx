"use client";
import React, { useState } from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import pricingPlans from '../data/pricingPlans.json';
import Link from "next/link"; 

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Map pricing plans to cards
  const cards = pricingPlans.map((program, index) => (
    <Card 
      key={index} 
      card={{
        category: program.title,
        title: program.title,
        content: (
          <>
            {/* Program Details */}
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                {program.title}
              </h3>
              <ul className="space-y-1 mb-4">
                {program.careerTitles.map((career, i) => (
                  <li key={i} className="text-gray-800">• {career}</li>
                ))}
              </ul>

              {/* Price Section */}
              <p className="text-xl font-semibold text-gray-700 text-center mb-4">
                Price: ₹{program.price.toLocaleString()}/month
              </p>

              {/* Enroll Now Button */}
              <div className="flex justify-center">
                <Link href="/ContactUs">
                  <button className="bg-[#533549] text-white px-4 py-2 rounded-md hover:bg-purple-700">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </>
        ),
      }} 
      index={index} 
    />
  ));

  return (
    <div className="w-full h-full py-10">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
        Career Paths
      </h1>

      {/* Carousel for Career Titles */}
      <Carousel items={cards} />

      {/* Program Details Section */}
      {selectedProgram && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            {selectedProgram.title}
          </h2>
          <p className="text-xl font-semibold text-center mb-4">
            ₹{selectedProgram.price.toLocaleString()}/month
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-2">Career Titles</h3>
              <ul className="space-y-1">
                {selectedProgram.careerTitles.map((career, i) => (
                  <li key={i} className="text-gray-800">• {career}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="space-y-1">
                {Object.entries(selectedProgram.features).map(([featureKey, featureValue], i) => {
                  const formattedFeature = `${featureKey.replace(/([A-Z])/g, " $1")}`;
                  return (
                    <li key={i} className="text-gray-800">
                      <strong>{formattedFeature}:</strong> {typeof featureValue === "boolean" ? (featureValue ? "Yes" : "No") : featureValue}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
