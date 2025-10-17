import Image from "next/image";

function Skill() {
    const skills = [
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user experiences with modern design tools. Focus on user-centered design principles, wireframing, and prototyping.",
        images: ['/figma.png']
      },
      {
        title: "Frontend Development", 
        description: "Building responsive and performant web applications using modern frameworks. Specialized in React ecosystem with TypeScript.",
        images: ['/javascript.jpg', '/next.png', '/react.png', '/tailwind.webp', '/typescript.jpg']
      },
      {
        title: "Backend Development",
        description: "Developing robust server-side solutions and RESTful APIs. Experience with database design and server management.",
        images: ['/express.png', '/node.jpg', '/supabase.png']
      },
      {
        title: "Database",
        description: "Designing and managing efficient database systems with both SQL and NoSQL solutions for optimal performance.",
        images: ['/mongo.jpg', '/postgress.jpg']
      },
      {
        title: "DevOps & Technologies",
        description: "Implementing development workflows, version control, and modern tooling for efficient project delivery.",
        images: ['/framer-motion.webp', '/github.jpg', '/rest-api.jpg', '/shadcn.png']
      }
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Skills & Expertise
        </h1>
        
        <div className="max-w-4xl w-full relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          <ul className="space-y-16">
            {skills.map((skill, index) => (
              <li key={index} className="relative flex gap-8 items-start group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Content card */}
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    {skill.description}
                  </p>
                  
                  <div className="pl-2">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 text-lg">
                      Technologies Used:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {skill.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-16 h-16 bg-slate-300 dark:bg-slate-500 rounded-xl p-2 shadow-md border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-transform hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-600">
                          <Image 
                            src={img} 
                            alt={`${skill.title} technology`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Skill;