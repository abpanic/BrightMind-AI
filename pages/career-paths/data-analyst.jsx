import Head from 'next/head';
import Link from 'next/link';
import { FaChartBar, FaPython, FaCogs, FaDatabase, FaLaptopCode, FaProjectDiagram, FaChartPie,FaTable  } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DataAnalyst() {
  return (
    <>
      <Head>
        <title>Data Analyst | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Analyst course. Enroll today to gain practical, marketable data skills." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mt-8 text-center text-indigo-600">Data Analyst Career Path</h1>
        <p className="mt-4 text-lg text-center text-gray-700 max-w-4xl mx-auto">
          Master key skills like statistical analysis, Python, regression models, and machine learning in less than 6 months. Enroll today to build a solid foundation in data analysis and visualization.
        </p>
{/*https://www.coursera.org/career-paths/google-advanced-data-analytics*/}
{/*https://www.coursera.org/career-paths/ibm-data-analyst*/}
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
                <FaChartBar className="text-blue-500 mr-4" />
                <span>Master the most up-to-date practical skills and tools that data analysts use in their daily roles</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-green-500 mr-4" />
                <span>Learn how to visualize data and present findings using various charts in Excel spreadsheets and BI tools like IBM Cognos Analytics & Tableau</span>
              </li>
              <li className="flex items-start">
                <FaPython className="text-red-500 mr-4" />
                <span>Develop working knowledge of Python language for analyzing data using Python libraries like Pandas and Numpy, and invoke APIs and Web Services</span>
              </li>
              <li className="flex items-start">
                <FaCogs className="text-purple-500 mr-4" />
                <span>Gain technical experience through hands-on labs and projects and build a portfolio to showcase your work</span>
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

        <div className="mt-12 text-center">
          <Link href="/ContactUs" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Enroll Now            
          </Link>
        </div>
      </div>
    </>
  );
}
