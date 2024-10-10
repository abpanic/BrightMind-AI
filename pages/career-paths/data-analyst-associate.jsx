import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChartBar, FaDatabase, FaClipboardList, FaTable, FaChartLine, FaTasks, FaFolderOpen, FaCheckCircle, FaLayerGroup, FaClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DataAnalystAssociate() {
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
                  <FaClipboardList className="text-blue-500 mr-4" />
                  <span>Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job</span>
                </li>
                <li className="flex items-start">
                  <FaDatabase className="text-green-500 mr-4" />
                  <span>Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, Python programming, Tableau)</span>
                </li>
                <li className="flex items-start">
                  <FaTable className="text-purple-500 mr-4" />
                  <span>Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL, and Python programming</span>
                </li>
                <li className="flex items-start">
                  <FaChartLine className="text-red-500 mr-4" />
                  <span>Learn how to visualize and present data findings in dashboards, presentations, and commonly used visualization platforms</span>
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
                  <FaChartBar className="text-blue-500 mr-4" />
                  <span>Data Analysis</span>
                </li>
                <li className="flex items-start">
                  <FaClipboard className="text-green-500 mr-4" />
                  <span>Creating Case Studies</span>
                </li>
                <li className="flex items-start">
                  <FaLayerGroup className="text-purple-500 mr-4" />
                  <span>Data Cleansing</span>
                </li>
              </ul>

              <ul className="list-none text-lg text-gray-800 space-y-6">
                <li className="flex items-start">
                  <FaTable className="text-red-500 mr-4" />
                  <span>Data Collection</span>
                </li>
                <li className="flex items-start">
                  <FaDatabase className="text-teal-500 mr-4" />
                  <span>SQL</span>
                </li>
                <li className="flex items-start">
                  <FaTasks className="text-yellow-500 mr-4" />
                  <span>Spreadsheet</span>
                </li>
              </ul>

              <ul className="list-none text-lg text-gray-800 space-y-6">
                <li className="flex items-start">
                  <FaClipboardList className="text-blue-500 mr-4" />
                  <span>Data Ethics</span>
                </li>
                <li className="flex items-start">
                  <FaFolderOpen className="text-green-500 mr-4" />
                  <span>Data Aggregation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-500 mr-4" />
                  <span>Presentation</span>
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
            <p className="text-lg text-gray-800">The expected completion timeline for this program is 9 months.</p>
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
              {renderAccordionItem("Programming with Python", "Master the basics of Python programming, focusing on data manipulation, analysis, and scripting using Pandas and Numpy.")}
              {renderAccordionItem("Translate Data into Insights", "Learn to derive actionable insights from raw data using data visualization tools such as PowerBI and Excel to build dashboards.")}
              {renderAccordionItem("PowerBI", "Gain proficiency in PowerBI to create interactive visualizations, reports, and dashboards for data analysis and business insights.")}
              {renderAccordionItem("Tableau", "Learn Tableau for data visualization, building advanced dashboards, and effectively presenting data to various stakeholders.")}
              {renderAccordionItem("Excel", "Master the use of Excel for data analysis, using advanced functions, pivot tables, and data visualization techniques for analysis and reporting.")}
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
            <p className="text-lg text-gray-800">The total cost for the Data Analyst Associate program is $799, with a 15% discount for early enrollment.</p>
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
        <title>Data Analyst Associate | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Analyst Associate course. Enroll today to gain practical, marketable data skills." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Data Analyst Associate Career Path</h1>

        {/* Intro Section */}
        <p className="mt-4 bg-transparent rounded-lg text-lg text-center text-white max-w-4xl mx-auto">
          Gain hands-on experience in data analysis, visualization, and data collection techniques. Master skills like SQL, data ethics, and presenting data-driven insights.
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
