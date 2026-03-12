"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  BrainCircuit, 
  Eye, 
  Server, 
  Database 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={20} />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    skills: ["Python", "C/C++"]
  },
  {
    title: "AI / ML",
    icon: <Cpu size={20} />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
  },
  {
    title: "Generative AI",
    icon: <BrainCircuit size={20} />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    skills: ["LangChain", "LangGraph", "RAG", "LLM Integration", "Agentic Systems"]
  },
  {
    title: "Computer Vision",
    icon: <Eye size={20} />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    skills: ["OpenCV", "CNNs", "Image Classification", "Object Detection"]
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    skills: ["FastAPI", "Django", "Node.js", "Docker"]
  },
  {
    title: "Data Tools",
    icon: <Database size={20} />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    skills: ["NumPy", "Pandas", "Matplotlib", "Vector DBs"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of the tools, frameworks, and technologies I leverage to build intelligent systems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color} ${category.border} border`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-muted-foreground hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
