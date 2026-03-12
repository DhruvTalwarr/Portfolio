"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, ExternalLink } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black/20">
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
              Honors & <span className="text-primary">Achievements</span>
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="glass-card relative z-10 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden">
            <div className="absolute -right-20 -top-20 text-amber-500/10 rotate-12 pointer-events-none">
              <Trophy size={200} />
            </div>

            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-amber-500/30 blur-2xl rounded-full" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center p-[2px] shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                  <Trophy size={40} className="text-amber-500" />
                </div>
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-4">
                <Star size={14} className="fill-amber-500" /> 
                First Place Winner
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Problem Statement Winner - Multilingual Deaf Captioning
              </h3>
              <p className="text-xl text-primary font-medium mb-4">
                CodeUtsava 9.0 (NIT Raipur)
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <a 
                  href="/images/certificates/codeutsava.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors group"
                >
                  <ExternalLink size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  View Certificate
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-muted-foreground bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Medal size={18} className="text-zinc-400" />
                  <span>Best Technical Solution</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <span>₹10,000 Cash Prize</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
