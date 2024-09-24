import React, { useState } from 'react'
import termsContent from '../data/termsContent.json' // JSON file import
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface TermSection {
  title: string;
  content: string;
}

const TermsOfUse: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Terms of Use</h1>

      {termsContent.map((section: TermSection, index: number) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
            <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 bg-white transition-all duration-200">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TermsOfUse;