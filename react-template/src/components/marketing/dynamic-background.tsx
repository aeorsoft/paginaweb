"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  kind: "code" | "tick" | "server" | "bot";
  text: string;
  color: string;
  size: number;
};

const CODE_SNIPPETS = [
  "async orchestrate()",
  "workflow.run()",
  "deploy.server()",
  "const bot = RPA.start()",
  "await api.post('/orders')",
  "if (queue.empty) retry()",
  "SELECT * FROM procesos",
  "kubectl scale --replicas=8",
  "cron.schedule('0 * * * *')",
  "stream.pipe(transform)",
  "class Arquitecto {}",
  "BPMN.startEvent()",
  "git commit -m 'release'",
  "return invoice.digital()",
];

const TICKERS = [
  "AAPL 228.41 +1.2%",
  "MSFT 421.08 +0.6%",
  "NVDA 131.55 +2.4%",
  "BTC 67842 +0.9%",
  "SPX 5621 +0.4%",
  "NASDAQ 17890 +0.7%",
  "EURUSD 1.086",
  "GOLD 2384 +0.3%",
];

const BOTS = ["BOT", "RPA", "BPM", "API", "ERP", "iPaaS", "ETL", "CI/CD"];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pick<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const candles: number[] = Array.from({ length: 48 }, () => rand(0.25, 0.75));
    let tickerOffset = 0;

    const particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedParticles = () => {
      particles.length = 0;
      const count = Math.min(70, Math.floor((width * height) / 18000));

      for (let i = 0; i < count; i += 1) {
        const roll = Math.random();
        const kind: Particle["kind"] =
          roll < 0.45 ? "code" : roll < 0.7 ? "tick" : roll < 0.88 ? "bot" : "server";

        particles.push({
          x: rand(0, width),
          y: rand(0, height),
          z: rand(0.35, 1.2),
          vx: rand(-0.15, 0.15),
          vy: rand(-0.35, -0.08),
          kind,
          text:
            kind === "code"
              ? pick(CODE_SNIPPETS)
              : kind === "tick"
                ? pick(TICKERS)
                : kind === "bot"
                  ? pick(BOTS)
                  : "SRV",
          color:
            kind === "code"
              ? "rgba(103, 232, 249, 0.72)"
              : kind === "tick"
                ? "rgba(52, 211, 153, 0.8)"
                : kind === "bot"
                  ? "rgba(196, 181, 253, 0.85)"
                  : "rgba(125, 211, 252, 0.85)",
          size: kind === "server" ? rand(10, 16) : rand(11, 15),
        });
      }
    };

    const onMove = (event: MouseEvent) => {
      mouse.tx = event.clientX / width;
      mouse.ty = event.clientY / height;
    };

    const drawGrid = (ox: number, oy: number) => {
      ctx.strokeStyle = "rgba(148, 163, 184, 0.08)";
      ctx.lineWidth = 1;
      const gap = 56;
      ctx.beginPath();
      for (let x = -gap + (ox % gap); x < width + gap; x += gap) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -gap + (oy % gap); y < height + gap; y += gap) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const drawChart = (ox: number, oy: number) => {
      const chartY = height * 0.62 + oy * 18;
      const chartH = 110;
      if (frame % 18 === 0) {
        candles.shift();
        const last = candles[candles.length - 1] ?? 0.5;
        candles.push(Math.max(0.12, Math.min(0.88, last + rand(-0.08, 0.08))));
      }

      ctx.beginPath();
      candles.forEach((value, i) => {
        const x = (i / (candles.length - 1)) * width + ox * 10;
        const y = chartY - value * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = "rgba(34, 211, 238, 0.45)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.lineTo(width, chartY);
      ctx.lineTo(0, chartY);
      ctx.closePath();
      const fill = ctx.createLinearGradient(0, chartY - chartH, 0, chartY);
      fill.addColorStop(0, "rgba(34, 211, 238, 0.16)");
      fill.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = fill;
      ctx.fill();

      tickerOffset -= 0.9;
      const tape = `${TICKERS.join("    •    ")}    •    `;
      const tapeWidth = ctx.measureText(tape).width || 900;
      ctx.font = "13px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = "rgba(110, 231, 183, 0.7)";
      const x = tickerOffset % tapeWidth;
      ctx.fillText(tape + tape, x - tapeWidth, 36 + oy * 8);
    };

    const drawServers = (ox: number, oy: number) => {
      const racks = [
        { x: width * 0.08, y: height * 0.22 },
        { x: width * 0.18, y: height * 0.3 },
        { x: width * 0.78, y: height * 0.18 },
        { x: width * 0.88, y: height * 0.28 },
      ];

      racks.forEach((rack, index) => {
        const x = rack.x + ox * (14 + index * 4);
        const y = rack.y + oy * (10 + index * 3);
        ctx.fillStyle = "rgba(15, 23, 42, 0.55)";
        ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(x, y, 54, 86, 6);
        ctx.fill();
        ctx.stroke();

        for (let i = 0; i < 5; i += 1) {
          ctx.fillStyle = "rgba(30, 41, 59, 0.9)";
          ctx.fillRect(x + 8, y + 10 + i * 14, 38, 8);
          const on = (Math.floor(frame / 12) + i + index) % 3 !== 0;
          ctx.fillStyle = on ? "rgba(52, 211, 153, 0.95)" : "rgba(14, 165, 233, 0.4)";
          ctx.beginPath();
          ctx.arc(x + 42, y + 14 + i * 14, 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.strokeStyle = "rgba(125, 211, 252, 0.18)";
      ctx.beginPath();
      racks.forEach((rack, index) => {
        const x = rack.x + 27 + ox * 14;
        const y = rack.y + 86 + oy * 10;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    };

    const drawAutomation = (ox: number, oy: number) => {
      const nodes = [
        { x: width * 0.32, y: height * 0.78, label: "Trigger" },
        { x: width * 0.48, y: height * 0.72, label: "Bot RPA" },
        { x: width * 0.64, y: height * 0.78, label: "API" },
        { x: width * 0.78, y: height * 0.7, label: "ERP" },
      ];

      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(167, 139, 250, 0.45)";
      ctx.beginPath();
      nodes.forEach((node, i) => {
        const x = node.x + ox * 20;
        const y = node.y + oy * 16 + Math.sin((frame + i * 20) / 28) * 6;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      const pulse = (frame % 120) / 120;
      const from = nodes[Math.floor(pulse * (nodes.length - 1))];
      const to = nodes[Math.min(nodes.length - 1, Math.floor(pulse * (nodes.length - 1)) + 1)];
      const t = (pulse * (nodes.length - 1)) % 1;
      const px = from.x + (to.x - from.x) * t + ox * 20;
      const py =
        from.y +
        (to.y - from.y) * t +
        oy * 16 +
        Math.sin(frame / 28) * 6;
      ctx.fillStyle = "rgba(250, 204, 21, 0.95)";
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
      nodes.forEach((node, i) => {
        const x = node.x + ox * 20;
        const y = node.y + oy * 16 + Math.sin((frame + i * 20) / 28) * 6;
        ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
        ctx.strokeStyle = "rgba(196, 181, 253, 0.7)";
        ctx.beginPath();
        ctx.roundRect(x - 38, y - 14, 76, 28, 14);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "rgba(237, 233, 254, 0.95)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, x, y + 4);
      });
      ctx.textAlign = "left";
    };

    const drawParticle = (p: Particle, ox: number, oy: number) => {
      const parallax = p.z * 28;
      const x = p.x + ox * parallax;
      const y = p.y + oy * parallax;
      ctx.globalAlpha = Math.min(1, 0.35 + p.z * 0.5);
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      if (p.kind === "server") {
        ctx.fillRect(x, y, 18, 26);
        ctx.fillStyle = "rgba(52, 211, 153, 0.9)";
        ctx.fillRect(x + 4, y + 5, 10, 3);
        ctx.fillRect(x + 4, y + 12, 10, 3);
      } else {
        ctx.fillText(p.text, x, y);
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      frame += 1;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      const ox = (mouse.x - 0.5) * 2;
      const oy = (mouse.y - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);
      const bg = ctx.createRadialGradient(
        mouse.x * width,
        mouse.y * height,
        40,
        width * 0.5,
        height * 0.4,
        Math.max(width, height) * 0.9,
      );
      bg.addColorStop(0, "rgba(8, 47, 73, 0.55)");
      bg.addColorStop(0.45, "rgba(15, 23, 42, 0.35)");
      bg.addColorStop(1, "rgba(5, 7, 15, 0.9)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      drawGrid(ox * 18, oy * 18);
      drawChart(ox, oy);
      drawServers(ox, oy);
      drawAutomation(ox, oy);

      particles.forEach((p) => {
        p.x += p.vx + ox * 0.2;
        p.y += p.vy;
        if (p.y < -40) {
          p.y = height + 20;
          p.x = rand(0, width);
        }
        if (p.x < -80) p.x = width + 40;
        if (p.x > width + 80) p.x = -40;
        drawParticle(p, ox, oy);
      });

      raf = window.requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      seedParticles();
    };

    resize();
    seedParticles();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070f]">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/20 via-transparent to-[#05070f]/55" />
    </div>
  );
}
