"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent group-hover:w-2 transition-all duration-300" />
            
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex mt-1 p-3 rounded-xl bg-white/5 text-primary border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Terminal size={24} />
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed">
                <p>
                  I am an <span className="text-white font-medium">AI Engineer</span> specializing in bridging the gap between state-of-the-art AI research and scalable, real-world applications. My core expertise lies in <span className="text-primary">Generative AI</span>, <span className="text-accent">Multi-Agent Systems</span>, Computer Vision, and Machine Learning.
                </p>
                <p>
                  I have extensive experience architecting and deploying robust <span className="text-white text-glow">Retrieval Augmented Generation (RAG)</span> pipelines, building LLM-powered autonomous architectures (using LangChain and LangGraph), and engineering real-time intelligent solutions capable of complex reasoning and execution.
                </p>
                <p>
                  Whether it&apos;s crafting advanced multi-agent competitor analysis workflows or fine-tuning vision diagnostic suites, I thrive on translating ambitious conceptual ideas into performant, production-ready AI infrastructure.
                </p>
              </div>
            </div>

            {/* Subtle corner gradients */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
