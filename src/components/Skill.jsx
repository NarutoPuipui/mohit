import React from 'react';

const Skills = () => {
  const skills = [
   
   
    'Html',
   
    'CSS',
    'JavaScript',
    'React',
    'Nextjs',
    'Tailwind CSS',
  ];

  return (
    <section className="bg-Skill-pattern bg-cover text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" border-2 p-4 rounded-lg shadow-md text-center hover:bg-black transition duration-300"
            >
              <p className="text-xl font-medium  hover:text-2xl transition duration-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
