import React from 'react';

const Education = () => {
  const qualifications = [
    {
      degree: 'Schooling',
      institution: 'Tagore Senior Secondary School',
      year: '2008 - 2021',
    },
    {
      degree: 'Bachelors of Technology in Data Science',
      institution: 'Vivekanda Institute of Professional Studies',
      year: '2021 - 2025',
    },
    // Add more qualifications as needed
  ];

  return (
    <section className="bg-Edu-pattern bg-cover border-white border-2 p-8 my-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Education</h2>
      <ul className="space-y-4">
        {qualifications.map((qual, index) => (
          <li key={index} className=" p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-200">{qual.degree}</h3>
            <p className="text-gray-400">{qual.institution}</p>
            <p className="text-gray-500">{qual.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
