"use client";
import React, { useState, useEffect } from 'react';
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import Link from "next/link";
import { motion } from "framer-motion";

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    // Fetch the pricing plans from a JSON file or a backend API
    import('../data/pricingPlans.json')
      .then((data) => setPricingPlans(data.default))
      .catch((error) => console.error('Failed to load pricing plans:', error));
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  // Map pricing plans to cards
  const cards = pricingPlans.map((program, index) => (
    <motion.div
      key={index}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <img className="w-full h-48 object-cover" src={program.image || "/assets/default-image.webp"} alt={program.title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{program.title}</h3>
        <p className="text-gray-700 text-center mb-4">Price: ₹{program.price.toLocaleString()}/month</p>
        <button
          className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md mx-auto hover:from-pink-500 hover:to-purple-500 transition-colors"
          onClick={() => setSelectedProgram(program)}
        >
          Learn More
        </button>
      </div>
    </motion.div>
  ));

  return (
    <div className="w-full h-full py-10 bg-transparent">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
        Career Paths
      </h1>
      <Carousel items={cards} />
      {selectedProgram && (
        <motion.div
          className="mt-10 p-6 bg-white rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-4">{selectedProgram.title}</h2>
          <p className="text-xl font-semibold text-center mb-4">Price: ₹{selectedProgram.price.toLocaleString()}/month</p>
          <p className="text-gray-800 text-center mb-4">{selectedProgram.intro}</p>
          <p className="text-gray-800 text-center mb-4">If you like: {selectedProgram.ifYouLike}</p>
          <div className="text-center">
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" href={selectedProgram.learnMoreLink}>
              
                Learn More
              
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Programs;
