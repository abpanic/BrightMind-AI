import Head from 'next/head';
import Link from 'next/link';
import { FaChartBar, FaDatabase, FaProjectDiagram, FaClipboardList, FaTable, FaCode, FaCheckCircle, FaBrain, FaChartLine, FaTasks, FaFolderOpen, FaClipboard, FaQuestionCircle, FaLayerGroup } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DataAnalystAssociate() {
  return (
    <>
      <Head>
        <title>Data Analyst Associate | BrightMind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Analyst Associate course. Enroll today to gain practical, marketable data skills." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mt-8 text-center text-indigo-600">Data Analyst Associate Career Path</h1>
        <p className="mt-4 text-lg text-center text-gray-700 max-w-4xl mx-auto">
          Gain hands-on experience in data analysis, visualization, and data collection techniques. Master skills like SQL, data ethics, and presenting data-driven insights.
        </p>
{/*https://www.coursera.org/career-paths/google-data-analytics*/}
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

        <div className="mt-12 text-center">
          <Link href="/ContactUs" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Enroll Now
            </Link>
        </div>
      </div>
    </>
  );
}
