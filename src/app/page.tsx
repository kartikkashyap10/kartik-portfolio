import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Kartik Kashyap</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Senior Software Engineer</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>📧 kykashyap10@gmail.com</span>
            <span>📱 +91-9082415471</span>
            <span>🔗 <a href="https://github.com/kartikkashyap10" className="text-blue-600 dark:text-blue-400">GitHub</a></span>
            <span>💼 <a href="https://linkedin.com/in/kartik-kashyap" className="text-blue-600 dark:text-blue-400">LinkedIn</a></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Full-Stack Software Engineer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            3+ years of experience building scalable applications with Node.js, React, AWS, and modern cloud technologies. 
            Specialized in backend infrastructure, microservices, and DevOps automation.
          </p>
          <div className="mt-8">
            <a href="/resume/Kartik_resume_updated.pdf" 
               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold">Senior Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Atrina Technologies | Jul 2024 - Present</p>
              <p className="mt-2">Building and scaling a peer-to-peer finance platform from scratch, focusing on backend infrastructure, borrower-lender flows, and credit risk systems.</p>
              <p className="text-sm text-gray-500 mt-1">Tech: Node.js, Next.js, AWS, PostgreSQL</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold">Software Development Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">LenDenClub | Jul 2023 - Apr 2024</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Integrated Appsflyer attribution platform, leading to 28% reduction in funnel drop rate</li>
                <li>Automated lender reinvestment process ensuring regulatory compliance</li>
                <li>Implemented scheme limit control API resulting in 1-2 crore monthly business increase</li>
              </ul>
              <p className="text-sm text-gray-500 mt-1">Tech: Django, React.js, AWS, PostgreSQL</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Xoriant | Jul 2021 - Jul 2024</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Provisioned scalable infrastructure on Azure and GCP using Terraform</li>
                <li>Designed Terratest scripts reducing manual debugging time by 53%</li>
                <li>Created golden images with Packer reducing boot time by 30%</li>
              </ul>
              <p className="text-sm text-gray-500 mt-1">Tech: Go, Node.js, Terraform, Azure, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">FlyEase</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Scalable Airline Ticket Booking System with Authentication, Authorization, Seat Booking, Payment Processing, and Notification Service.</p>
              <p className="text-sm text-gray-500">Tech: Node.js, Express, MySQL, RabbitMQ, Microservices</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SnapCut</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">React Native mobile app with BASnet algorithm for object detection and separation, enabling users to cut and paste objects directly.</p>
              <p className="text-sm text-gray-500">Tech: React Native, Deep Learning, OpenCV, Google Cloud Vision API</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Python', 'TypeScript', 'Go', 'SQL'].map(skill => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'React.js', 'Next.js', 'Django', 'Express'].map(skill => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker'].map(skill => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL'].map(skill => (
                  <span key={skill} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold">B.E. Computer Engineering</h3>
                <p className="text-gray-600 dark:text-gray-300">Xavier Institute Of Engineering</p>
                <p className="text-gray-600 dark:text-gray-300">Aug 2017 - May 2021</p>
                <p className="font-semibold mt-2">CGPA: 8.45/10</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <span>Top of the class with 10 SGPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">📄</span>
                  <span>Published two research papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">🎓</span>
                  <span>Microsoft Azure Administrator Associate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">🧠</span>
                  <span>Deep Learning Specialization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">👨‍🏫</span>
                  <span>Delivered Go training sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-4">Let's connect and build something amazing together!</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:kykashyap10@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
            <a href="https://github.com/kartikkashyap10" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kartik-kashyap" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          <p className="mt-4 text-gray-400">© 2025 Kartik Kashyap. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
