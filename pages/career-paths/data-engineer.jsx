import Head from 'next/head';
import Link from 'next/link';
import { FaDatabase, FaNetworkWired, FaProjectDiagram, FaCloud, FaCode, FaServer, FaHdd, FaCog, FaTable, FaLayerGroup } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DataEngineer() {
  return (
    <>
      <Head>
        <title>Data Engineer | Bright-Mind AI</title>
        <meta name="description" content="Become a Data Engineer and master the skills needed to design, build, and manage scalable data systems. Enroll today to build a future-proof career." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Data Engineer Career Path</h1>
        <p className="mt-4 bg-gradient-to-r from-white to-purple-100 rounded-lg text-lg text-center text-gray-700 max-w-4xl mx-auto">
          #BuildDataSystems by mastering Data Engineering. Learn how to design, develop, and maintain robust data infrastructure for modern businesses. Enroll today and future-proof your career.
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
                <FaDatabase className="text-blue-500 mr-4" />
                <span>Design and manage scalable databases and data pipelines for real-world applications</span>
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="text-green-500 mr-4" />
                <span>Build and optimize data workflows to move and transform large datasets</span>
              </li>
              <li className="flex items-start">
                <FaCog className="text-purple-500 mr-4" />
                <span>Develop expertise in ETL processes for extracting, transforming, and loading data into data lakes or warehouses</span>
              </li>
              <li className="flex items-start">
                <FaServer className="text-red-500 mr-4" />
                <span>Learn to work with distributed systems, handling big data with platforms like Hadoop and Spark</span>
              </li>
              <li className="flex items-start">
                <FaCloud className="text-teal-500 mr-4" />
                <span>Design and manage cloud-based data infrastructure using AWS, Azure, or Google Cloud</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaHdd className="text-yellow-500 mr-4" />
                <span>Build and deploy efficient data storage solutions like relational and NoSQL databases</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-blue-500 mr-4" />
                <span>Master data modeling and schema design to support analytics and reporting needs</span>
              </li>
              <li className="flex items-start">
                <FaCode className="text-green-500 mr-4" />
                <span>Develop proficiency in SQL, Python, and distributed processing frameworks for data engineering</span>
              </li>
              <li className="flex items-start">
                <FaLayerGroup className="text-red-500 mr-4" />
                <span>Automate data integration pipelines using tools like Apache Airflow</span>
              </li>
              <li className="flex items-start">
                <FaTable className="text-purple-500 mr-4" />
                <span>Work with real-time data streaming technologies like Kafka and Flink</span>
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
                <FaHdd className="text-blue-500 mr-4" />
                <span>Data Pipelines</span>
              </li>
              <li className="flex items-start">
                <FaCog className="text-green-500 mr-4" />
                <span>ETL Processes</span>
              </li>
              <li className="flex items-start">
                <FaDatabase className="text-purple-500 mr-4" />
                <span>SQL & NoSQL Databases</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaServer className="text-red-500 mr-4" />
                <span>Distributed Systems</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-teal-500 mr-4" />
                <span>Data Modeling & Schema Design</span>
              </li>
              <li className="flex items-start">
                <FaLayerGroup className="text-yellow-500 mr-4" />
                <span>Data Streaming</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaCloud className="text-blue-500 mr-4" />
                <span>Cloud Platforms (AWS, Azure, GCP)</span>
              </li>
              <li className="flex items-start">
                <FaCode className="text-green-500 mr-4" />
                <span>Python & Distributed Processing</span>
              </li>
              <li className="flex items-start">
                <FaTable className="text-purple-500 mr-4" />
                <span>Data Integration</span>
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
