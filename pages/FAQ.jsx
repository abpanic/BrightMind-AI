import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      "question": "What is BrightMind AI?",
      "answer": "Out of Victoria, Australia. BrightMind AI is a company that educates young minds and bridges the divide between education and employability. We not only help learners acquire new skills but work on ensuring the skills are imparted from industry experts associated with the best companies in the field."
    },
    {
      "question": "How do I sign up for your Programs?",
      "answer": "You can sign up for our services by visiting our Contact Us page and submitting your request."
    },
    {
      "question": "Does BrightMind provide placement?",
      "answer": "BrightMind provides placement services and career support. Our Programs have interview sessions for each module along with industry projects from partnering companies or from available information on business problems, so you can land a dream job in any company with confidence. We also offer internship opportunities for students clearing with Honors."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept a variety of payment methods including credit/debit cards, net banking, and UPI."
    },
    {
      "question": "Can I get a free trial before enrolling?",
      "answer": "Yes, we offer a trial where students can participate in live weekend sessions and access our content for free."
    },
    {
      "question": "Do I receive a certificate upon completion of the program?",
      "answer": "Yes, upon successful completion of the program, you will receive a certificate recognized by industry experts. We also provide a badge for each module you complete, which you can showcase on your resume or LinkedIn profile."
    },
    {
      "question": "How are badges awarded for completed modules?",
      "answer": "For each module you complete, you'll earn a digital badge that reflects your mastery of that specific skill. These badges are a great way to highlight your progress and can be shared on professional platforms like LinkedIn."
    },
    {
      "question": "Can I upgrade to a higher-tier program after enrolling?",
      "answer": "Yes, you can upgrade to a higher-tier program at any time. If you're interested in more advanced modules or additional features like 1:1 mentorship or exclusive projects, our support team will assist you in upgrading your plan."
    },
    {
      "question": "What kind of projects will I work on during the program?",
      "answer": "You'll work on real-world industry projects, either from partnering companies or case studies from actual business problems. These projects are designed to help you build a strong portfolio to showcase to potential employers."
    },
    {
      "question": "Are the courses self-paced, or do they follow a specific schedule?",
      "answer": "Our courses offer a mix of self-paced learning and scheduled live sessions. You can follow the curriculum at your own pace, while also participating in live weekend sessions to interact with mentors and fellow learners."
    },
    {
      "question": "How does the mentorship work?",
      "answer": "We offer 1:1 mentorship with industry experts throughout the program. You can schedule regular sessions with your mentor to receive personalized guidance on your projects and career development."
    },
    {
      "question": "Can I get assistance with job placements after completing the program?",
      "answer": "Absolutely! Our career services team will assist you with resume building, interview preparation, and connecting you with job opportunities through our network of partners. We are committed to helping you land your dream job."
    },
    {
      "question": "What is the typical duration to complete a program?",
      "answer": "The duration depends on the program you choose. Most programs can be completed in 3-6 months, depending on whether you follow a part-time or full-time schedule. You can also take longer if needed, as the course content will be available to you for an extended period."
    },
    {
      "question": "Can I access the content after completing the program?",
      "answer": "Yes, you will have lifetime access to the course materials and any updates we make to the content. This ensures you can revisit the material whenever you need a refresher."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-transparent p-8">
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
