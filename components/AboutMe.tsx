function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate developer crafting digital solutions that make a difference
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          
          {/* Passion Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Passionate Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-purple-200 dark:border-purple-800">
              I thrive on transforming complex problems into elegant, user-friendly solutions. My approach combines 
              clean code architecture with thoughtful design, ensuring reliable and maintainable applications. 
              I believe in building what users actually need, when they need it, with strong emphasis on effective 
              communication throughout the development process.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Software Engineering Student
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-blue-200 dark:border-blue-800">
              I'm currently in my 3rd year of Software Engineering at Adama Science and Technology University (ASTU), 
              one of Ethiopia's leading institutions for technology education. Here, I'm building a strong foundation 
              in computer science principles while staying current with modern development practices.
            </p>
          </div>

          {/* Club Experience Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              CSEC-ASTU Club Member
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-green-200 dark:border-green-800">
              As an active member of the Computer Science and Engineering Club at ASTU, I participate in the development 
              division where we collaborate on projects, organize tech events, and foster a learning community. This 
              environment has been instrumental in accelerating my practical skills and connecting with like-minded developers.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe