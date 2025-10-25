import { ProjectType } from "@/types";

export const Projects:ProjectType[] = [
    {
        name: "Real-Time Chat Application (were-mereja)",
        image: "/real-chat-app.png",
        description: "A real-time chat application built with Supabase to master various aspects including authentication, real-time database connections, and user management. Features instant messaging with seamless synchronization.",
        techUsed: ['Next.js', 'Supabase', 'Tailwind'],
        liveDemo: 'https://were-mereja.vercel.app/',
        sourceCode: 'https://github.com/haile19-b'
    },
    {
        name: "English Voice Assistant",
        image: "/voice-assistance.png",
        description: "An interactive application that explores text-to-speech and speech-to-text conversion technologies. Designed to help improve English pronunciation and conversation skills through practical interaction.",
        techUsed: ['Next.js', 'Tailwind', 'Supabase'],
        liveDemo: 'https://english-voice-assistant.vercel.app/',
        sourceCode: 'https://github.com/haile19-b'
    },
    {
        name: "E-Commerce Platform",
        image: "/ecommerce.png",
        description: "A comprehensive e-commerce application developed while learning Next.js, serving as a capstone project for Software Engineering Fundamentals. Implements core e-commerce functionality with modern web development practices.",
        techUsed: ['Next.js', 'Tailwind', 'MongoDB'],
        liveDemo: 'https://e-commerce-project-haile.vercel.app/',
        sourceCode: 'https://github.com/haile19-b'
    },
    {
        name: "AI Chat Assistant",
        image: "/chat-app.png",
        description: "An AI-powered chatbot application that represents my initial exploration of integrating artificial intelligence into projects. This assistant is deployed on my portfolio to automatically answer questions about my background and experience for visitors.",
        techUsed: ['Next.js', 'Tailwind'],
        liveDemo: 'https://simple-chat-bot-using-next-js.vercel.app/',
        sourceCode: 'https://github.com/haile19-b'
    },
    {
        name: "RAAG AI Assistant",
        image: "/raag.png",
        description: "An ongoing project developed through the CSEC-ASTU club, focusing on RAG (Retrieval-Augmented Generation) applications. Currently in development phase with core concepts implemented and one completed project awaiting deployment.",
        techUsed: ['Next.js', 'Tailwind', 'Express.js', 'MongoDB Vector Search'],
        liveDemo: '',
        sourceCode: 'https://github.com/haile19-b'
    }
]