import React, { useState } from 'react';
import pricingPlans from '../data/pricingPlans.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from 'next/image';

interface ProgramFeatures {
  dataAnalytics: boolean;
  pythonAndStatistics: boolean;
  dataVisualization: boolean;
  projects: string;
  machineLearning: string;
  dataStructuresAlgorithms: boolean;
  cloudComputing: boolean;
  deepLearning: boolean;
  naturalLanguageProcessing: boolean;
  computerVision: boolean;
  softwareEngineering: string;
  paidInternship: boolean;
  certificate: boolean;
}

interface ProgramDetails {
  title: string;
  price: number;
  features: ProgramFeatures;
  careerTitles: string[];
}

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetails | null>(null);

  const handleCarouselClick = (programIndex: number) => {
    setSelectedProgram(pricingPlans[programIndex]);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Career Paths</h1>

      {/* Carousel for Career Titles */}
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        showIndicators={true}
        
        onClickItem={handleCarouselClick}
      >
        {pricingPlans.map((program: ProgramDetails, index) => (
          <div key={index} className="card card-compact w-96 bg-base-100 shadow-l mx-auto">
            <figure>
              {/* Add an image here */}
              <Image 
                src={`/assets/career${index + 1}.webp`} // Assumes you have career images named career1.jpg, career2.jpg, etc.
                alt={program.title}
                width={500}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base font-semibold justify-center">{program.title}</h2>
              <ul className="space-y-1">
                {program.careerTitles.map((career, i) => (
                  <li key={i} className="text-gray-800 align-middle">• {career}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Program Details Section */}
      {selectedProgram && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-4">{selectedProgram.title}</h2>
          <p className="text-xl font-semibold text-center mb-4">₹{selectedProgram.price.toLocaleString()}/month</p>

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
                  const formattedFeature = `${featureKey.replace(/([A-Z])/g, ' $1')}`; // Converts camelCase to space-separated words
                  return (
                    <li key={i} className="text-gray-800">
                      <strong>{formattedFeature}:</strong> {typeof featureValue === 'boolean' ? (featureValue ? 'Yes' : 'No') : featureValue}
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
