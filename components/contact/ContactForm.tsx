import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-2xl ">
      <h3 className="text-3xl  uppercase font-bold mb-8">
        Send us a Message !
      </h3>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-base font-bold text-gray-700"
            >
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
            <label
              htmlFor="email"
              className="block text-base font-bold text-gray-700"
            >
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
          <label
            htmlFor="subject"
            className="block text-base font-bold text-gray-700"
          >
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
          <label
            htmlFor="message"
            className="block text-base font-bold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border resize-none border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="px-6 py-2 bg-accent text-white font-semibold hover:bg-black transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
