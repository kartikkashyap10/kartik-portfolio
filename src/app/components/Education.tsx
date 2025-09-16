import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  B.E. Computer Engineering
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Xavier Institute Of Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Mumbai, India
                </p>
              </div>
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  2017 - 2021
                </span>
                <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-1">
                  CGPA: 8.45/10
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Key Achievements
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Top of the class with 10 SGPA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Published two research papers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Active participation in technical competitions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
