import React from "react";
import { FaChalkboardTeacher, FaBrain, FaHandsHelping, FaCertificate, FaPython, FaRobot, FaCode, FaCamera, FaNetworkWired, FaBook, FaTerminal, FaComments } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Why Choose Us</h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-white sm:text-5xl">
          The Ultimate AI and Machine Learning Experience
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Item 1 - Larger Card */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <FaChalkboardTeacher className="text-indigo-600 text-4xl mb-4" />
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center">
                  Be the leading Expert of AI
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Learn from the expert alumni from Microsoft and Wipro.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaPython className="text-indigo-600 mr-3" />
                    Python
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaBrain className="text-indigo-600 mr-3" />
                    Deep Learning
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaRobot className="text-indigo-600 mr-3" />
                    Machine Learning
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaCamera className="text-indigo-600 mr-3" />
                    Computer Vision
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaNetworkWired className="text-indigo-600 mr-3" />
                    Neural Networks
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaBook className="text-indigo-600 mr-3" />
                    Hugging Face
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaTerminal className="text-indigo-600 mr-3" />
                    Prompt Engineering
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <FaComments className="text-indigo-600 mr-3" />
                    NLP with Generative AI
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://your-image-url-here"
                    alt="AI and Machine Learning Masterclass"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Item 2 */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <FaHandsHelping className="text-indigo-600 text-4xl mb-4" />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Get Industry ready with Dedicated Career Support
                </p>
                <ul className="list-disc ml-4 text-sm text-gray-600 max-lg:text-center">
                  <li>Personalised Resume and LinkedIn Review</li>
                  <li>Live career mentorship with industry experts</li>
                  <li>Internship for Honors students</li>
                </ul>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://your-image-url-here"
                  alt="Career Support"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Item 3 */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <FaBrain className="text-indigo-600 text-4xl mb-4" />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Designed for busy career aspirants like you
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://your-image-url-here"
                  alt="Career Aspirants"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Item 4 */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <FaCertificate className="text-indigo-600 text-4xl mb-4" />
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Get industry recognized certificates
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Upon completion, you’ll receive a certificate that’s recognized across industries.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        Certificate.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">Program.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    {/* Example certificate or achievement */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
