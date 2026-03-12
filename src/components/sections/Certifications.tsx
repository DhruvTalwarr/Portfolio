"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Agentic AI Python Langchain",
    issuer: "Certificate of Completion from FreeAcademy.ai (March 2026)",
    icon: <Award className="text-primary" size={24} />,
    link: "/images/certificates/agentic-ai.jpg"
  },
  {
    title: "Introduction to Generative AI Learning Path",
    issuer: "Specialization certificate from Google Cloud via Coursera (Feb 2026)",
    icon: <Award className="text-blue-400" size={24} />,
    link: "/images/certificates/intro-gen-ai.png"
  },
  {
    title: "Yuva AI for All",
    issuer: "nasscom futureskills / IT-ITES SSC initiative (March 2026)",
    icon: <Award className="text-emerald-400" size={24} />,
    link: "/images/certificates/yuva-ai.jpg"
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE / HP Foundation online course (March 2026)",
    icon: <Award className="text-sky-400" size={24} />,
    link: "/images/certificates/hp-life.jpg"
  },
  {
    title: "Visualizing Filters of a CNN using TensorFlow",
    issuer: "Authorized by Coursera (Feb 2026)",
    icon: <Award className="text-orange-400" size={24} />,
    link: "/images/certificates/cnn-tensorflow.jpg"
  },
  {
    title: "ML & Python Data Science for Business and AI",
    issuer: "Udemy certification (March 2026)",
    icon: <Award className="text-purple-400" size={24} />,
    link: "/images/certificates/udemy-ml.jpg"
  },
  {
    title: "India AI Impact Buildathon",
    issuer: 'Participation in a nationwide challenge with 40,000+ participants, conducted by HCL GUVI (Feb 2026)',
    icon: <Award className="text-rose-400" size={24} />,
    link: "/images/certificates/india-ai-impact.png"
  },
  {
    title: "Gen AI Exchange Hackathon 2025",
    issuer: 'Recognized by Google Cloud for the "AI-Powered Marketplace Assistant for Local Artisans" prototype (Jan 2026)',
    icon: <Award className="text-yellow-400" size={24} />,
    link: "/images/certificates/google-hackathon.png"
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

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/20" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Licenses & <span className="text-primary">Certifications</span>
            </h2>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning paths and formal accreditation in advanced AI technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.title}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-[1.02] transition-all duration-300 group relative"
            >
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex-shrink-0 group-hover:bg-white/10 transition-colors">
                {cert.icon}
              </div>
              <div className="flex-grow pr-8">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-white transition-colors pr-4">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.issuer}
                </p>
              </div>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 p-2 rounded-full text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
