import React from 'react';

export default function Skills() {
  const skills = {
    Languages: ['JavaScript', 'Python', 'TypeScript', 'Go', 'SQL'],
    Frameworks: ['Node.js', 'Express', 'React.js', 'Django', 'Next.js'],
    Cloud: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker'],
    Databases: ['PostgreSQL', 'MySQL', 'MongoDB']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
