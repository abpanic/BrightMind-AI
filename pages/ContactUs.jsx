import { useState } from 'react';
import workExperienceOptions from '../data/workExperienceOptions.json';
import countrycodes from '../data/countryCodes.json'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    workExperience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree endpoint URL
    const formspreeEndpoint = 'https://formspree.io/f/your-form-id';

    // Send form data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        workExperience: formData.workExperience
      }),
    });

    // If form submission is successful, show the popup
    if (response.ok) {
      setSubmitted(true); // Show the thank-you popup
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        workExperience: ''
      }); // Clear the form
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Become AI expert : Start Here</h1>

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

        {/* Phone Number Input with Country dial_code */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <div className="flex">
            {/* Country dial_code Dropdown */}
            <select
              id="countrydial_code"
              name="countrydial_code"
              value={formData.countrydial_code}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded-l w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="" disabled>Select</option>
              {countrycodes.map((country) => (
                <option key={country.dial_code} value={country.dial_code}>
                  {country.emoji} ({country.dial_code})
                </option>
              ))}
            </select>
            {/* Phone Number Input */}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="shadow appearance-none border rounded-r w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
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