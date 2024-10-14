import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChartBar, FaPython, FaCogs, FaDatabase, FaLaptopCode, FaProjectDiagram, FaChartPie, FaTable } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DataAnalyst() {
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
                  <FaChartBar className="text-blue-500 mr-4" />
                  <span>Master the most up-to-date practical skills and tools that data analysts use in their daily roles</span>
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-green-500 mr-4" />
                  <span>Learn how to visualize data and present findings using charts in Excel and BI tools like PowerBI & Tableau</span>
                </li>
                <li className="flex items-start">
                  <FaPython className="text-red-500 mr-4" />
                  <span>Develop working knowledge of Python for analyzing data using Pandas and Numpy, and invoke APIs and Web Services</span>
                </li>
                <li className="flex items-start">
                  <FaCogs className="text-purple-500 mr-4" />
                  <span>Gain technical experience through hands-on labs and projects, and build a portfolio to showcase your work</span>
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
                  <FaDatabase className="text-blue-500 mr-4" />
                  <span>Data Science</span>
                </li>
                <li className="flex items-start">
                  <FaChartBar className="text-green-500 mr-4" />
                  <span>Data Analysis</span>
                </li>
                <li className="flex items-start">
                  <FaPython className="text-purple-500 mr-4" />
                  <span>Python Programming</span>
                </li>
              </ul>

              <ul className="list-none text-lg text-gray-800 space-y-6">
                <li className="flex items-start">
                  <FaLaptopCode className="text-red-500 mr-4" />
                  <span>Jupyter Notebook</span>
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-teal-500 mr-4" />
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <FaChartPie className="text-yellow-500 mr-4" />
                  <span>Statistical Analysis</span>
                </li>
              </ul>

              <ul className="list-none text-lg text-gray-800 space-y-6">
                <li className="flex items-start">
                  <FaTable className="text-blue-500 mr-4" />
                  <span>Tableau Software</span>
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-green-500 mr-4" />
                  <span>Predictive Modelling</span>
                </li>
                <li className="flex items-start">
                  <FaCogs className="text-purple-500 mr-4" />
                  <span>Exploratory Data Analysis (EDA)</span>
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
            <p className="text-lg text-gray-800">The expected completion timeline for this Career Path is 6 months.</p>
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
              {renderAccordionItem("Programming with Python", "Learn the fundamentals of Python programming, focusing on data manipulation and analysis using libraries like Pandas and Numpy.")}
              {renderAccordionItem("Translate Data into Insights", "Develop the ability to analyze raw data and extract actionable insights, using data visualization tools like Excel, PowerBI, and Tableau.")}
              {renderAccordionItem("Statistics", "Understand key statistical concepts such as probability, distributions, hypothesis testing, and descriptive statistics for data analysis.")}
              {renderAccordionItem("Regression Analysis", "Master regression techniques, including linear and logistic regression, to model relationships between variables and predict outcomes.")}
              {renderAccordionItem("PowerBI", "Gain proficiency in using PowerBI to create interactive visualizations, reports, and dashboards for data analysis and business insights.")}
              {renderAccordionItem("Tableau", "Learn to use Tableau for data visualization, building powerful and interactive dashboards to present data findings effectively.")}
              {renderAccordionItem("Basics of Machine Learning", "Get introduced to machine learning concepts, including supervised and unsupervised learning, and explore algorithms such as decision trees and clustering.")}
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
            <p className="text-lg text-gray-800">The total cost of the Data Analyst Career Path is ₹22,500, which can be paid in monthly installments of ₹4,500 over 6 months.</p>
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
      <title>Data Analyst | Bright-Mind AI</title>
      <meta name="description" content="Master data analysis with Bright-Mind AI's Data Analyst Career Path. Learn key skills like Python, statistical analysis, regression models, and machine learning." />
      <meta name="keywords" content="Data Analyst, Python, Machine Learning, Statistical Analysis, Data Visualization, Regression Models, Data Science" />
      <meta property="og:title" content="Data Analyst | Bright-Mind AI" />
      <meta property="og:description" content="Become a Data Analyst with Bright-Mind AI. Gain hands-on experience in data analysis, visualization, and machine learning." />
      <meta property="og:image" content="https://www.bright-mind.in/assets/images/thumbnail.png" />
      <meta property="og:url" content="https://www.bright-mind.in/career-paths/data-analyst.png" />
    
      {/* Schema Markup for Structured Data */}
      <script type="application/ld+json">
        {`{
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Data Analyst Career Path",
          "description": "Master key skills like Python, statistical analysis, regression models, and machine learning in less than 6 months.",
          "provider": {
            "@type": "Organization",
            "name": "Bright-Mind AI",
            "url": "https://www.bright-mind.in"
          }
        }`}
      </script>
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Data Analyst Career Path</h1>

        {/* Intro Section */}
        <p className="mt-4 bg-transparent rounded-lg text-lg text-center text-white max-w-4xl mx-auto">
          Master key skills like statistical analysis, Python, regression models, and machine learning in less than 6 months. Enroll today to build a solid foundation in data analysis and visualization.
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
