"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Activity, Network, Mic, Brain } from "lucide-react";

const projects = [
  {
    title: "Multi-Agent Competitor Analysis",
    description: "A LangChain-based multi-agent architecture that automates competitor research combining Planner, Research, and Report Generator agents utilizing RAG pipelines.",
    tech: ["LangChain", "Python", "Vector DB", "LLMs", "RAG"],
    github: "https://github.com/DhruvTalwarr",
    demo: "#",
    icon: <Network size={40} className="text-primary" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Multilingual Deaf Captioning System",
    description: "Real-time speech-to-text caption generator with low latency and optional sign language output translation designed for accessibility.",
    tech: ["FastAPI", "Whisper", "WebSockets", "React"],
    github: "https://github.com/DhruvTalwarr",
    demo: "#",
    icon: <Mic size={40} className="text-accent" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "FRIDAY AI Voice Assistant",
    description: "Intelligent voice assistant capable of real-time speech recognition, system automation, and comprehensive web information retrieval via LLM tools.",
    tech: ["Python", "SpeechRecognition", "OpenAI API", "Selenium"],
    github: "https://github.com/DhruvTalwarr",
    demo: "#",
    icon: <Activity size={40} className="text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "MRI Vision Diagnostic Suite",
    description: "End-to-end CNN-based computer vision system trained to rapidly and accurately detect brain tumors and anomalies from MRI medical scans.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Flask"],
    github: "https://github.com/DhruvTalwarr",
    demo: "#",
    icon: <Brain size={40} className="text-rose-400" />,
    color: "from-rose-500/20 to-transparent"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of complex intelligent systems and architectures I&apos;ve built.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full relative"
            >
              {/* Background Glow Effect */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-transparent hover:border-white/20 transition-all duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-transparent hover:border-white/20 transition-all duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
