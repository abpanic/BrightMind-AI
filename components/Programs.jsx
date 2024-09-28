"use client";
import React, { useState } from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import pricingPlans from '../data/pricingPlans.json';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Map pricing plans to cards
  const cards = pricingPlans.map((program, index) => (
    <Card key={index} card={{
      category: program.title,
      title: program.title,
      src: `/assets/career${index + 1}.webp`, // Assume career images follow a pattern
      content: (
        <>
          <h3 className="text-lg font-semibold mb-2">Career Titles</h3>
          <ul className="space-y-1">
            {program.careerTitles.map((career, i) => (
              <li key={i} className="text-gray-800">• {career}</li>
            ))}
          </ul>
        </>
      ),
    }} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Career Paths</h1>

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
