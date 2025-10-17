import AboutMe from "@/components/AboutMe";
import HeroPage from "@/components/HeroPage";
import Skill from "@/components/Skill";
import ProjectPage from "@/components/ProjectPage";
export default function Home() {
  return (
    <div className="max-w-screen w-full py-3 flex flex-col gap-20">

       {/* hero section */}

       <section id="hero">
        <HeroPage/>
       </section>

       {/* AboutMe section */}
       <section id="aboutMe">
        <AboutMe/>
       </section>

       {/* Skill section */}
       <section id="skill">
        <Skill/>
       </section>

       {/* Project section */}
       <section id="project">
        <ProjectPage/>
       </section>

    </div>
  );
}
