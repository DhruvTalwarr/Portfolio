"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Currently open for new opportunities. Whether you have a question about an AI project or just want to connect, I&apos;ll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:talwardhruv49@gmail.com" className="font-medium hover:text-primary transition-colors">
                    talwardhruv49@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/dhruv-talwar-11710026b', '_blank')}>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Network</p>
                  <span className="font-medium hover:text-blue-400 transition-colors">
                    LinkedIn /dhruv-talwar-11710026b
                  </span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://github.com/DhruvTalwarr', '_blank')}>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-foreground group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Code</p>
                  <span className="font-medium hover:text-white transition-colors">
                    GitHub @DhruvTalwarr
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-3 glass-card p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
              
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquareText size={20} className="text-primary" />
                Send a message
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground ml-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Hello Dhruv, I'd like to talk about..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                </div>
                
                <Button variant="glow" size="lg" className="w-full group mt-4">
                  Launch Message 
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
