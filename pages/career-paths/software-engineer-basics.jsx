import Head from 'next/head';
import Link from 'next/link';
import { FaDatabase, FaCode, FaServer, FaCog, FaLayerGroup, FaTree, FaNetworkWired, FaLightbulb, FaMicroscope, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SoftwareEngineer() {
  return (
    <>
      <Head>
        <title>Software Engineer | Bright-Mind AI</title>
        <meta name="description" content="Master the fundamentals of software engineering, including data structures, algorithms, and system design. Enroll today to build a solid foundation for your software engineering career." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mt-8 text-center text-indigo-600">Software Engineer Career Path</h1>
        <p className="mt-4 text-lg text-center text-gray-700 max-w-4xl mx-auto">
          Build your career as a software engineer by mastering Data Structures, Algorithms, and System Design. Gain the foundational skills to design scalable and efficient systems. Enroll today.
        </p>

        {/* What you'll learn section with gradient and 2-column layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaCode className="text-blue-500 mr-4" />
                <span>Develop proficiency in Data Structures & Algorithms (DSA) to solve complex coding problems</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-green-500 mr-4" />
                <span>Understand System Design principles to architect scalable and efficient systems</span>
              </li>
              <li className="flex items-start">
                <FaCog className="text-purple-500 mr-4" />
                <span>Build a solid foundation in Object-Oriented Programming (OOP) concepts</span>
              </li>
              <li className="flex items-start">
                <FaServer className="text-red-500 mr-4" />
                <span>Learn about distributed systems and how to design for high availability and fault tolerance</span>
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="text-teal-500 mr-4" />
                <span>Design and implement efficient data structures like trees, graphs, and hash tables</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaTree className="text-yellow-500 mr-4" />
                <span>Master algorithms for sorting, searching, and optimization</span>
              </li>
              <li className="flex items-start">
                <FaDatabase className="text-blue-500 mr-4" />
                <span>Understand database design and interaction for both SQL and NoSQL databases</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-green-500 mr-4" />
                <span>Learn best practices for designing robust, scalable back-end systems</span>
              </li>
              <li className="flex items-start">
                <FaLightbulb className="text-red-500 mr-4" />
                <span>Implement caching, load balancing, and other performance optimization techniques</span>
              </li>
              <li className="flex items-start">
                <FaLayerGroup className="text-purple-500 mr-4" />
                <span>Master techniques for designing microservices architectures</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Skills You'll Gain section with gradient and 3-column layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">Skills you'll gain</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaCode className="text-blue-500 mr-4" />
                <span>Data Structures</span>
              </li>
              <li className="flex items-start">
                <FaCog className="text-green-500 mr-4" />
                <span>Algorithms</span>
              </li>
              <li className="flex items-start">
                <FaServer className="text-purple-500 mr-4" />
                <span>System Design</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaTree className="text-red-500 mr-4" />
                <span>Object-Oriented Programming</span>
              </li>
              <li className="flex items-start">
                <FaDatabase className="text-teal-500 mr-4" />
                <span>Database Management (SQL & NoSQL)</span>
              </li>
              <li className="flex items-start">
                <FaLayerGroup className="text-yellow-500 mr-4" />
                <span>Microservices</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaProjectDiagram className="text-blue-500 mr-4" />
                <span>Scalability</span>
              </li>
              <li className="flex items-start">
                <FaLightbulb className="text-green-500 mr-4" />
                <span>Performance Optimization</span>
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="text-purple-500 mr-4" />
                <span>Distributed Systems</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/ContactUs" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
