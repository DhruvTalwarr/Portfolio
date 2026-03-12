"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    // Pseudo-random noise function for organic wave motion
    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.8) +
             Math.sin(x * 0.02 - t * 0.5) * Math.cos(y * 0.015 + t * 1.2);
    };

    const render = () => {
      // Clear with a deep dark premium background
      ctx.fillStyle = "#030712"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple overlapping aurora layers
      const layers = [
        { color: "rgba(59, 130, 246, 0.15)", speed: 0.001, scale: 1.5, offset: 0 },   // Blue layer
        { color: "rgba(139, 92, 246, 0.15)", speed: 0.0015, scale: 2.0, offset: 100 }, // Purple layer
        { color: "rgba(45, 212, 191, 0.1)", speed: 0.0008, scale: 1.2, offset: 50 },   // Teal layer
      ];

      layers.forEach((layer, index) => {
        ctx.beginPath();
        
        // Move across the screen horizontally
        for (let x = 0; x <= canvas.width; x += 20) {
          // Calculate a dynamic Y position based on noise, time, and screen height
          const yBase = canvas.height * 0.5; // Center vertically
          const n = noise(x * layer.scale, layer.offset, time * layer.speed);
          
          // Add 3D depth by varying the amplitude and adding a perspective curve
          const perspective = 1 + (yBase / canvas.height) * 0.5; 
          const amplitude = 150 * perspective * layer.scale;
           
          const y = yBase + n * amplitude + Math.sin(x * 0.005 + time * 0.002) * 100 * (index % 2 === 0 ? 1 : -1);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            // Smooth curve
            ctx.lineTo(x, y);
          }
        }

        // Complete the shape to the bottom of the canvas to create a glowing fill area
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Create a vertical gradient for the layer
        const gradient = ctx.createLinearGradient(0, canvas.height * 0.2, 0, canvas.height);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, layer.color);
        gradient.addColorStop(1, layer.color.replace(/[\d.]+\)$/, "0)")); // Fade out at bottom

        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add a bright core line to edge of the waves
        ctx.strokeStyle = layer.color.replace(/[\d.]+\)$/, "0.4)");
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Add ambient particles (stars/dust)
      /* Optional: Keep the particles from before, or rely purely on the Aurora. 
         For a clean "aurora" look, a few slow moving stars look great. */
      
      time += 16; // Approx 60fps increment (milliseconds)
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      setCanvasDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
