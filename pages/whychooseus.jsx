import React from "react";
import { RoughNotation } from "react-rough-notation";
import {
  FaChalkboardTeacher,
  FaBrain,
  FaHandsHelping,
  FaCertificate,
  FaPython,
  FaRobot,
  FaCamera,
  FaNetworkWired,
  FaBook,
  FaTerminal,
  FaComments,
} from "react-icons/fa";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Why Choose Us</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-white sm:text-5xl">
          The Ultimate AI and Machine Learning Experience
        </p>

        {/* CSS Grid Layout */}
        <div className="grid gap-8 mt-10 lg:grid-cols-3 lg:grid-rows-2 sm:mt-16">
          {/* First item - Main Content and Certificate Image */}
          <div className="lg:col-span-2 flex flex-col justify-between p-8 bg-white rounded-lg shadow-lg">
            <div>
              <FaChalkboardTeacher className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Be the Leading Expert of AI</h3>
              <p className="mt-4 text-gray-600">Learn from expert alumni from Microsoft and Wipro.</p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <FaPython className="text-indigo-600 mr-3" />
                  Python
                </li>
                <li className="flex items-center">
                  <FaBrain className="text-indigo-600 mr-3" />
                  Deep Learning
                </li>
                <li className="flex items-center">
                  <FaRobot className="text-indigo-600 mr-3" />
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <FaCamera className="text-indigo-600 mr-3" />
                  Computer Vision
                </li>
                <li className="flex items-center">
                  <FaNetworkWired className="text-indigo-600 mr-3" />
                  Neural Networks
                </li>
                <li className="flex items-center">
                  <FaBook className="text-indigo-600 mr-3" />
                  Hugging Face
                </li>
                <li className="flex items-center">
                  <FaTerminal className="text-indigo-600 mr-3" />
                  Prompt Engineering
                </li>
                <li className="flex items-center">
                  <FaComments className="text-indigo-600 mr-3" />
                  NLP with Generative AI
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <Image
                src="/path-to-your-certificate-image.jpg"
                alt="Certificate Preview"
                width={700}
                height={500}
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Second item - Career Support */}
          <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
            <FaHandsHelping className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Get Industry Ready with Career Support</h3>
            <ul className="mt-4 list-disc text-gray-600 ml-6">
              <li>Resume review</li>
              <li>LinkedIn Review</li>
              <li>Live career mentorship with industry experts</li>
              <li>Study from world's top Universities like Deakin University(Australia), University of Texas, MCCombs (U.S.) and IIT alumni</li>
              <li>Internship opportunities for honors students</li>
            </ul>
            <div className="mt-6">
              <Image
                src="/path-to-career-support-image.jpg"
                alt="Career Support"
                width={500}
                height={400}
                style="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Third item - Busy Career Aspirants */}
          <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
            <FaBrain className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Designed for Busy Career Aspirants</h3>
            <p className="mt-4 text-gray-600">Our flexible learning paths are tailored to fit your schedule.</p>
            <div className="mt-6">
              <Image
                src="/path-to-aspirants-image.jpg"
                alt="Busy Career Aspirants"
                width={500}
                height={300}
                style="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Fourth item - Certificate */}
          <div className="lg:col-span-2 flex flex-col justify-between p-8 bg-white rounded-lg shadow-lg">
            <FaCertificate className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Get Industry-Recognized Certificates</h3>
            <p className="mt-4 text-gray-600">
              Upon completion, you will receive verifiable certificates recognized by top industries. 
            </p>
            <p className="mt-4 text-gray-600">
  These certificates are <span className="font-bold">shareable</span>, and you can easily 
  <RoughNotation type="underline" show={true} strokeWidth={2} color="indigo">
    <span className="font-bold"> add them to your LinkedIn profile</span>
  </RoughNotation>. 
  Each certificate comes with a <span className="font-bold">unique ID</span> that makes it 
  <RoughNotation type="underline" show={true} strokeWidth={2} color="indigo">
    <span className="font-bold"> verifiable</span>
  </RoughNotation>, ensuring credibility with future employers or institutions.
</p>

            <div className="mt-6">
               {/* Rough Notation Box around Image */}
             <RoughNotation type="box" strokeWidth={2} color="indigo" show={true} padding={10}>
              <Image
                src="/assets/cert-img.jpg"
                alt="Industry Certificate"
                width={700}
                height={500}
                style="cover"
                quality={75}
                className="rounded-lg shadow-lg"
              />
              </RoughNotation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
