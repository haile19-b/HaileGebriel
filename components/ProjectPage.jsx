'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { UseProjectState } from "@/Store/Zustand"

function ProjectPage() {
  // const projects = [
  //   {
  //     name: "Real-Time Chat Application",
  //     description: "A full-stack messaging platform with real-time messaging, user authentication, and responsive design. Built with modern web technologies for seamless communication.",
  //     image: '/Haile2.jpg',
  //     technologies: ["Next.js", "Socket.io", "Tailwind", "MongoDB"],
  //     liveLink: "#",
  //     githubLink: "#"
  //   },
  //   {
  //     name: "Real-Time Chat Application",
  //     description: "A full-stack messaging platform with real-time messaging, user authentication, and responsive design. Built with modern web technologies for seamless communication.",
  //     image: '/real-chat-app.png',
  //     technologies: ["Next.js", "Socket.io", "Tailwind", "MongoDB"],
  //     liveLink: "#",
  //     githubLink: "#"
  //   },
  //   {
  //     name: "Real-Time Chat Application",
  //     description: "A full-stack messaging platform with real-time messaging, user authentication, and responsive design. Built with modern web technologies for seamless communication.",
  //     image: '/real-chat-app.png',
  //     technologies: ["Next.js", "Socket.io", "Tailwind", "MongoDB"],
  //     liveLink: "#",
  //     githubLink: "#"
  //   },
  // ]

  const {Projects} = UseProjectState();

  const [myProjects, setMyProjects] = useState([])

  useEffect(() => {
    if (Projects) {
      setMyProjects(Projects)
    }
  }, [Projects])

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        
        {myProjects.map((prj,indx)=>(
          <div key={indx} className="bg-white dark:bg-slate-800 my-6 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Project Image */}
            <div className="lg:w-1/2">
              <div className="relative h-64 lg:h-80 bg-slate-100 dark:bg-slate-700 flex items-center justify-center rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600">
                <Image 
                  src={prj.image} 
                  width={600} 
                  height={400} 
                  alt={prj.name}
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                {prj.name}
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {prj.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {prj.techUsed.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <ExternalLink size={18} />
                  <Link href={prj.liveDemo}>Live Demo</Link>
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-600 px-6 py-3 rounded-lg flex items-center gap-2">
                  <Github size={18} />
                  <Link href={prj.sourceCode}>Source Code</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default ProjectPage