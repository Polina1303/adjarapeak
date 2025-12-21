"use client";

import { useEffect, useRef } from "react";

export default function Snow({ flakesCount = 200 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const flakes = Array.from({ length: flakesCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      s: Math.random() * 1 + 0.5,
      shiny: Math.random() < 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flakes.forEach((f) => {
        f.y += f.s;
        if (f.y > canvas.height) {
          f.y = -10;
          f.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

        if (f.shiny) {
          ctx.fillStyle = "rgba(231, 231, 213, 0.9)";
          ctx.shadowColor = "white";
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = "white";
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [flakesCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
