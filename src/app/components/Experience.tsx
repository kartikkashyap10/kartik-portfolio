import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Senior Software Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Atrina Technologies
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Jul 2024 - Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Building peer-to-peer finance platform with Node.js, Next.js, AWS, PostgreSQL
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Development Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    LenDenClub
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Jul 2023 - Apr 2024
                </span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Integrated attribution platforms, automated processes, improved business metrics</li>
                <li>• 28% reduction in funnel drop rate, 1-2 crore monthly business increase</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Xoriant
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Jul 2021 - Jul 2024
                </span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Infrastructure provisioning with Terraform, Azure, GCP</li>
                <li>• 53% reduction in manual debugging time, 30% boot time improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
