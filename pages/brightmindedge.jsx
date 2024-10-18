import React from "react";
import {
  FaChalkboardTeacher,
  FaCreditCard,
  FaUserTie,
  FaCertificate,
  FaGlobe,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaLinkedin,
  FaCommentDots
} from "react-icons/fa";
import Image from "next/image";

export default function BrightMindEdge() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
          Your Competitive Advantage
        </h1>

        {/* Grid Layout */}
        <div className="grid gap-8 mt-10 lg:grid-cols-3 lg:grid-rows-1 sm:mt-16">
          
          {/* Be Industry Ready */}
          <div className="flex flex-col p-8 bg-gradient-to-r from-white via-purple-50 to-purple-50 rounded-lg shadow-xl">
            <div className="flex items-center mb-6">
              <FaChalkboardTeacher className="text-indigo-600 text-4xl mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Be Industry Ready</h3>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our goal is not just to teach you the theory but to ensure you’re{" "}
              <span className="underline text-indigo-600 font-semibold">
                fully prepared for real-world industry challenges
              </span>. That’s why we focus on{" "}
              <span className="underline text-red-600 font-semibold">
                technical interviews
              </span>, modeled after those used by leading companies in the AI and tech space. 
              No more quizzes like in college—our Career Path is designed to simulate the actual hiring process, preparing you to stand out in competitive job markets.
            </p>

            <p className="mt-6 text-gray-600">
              To further enhance your career readiness, we offer personalized support, including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {/* Resume Review */}
              <div className="flex items-start">
                <FaFileAlt className="text-purple-600 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Resume Review</h4>
                  <p className="text-gray-600">
                    Tailored feedback to optimize your resume for your target job market.
                  </p>
                </div>
              </div>

              {/* Cover Letter Guidance */}
              <div className="flex items-start">
                <FaEnvelopeOpenText className="text-purple-600 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Cover Letter Guidance</h4>
                  <p className="text-gray-600">
                    Craft compelling cover letters that make you stand out to potential employers.
                  </p>
                </div>
              </div>

              {/* LinkedIn Review */}
              <div className="flex items-start">
                <FaLinkedin className="text-purple-600 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">LinkedIn Review</h4>
                  <p className="text-gray-600">
                    Optimize your LinkedIn profile to capture the attention of recruiters.
                  </p>
                </div>
              </div>

              {/* Follow-Up Strategies */}
              <div className="flex items-start">
                <FaCommentDots className="text-purple-600 text-3xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Follow-Up Strategies</h4>
                  <p className="text-gray-600">
                    Learn how to stay on top of the hiring process with professional follow-up emails and communication.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-600">
              These exclusive services are available to candidates who{" "}
              <span className="underline text-teal-600 font-semibold">
                commit to and complete the entire career path
              </span>, ensuring that you not only gain technical expertise but are also fully prepared to navigate the job search process with confidence.
            </p>
          </div>

          {/* Prestigious Alumni */}
          <div className="lg:col-span-2 flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col p-8 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <FaGlobe className="text-indigo-600 text-4xl mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Learn from Top Global Alumni</h3>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Our expert instructors are alumni of some of the most prestigious universities in the world, bringing with them unmatched knowledge and skills honed through their education and experience at these renowned institutions.
              </p>

              <div className="mt-6">
                {/* Deakin University */}
                <div className="mb-6">
                  <p className="text-gray-600 text-lg">
                    <span className="font-bold text-purple-600 underline">
                      Deakin University
                    </span>, one of the top universities in Australia, is globally recognized for its cutting-edge research in AI and technology. Our alumni trained at Deakin bring that world-class knowledge into every lesson, ensuring you’re learning from the very best.
                  </p>
                </div>

                {/* IIT Alumni */}
                <div className="mb-6">
                  <p className="text-gray-600 text-lg">
                    <span className="font-bold text-orange-600 underline">
                      IIT alumni
                    </span> bring their unparalleled expertise from India’s premier technology institutions, known for producing some of the brightest minds in engineering and data science. Their experience in both academia and industry provides you with a unique, practical learning experience.
                  </p>
                </div>

                {/* Texas McCombs */}
                <div className="mb-6">
                  <p className="text-gray-600 text-lg">
                    Trained at{" "}
                    <span className="font-bold text-blue-600 underline">
                      Texas McCombs
                    </span>, one of the leading business schools in the U.S., our alumni have a strong foundation in data-driven decision-making and AI applications in business. This provides you with a strategic edge, blending technical expertise with business insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Flexible Payments */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-purple-20 via-white to-purple-70 rounded-lg shadow-lg">
              <FaCreditCard className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Pocket-Friendly Payment Options</h3>
              <p className="mt-2 text-gray-600">
                Our goal is to make learning accessible for everyone. While annual plans can be a great value and are reasonably priced, we understand they might feel unaffordable upfront. That’s why we offer <span className="font-bold">affordable monthly payment plans</span> that help break down the cost, ensuring you can focus on gaining the skills you need without the financial strain.
              </p>
              <p className="mt-2 text-gray-600">
                Plus, for honors students in select Career Paths, we help achieve <span className="font-bold">internship opportunities</span>, providing real-world experience and helping you make the most of your education.
              </p>
            </div>

            {/* Industry-Focused Skill Development */}
            <div className="flex flex-col p-4 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-lg shadow-lg">
              <FaUserTie className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Industry-Focused Skill Development</h3>
              <p className="mt-2 text-gray-600">
                Our Career Paths are crafted to equip you with the{" "}
                <span className="font-bold">skills that are in high demand</span>{" "}
                across industries. Whether you aspire to become a{" "}
                <span className="font-bold text-yellow-600">software engineer</span>,{" "}
                <span className="font-bold text-green-600">data engineer</span>,{" "}
                <span className="font-bold text-blue-600">data analyst</span>, or specialize in{" "}
                <span className="font-bold text-red-600">machine learning</span>,{" "}
                <span className="font-bold text-purple-600">Gen AI</span>,{" "}
                cloud computing, or{" "}
                <span className="font-bold text-blue-600">blockchain</span>, we prepare you to{" "}
                <span className="font-bold">hit the ground running</span> and{" "}
                <span className="font-bold">create value from Day 1</span>.
              </p>
              <p className="mt-4 text-gray-600">
                We focus on{" "}
                <span className="font-bold">real-world, practical training</span>{" "}
                that ensures you're not just job-ready but{" "}
                <span className="font-bold">industry-ready</span>, enabling you to
                contribute immediately to your organization's success.
              </p>
            </div>
          </div>

          {/* Certificate Section */}
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-indigo-600 text-4xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Industry-Recognized Certificates</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Upon completion, you will receive verifiable certificates recognized by top industries.
                You can easily add them to your LinkedIn profile. Each certificate comes with a{" "}
                <span className="font-bold">unique ID</span> for verification, ensuring your accomplishments are easily recognized.
              </p>
              <p className="mt-2 text-gray-600">
                These certificates showcase your newly acquired skills in Gen AI, Machine Learning, and other cutting-edge technologies, making you stand out to potential employers.
              </p>
              
              {/* Image Section with Box */}
              <div className="relative w-full h-auto mt-4 border-4 border-gray-300 rounded-lg shadow-lg p-2">
                <Image
                  src="/assets/cert-img.jpg"
                  alt="Industry Certificate"
                  width={800}  // Adjust width to fit within container
                  height={500} // Maintain natural aspect ratio
                  objectFit="contain"  // Ensure the image scales properly without being cut
                  className="rounded-lg"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
