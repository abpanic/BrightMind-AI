import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is BrightMind AI?",
      answer: "BrightMind AI is a company that provides machine learning and AI solutions tailored to businesses' needs.",
    },
    {
      question: "How do I sign up for your services?",
      answer: "You can sign up for our services by visiting our Contact Us page and submitting your request.",
    },
    {
      question: "Do you offer AI/ML coaching?",
      answer: "Yes, we offer coaching in AI/ML through various programs. You can learn more about the different pricing tiers on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods including credit/debit cards, net banking, and UPI.",
    },
    {
      question: "Can I get a free trial before enrolling?",
      answer: "Yes, we offer a free month trial where students can participate in live weekend sessions and access our content for free.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-transparent0 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-10">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-700 p-4 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-gray-50 rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
