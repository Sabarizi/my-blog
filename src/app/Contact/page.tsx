"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-gray-700 text-center mb-8">
        Have questions or comments? We would love to hear from you. Fill out the form below, and we will get back to you as soon as possible.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Thank you!</h2>
            <p className="text-gray-700">Your message has been successfully sent. We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                rows={5}
                placeholder="Your Message"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
