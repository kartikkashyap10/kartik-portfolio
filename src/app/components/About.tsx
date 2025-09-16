import React from 'react';

// About Component
export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Senior Software Engineer with 3+ years of experience in full-stack development, 
            specializing in Node.js, React, TypeScript, and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

// Experience Component  
export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <h2 className="section-title">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
            <p className="text-blue-600 dark:text-blue-400">Atrina Technologies • Jul 2024 - Present</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Building scalable peer-to-peer finance platforms with Node.js, Next.js, AWS, and PostgreSQL.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">FlyEase</h3>
            <p className="text-gray-600 dark:text-gray-400">Airline Ticket Booking System built with Node.js, Express, and MySQL</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">SnapCut</h3>
            <p className="text-gray-600 dark:text-gray-400">Object Detection Mobile App using React Native and Deep Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <h2 className="section-title">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Languages</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">JavaScript, TypeScript, Python, Go, SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Component
export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <h2 className="section-title">Education</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">B.E. Computer Engineering</h3>
            <p className="text-blue-600 dark:text-blue-400">Xavier Institute Of Engineering • 2017-2021</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">CGPA: 8.45/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievements Component
export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-width">
        <h2 className="section-title">Achievements</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Microsoft Azure Administrator Associate</li>
            <li>• Deep Learning Specialization</li>
            <li>• Published two research papers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss opportunities and collaborate on exciting projects.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> kykashyap10@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Phone:</strong> +91-9082415471
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-width px-4 text-center">
        <p>&copy; 2025 Kartik Kashyap. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Default exports (keeping the existing structure)
const About_Default = About;
const Experience_Default = Experience;
const Projects_Default = Projects;
const Skills_Default = Skills;
const Education_Default = Education;
const Achievements_Default = Achievements;
const Contact_Default = Contact;
const Footer_Default = Footer;

export { 
  About_Default as default 
};
export default About_Default;
