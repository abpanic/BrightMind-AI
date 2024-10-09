import Head from 'next/head';
import Link from 'next/link';
import { FaRobot, FaNetworkWired, FaBrain, FaChartLine, FaCogs, FaTree, FaProjectDiagram, FaCode, FaLightbulb, FaMicroscope, FaLayerGroup, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

{/*https://www.coursera.org/career-paths/ibm-machine-learning*/}
{/*https://www.coursera.org/specializations/machine-learning-introduction*/}
{/*https://www.coursera.org/specializations/machine-learning-introduction*/}
export default function MachineLearningEngineer() {
  return (
    <>
      <Head>
        <title>Machine Learning Engineer | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand machine learning skills with our Machine Learning Engineer course. Enroll today to gain practical, marketable AI skills." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mt-8 text-center text-indigo-600">Machine Learning Engineer Career Path</h1>
        <p className="mt-4 text-lg text-center text-gray-700 max-w-4xl mx-auto">
          #BreakIntoAI with Machine Learning Specialization. Master fundamental AI concepts and develop practical machine learning skills in this beginner-friendly course. Enroll today.
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
                <FaLightbulb className="text-blue-500 mr-4" />
                <span>Master the most up-to-date practical skills and knowledge machine learning experts use in their daily roles</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-green-500 mr-4" />
                <span>Learn how to compare and contrast different machine learning algorithms by creating recommender systems in Python</span>
              </li>
              <li className="flex items-start">
                <FaCogs className="text-purple-500 mr-4" />
                <span>Develop working knowledge of KNN, PCA, and non-negative matrix collaborative filtering</span>
              </li>
              <li className="flex items-start">
                <FaBrain className="text-red-500 mr-4" />
                <span>Predict course ratings by training a neural network and constructing regression and classification models</span>
              </li>
              <li className="flex items-start">
                <FaRobot className="text-teal-500 mr-4" />
                <span>Build ML models with NumPy & scikit-learn, and train supervised models for prediction & binary classification tasks (linear, logistic regression)</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaNetworkWired className="text-yellow-500 mr-4" />
                <span>Build & train a neural network with TensorFlow to perform multi-class classification, and build & use decision trees & tree ensemble methods</span>
              </li>
              <li className="flex items-start">
                <FaChartLine className="text-blue-500 mr-4" />
                <span>Apply best practices for ML development & use unsupervised learning techniques including clustering & anomaly detection</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-green-500 mr-4" />
                <span>Build recommender systems with a collaborative filtering approach & a content-based deep learning method & build a deep reinforcement learning model</span>
              </li>
              <li className="flex items-start">
                <FaMicroscope className="text-red-500 mr-4" />
                <span>Describe the various types of Machine Learning algorithms and when to use them</span>
              </li>
              <li className="flex items-start">
                <FaChartLine className="text-purple-500 mr-4" />
                <span>Compare and contrast linear classification methods including multiclass prediction, support vector machines, and logistic regression</span>
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
                <FaCogs className="text-blue-500 mr-4" />
                <span>Logistic Regression</span>
              </li>
              <li className="flex items-start">
                <FaBrain className="text-green-500 mr-4" />
                <span>Artificial Neural Network</span>
              </li>
              <li className="flex items-start">
                <FaChartBar className="text-purple-500 mr-4" />
                <span>Linear Regression</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaTree className="text-red-500 mr-4" />
                <span>Decision Trees</span>
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="text-teal-500 mr-4" />
                <span>Recommender Systems</span>
              </li>
              <li className="flex items-start">
                <FaCogs className="text-yellow-500 mr-4" />
                <span>Machine Learning</span>
              </li>
            </ul>

            <ul className="list-none text-lg text-gray-800 space-y-6">
              <li className="flex items-start">
                <FaMicroscope className="text-blue-500 mr-4" />
                <span>Regression</span>
              </li>
              <li className="flex items-start">
                <FaLayerGroup className="text-green-500 mr-4" />
                <span>Hierarchical Clustering</span>
              </li>
              <li className="flex items-start">
                <FaLightbulb className="text-purple-500 mr-4" />
                <span>Classification</span>
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
