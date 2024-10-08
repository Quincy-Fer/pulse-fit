"use client";

import { classesData } from "@/constants";
import { useState } from "react";

const Calendar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClasses, setFilteredClasses] = useState(classesData);

  // Handle the search action
  const handleSearch = () => {
    const results = classesData.filter((classItem) =>
      classItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClasses(results);
  };

  // Create a function to group classes by day for better display
  const groupByDay = (classes: typeof classesData) => {
    const grouped: Record<string, typeof classesData> = {};

    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
      grouped[day] = classes.filter((classItem) => classItem.day === day);
    });

    return grouped;
  };

  const groupedClasses = groupByDay(filteredClasses);

  return (
    <div className="p-16">
      <h3 className="text-3xl mb-6">Class Calendar</h3>
      <p className="uppercase tracking-[1px] text-gray-700 mb-4">
        Find out when your favorite class starts
      </p>
      <div className="md:flex mb-8">
        <input
          type="text"
          placeholder="Search for a class..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400  mr-4 max-sm:mb-4"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-red-700 text-white  hover:bg-black transition-all"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 ">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-4  bg-red-700">
            <h3 className="text-lg text-white font-semibold text-center mb-4">
              {day}
            </h3>
            {groupedClasses[day].length ? (
              groupedClasses[day].map((classItem) => (
                <div
                  key={classItem.id}
                  className="p-2 border  bg-gray-100 mb-2"
                >
                  <h4 className="text-md font-semibold mb-2">
                    {classItem.name}
                  </h4>
                  <p className="text-sm pb-2">{classItem.time}</p>
                </div>
              ))
            ) : (
              <p className="text-base text-center text-white">No classes!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
