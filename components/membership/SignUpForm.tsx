import React from "react";

const SignUpForm = () => {
  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Sign Up for PulseFit</h2>
      <form action="/submit" method="POST" className="grid grid-cols-2 gap-4">
        {/* Personal Information */}

        {/* name */}
        <div className="mb-4 flex-grow">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* mail */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* birth */}
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Membership Options */}
        <div className="mb-4">
          <label
            htmlFor="membership"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Membership Tier
          </label>
          <select
            id="membership"
            name="membership"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="essential">Essential Pulse</option>
            <option value="plus">Enhanced Pulse</option>
            <option value="elite">Ultimate Pulse</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="paymentPlan"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Payment Plan
          </label>
          <select
            id="paymentPlan"
            name="paymentPlan"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Street Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="city"
            name="city"
            required
            placeholder="City"
            className="mt-6 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="state"
            name="state"
            required
            placeholder="State/Province"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="zip"
            name="zip"
            required
            placeholder="Zip/Postal Code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="country"
            name="country"
            required
            placeholder="Country"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Emergency Contact */}

        {/* Medical Conditions */}
        <div className="mb-4">
          <label
            htmlFor="medicalConditions"
            className="block text-sm font-medium text-gray-700"
          >
            Medical Conditions or Special Requirements
          </label>
          <textarea
            id="medicalConditions"
            name="medicalConditions"
            className="resize-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4 flex gap-4 ">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="terms"
              required
              className=" h-4 w-4 accent-red-700 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-700 hover:text-blue-900">
                terms and conditions
              </a>
            </span>
          </label>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className=" py-4 px-8 bg-red-700 text-white font-bold text-lg  shadow-sm transition-all
             hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
