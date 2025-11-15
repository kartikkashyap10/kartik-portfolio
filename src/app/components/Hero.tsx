export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="container-width section-padding text-center">
        <div className="fade-in">
          <div className="mb-8">
            <img 
              src="/api/placeholder/200/200" 
              alt="Kartik Kashyap" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-gradient">Kartik Kashyap</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              3+ years of experience in full-stack development, specializing in Node.js, React, TypeScript, and cloud technologies. 
              Currently building scalable peer-to-peer finance platforms at Atrina Technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.657-.398l-5.464 1.389a1 1 0 01-1.25-1.25l1.389-5.464A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
              </svg>
              Get In Touch
            </a>
            <a 
              href="/resume/Kartik_resume_updated.pdf" 
              download
              className="btn-secondary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="slide-up">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="slide-up">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="slide-up">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
            </div>
            <div className="slide-up">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">53%</div>
              <div className="text-gray-600 dark:text-gray-400">Efficiency Boost</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}