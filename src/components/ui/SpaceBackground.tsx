"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; radius: number; alpha: number }[] = [];

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    const createStars = () => {
      stars = [];
      const numStars = window.innerWidth < 768 ? 400 : 800;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: Math.random() * 2000,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random()
        });
      }
    };

    createStars();

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - canvas.width / 2) * 0.05;
      mouseY = (e.clientY - canvas.height / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      // Deep space black background
      ctx.fillStyle = "#02040a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Smooth mouse follow for parallax
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;

      stars.forEach(star => {
        // Move star towards camera to create hyperdrive/space travel effect
        star.z -= 2;

        // Reset star if it goes past camera
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.z = 2000;
        }

        // Calculate 3D to 2D projection
        const k = 128.0 / star.z;
        const px = star.x * k + cx - targetX * (2000 / star.z);
        const py = star.y * k + cy - targetY * (2000 / star.z);

        // Twinkle effect
        star.alpha += (Math.random() - 0.5) * 0.1;
        if (star.alpha > 1) star.alpha = 1;
        if (star.alpha < 0.2) star.alpha = 0.2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / 2000) * star.radius;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          
          // Color variation (blueish, yellowish, white)
          const color = star.z % 3 === 0 ? "rgba(200, 220, 255" : star.z % 5 === 0 ? "rgba(255, 230, 200" : "rgba(255, 255, 255";
          ctx.fillStyle = `${color}, ${star.alpha})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      setCanvasDimensions();
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
