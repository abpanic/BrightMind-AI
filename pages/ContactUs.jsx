import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaEnvelope } from 'react-icons/fa';
import workExperienceOptions from '../data/workExperienceOptions.json';
import pricingPlans from '../data/pricingPlans.json';
import Link from 'next/link';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    careerPath: '',
    message: '',
    workExperience: '',
    couponCode: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isWhatsappAllowed, setIsWhatsappAllowed] = useState(false);
  const [errors, setErrors] = useState({ emailFailed: false, supabaseFailed: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the email API
    const sendGridApiEndpoint = '/api/sendEmail'; 
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
        message: formData.message || '', // Optional message
        workExperience: formData.workExperience,
        couponCode: formData.couponCode || '' // Optional coupon code
      }),
    });

    const result = await response.json();

    if (response.ok) {
      if (!result.emailSuccess || !result.supabaseSuccess) {
        setErrors({
          emailFailed: !result.emailSuccess,
          supabaseFailed: !result.supabaseSuccess,
        });
        setErrorModalVisible(true); // Show modal if either fails
      } else {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        careerPath: '',
        message: '',
        workExperience: '',
        couponCode: ''
      });
    }
  } else {
    setErrorModalVisible(true);
  }
};

  return (
    <div className="min-h-screen bg-transparent p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Heading across both columns */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center lg:col-span-2">
          Jump Start your Career: Start Here
        </h1>

        {/* Contact Form Section */}
        <div>
          {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Thank you for contacting us!</h2>
                <p className="text-center text-gray-700">We will get back to you in 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 text-white px-4 py-2 rounded-full focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Error Modal */}
          {errorModalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Limit Reached for Today!</h2>
                <p className="text-gray-700 text-center mb-4">
                  We’ve reached our daily limit of 500 inquiries.
                  Please contact us via WhatsApp for immediate assistance.
                </p>
                <Link href="https://wa.me/917025607274" passHref className="block bg-green-500 text-white text-center py-2 rounded-lg mb-4">
                    Reach us on WhatsApp at +91 7025607274
                  
                </Link>
                <button
                  onClick={() => setErrorModalVisible(false)}
                  className="bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 text-white px-4 py-2 rounded-full focus:outline-none w-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Form */}
          <form className="bg-white p-8 rounded-lg shadow-lg w-full" onSubmit={handleSubmit}>
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

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={'in'}
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

            {/* Coupon Code and Message/Query Optional Fields */}
            <div className="mb-4">
              <label htmlFor="couponCode" className="block text-gray-700 text-sm font-bold mb-2">
                Coupon Code
              </label>
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}                
                placeholder="Coupon Code (if any)"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message/Query
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}                
                placeholder="Your Query or Message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 resize-none"
              ></textarea>
            </div>

            {/* Checkbox for Terms & Conditions */}
            <div className="flex items-center mb-1 text-xs">
              <input
                type="checkbox"
                id="agreeTerms"
                className="mr-1"
                checked={isTermsAgreed}
                onChange={(e) => setIsTermsAgreed(e.target.checked)}
                required
              />
              <label htmlFor="agreeTerms">
                Agree to the <a href="/terms" className="underline text-blue-500">Terms & Conditions</a>
              </label>
            </div>

            {/* Checkbox for WhatsApp Contact */}
            <div className="flex items-center mb-1 text-xs">
              <input
                type="checkbox"
                id="whatsappConsent"
                className="mr-1"
                checked={isWhatsappAllowed}
                onChange={(e) => setIsWhatsappAllowed(e.target.checked)}
              />
              <label htmlFor="whatsappConsent">
                Call and reach out via WhatsApp
              </label>
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

        {/* Contact via Email and WhatsApp */}
        <div className="flex flex-col items-center justify-center bg-transparent">
          
          {/* WhatsApp Link */}
          <h2 className="text-white text-2xl font-semibold mb-6">We are also on WhatsApp</h2>
          <h3 className="text-white text-l font-semibold mb-6">Reach us at +91 70256 07274</h3>
          <Link 
            aria-label="Chat on WhatsApp at +91 70256 07274" 
            href="https://wa.me/917025607274?text=I'm%20interested%20in%20Gen%20AI%20career%20path"
            className="mb-8"
          >
            <Image 
              alt="Chat on WhatsApp" 
              src="/assets/WhatsAppButtonGreenSmall.png" 
              width={200} 
              height={150}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>

          {/* Divider for better visual separation */}
          <div className="w-full border-t border-gray-300 my-6"></div>

          {/* Email contact section */}
          <FaEnvelope className="text-white text-4xl mb-4" />
          <p className="text-white text-center text-lg mb-2">Prefer to reach out directly?</p>
          <p className="text-white text-center text-lg font-bold mb-4">bright-mind-ai.counsellor@bright-mind.in</p>
          <p className="text-white text-center text-sm">You'll hear back within 24 hours</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;

