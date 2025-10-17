'use client'

import { FolderKanban, House, Laptop, Mail, Moon, Sun } from "lucide-react";
import Toggle from "./Toggle-Themes";

const ScrollSection = (section:string) => {
  const element = document.getElementById(section)
  if(element){
    element.scrollIntoView({behavior:'smooth'})
  }
}

function NavBar() {

    const navItems = [
        { name: "home", href: "hero", icon: House},
        { name: "skill", href: 'skill', icon: Laptop  },
        { name: "projec", href: "project", icon: FolderKanban },
        { name: "contact", href: "contact", icon: Mail}
      ];

    return (
      <div className="w-full relative p-4 pt-10 flex items-center bg-transparent">
        <div className="hidden lg:block text-2xl font-extrabold tracking-tight absolute left-4 top-1/2 -translate-y-1/2">
          HaileGebriel
        </div>
  
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-4">
        {navItems.map((item,inx)=>{
            const Icon = Array.isArray(item.icon) ? item.icon[0] : item.icon
            return(
                <div
                key={inx}
                onClick={()=>ScrollSection(item.href)}
                >
                    <Icon className="text-purple-600"/>
                </div>
            )
        })}
        <Toggle/>
        </div>
      </div>
    )
  }
  
  export default NavBar;
  