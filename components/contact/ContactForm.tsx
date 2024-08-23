import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch with PulseFit</h2>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
              placeholder="Your Name"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
            placeholder="Subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
