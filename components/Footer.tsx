import { Github, Globe, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

function Footer() {
  return (
    <div className="w-full py-12 flex flex-col gap-5 justify-center items-center bg-gradient-to-b from-slate-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-3xl font-bold">
            HaileGebriel Bekalu
        </div>
        <div className="max-w-md flex justify-center items-center">
            <p className="text-center text-md font-serif text-slate-400">
            Let's build something amazing together. I'm always open to discussing new opportunities and creative projects.
            </p>
        </div>
        <div className="flex gap-4">
            <Button variant='ghost' className="text-slate-100 bg-gradient-to-b from-blue-500 to-purple-500  hover:scale-110 transition-all" size='icon'><Github/></Button>
            <Button variant='ghost' className="text-slate-100 bg-gradient-to-b from-blue-500 to-purple-500  hover:scale-110 transition-all" size='icon'><Linkedin/></Button>
            <Button variant='ghost' className="text-slate-100 bg-gradient-to-b from-blue-500 to-purple-500  hover:scale-110 transition-all" size='icon'><Mail/></Button>
            <Button variant='ghost' className="text-slate-100 bg-gradient-to-b from-blue-500 to-purple-500  hover:scale-110 transition-all" size='icon'><Globe/></Button>
        </div>
        <div className="text-slate-400 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} HaileGebriel Bekalu. All rights reserved.
        </div>
    </div>
  )
}

export default Footer