import { useEffect, useRef, useState } from "react";

const CANDLES = [
  { o: 29500, h: 32000, l: 27800, c: 30800 },
  { o: 30800, h: 33500, l: 29200, c: 29600 },
  { o: 29600, h: 31800, l: 28500, c: 31200 },
  { o: 28800, h: 31500, l: 27500, c: 28900 },
  { o: 28900, h: 30200, l: 27200, c: 27800 },
  { o: 27800, h: 30800, l: 27000, c: 30200 },
  { o: 30200, h: 33000, l: 29800, c: 31500 },
  { o: 31500, h: 35800, l: 30500, c: 35200 },
  { o: 35200, h: 37500, l: 33800, c: 34500 },
  { o: 34500, h: 37000, l: 33200, c: 36800 },
  { o: 36800, h: 39500, l: 35500, c: 37200 },
  { o: 37200, h: 38500, l: 35800, c: 36500 },
  { o: 33500, h: 35500, l: 31000, c: 32200 },
  { o: 32200, h: 34500, l: 30800, c: 31500 },
  { o: 28500, h: 30500, l: 26500, c: 28200 },
  { o: 28200, h: 29500, l: 26000, c: 27000 },
  { o: 27000, h: 28500, l: 25500, c: 26200 },
  { o: 29000, h: 32000, l: 28500, c: 31800 },
  { o: 31800, h: 34000, l: 30500, c: 33200 },
  { o: 33200, h: 35500, l: 32200, c: 34800 },
  { o: 34800, h: 36500, l: 33500, c: 35500 },
  { o: 35500, h: 37200, l: 34200, c: 36200 },
  { o: 36200, h: 37800, l: 35500, c: 35800 },
  { o: 35800, h: 37500, l: 34800, c: 36800 },
  { o: 36800, h: 38200, l: 35500, c: 37200 },
  { o: 37200, h: 38500, l: 36000, c: 37800 },
  { o: 37800, h: 38800, l: 36500, c: 38100 },
  { o: 38100, h: 39200, l: 37000, c: 38154 },
];

const TIME_LABELS = [
  "8:00AM","9:00AM","10:00AM","11:00AM","12:00AM","1:00PM","2:00PM",
];

const TIMEFRAMES = ["1s", "15m", "1h", "4h", "1d", "1w"];

const MIN_PRICE = 20000;
const MAX_PRICE = 40000;
const Y_TICKS = [20000, 25000, 30000, 35000, 40000];
const PAD = { t: 14, b: 12, l: 44, r: 10 };

function formatK(v) {
  return v >= 1000 ? v / 1000 + "k" : v;
}

export default function AccountBalanceDashboard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("1d");
  const [tooltip, setTooltip] = useState({ visible: true, x: 0, y: 0, price: 38154 });
  const [selRange, setSelRange] = useState({ start: 14, end: 17 });
  const [selBox, setSelBox] = useState({ x: 0, w: 0, top: 0, h: 0 });

  function drawChart(canvas) {
    const W = canvas.width;
    const H = canvas.height;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);

    const range = MAX_PRICE - MIN_PRICE;
    const chartH = H - PAD.t - PAD.b;
    const chartW = W - PAD.l - PAD.r;
    const cw = chartW / CANDLES.length;

    const toY = (v) => PAD.t + (1 - (v - MIN_PRICE) / range) * chartH;

    // Grid lines
    ctx.lineWidth = 0.5;
    Y_TICKS.forEach((v) => {
      const y = toY(v);
      ctx.strokeStyle = "rgba(62,221,194,0.09)";
      ctx.beginPath();
      ctx.moveTo(PAD.l, y);
      ctx.lineTo(W - PAD.r, y);
      ctx.stroke();
      ctx.fillStyle = "#4a7a74";
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.textAlign = "right";
      ctx.fillText(formatK(v), PAD.l - 5, y + 3.5);
    });

    // Selection overlay coords (for React overlay div)
    const selX1 = PAD.l + selRange.start * cw;
    const selX2 = PAD.l + (selRange.end + 1) * cw;
    setSelBox({
      x: selX1,
      w: selX2 - selX1,
      top: PAD.t,
      h: chartH,
    });

    // Candles
    CANDLES.forEach((c, i) => {
      const bull = c.c >= c.o;
      const col = bull ? "#3eddc2" : "#b66cff";
      const x = PAD.l + i * cw + cw / 2;
      const bw = Math.max(cw * 0.55, 4);

      const openY = toY(c.o);
      const closeY = toY(c.c);
      const highY = toY(c.h);
      const lowY = toY(c.l);

      ctx.strokeStyle = col;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, Math.min(openY, closeY));
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, lowY);
      ctx.lineTo(x, Math.max(openY, closeY));
      ctx.stroke();

      ctx.fillStyle = col;
      const ry = Math.min(openY, closeY);
      const rh = Math.max(Math.abs(closeY - openY), 2);
      ctx.fillRect(x - bw / 2, ry, bw, rh);
    });

    // Default tooltip position (last candle)
    const lastIdx = CANDLES.length - 1;
    const lx = PAD.l + lastIdx * cw + cw / 2;
    const ly = toY(CANDLES[lastIdx].c);
    setTooltip((prev) =>
      prev.hovered
        ? prev
        : { visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false }
    );
  }

  function resize() {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    canvas.width = container.clientWidth;
    canvas.height = 310;
    drawChart(canvas);
  }

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [selRange]);

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const W = canvas.width;
    const chartW = W - PAD.l - PAD.r;
    const cw = chartW / CANDLES.length;
    const idx = Math.floor((mx - PAD.l) / cw);
    if (idx >= 0 && idx < CANDLES.length) {
      const c = CANDLES[idx];
      const range = MAX_PRICE - MIN_PRICE;
      const chartH = canvas.height - PAD.t - PAD.b;
      const y = PAD.t + (1 - (c.c - MIN_PRICE) / range) * chartH;
      const x = PAD.l + idx * cw + cw / 2;
      setTooltip({ visible: true, x, y, price: c.c, hovered: true });
    }
  }

  function handleMouseLeave() {
    const canvas = canvasRef.current;
    const lastIdx = CANDLES.length - 1;
    const W = canvas.width;
    const chartW = W - PAD.l - PAD.r;
    const cw = chartW / CANDLES.length;
    const range = MAX_PRICE - MIN_PRICE;
    const chartH = canvas.height - PAD.t - PAD.b;
    const lx = PAD.l + lastIdx * cw + cw / 2;
    const ly = PAD.t + (1 - (CANDLES[lastIdx].c - MIN_PRICE) / range) * chartH;
    setTooltip({ visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false });
  }

  function moveLeft() {
    setSelRange((r) =>
      r.start > 0 ? { start: r.start - 1, end: r.end - 1 } : r
    );
  }

  function moveRight() {
    setSelRange((r) =>
      r.end < CANDLES.length - 1 ? { start: r.start + 1, end: r.end + 1 } : r
    );
  }

  const tooltipW = 140;
  const canvasW = canvasRef.current?.width || 600;
  const tooltipLeft = Math.min(tooltip.x - 60, canvasW - tooltipW - 10);

  return (
    <div
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      className="bg-[#0d1f1e] rounded-2xl p-5 border border-[#1a3532] max-w-3xl mx-auto text-[#e2f0ee]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1a3532] border border-[#2a5550] flex items-center justify-center text-[#3eddc2] text-base">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12h6M12 9v6" />
              <path d="M14.5 9.5a3 3 0 1 0 0 5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-semibold">Account balance</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-[34px] h-[34px] rounded-lg bg-[#132d2a] border border-[#1e4540] flex items-center justify-center text-[#8bbdb8] hover:bg-[#1a3d38] hover:text-[#3eddc2] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
              <circle cx="17" cy="17" r="3" />
              <path d="m20 20 1.5 1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="w-[34px] h-[34px] rounded-lg bg-[#132d2a] border border-[#1e4540] flex items-center justify-center text-[#8bbdb8] hover:bg-[#1a3d38] hover:text-[#3eddc2] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M4 14v6h6M20 10V4h-6M4 10 10 4M14 20l6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#132d2a] border border-[#1e4540] rounded-lg text-[#8bbdb8] text-sm font-medium hover:bg-[#1a3d38] hover:text-[#3eddc2] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
            </svg>
            7 Days
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Timeframe Tabs */}
      <div className="flex gap-1.5 mb-4">
        {TIMEFRAMES.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTab(tf)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all cursor-pointer ${
              activeTab === tf
                ? "bg-[#1a4040] border-[#2a6660] text-[#3eddc2]"
                : "border-transparent text-[#6a9d97] hover:text-[#3eddc2] hover:bg-[#1a3532]"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div ref={containerRef} className="relative w-full" style={{ height: 310 }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: 310 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />

        {/* Selection overlay */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: selBox.x,
            top: selBox.top,
            width: selBox.w,
            height: selBox.h,
            background: "rgba(62,221,194,0.06)",
            borderLeft: "1px solid rgba(62,221,194,0.3)",
            borderRight: "1px solid rgba(62,221,194,0.3)",
          }}
        />

        {/* Nav buttons */}
        <button
          onClick={moveLeft}
          className="absolute z-10 w-7 h-7 rounded-full bg-[#1a4040] border border-[#2a6660] flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all cursor-pointer"
          style={{ left: selBox.x + 4, top: selBox.top + selBox.h / 2 - 14 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={moveRight}
          className="absolute z-10 w-7 h-7 rounded-full bg-[#1a4040] border border-[#2a6660] flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all cursor-pointer"
          style={{ left: selBox.x + selBox.w - 32, top: selBox.top + selBox.h / 2 - 14 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              left: Math.max(PAD.l, Math.min(tooltipLeft, canvasW - tooltipW - 8)),
              top: Math.max(4, tooltip.y - 36),
            }}
          >
            <div className="bg-[#0f2d2a] border border-[#2a6660] rounded-xl px-3.5 py-2 text-sm font-semibold text-[#e2f0ee] whitespace-nowrap"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              ${tooltip.price.toLocaleString()}{" "}
              <span className="text-[#8bbdb8] text-[11px] font-normal">USD</span>
            </div>
          </div>
        )}
      </div>

      {/* X Axis Labels */}
      <div className="flex justify-between px-2 pt-1.5"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4a7a74" }}>
        {TIME_LABELS.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
