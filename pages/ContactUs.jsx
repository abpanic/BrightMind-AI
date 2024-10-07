import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Make sure to import the phone input styles
import workExperienceOptions from '../data/workExperienceOptions.json';
import pricingPlans from '../data/pricingPlans.json'; // Import pricing plans for Career Path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    careerPath: '',
    message: '',
    workExperience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // SendGrid API integration (Replace with your API endpoint)
    const sendGridApiEndpoint = '/api/sendEmail'; // This will be your SendGrid API route
    const response = await fetch(sendGridApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        careerPath: formData.careerPath,
        message: formData.message,
        workExperience: formData.workExperience
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        careerPath: '',
        message: '',
        workExperience: ''
      });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Become an AI expert: Start Here</h1>

      {/* Thank you popup */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Thank you for contacting us!</h2>
            <p className="text-center text-gray-700">We will get back to you shortly.</p>
            <button
              onClick={() => setSubmitted(false)} // Close the popup
              className="mt-4 bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 text-white px-4 py-2 rounded-full focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        onSubmit={handleSubmit}
      >
        {/* Full Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Phone Input using react-phone-input-2 */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <PhoneInput
            country={'in'} // Default to India
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true,
            }}
          />
        </div>

        {/* Career Path Dropdown */}
        <div className="mb-4">
          <label htmlFor="careerPath" className="block text-gray-700 text-sm font-bold mb-2">
            Career Path
          </label>
          <select
            id="careerPath"
            name="careerPath"
            value={formData.careerPath}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled>Select Career Path</option>
            {pricingPlans.map((plan) => (
              <option key={plan.title} value={plan.title}>
                {plan.title}
              </option>
            ))}
          </select>
        </div>

        {/* Work Experience Dropdown */}
        <div className="mb-4">
          <label htmlFor="workExperience" className="block text-gray-700 text-sm font-bold mb-2">
            Work Experience
          </label>
          <select
            id="workExperience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled>Select Work Experience</option>
            {workExperienceOptions.map(option => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
