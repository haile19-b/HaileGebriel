import AboutMe from "@/components/AboutMe";
import HeroPage from "@/components/HeroPage";
export default function Home() {
  return (
    <div className="max-w-screen w-full py-3 flex flex-col gap-20">

       {/* hero section */}

       <section id="hero">
        <HeroPage/>
       </section>

       {/* AboutMe section */}

       <section id="skill">
        <AboutMe/>
       </section>

    </div>
  );
}
