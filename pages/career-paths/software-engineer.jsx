import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaDatabase, FaCode, FaServer, FaCog, FaLayerGroup, FaTree, FaNetworkWired, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SoftwareEngineerI() {
  const [activeTab, setActiveTab] = useState('learn');
  const [openModule, setOpenModule] = useState(null); // To manage which accordion section is open

  const toggleAccordion = (module) => {
    setOpenModule(openModule === module ? null : module);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
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
        );
      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
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
        );
      case 'timeline':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">Completion Timeline</h2>
            <p className="text-lg text-gray-800">The expected completion timeline for this Career Path is 9 months.</p>
          </motion.div>
        );
      case 'path':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">Path Structure</h2>
            {/* Accordion for modules */}
            <div className="space-y-4">
              {renderAccordionItem("Data Structures", "Learn about arrays, linked lists, stacks, queues, trees, and graphs and their role in problem-solving.")}
              {renderAccordionItem("Algorithms", "Study sorting, searching, recursion, dynamic programming, and greedy algorithms to optimize solutions.")}
              {renderAccordionItem("System Design", "Learn how to design scalable, distributed systems, focusing on fault tolerance and high availability.")}
              {renderAccordionItem("Object-Oriented Programming", "Understand the principles of OOP, including inheritance, polymorphism, abstraction, and encapsulation.")}
              {renderAccordionItem("Database Management", "Work with SQL and NoSQL databases to store, query, and manage structured and unstructured data.")}
              {renderAccordionItem("Microservices Architecture", "Develop microservices-based architectures to build scalable, maintainable, and testable software systems.")}
              {renderAccordionItem("Distributed Systems", "Explore distributed system concepts, including data replication, consensus algorithms, and eventual consistency.")}
              {renderAccordionItem("Caching & Load Balancing", "Implement caching strategies and load balancing to optimize performance and ensure system reliability.")}
              {renderAccordionItem("Performance Optimization", "Learn performance tuning techniques for backend systems, including profiling, memory management, and CPU optimization.")}
              {renderAccordionItem("Security Best Practices", "Understand security principles for software development, including encryption, secure coding, and authentication protocols.")}
            </div>
          </motion.div>
        );
      case 'price':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-indigo-100 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">Price</h2>
            <p className="text-lg text-gray-800">The total cost of the Software Engineer I Career Path is ₹50,400 which can be paid in monthly installment of ₹6,300 over 9 months.</p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  // Function to render each accordion item
  const renderAccordionItem = (title, content) => (
    <div>
      <button
        onClick={() => toggleAccordion(title)}
        className="w-full text-left py-4 px-4 bg-indigo-600 text-white font-semibold rounded-lg focus:outline-none transition-all"
      >
        {title}
      </button>
      {openModule === title && (
        <div className="p-4 bg-indigo-100 rounded-lg mt-2">
          <p className="text-gray-800">{content}</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Software Engineer I | Bright-Mind AI</title>
        <meta name="description" content="Master the fundamentals of software engineering, including data structures, algorithms, and system design. Enroll today to build a solid foundation for your software engineering career." />
        <meta name="keywords" content="software engineering, system design, algorithms, data structures, backend development, software engineer career path" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Software Engineer I | Bright-Mind AI" />
        <meta property="og:description" content="Kickstart your software engineering career by mastering data structures, algorithms, and system design." />
        <meta property="og:image" content="https://www.bright-mind.in/assets/images/software-engineer.png" />
        <meta property="og:url" content="https://www.bright-mind.in/software-engineer-i" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Engineer I | Bright-Mind AI" />
        <meta name="twitter:description" content="Build your career as a software engineer by mastering Data Structures, Algorithms, and System Design. Enroll today." />
        <meta name="twitter:image" content="https://www.bright-mind.in/assets/images/software-engineer-thumbnail.png" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Software Engineer I Career Path</h1>

        {/* Intro Section */}
        <p className="mt-4 bg-transparent rounded-lg text-lg text-center text-white max-w-4xl mx-auto">
          Build your career as a software engineer by mastering Data Structures, Algorithms, and System Design. Gain the foundational skills to design scalable and efficient systems. Enroll today.
        </p>

        {/* Tabs Section */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('learn')}
            className={`py-2 px-4 font-semibold rounded-lg ${activeTab === 'learn' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            What you'll learn
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-4 font-semibold rounded-lg ${activeTab === 'skills' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Skills you'll gain
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-2 px-4 font-semibold rounded-lg ${activeTab === 'timeline' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Completion Timeline
          </button>
          <button
            onClick={() => setActiveTab('path')}
            className={`py-2 px-4 font-semibold rounded-lg ${activeTab === 'path' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Path Structure
          </button>
          <button
            onClick={() => setActiveTab('price')}
            className={`py-2 px-4 font-semibold rounded-lg ${activeTab === 'price' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Price
          </button>
        </div>

        {/* Conditionally rendered content based on the active tab */}
        <div className="mt-10">
          {renderContent()}
        </div>

        {/* Centralized Enroll Now button */}
        <div className="mt-12 text-center">
          <Link href="/ContactUs" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
