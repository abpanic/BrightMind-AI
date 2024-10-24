import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChartBar, FaBrain, FaDatabase, FaCode, FaServer, FaLayerGroup, FaProjectDiagram } from 'react-icons/fa';

export default function DataScientistLLM() {
  const [activeTab, setActiveTab] = useState('learn');
  const [openModule, setOpenModule] = useState(null); // To manage accordion state

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
            <ul className="list-disc ml-8 mt-2 space-y-4 text-lg text-gray-800">
              <li><FaBrain className="inline text-indigo-500 mr-2" /> Explore the roles of data professionals within an organization</li>
              <li><FaChartBar className="inline text-green-500 mr-2" /> Create data visualizations and apply statistical methods to investigate data</li>
              <li><FaCode className="inline text-red-500 mr-2" /> Build regression and machine learning models to analyze and interpret data</li>
              <li><FaServer className="inline text-purple-500 mr-2" /> Develop expertise in generative AI models using tools like Hugging Face and LangChain</li>
              <li><FaProjectDiagram className="inline text-yellow-500 mr-2" /> Understand and deploy recommendation systems and GANs</li>
              <li><FaLayerGroup className="inline text-teal-500 mr-2" /> Train and fine-tune large language models (LLMs) to create AI-driven solutions</li>
            </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-800">
              <div className="space-y-4">
                <p><FaBrain className="inline text-indigo-500 mr-2" /> Python Programming</p>
                <p><FaLayerGroup className="inline text-green-500 mr-2" /> Generative AI (GANs)</p>
                <p><FaCode className="inline text-red-500 mr-2" /> LangChain Framework</p>
              </div>
              <div className="space-y-4">
                <p><FaServer className="inline text-purple-500 mr-2" /> Large Language Models (LLMs)</p>
                <p><FaChartBar className="inline text-blue-500 mr-2" /> Statistical Analysis</p>
                <p><FaProjectDiagram className="inline text-yellow-500 mr-2" /> Data Visualization</p>
              </div>
              <div className="space-y-4">
                <p><FaDatabase className="inline text-teal-500 mr-2" /> Hugging Face Platform</p>
                <p><FaServer className="inline text-red-500 mr-2" /> Machine Learning Engineering</p>
                <p><FaLayerGroup className="inline text-purple-500 mr-2" /> Model Deployment</p>
              </div>
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
            <p className="text-lg text-gray-800">This career path is designed to be completed in 12 months with full-time commitment or 18 months part-time.</p>
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
            <div className="space-y-4">
              {renderAccordionItem("Machine Learning Engineer", "Learn the fundamentals of machine learning, including supervised, unsupervised learning, and model evaluation techniques.")}
              {renderAccordionItem("Generative AI & LLMs", "Master Generative AI models, fine-tuning LLMs using frameworks like LangChain and platforms like Hugging Face.")}
              {renderAccordionItem("Recommendation Systems", "Learn to build recommendation systems using collaborative filtering and content-based methods.")}
              {renderAccordionItem("GANs (Generative Adversarial Networks)", "Understand how GANs work and how they are used in generative AI for tasks like image generation.")}
              {renderAccordionItem("Hugging Face & LangChain", "Gain expertise in the Hugging Face platform and the LangChain framework to deploy and use generative AI models.")}
              {renderAccordionItem("Model Deployment", "Learn best practices for deploying machine learning models into production using Docker, Kubernetes, and cloud platforms.")}
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
            <p className="text-lg text-gray-800">The total cost of the Data Scientist with LLM Career Path is ₹2,00,000 which can be paid in monthly installment of ₹20,00 over 18 months.</p>
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
        <title>Data Scientist with LLM | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Scientist with LLM career path. Enroll today to gain practical, marketable data skills." />
        <meta name="keywords" content="Data Science, Machine Learning, LLM, Generative AI, GANs, LangChain, Hugging Face" />
        <meta property="og:title" content="Data Scientist with LLM | Bright-Mind AI" />
        <meta property="og:description" content="Master Data Science and Large Language Models (LLMs) to build AI-driven solutions." />
        <meta property="og:image" content="https://www.bright-mind.in/assets/images/data-scientist-llm-thumbnail.png" />
        <meta property="og:url" content="https://www.bright-mind.in/data-scientist-llm" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema Markup for Data Scientist LLM */}
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Data Scientist with LLM",
            "description": "Learn in-demand skills like data analytics, machine learning, and large language models (LLMs) in our Data Scientist with LLM course.",
            "provider": {
              "@type": "Organization",
              "name": "Bright-Mind AI",
              "url": "https://www.bright-mind.in"
            },
            "courseMode": "Online",
            "educationalCredentialAwarded": "Data Scientist Certification",
            "timeToComplete": "P12M",
            "offers": {
              "@type": "Offer",
              "url": "https://www.bright-mind.in/data-scientist-llm",
              "priceCurrency": "USD",
              "price": "1299",
              "validThrough": "2024-12-31"
            }
          }`}
        </script>
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Data Scientist with LLM Career Path</h1>

        {/* Intro Section */}
        <p className="mt-4 bg-transparent rounded-lg text-lg text-center text-white max-w-4xl mx-auto">
          Master the key skills of data science, machine learning, and generative AI, including LLMs, recommendation systems, and model deployment. Enroll today to build a cutting-edge career in AI.
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
