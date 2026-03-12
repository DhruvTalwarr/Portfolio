"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, FileText, ArrowRight, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MouseEvent } from "react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 3D Image Container */}
        <motion.div
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           style={{
             rotateX,
             rotateY,
             transformStyle: "preserve-3d",
           }}
           initial={{ opacity: 0, scale: 0.5, y: 50 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="relative w-48 h-48 md:w-64 md:h-64 mb-12 group cursor-pointer"
        >
          {/* Glowing Aura behind image */}
          <div 
             className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
             style={{ transform: "translateZ(-50px)" }}
          />
          {/* Orbital rings around the image to enhance space theme */}
          <div className="absolute inset-[-20%] rounded-full border border-blue-400/30 opacity-50 group-hover:opacity-100 transition-opacity duration-1000 rotate-45" style={{ transform: "translateZ(10px)", boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)" }} />
          <div className="absolute inset-[-40%] rounded-full border border-purple-500/20 opacity-30 group-hover:opacity-80 transition-opacity duration-1000 -rotate-45" style={{ transform: "translateZ(-20px)", boxShadow: "0 0 30px rgba(167, 139, 250, 0.1)" }} />

          {/* The image container */}
          <div 
            className="absolute inset-0 rounded-full border border-white/20 bg-black/50 overflow-hidden shadow-2xl"
            style={{ transform: "translateZ(30px)" }}
          >
             <Image 
               src="/images/profile.jpg" 
               alt="Dhruv Talwar" 
               fill
               className="object-cover object-top scale-110 group-hover:scale-105 transition-transform duration-700"
               priority
             />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md"
        >
          <BrainCircuit size={16} />
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="text-glow text-white">Dhruv Talwar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
        >
          <span className="text-foreground">AI Engineer</span> 
          {" | "} Generative AI {" | "} Agentic Systems {" | "} Computer Vision
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-lg text-muted-foreground/80 mb-10 leading-relaxed"
        >
          Building intelligent systems using LangChain, LangGraph, LLMs, and Machine Learning. 
          Bridging the gap between cutting-edge AI research and scalable real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" variant="glow" onClick={scrollToProjects} className="group border border-blue-500/30">
            View Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="icon" variant="outline" asChild className="rounded-full w-12 h-12 bg-white/5 border-white/10 hover:bg-white/10">
            <a href="https://github.com/DhruvTalwarr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </Button>
          
          <Button size="icon" variant="outline" asChild className="rounded-full w-12 h-12 bg-white/5 border-white/10 hover:bg-white/10">
            <a href="https://www.linkedin.com/in/dhruv-talwar-11710026b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </Button>
          
          <Button size="lg" variant="outline" asChild className="gap-2 bg-white/5 border-white/10 hover:bg-white/10">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={18} />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
