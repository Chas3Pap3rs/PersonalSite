"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import dynamic from 'next/dynamic';

// Dynamically import AnimationLottie with SSR disabled
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { ssr: false });
import newAnimation from '/public/lottie/contact.json';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData({ name: "", email: "", message: "" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_8k5gsao', 
      'template_se77ipw', 
      e.target, 
      'bT5Ga5MhVGWEorMDw'
    )
    .then((result) => {
      console.log(result.text);
      alert('Your message has been sent successfully!');
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setError(null); // Clear any previous errors
    }, (error) => {
      console.log(error.text);
      setError('An error occurred while sending your message. Please try again later.');
    });
  };

  return (
    <div id="contact" className="relative border-t my-12 border-[#25213b]">
      <Image 
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="text-pink-500 text-[16px] my-24 flex justify-center uppercase tracking-widest">
        [ Contact ]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 md:order-2 justify-center">
          <form onSubmit={handleSubmit} className={`w-[100%] max-w-[800px] mx-auto bg-[#0d1224] p-8 rounded-lg shadow-md ${submitted ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="mb-4">
              <label htmlFor="name" className={`block text-md mb-2 ${submitted ? 'text-gray-500' : 'text-gray-300'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded ${submitted ? 'bg-gray-700 text-gray-500' : 'bg-[#1a1f3a] text-gray-300'}`}
                disabled={submitted}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className={`block text-md mb-2 ${submitted ? 'text-gray-500' : 'text-gray-300'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded ${submitted ? 'bg-gray-700 text-gray-500' : 'bg-[#1a1f3a] text-gray-300'}`}
                disabled={submitted}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className={`block text-md mb-2 ${submitted ? 'text-gray-500' : 'text-gray-300'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded ${submitted ? 'bg-gray-700 text-gray-500' : 'bg-[#1a1f3a] text-gray-300'} h-32`}
                disabled={submitted}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

            <button 
              type="submit" 
              className={`flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider transition-all duration-200 ease-out hover:text-white hover:from-violet-600 hover:to-pink-500 ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={submitted}
            >
              Send
            </button>
          </form>
        </div>

        <div className="order-1 md:order-1 relative rounded-lg">
          <div className="max-w-full md:max-w-[442px] mx-auto">
            <AnimationLottie animationPath={newAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;