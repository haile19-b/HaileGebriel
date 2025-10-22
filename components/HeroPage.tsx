'use client'
import { UseProjectState } from "@/Store/Zustand"
import HeroCard from "./HeroCard"

function HeroPage() {

  const {num_of_Projects} = UseProjectState()

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full h-full">
        <div className="">
        <HeroCard/>
        </div>
        <div className="flex flex-col gap-10">
           <div className="max-w-full lg:max-w-4/5 text-center">
            <span className="block text-5xl md:text-6xl lg:text-8xl text-center">Full-Stack</span>
            <span className="block text-4xl md:text-4xl lg:text-7xl text-balance">Developer</span>
           </div>
           <div className="max-w-full lg:max-w-4/5 px-5 py-3 text-center font-serif">
            <p className="text-[17px] md:text-2xl">
            Who crafts high-performance web and AI products. Transforms complex ideas into streamlined,
             scalable solutions.
            </p>
           </div>
           <div className="flex justify-around font-bold text-sm md:text-2xl">
            <span className="flex flex-col items-center justify-center text-center max-w-30">+{num_of_Projects}
                <p className="text-center">PROJECTS COMPLETED</p>
            </span>
            <span className="flex flex-col items-center justify-center text-center max-w-30">+3
                <p className="text-center">YEARS OF EXPERIENCE</p>
            </span>
            <span className="flex flex-col items-center justify-center text-center max-w-30">+2
                <p className="text-center">WORLDWIDE CLIENTS</p>
            </span>
           </div>
        </div>
    </div>
  )
}

export default HeroPage