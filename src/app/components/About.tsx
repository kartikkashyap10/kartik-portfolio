import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Senior Software Engineer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With 3+ years of experience in full-stack development, I specialize in building 
                scalable applications using modern technologies. My expertise spans across Node.js, 
                React, TypeScript, Python, and cloud platforms.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about creating efficient solutions that drive business growth and 
                enhance user experiences. Currently focusing on peer-to-peer finance platforms 
                and enterprise applications.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Quick Facts
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  3+ Years Experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Full-Stack Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cloud Architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
