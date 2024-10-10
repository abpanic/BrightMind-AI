"use client";
import React, { useState, useEffect } from 'react';
import { Carousel } from "../components/ui/apple-cards-carousel";
import Modal from 'react-modal';
import { motion } from "framer-motion";
import Link from "next/link"; 

Modal.setAppElement('#__next'); // Use the root element of your application

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    import('../data/pricingPlans.json')
      .then((data) => setPricingPlans(data.default))
      .catch((error) => console.error('Failed to load pricing plans:', error));
  }, []);

  const openModal = (program) => {
    setSelectedProgram(program);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const cards = pricingPlans.map((program, index) => (
    <motion.div
      key={index}
      className="max-w-sm w-[300px] h-[450px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      initial="hidden"
      animate="visible"
    >
      <img className="w-full h-48 object-cover" src={program.image || "/assets/default-image.webp"} alt={program.title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">{program.title}</h2>
        <div className="text-gray-700 text-center mb-4 font-semibold">
          <p>Plan your Career for:</p>
          <ul className="text-gray-700 text-center list-none font-normal">
            {program.careerTitles.map((title, index) => (
              <li key={index}>• {title}</li>
            ))}
          </ul>
        </div>

        <button
          className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md mx-auto hover:from-pink-500 hover:to-purple-500 transition-colors"
          onClick={() => openModal(program)}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Program Details"
        className="bg-white rounded-lg p-6 mx-auto my-5 max-w-lg shadow-lg"
      >
        {selectedProgram && (
          <>
            <h2 className="text-2xl font-bold text-center">{selectedProgram.title}</h2>
            <p className="text-xl text-center">
  Price: ₹{(selectedProgram.price * 10).toLocaleString()} or ₹{selectedProgram.price.toLocaleString()}/month</p>
            <span className="flash text-center">🪔Price till Diwali!!</span>
            <p className="text-gray-800 text-center">{selectedProgram.intro}</p>
            <p className="text-gray-800 text-center">{selectedProgram.ifYouLike}</p>
            <div className="flex justify-end space-x-4 mt-4">
            <Link href={selectedProgram.learnMoreLink}
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                  Know More                
              </Link>
              <Link href="/ContactUs"
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                  Enroll Now                
              </Link>
              <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Programs;
