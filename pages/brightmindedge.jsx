import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaCreditCard,
  FaUserTie,
  FaCertificate,
  FaGlobe,
  FaFileAlt ,
  FaEnvelopeOpenText ,
  FaLinkedin ,
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
        <div className="grid gap-8 mt-10 lg:grid-cols-3 lg:grid-rows-2 sm:mt-16">
          
          {/* Be Industry Ready  */}
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-8 bg-gradient-to-r from-white via-purple-50 to-purple-50 rounded-lg shadow-xl"
    >
      <div className="flex items-center mb-6">
        <FaChalkboardTeacher className="text-indigo-600 text-4xl mr-4" />
        <h3 className="text-3xl font-bold text-gray-900">Be Industry Ready</h3>
      </div>
      
      <p className="mt-4 text-gray-600 leading-relaxed">
        Our goal is not just to teach you the theory but to ensure you’re{" "}
        <RoughNotation type="underline" show={true} strokeWidth={2} color="indigo">
          fully prepared for real-world industry challenges
        </RoughNotation>. That’s why we focus on{" "}
        <RoughNotation type="underline" show={true} strokeWidth={2} color="red">
          technical interviews
        </RoughNotation>, modeled after those used by leading companies in the AI and tech space. 
        No more quizzes like in college—our program is designed to simulate the actual hiring process, preparing you to stand out in competitive job markets.
      </p>
      
      <p className="mt-6 text-gray-600">
        To further enhance your career readiness, we offer personalized support, including:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {/* Resume Review */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start"
        >
          <FaFileAlt className="text-purple-600 text-3xl mr-4" />
          <div>
            <h4 className="text-xl font-bold text-gray-900">Resume Review</h4>
            <p className="text-gray-600">
              Tailored feedback to optimize your resume for your target job market.
            </p>
          </div>
        </motion.div>

        {/* Cover Letter Guidance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-start"
        >
          <FaEnvelopeOpenText className="text-purple-600 text-3xl mr-4" />
          <div>
            <h4 className="text-xl font-bold text-gray-900">Cover Letter Guidance</h4>
            <p className="text-gray-600">
              Craft compelling cover letters that make you stand out to potential employers.
            </p>
          </div>
        </motion.div>

        {/* LinkedIn Review */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-start"
        >
          <FaLinkedin className="text-purple-600 text-3xl mr-4" />
          <div>
            <h4 className="text-xl font-bold text-gray-900">LinkedIn Review</h4>
            <p className="text-gray-600">
              Optimize your LinkedIn profile to capture the attention of recruiters.
            </p>
          </div>
        </motion.div>

        {/* Follow-Up Strategies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-start"
        >
          <FaCommentDots className="text-purple-600 text-3xl mr-4" />
          <div>
            <h4 className="text-xl font-bold text-gray-900">Follow-Up Strategies</h4>
            <p className="text-gray-600">
              Learn how to stay on top of the hiring process with professional follow-up emails and communication.
            </p>
          </div>
        </motion.div>
      </div>

      <p className="mt-8 text-gray-600">
        These exclusive services are available to candidates who{" "}
        <RoughNotation type="underline" show={true} strokeWidth={2} color="teal">
          commit to and complete the entire career path
        </RoughNotation>, ensuring that you not only gain technical expertise but are also fully prepared to navigate the job search process with confidence.
      </p>
    </motion.div>
	
	          {/* Prestigious Alumni */}
			  <div className="lg:col-span-2 flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg">
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col p-8 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-lg shadow-xl"
    >
      <div className="flex items-center mb-6">
        <FaGlobe className="text-indigo-600 text-4xl mr-4" />
        <h3 className="text-3xl font-bold text-gray-900">
          Learn from Top Global Alumni
        </h3>
      </div>
      
      <p className="mt-4 text-gray-600 leading-relaxed">
        Our expert instructors are alumni of some of the most prestigious universities in the world, bringing with them unmatched knowledge and skills honed through their education and experience at these renowned institutions.
      </p>
      
      <div className="mt-6">
        {/* Deakin University */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-6"
        >
          <p className="text-gray-600 text-lg">
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={3}
              color="purple"
            >
              <span className="font-bold text-purple-600">Deakin University</span>
            </RoughNotation>
            , one of the top universities in Australia, is globally recognized for its cutting-edge research in AI and technology. Our alumni trained at Deakin bring that world-class knowledge into every lesson, ensuring you’re learning from the very best.
          </p>
        </motion.div>

        {/* IIT Alumni */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-6"
        >
          <p className="text-gray-600 text-lg">
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={3}
              color="orange"
            >
              <span className="font-bold text-orange-600">IIT alumni</span>
            </RoughNotation>
             bring their unparalleled expertise from India’s premier technology institutions, known for producing some of the brightest minds in engineering and data science. Their experience in both academia and industry provides you with a unique, practical learning experience.
          </p>
        </motion.div>

        {/* Texas McCombs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-6"
        >
          <p className="text-gray-600 text-lg">
            Trained at 
            <RoughNotation
              type="underline"
              show={true}
              strokeWidth={3}
              color="blue"
            >
              <span className="font-bold text-blue-600"> Texas McCombs</span>
            </RoughNotation>
            , one of the leading business schools in the U.S., our alumni have a strong foundation in data-driven decision-making and AI applications in business. This provides you with a strategic edge, blending technical expertise with business insights.
          </p>
        </motion.div>
      </div>
    </motion.div>
          

          {/* Flexible Payments */}
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-4 bg-gradient-to-r from-purple-20 via-white to-purple-70 rounded-lg shadow-lg"
    >
      <FaCreditCard className="text-indigo-600 text-4xl mb-4" />
      <h3 className="text-2xl font-bold text-gray-900">
        Pocket-Friendly Payment Options
      </h3>
      <p className="mt-2 text-gray-600">
        Our goal is to make learning accessible for everyone. While annual plans can be a great value and are reasonably pricing, we understand they might feel unaffordable upfront. That’s why we offer <span className="font-bold">affordable monthly payment plans</span> that help break down the cost, ensuring you can focus on gaining the skills you need without the financial strain.
      </p>
      <p className="mt-2 text-gray-600">
        Plus, for honors students in select programs, we help achieve <span className="font-bold">internship opportunities</span>, providing real-world experience and helping you make the most of your education.
      </p>
    </motion.div>

          {/* Industry-Focused Skill Development */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col p-4 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-lg shadow-lg"
          >
            <FaUserTie className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              Industry-Focused Skill Development
            </h3>
            <p className="mt-2 text-gray-600">
              Our programs are crafted to equip you with the{" "}
              <span className="font-bold">skills that are in high demand</span>{" "}
              across industries. Whether you aspire to become a{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="yellow"
                padding={5}
              >
                software engineer
              </RoughNotation>,{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="lightgreen"
                padding={5}
              >
                data engineer
              </RoughNotation>,{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="lightblue"
                padding={5}
              >
                data analyst
              </RoughNotation>, or specialize in{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="lightcoral"
                padding={5}
              >
                machine learning
              </RoughNotation>,{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="lightpurple"
                padding={5}
              >
                Gen AI
              </RoughNotation>,{" "}
                            
                cloud computing
              , or{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="lightblue"
                padding={5}
              >
                blockchain
              </RoughNotation>, we prepare you to{" "}
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
          </motion.div>
          </div>

          {/* Certificate Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-between p-2 bg-white rounded-lg shadow-lg"
          >
            <FaCertificate className="text-indigo-600 text-4xl mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              Industry-Recognized Certificates
            </h3>
            <p className="mt-2 text-gray-600">
              Upon completion, you will receive verifiable certificates
              recognized by top industries, and you can easily{" "}
              <RoughNotation
                type="underline"
                show={true}
                strokeWidth={2}
                color="indigo"
              >
                <span className="font-bold"> add them to your LinkedIn profile</span>
              </RoughNotation>
              . Each certificate comes with a{" "}
              <span className="font-bold">unique ID</span> for verification.
            </p>
            <div className="mt-2">
            <RoughNotation
            type="box"
            strokeWidth={2}
            color="indigo"
            show={true}
            padding={10}
          >
            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src="/assets/cert-img.jpg"
                alt="Industry Certificate"
                fill
                style={{ objectFit: 'cover' }} // Use style to apply object-fit
                quality={75}
                className="rounded-lg shadow-lg"
              />
            </div>
          </RoughNotation>
            </div>
          </motion.div>
		  
        </div>
      </div>
    </div>
  );
}
