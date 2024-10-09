import React from 'react'

const EnterprisePartnerships: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">Enterprise Partnerships</h1>
      <p className="text-lg text-grey-600 text-center mb-12">
        Empower your organization with AI-driven solutions and upskill your teams with personalized training programs tailored for your business.
      </p>

      {/* Why Partner with Us Section */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Partner with Bright-Mind AI?</h2>
        <ul className="list-disc list-inside text-lg text-grey-700">
          <li className="mb-3">Customized AI Training Programs tailored to your organization's specific needs.</li>
          <li className="mb-3">Access to Industry Experts and Mentors who provide hands-on guidance to your teams.</li>
          <li className="mb-3">Real-World AI Project Consultation to implement AI solutions in your business.</li>
          <li className="mb-3">On-Site and Remote Workshops for team collaboration and skill development.</li>
          <li className="mb-3">Priority Support for enterprises with dedicated account managers.</li>
        </ul>
      </div>

      {/* Services Offered Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Custom AI Training</h3>
          <p className="text-grey-600 mb-4">
            Upskill your teams with custom AI training programs designed to meet the specific needs of your business.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">AI Project Consulting</h3>
          <p className="text-grey-600 mb-4">
            Our AI experts will help your company design, develop, and implement AI-driven solutions for real-world challenges.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Workshops and Webinars</h3>
          <p className="text-grey-600 mb-4">
            Engage your teams with on-site or remote workshops focused on AI, machine learning, and data science.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg text-grey-600 mb-4">
          Ready to bring AI to your organization? Let’s collaborate to create AI solutions that fit your needs.
        </p>
        <button className="bg-purple-500 text-grey py-3 px-6 rounded-md hover:bg-purple-600">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default EnterprisePartnerships