'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { ScrollSection } from "./NavBar"
import Link from "next/link"

function Footer() {

  const cardIcons = [
    {name:'Github',Icon:Github,href:"https://github.com/haile19-b"},
    {name:'Linkedin',Icon:Linkedin,href:"https://www.linkedin.com/in/hailegebriel-bekalu-44237533b/"},
    {name:'Email',Icon:Mail,href:"mailto:hailegebrielbekalu@gmail.com"}
]

  return (
    <div className="w-full py-12 flex flex-col gap-5 justify-center items-center bg-gradient-to-b from-slate-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div
        onClick={()=>ScrollSection('hero')} 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-3xl font-bold cursor-pointer">
            HaileGebriel Bekalu
        </div>
        <div className="max-w-md flex justify-center items-center">
            <p className="text-center text-md font-serif text-slate-400">
            Let&#39;s build something amazing together. I&#39;m always open to discussing new opportunities and creative projects.
            </p>
        </div>
        <div className="flex gap-4">

          {cardIcons.map((icon,index)=>(
            <Link key={index} href={icon.href} target="-blank" rel="noopener noreferrer">
            <Button variant='ghost' className="text-slate-100 bg-gradient-to-b from-blue-500 to-purple-500  hover:scale-110 transition-all" size='icon'><icon.Icon/></Button>
            </Link>
          ))}

        </div>
        <div className="text-slate-400 dark:text-slate-500 text-sm cursor-pointer">
        © {new Date().getFullYear()} HaileGebriel Bekalu. All rights reserved.
        </div>
    </div>
  )
}

export default Footer