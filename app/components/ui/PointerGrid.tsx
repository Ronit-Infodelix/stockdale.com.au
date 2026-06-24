"use client";

import { useEffect, useRef } from "react";

interface Props {
  /** px size of each cell */
  cellSize?: number;
  fadeDuration?: number;
  cellOpacity?: number;
  lineColor?: string;
  glowColor?: string;
}

export default function PointerGrid({
  cellSize = 20,
  fadeDuration = 900,
  cellOpacity = 0.28,
  lineColor = "rgba(0,0,0,0.03)",
  glowColor = "67,164,142",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // lit cells: Map<cellIndex, timestampLit>
    const lit = new Map<number, number>();
    let prevX: number | null = null;
    let prevY: number | null = null;
    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    // cols/rows derived from container size — recalculated on resize
    let cols = 1;
    let rows = 1;

    // ── resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement!;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      cols = Math.ceil(w / cellSize);
      rows = Math.ceil(h / cellSize);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();

    // ── helpers ─────────────────────────────────────────────────────────────
    const cssW = () => canvas.width  / dpr;
    const cssH = () => canvas.height / dpr;

    const cellAt = (px: number, py: number): number => {
      const c = Math.floor(px / cellSize);
      const r = Math.floor(py / cellSize);
      if (c < 0 || c >= cols || r < 0 || r >= rows) return -1;
      return r * cols + c;
    };

    // ── pointer handler (on parent so canvas stays pointer-events:none) ──
    const parent = canvas.parentElement!;

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const now = Date.now();

      // swept interpolation at half-cell steps — no cell ever skipped
      const stepSize = cellSize * 0.5;

      if (prevX !== null && prevY !== null) {
        const dx = x - prevX;
        const dy = y - prevY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / stepSize));
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const idx = cellAt(prevX + dx * t, prevY + dy * t);
          if (idx >= 0) lit.set(idx, now);
        }
      } else {
        const idx = cellAt(x, y);
        if (idx >= 0) lit.set(idx, now);
      }

      prevX = x;
      prevY = y;
    };

    const onLeave = () => { prevX = null; prevY = null; };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    // ── draw loop ────────────────────────────────────────────────────────────
    const draw = () => {
      const w = cssW();
      const h = cssH();
      const now = Date.now();

      ctx.clearRect(0, 0, w, h);

      // lit cells
      lit.forEach((litAt, idx) => {
        const age = now - litAt;
        if (age >= fadeDuration) { lit.delete(idx); return; }
        const t = age / fadeDuration;
        const alpha = cellOpacity * (1 - t * t);
        const c = idx % cols;
        const r = Math.floor(idx / cols);
        ctx.fillStyle = `rgba(${glowColor},${alpha})`;
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      });

      // grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * cellSize, 0);
        ctx.lineTo(c * cellSize, h);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * cellSize);
        ctx.lineTo(w, r * cellSize);
      }
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [cellSize, fadeDuration, cellOpacity, lineColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  );
}
