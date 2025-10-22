import Image from "next/image"
import { Button } from "./ui/button"
import { Github, Globe, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

function HeroCard() {

    const cardIcons = [
        {name:'Github',Icon:Github,href:"https://github.com/haile19-b"},
        {name:'Linkedin',Icon:Linkedin,href:"https://www.linkedin.com/in/hailegebriel-bekalu-44237533b/"},
        {name:'Email',Icon:Mail,href:"mailto:hailegebrielbekalu@gmail.com"}
    ]

  return (
    <div className="w-full h-[650px] bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 from-slate-100 to-slate-200 flex flex-col items-center px-8 py-8 rounded-3xl shadow-xl">
        {/* Profile Image */}
        <div className="w-64 h-64 relative mb-6">
            <Image 
              className="rounded-full object-cover border-4 border-white dark:border-slate-300" 
              src='/Haile2.jpg' 
              alt="HaileGebriel Bekalu" 
              fill 
            />
        </div>
        
        {/* Text Content */}
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">HaileGebriel Bekalu</h1>
            <h2 className="text-xl text-blue-400 dark:text-blue-600 font-semibold mb-4">
                Full-Stack Developer
            </h2>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
                Passionate developer crafting digital experiences with modern technologies. 
                Specialized in building responsive web applications with clean, efficient code.
            </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-auto">
            {cardIcons.map((icon,index)=>(
                <Link key={index} href={icon.href} target="_blank" rel='noopener noreferrer'>
                <Button variant="ghost" size="icon" className="hover:bg-slate-700 dark:hover:bg-purple-500">
                    <icon.Icon className="w-5 h-5" />
                </Button>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default HeroCard