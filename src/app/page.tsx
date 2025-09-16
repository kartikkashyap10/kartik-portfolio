import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hello World! 🚀
        </h1>
        <h2 className="text-2xl text-gray-700 mb-8">
          Kartik Kashyap - Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Senior Software Engineer | Full-Stack Developer
        </p>
        <div className="space-y-4">
          <p className="text-gray-500">
            📧 kykashyap10@gmail.com | 📱 +91-9082415471
          </p>
          <div className="space-x-4">
            <a href="https://github.com/kartikkashyap10" 
               className="text-blue-600 hover:text-blue-800 underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kartik-kashyap" 
               className="text-blue-600 hover:text-blue-800 underline">
              LinkedIn
            </a>
            <a href="/resume/Kartik_resume_updated.pdf" 
               className="text-green-600 hover:text-green-800 underline">
              Resume
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          Portfolio site is now working! 🎉
        </div>
      </div>
    </div>
  );
}
