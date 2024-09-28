import React, { useState } from 'react'
import pricingPlans from '../data/pricingPlans.json'


interface PricingPlan {
  title: string;
  price: number;
  features: {
    [key: string]: boolean | string;
  };
  careerTitles: string[];
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const togglePricing = () => {
    setIsAnnual(!isAnnual)
  }

  // Price calculation
  const calculatePrice = (price: number) => {
    const monthlyPrice = price;
    return isAnnual ? `₹${(monthlyPrice * 12 * 0.9).toLocaleString()}/year` : `₹${monthlyPrice.toLocaleString()}/month`;
  }

  // List of all possible features with boolean or string values
  const allFeatures = [
    { label: "Data Analytics", key: "dataAnalytics" },
    { label: "Python and Statistics", key: "pythonAndStatistics" },
    { label: "Data Visualization", key: "dataVisualization" },
    { label: "Projects", key: "projects" }, // String-based value
    { label: "Machine Learning", key: "machineLearning" }, // String-based value
    { label: "Data Structures and Algorithms", key: "dataStructuresAlgorithms" },
    { label: "Cloud Computing", key: "cloudComputing" },
    { label: "Deep Learning", key: "deepLearning" },
    { label: "Natural Language Processing", key: "naturalLanguageProcessing" },
    { label: "Computer Vision", key: "computerVision" },
    { label: "Software Engineering", key: "softwareEngineering" }, // String-based value
    { label: "Guaranteed Paid Internship", key: "paidInternship" },
    { label: "Certificate of Completion", key: "certificate" }
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center">Pricing Plans</h1>
      <p className="text-lg text-grey-600 text-center my-4">
        Compare and choose the one that fits your aspirations.
      </p>

      {/* Toggle Switch for Monthly/Annual */}
      <div className="flex justify-center items-center mb-6">
        <div className="btn-group">
          <button 
            className={`btn ${!isAnnual ? 'bg-gray-800 text-grey' : 'bg-gray-300 text-black'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button 
            className={`btn ${isAnnual ? 'bg-gray-800 text-grey' : 'bg-gray-300 text-black'}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual (10% off)
          </button>
        </div>
      </div>

            {/* Table Layout for Pricing Plan Comparison */}
            <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th className="py-2 px-3 text-left bg-gray-800 text-grey font-bold">Features</th>
              {pricingPlans.map((plan: PricingPlan, index) => (
                <th key={index} className="py-2 px-3 text-center bg-gray-800 text-grey font-bold">
                  {plan.title} <br /> 
                  <span className="badge badge-lg badge-primary mt-2">
                    {calculatePrice(plan.price)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Career Titles First */}
            <tr className="bg-gray-100">
              <td className="py-2 px-3 font-semibold text-base">Prepare for:</td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="py-2 px-3 text-center">
                  <span className="badge badge-success badge-md">
                    {plan.careerTitles.join(', ')}
                  </span>
                </td>
              ))}
            </tr>
            {/* Feature Comparison */}
            {allFeatures.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-3 text-base">{feature.label}</td>
                {pricingPlans.map((plan, i) => (
                  <td key={i} className="py-2 px-3 text-center">
                    {typeof plan.features[feature.key] === "string" ? (
                      <span className="badge badge-info">{plan.features[feature.key]}</span>
                    ) : plan.features[feature.key] ? (
                      <span className="badge badge-success">✔️</span>
                    ) : (
                      <span className="badge badge-error">❌</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Pricing
