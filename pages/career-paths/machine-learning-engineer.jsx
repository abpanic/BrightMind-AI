import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRobot, FaNetworkWired, FaBrain, FaChartLine, FaCogs, FaTree, FaProjectDiagram, FaCode, FaLightbulb, FaMicroscope, FaLayerGroup, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MachineLearningEngineer() {
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
              {/* Content from the What you'll learn section */}
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
            <p className="text-lg text-gray-800">The expected completion timeline for this program is 12 months.</p>
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
              {renderAccordionItem("Time Series Forecasting", "Learn to model time-dependent data and make predictions using various forecasting techniques.")}
              {renderAccordionItem("Reinforcement Learning", "Introduction to reinforcement learning and how to build agents that learn from interactions with their environment.")}
              {renderAccordionItem("Model Deployment", "Understand how to deploy machine learning models to production environments and ensure scalability and maintainability.")}
              {renderAccordionItem("Natural Language Processing", "Explore NLP techniques for text processing, including tokenization, sentiment analysis, and text classification.")}
              {renderAccordionItem("Computer Vision", "Learn to analyze and interpret visual data with image processing techniques, object detection, and classification using deep learning.")}
              {renderAccordionItem("Neural Network and Deep Learning", "Deep dive into neural networks, understanding how they work and training models using popular frameworks like TensorFlow and PyTorch.")}
              {renderAccordionItem("Working with SQL", "Gain proficiency in SQL for querying and managing structured data in databases.")}
              {renderAccordionItem("Featurization, Model Selection & Tuning", "Learn how to preprocess data, select the right models, and tune hyperparameters to improve model performance.")}
              {renderAccordionItem("Unsupervised Learning", "Explore clustering, dimensionality reduction, and anomaly detection techniques for analyzing unlabeled data.")}
              {renderAccordionItem("Ensemble Techniques", "Master advanced techniques like bagging, boosting, and stacking to combine models for improved performance.")}
              {renderAccordionItem("Supervised Learning", "Get hands-on with supervised learning techniques like linear regression, decision trees, and support vector machines.")}
              {renderAccordionItem("Applied Statistics using Python", "Learn statistical concepts and apply them using Python for data analysis and hypothesis testing.")}
              {renderAccordionItem("Programming with Python", "Develop core Python programming skills for data manipulation, automation, and model building.")}
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
            <p className="text-lg text-gray-800">The total cost for the Machine Learning Engineer program is $999, with a 10% discount for early enrollment.</p>
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
        <title>Machine Learning Engineer | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand machine learning skills with our Machine Learning Engineer course. Enroll today to gain practical, marketable AI skills." />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Machine Learning Engineer Career Path</h1>

        {/* Intro Section */}
        <p className="mt-4 bg-transparent rounded-lg text-lg text-center text-white max-w-4xl mx-auto">
          #BreakIntoAI with Machine Learning Specialization. Master fundamental AI concepts and develop practical machine learning skills in the beginner-friendly career path.
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
