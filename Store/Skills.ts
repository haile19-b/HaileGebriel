import { SkillType } from "@/types";

export const Skills:SkillType[] = [
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