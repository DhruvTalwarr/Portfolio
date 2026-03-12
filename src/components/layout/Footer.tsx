"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0">
          
          <div className="flex flex-col items-center md:items-start">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold tracking-tight mb-2 hover:opacity-80 transition-opacity"
            >
              Dhruv<span className="text-primary">.ai</span>
            </button>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              Architecting intelligent multi-agent systems and leveraging generative AI for complex problem-solving.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/DhruvTalwarr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhruv-talwar-11710026b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-blue-400 hover:border-blue-400/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:talwardhruv49@gmail.com" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Dhruv Talwar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with futuristic aesthetics & built with <span className="text-primary">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
