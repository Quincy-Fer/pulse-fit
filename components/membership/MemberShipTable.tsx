import React from "react";

const MembershipTable = () => {
  const benefitsData = [
    {
      benefit: "Gym Access",
      essential: "Standard Hours",
      plus: "24/7",
      elite: "All-Inclusive 24/7",
    },
    {
      benefit: "Virtual Fitness Classes",
      essential: "Unlimited",
      plus: "Unlimited",
      elite: "Unlimited",
    },
    {
      benefit: "In-Person Fitness Classes",
      essential: "2 per week",
      plus: "5 per week",
      elite: "Unlimited",
    },
    {
      benefit: "Locker Room Access",
      essential: "Basic",
      plus: "Premium (with towel service)",
      elite: "Private (with laundry service)",
    },
    {
      benefit: "Fitness Assessment",
      essential: "Complimentary",
      plus: "1 included",
      elite: "1 included",
    },
    {
      benefit: "Personal Training Sessions",
      essential: "None",
      plus: "1 per month",
      elite: "4 per month",
    },
    {
      benefit: "Access to Sauna and Steam Rooms",
      essential: "No",
      plus: "Yes",
      elite: "Yes",
    },
    {
      benefit: "Advanced Recovery Tools",
      essential: "No",
      plus: "No",
      elite: "Yes (massage chairs, cryotherapy)",
    },
    {
      benefit: "Free Guest Passes",
      essential: "No",
      plus: "No",
      elite: "Yes (each month)",
    },
    {
      benefit: "Nutrition Coaching and Meal Plans",
      essential: "No",
      plus: "No",
      elite: "Yes",
    },
    {
      benefit: "Member-Exclusive Workshops",
      essential: "No",
      plus: "Yes",
      elite: "Yes",
    },
    {
      benefit: "Priority Class Booking",
      essential: "No",
      plus: "Yes",
      elite: "Yes",
    },
    {
      benefit: "Wellness Challenges and Contests",
      essential: "No",
      plus: "Yes",
      elite: "Yes",
    },
  ];

  return (
    <div className="overflow-x-auto my-10 px-8">
      <h3 className="text-3xl mb-4">Maximize Your PulseFit Perks</h3>
      <p className="italic text-base tracking-[1px] mb-2">
        Prices are listed at a monthly cost
      </p>

      {/* Desktop and Tablet Version */}
      <table className="min-w-full bg-white border border-black/50 hidden md:table">
        <thead>
          <tr className="bg-black text-white uppercase leading-normal">
            <th className="py-3 px-6 lg:text-lg text-left">Benefit</th>
            <th className="py-3 px-6 lg:text-lg text-center">
              Essential Pulse $35
            </th>
            <th className="py-3 px-6 lg:text-lg text-center">
              Enhanced Pulse $55
            </th>
            <th className="py-3 px-6 lg:text-lg text-center">
              Ultimate Pulse $85
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 lg:text-base font-normal">
          {benefitsData.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-black/50 ${
                index % 2 === 0 ? "bg-red-100" : "bg-white"
              }`}
            >
              <td className="py-3 px-6 text-left lg:whitespace-nowrap font-bold">
                {row.benefit}
              </td>
              <td className="py-3 px-6 text-center">{row.essential}</td>
              <td className="py-3 px-6 text-center">{row.plus}</td>
              <td className="py-3 px-6 text-center">{row.elite}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Version */}
      <div className="md:hidden">
        {benefitsData.map((row, index) => (
          <div
            key={index}
            className={`border border-black/50 mb-4  ${
              index % 2 === 0 ? "bg-red-100" : "bg-white"
            }`}
          >
            <div className="p-4">
              <h4 className="text-lg font-bold mb-2">{row.benefit}</h4>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span className="font-semibold">Essential Pulse:</span>
                  <span>{row.essential}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Enhanced Pulse:</span>
                  <span>{row.plus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Ultimate Pulse:</span>
                  <span>{row.elite}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipTable;
