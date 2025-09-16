import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              FlyEase - Airline Ticket Booking System
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A comprehensive airline ticket booking system built with microservices architecture.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                MySQL
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                Microservices
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:underline">
                GitHub
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              SnapCut - Object Detection Mobile App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A mobile application using deep learning for real-time object detection and image processing.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                React Native
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                Deep Learning
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                TensorFlow
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:underline">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
