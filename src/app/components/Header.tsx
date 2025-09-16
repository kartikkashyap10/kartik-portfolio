import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Kartik Kashyap
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
