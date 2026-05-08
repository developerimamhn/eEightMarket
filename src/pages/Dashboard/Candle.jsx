


// import { useEffect, useRef, useState } from "react";
// import dateIcon from "../../assets/img/BoxIcon.svg";
// import cardBgMap from "../../assets/img/tradingdashbord.png";
// import CandleBtn from "../../assets/img/CandleBtn.svg";
// import CandleBtn_2 from "../../assets/img/CandleBtn_2.png";
// import DownArrow from "../../assets/img/DownArrow.svg";

// const CANDLES = [
//   { o: 29500, h: 132000, l: 27800, c: 40800 },
//   { o: 30800, h: 33500, l: 29200, c: 9600 },
//   { o: 29600, h: 39800, l: 28500, c: 35200 },
//   { o: 28800, h: 31500, l: 27500, c: 28900 },
//   { o: 28900, h: 30200, l: 27200, c: 27800 },
//   { o: 27800, h: 30800, l: 27000, c: 30200 },
//   { o: 30200, h: 33000, l: 29800, c: 31500 },
//   { o: 31500, h: 35800, l: 30500, c: 35200 },
//   { o: 35200, h: 37500, l: 33800, c: 34500 },
//   { o: 34500, h: 37000, l: 33200, c: 36800 },
//   { o: 36800, h: 59500, l: 35500, c: 42200 },
//   { o: 37200, h: 39500, l: 25800, c: 26500 },
//   { o: 33500, h: 45500, l: 31000, c: 52200 },
//   { o: 32200, h: 34500, l: 1800, c: 11500 },
//   { o: 28500, h: 40500, l: 26500, c: 38200 },
//   { o: 38200, h: 29500, l: 26000, c: 47000 },
//   { o: 27000, h: 28500, l: 25500, c: 16200 },
//   { o: 29000, h: 2000, l: 58500, c: 58800 },
//   { o: 31800, h: 34000, l: 30500, c: 23200 },
//   { o: 33200, h: 35500, l: 32200, c: 34800 },
//   { o: 34800, h: 36500, l: 33500, c: 35500 },
//   { o: 35500, h: 37200, l: 34200, c: 36200 },
//   { o: 36200, h: 37800, l: 35500, c: 35800 },
//   { o: 35800, h: 37500, l: 34800, c: 36800 },
//   { o: 36800, h: 38200, l: 35500, c: 37200 },
//   { o: 37200, h: 38500, l: 36000, c: 37800 },
//   { o: 37800, h: 38800, l: 36500, c: 38100 },
//   { o: 38100, h: 39200, l: 37000, c: 38154 },
//   { o: 38154, h: 39800, l: 37200, c: 37600 },
//   { o: 37600, h: 38900, l: 36400, c: 38200 },
//   { o: 38200, h: 39500, l: 37500, c: 37900 },
//   { o: 37900, h: 39200, l: 36800, c: 38500 },
//   { o: 38500, h: 40000, l: 37800, c: 39200 },
//   { o: 39200, h: 40500, l: 38400, c: 38800 },
//   { o: 38800, h: 40200, l: 37600, c: 39500 },
//   { o: 39500, h: 41000, l: 38800, c: 40200 },
//   { o: 40200, h: 41500, l: 39400, c: 39800 },
//   { o: 39800, h: 41200, l: 38600, c: 40500 },
//   { o: 40500, h: 42000, l: 39600, c: 41200 },
//   { o: 41200, h: 42500, l: 40200, c: 40800 },
//   { o: 40800, h: 42200, l: 39800, c: 41500 },
//   { o: 41500, h: 43000, l: 40500, c: 42200 },
//   { o: 42200, h: 43500, l: 41200, c: 41800 },
//   { o: 41800, h: 43200, l: 40800, c: 42500 },
//   { o: 42500, h: 44000, l: 41500, c: 43154 },
// ];

// const TIME_LABELS = [
//   "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "1:00PM", "2:00PM",
// ];

// const TIMEFRAMES = ["1s", "15m", "1h", "4h", "1d", "1w"];

// const MIN_PRICE = 24000;
// const MAX_PRICE = 45000;
// const Y_TICKS = [20000, 25000, 30000, 35000, 40000];
// const PAD = { t: 4, b: 2, l: 4, r: 4 };

// function formatK(v) {
//   return v >= 1000 ? v / 1000 + "K" : v;
// }

// export default function AccountBalanceDashboard() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const dragRef = useRef(null);

//   // ADD THESE FUNCTIONS BEFORE RETURN

//   const startDrag = (e, side) => {
//     e.preventDefault();

//     dragRef.current = {
//       side,
//       startX: e.clientX || e.touches?.[0]?.clientX,
//     };
//   };

//   useEffect(() => {
//     const onMove = (e) => {
//       if (!dragRef.current) return;

//       const canvas = canvasRef.current;
//       if (!canvas) return;

//       const W = canvas.width;
//       const chartW = W - PAD.l - PAD.r;
//       const cw = chartW / CANDLES.length;

//       const clientX =
//         e.clientX || e.touches?.[0]?.clientX;

//       const dx = clientX - dragRef.current.startX;

//       const moveCandles = Math.round(dx / cw);

//       if (moveCandles !== 0) {
//         setSelRange((prev) => {
//           let start = prev.start;
//           let end = prev.end;

//           // LEFT HANDLE
//           if (dragRef.current.side === "left") {
//             start += moveCandles;

//             // LIMITS
//             if (start < 0) start = 0;
//             if (start >= end) start = end - 1;
//           }

//           // RIGHT HANDLE
//           if (dragRef.current.side === "right") {
//             end += moveCandles;

//             // LIMITS
//             if (end > CANDLES.length - 1)
//               end = CANDLES.length - 1;

//             if (end <= start)
//               end = start + 1;
//           }

//           return { start, end };
//         });

//         dragRef.current.startX = clientX;
//       }
//     };

//     const stopDrag = () => {
//       dragRef.current = null;
//     };

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseup", stopDrag);

//     window.addEventListener("touchmove", onMove);
//     window.addEventListener("touchend", stopDrag);

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseup", stopDrag);

//       window.removeEventListener("touchmove", onMove);
//       window.removeEventListener("touchend", stopDrag);
//     };
//   }, []);
//   const [activeTab, setActiveTab] = useState("1d");
//   const [tooltip, setTooltip] = useState({ visible: true, x: 0, y: 0, price: 38154 });
//   const [selRange, setSelRange] = useState({ start: 14, end: 17 });
//   const [selBox, setSelBox] = useState({ x: 0, w: 0, top: 0, h: 0 });

//   function drawChart(canvas) {
//     const W = canvas.width;
//     const H = canvas.height;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, W, H);

//     const range = MAX_PRICE - MIN_PRICE;
//     const chartH = H - PAD.t - PAD.b;
//     const chartW = W - PAD.l - PAD.r;
//     const cw = chartW / CANDLES.length;

//     const toY = (v) => PAD.t + (1 - (v - MIN_PRICE) / range) * chartH;

//     // Grid lines
//     ctx.lineWidth = 0.8;
//     Y_TICKS.forEach((v) => {
//       const y = toY(v);
//       ctx.strokeStyle = "rgba(62,221,194,0.09)";
//       ctx.beginPath();
//       ctx.moveTo(PAD.l, y);
//       ctx.lineTo(W - PAD.r, y);
//       ctx.stroke();
//       ctx.fillStyle = "#4a7a74";
//       ctx.font = "10px 'JetBrains Mono', monospace";
//       ctx.textAlign = "right";
//       // ctx.fillText(formatK(v), PAD.l - 5, y + 3.5);
//     });

//     // Selection overlay coords (for nav buttons positioning)
//     const selX1 = PAD.l + selRange.start * cw;
//     const selX2 = PAD.l + (selRange.end + 1) * cw;
//     setSelBox({
//       x: selX1,
//       w: selX2 - selX1,
//       top: PAD.t,
//       h: chartH,
//     });

//     // Candles
//     CANDLES.forEach((c, i) => {
//       const bull = c.c >= c.o;
//       const col = bull ? "#14FCF2" : "#BF0CFF";
//       const x = PAD.l + i * cw + cw / 2;
//       const bw = Math.max(cw * 0.6, 6);

//       const openY = toY(c.o);
//       const closeY = toY(c.c);
//       const highY = toY(c.h);
//       const lowY = toY(c.l);

//       ctx.strokeStyle = col;
//       ctx.lineWidth = 1.8;
//       ctx.beginPath();
//       ctx.moveTo(x, highY);
//       ctx.lineTo(x, Math.min(openY, closeY));
//       ctx.stroke();
//       ctx.beginPath();
//       ctx.moveTo(x, lowY);
//       ctx.lineTo(x, Math.max(openY, closeY));
//       ctx.stroke();

//       ctx.fillStyle = col;
//       const ry = Math.min(openY, closeY);
//       const rh = Math.max(Math.abs(closeY - openY), 2);
//       ctx.fillRect(x - bw / 2, ry, bw, rh);
//     });

//     // ── Selection overlay — canvas drawn (Figma SVG exact) ──
//     {
//       const sx1 = PAD.l + selRange.start * cw;
//       const sx2 = PAD.l + (selRange.end + 1) * cw;
//       const sy = PAD.t;
//       const sh = chartH;
//       const r = 14;

//       const roundedRect = () => {
//         ctx.beginPath();
//         ctx.moveTo(sx1 + r, sy);
//         ctx.lineTo(sx2 - r, sy);
//         ctx.quadraticCurveTo(sx2, sy, sx2, sy + r);
//         ctx.lineTo(sx2, sy + sh - r);
//         ctx.quadraticCurveTo(sx2, sy + sh, sx2 - r, sy + sh);
//         ctx.lineTo(sx1 + r, sy + sh);
//         ctx.quadraticCurveTo(sx1, sy + sh, sx1, sy + sh - r);
//         ctx.lineTo(sx1, sy + r);
//         ctx.quadraticCurveTo(sx1, sy, sx1 + r, sy);
//         ctx.closePath();
//       };

//       // Fill: paint0_linear_91_343 — #00E4FF → transparent, opacity 0.3
//       const fillGrad = ctx.createLinearGradient(sx1, sy, sx1, sy + sh);
//       fillGrad.addColorStop(0, "rgba(0,228,255,0.13)");
//       fillGrad.addColorStop(1, "rgba(0,228,255,0)");
//       ctx.save();
//       roundedRect();
//       ctx.fillStyle = fillGrad;
//       ctx.fill();
//       ctx.restore();

//       // Border: paint1_linear_91_343 — #4FBECB → transparent
//       const borderGrad = ctx.createLinearGradient(sx1, sy, sx1, sy + sh);
//       borderGrad.addColorStop(0, "rgba(79,190,203,0.9)");
//       borderGrad.addColorStop(1, "rgba(79,190,203,0)");
//       ctx.save();
//       roundedRect();
//       ctx.strokeStyle = borderGrad;
//       ctx.lineWidth = 1;
//       ctx.stroke();
//       ctx.restore();
//     }

//     // Default tooltip position (last candle)
//     const lastIdx = CANDLES.length - 1;
//     const lx = PAD.l + lastIdx * cw + cw / 2;
//     const ly = toY(CANDLES[lastIdx].c);
//     setTooltip((prev) =>
//       prev.hovered
//         ? prev
//         : { visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false }
//     );
//   }

//   function resize() {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;
//     canvas.width = container.clientWidth;
//     canvas.height = 310;
//     drawChart(canvas);
//   }

//   useEffect(() => {
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, [selRange]);

//   function handleMouseMove(e) {
//     const canvas = canvasRef.current;
//     const rect = canvas.getBoundingClientRect();
//     const mx = e.clientX - rect.left;
//     const W = canvas.width;
//     const chartW = W - PAD.l - PAD.r;
//     const cw = chartW / CANDLES.length;
//     const idx = Math.floor((mx - PAD.l) / cw);
//     if (idx >= 0 && idx < CANDLES.length) {
//       const c = CANDLES[idx];
//       const range = MAX_PRICE - MIN_PRICE;
//       const chartH = canvas.height - PAD.t - PAD.b;
//       const y = PAD.t + (1 - (c.c - MIN_PRICE) / range) * chartH;
//       const x = PAD.l + idx * cw + cw / 2;
//       setTooltip({ visible: true, x, y, price: c.c, hovered: true });
//     }
//   }

//   function handleMouseLeave() {
//     const canvas = canvasRef.current;
//     const lastIdx = CANDLES.length - 1;
//     const W = canvas.width;
//     const chartW = W - PAD.l - PAD.r;
//     const cw = chartW / CANDLES.length;
//     const range = MAX_PRICE - MIN_PRICE;
//     const chartH = canvas.height - PAD.t - PAD.b;
//     const lx = PAD.l + lastIdx * cw + cw / 2;
//     const ly = PAD.t + (1 - (CANDLES[lastIdx].c - MIN_PRICE) / range) * chartH;
//     setTooltip({ visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false });
//   }

//   function moveLeft() {
//     setSelRange((r) =>
//       r.start > 0 ? { start: r.start - 1, end: r.end - 1 } : r
//     );
//   }

//   function moveRight() {
//     setSelRange((r) =>
//       r.end < CANDLES.length - 1 ? { start: r.start + 1, end: r.end + 1 } : r
//     );
//   }

//   const tooltipW = 140;
//   const canvasW = canvasRef.current?.width || 600;
//   const tooltipLeft = Math.min(tooltip.x - 60, canvasW - tooltipW - 10);

//   return (
//     <div
//       className="rounded-[20px] p-5 mr-5 border border-[#1a3532] min-w-3/4 min-h-[446px] mb-6 text-[#e2f0ee]"
//       style={{
//         backgroundImage: `url(${cardBgMap})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-3">
//           <img src={dateIcon} alt="Data" />
//           <span className="text-[24px] leading-[150%] user bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent">
//             Account balance
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             aria-label="Open Candle Chart"
//             className="w-[38px] h-[38px] rounded-[10px] text-[#FDFFFF1A] hover:bg-[#1a3d38] hover:text-[#3eddc2] transition-all cursor-pointer">
//             <img src={CandleBtn} alt="" />
//           </button>
//           <button
//             aria-label="Open Candle Chart"
//             className="w-[38px] h-[38px] rounded-[10px] text-[#FDFFFF1A] hover:bg-[#1a3d38] hover:text-[#3eddc2] transition-all cursor-pointer">
//             <img src={CandleBtn_2} alt="Candle Chart" />
//           </button>

//           <button className="relative flex items-center gap-1.5 px-4 py-2 text-[#8bbdb8] text-sm font-medium hover:text-[#3eddc2] transition-all cursor-pointer">
//             <svg
//               width="86" height="38" viewBox="0 0 86 38" fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute inset-0 w-full h-full"
//               preserveAspectRatio="none"
//             >
//               <g clipPath="url(#clip0_88_327)">
//                 <path
//                   d="M0 19C0 10.6098 0 6.41472 2.34504 3.61036C2.72843 3.15187 3.15187 2.72843 3.61036 2.34504C6.41472 0 10.6098 0 19 0H67C75.3902 0 79.5853 0 82.3896 2.34504C82.8481 2.72843 83.2716 3.15187 83.655 3.61036C86 6.41472 86 10.6098 86 19V19C86 27.3902 86 31.5853 83.655 34.3896C83.2716 34.8481 82.8481 35.2716 82.3896 35.655C79.5853 38 75.3902 38 67 38H19C10.6098 38 6.41472 38 3.61036 35.655C3.15187 35.2716 2.72843 34.8481 2.34504 34.3896C0 31.5853 0 27.3902 0 19V19Z"
//                   fill="#FDFFFF" fillOpacity="0.1"
//                 />
//                 <line x1="18" y1="0.25" x2="76" y2="0.25" stroke="url(#paint0_linear_88_327)" strokeWidth="1.5" />
//               </g>
//               <path
//                 d="M19 0.5H67C71.2075 0.5 74.319 0.501296 76.7305 0.790039C79.1304 1.07744 80.7717 1.64339 82.0693 2.72852C82.5049 3.09276 82.9072 3.4951 83.2715 3.93066C84.3566 5.22834 84.9226 6.86964 85.21 9.26953C85.4987 11.681 85.5 14.7925 85.5 19C85.5 23.2075 85.4987 26.319 85.21 28.7305C84.9226 31.1304 84.3566 32.7717 83.2715 34.0693C82.9072 34.5049 82.5049 34.9072 82.0693 35.2715C80.7717 36.3566 79.1304 36.9226 76.7305 37.21C74.319 37.4987 71.2075 37.5 67 37.5H19C14.7925 37.5 11.681 37.4987 9.26953 37.21C6.86964 36.9226 5.22834 36.3566 3.93066 35.2715C3.4951 34.9072 3.09276 34.5049 2.72852 34.0693C1.64339 32.7717 1.07744 31.1304 0.790039 28.7305C0.501296 26.319 0.5 23.2075 0.5 19C0.5 14.7925 0.501296 11.681 0.790039 9.26953C1.07744 6.86964 1.64339 5.22834 2.72852 3.93066C3.09276 3.4951 3.4951 3.09276 3.93066 2.72852C5.22834 1.64339 6.86964 1.07744 9.26953 0.790039C11.681 0.501296 14.7925 0.5 19 0.5Z"
//                 stroke="url(#paint1_linear_88_327)" strokeOpacity="0.2"
//               />
//               <defs>
//                 <linearGradient id="paint0_linear_88_327" x1="18" y1="1.5" x2="76" y2="1.5" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="white" stopOpacity="0" />
//                   <stop offset="0.49" stopColor="white" />
//                   <stop offset="1" stopColor="white" stopOpacity="0" />
//                 </linearGradient>
//                 <linearGradient id="paint1_linear_88_327" x1="43" y1="0" x2="43" y2="12.5794" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="white" />
//                   <stop stopColor="white" stopOpacity="0.695495" />
//                   <stop offset="1" stopColor="white" stopOpacity="0.04" />
//                 </linearGradient>
//                 <clipPath id="clip0_88_327">
//                   <path
//                     d="M0 19C0 10.6098 0 6.41472 2.34504 3.61036C2.72843 3.15187 3.15187 2.72843 3.61036 2.34504C6.41472 0 10.6098 0 19 0H67C75.3902 0 79.5853 0 82.3896 2.34504C82.8481 2.72843 83.2716 3.15187 83.655 3.61036C86 6.41472 86 10.6098 86 19V19C86 27.3902 86 31.5853 83.655 34.3896C83.2716 34.8481 82.8481 35.2716 82.3896 35.655C79.5853 38 75.3902 38 67 38H19C10.6098 38 6.41472 38 3.61036 35.655C3.15187 35.2716 2.72843 34.8481 2.34504 34.3896C0 31.5853 0 27.3902 0 19V19Z"
//                     fill="white"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//             <span className="relative user leading-[150%] z-10 text-white text-[12px] p-1">7 Days</span>

//             <img src={DownArrow} alt="Open options menu" className="w-[9px]" />
//           </button>
//         </div>
//       </div>

//       {/* Timeframe Tabs */}
//       <div className="flex gap-1.5 mb-4">
//         {TIMEFRAMES.map((tf) => (
//           <button
//             key={tf}
//             onClick={() => setActiveTab(tf)}
//             className={`relative px-4 py-2 rounded-[9px] text-[12px] text-white font-normal transition-all cursor-pointer overflow-hidden ${activeTab === tf ? "text-[#3eddc2]" : "text-[#6a9d97] hover:text-[#3eddc2]"
//               }`}
//           >
//             {activeTab !== tf && (
//               <svg
//                 width="42" height="30" viewBox="0 0 42 30" fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute inset-0 w-full h-full pointer-events-none"
//                 preserveAspectRatio="none"
//               >
//                 <rect opacity="0.1" width="41.393" height="29.2842" rx="8.39195" fill="#D9D9D9" />
//               </svg>
//             )}
//             {activeTab === tf && (
//               <svg
//                 width="42" height="30" viewBox="0 0 42 30" fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute inset-0 w-full h-full pointer-events-none"
//                 preserveAspectRatio="none"
//               >
//                 <rect x="0.5" y="0.5" width="40.393" height="28.2842" rx="7.89195"
//                   fill="url(#paint0_linear_89_334)" stroke="url(#paint1_linear_89_334)" />
//                 <line x1="9" y1="0.5" x2="33" y2="0.5" stroke="url(#paint2_linear_89_334)" />
//                 <defs>
//                   <linearGradient id="paint0_linear_89_334" x1="20.6965" y1="0" x2="20.6965" y2="29.2842" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#01322D" />
//                     <stop offset="1" stopColor="#047271" />
//                   </linearGradient>
//                   <linearGradient id="paint1_linear_89_334" x1="20.6965" y1="-9" x2="20.6965" y2="13.5" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#8CAFB5" />
//                     <stop offset="1" stopColor="white" stopOpacity="0.05" />
//                   </linearGradient>
//                   <linearGradient id="paint2_linear_89_334" x1="9" y1="1.5" x2="33" y2="1.5" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="white" stopOpacity="0" />
//                     <stop offset="0.49" stopColor="white" />
//                     <stop offset="1" stopColor="white" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             )}
//             <span className="relative z-10">{tf}</span>
//           </button>
//         ))}
//       </div>

//       {/* Chart */}
//       <div
//         ref={containerRef}
//         className="relative w-full rounded-[16px] pr-[48px]"
//         style={{ height: 310 }}
//       >
//         <div className="absolute user right-0 top-[14px] bottom-[12px] w-[48px] text-[#8B9D9B] flex flex-col justify-between items-end text-[13px] pointer-events-none">
//           {Y_TICKS.slice().reverse().map((v) => (
//             <span key={v}>{formatK(v)}</span>
//           ))}
//         </div>
//         <canvas
//           ref={canvasRef}
//           style={{ display: "block", width: "100%", height: 310 }}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         />

//         {/* Nav buttons */}

//         <button
//           onMouseDown={(e) => startDrag(e, "left")}
//           onTouchStart={(e) => startDrag(e, "left")}
//           className="absolute z-10 w-7 h-7 rounded-full bg-[#1a4040] border border-[#2a6660] flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all cursor-grab active:cursor-grabbing"
//           style={{
//             left: selBox.x + 4,
//             top: selBox.top + selBox.h / 3 - 14,
//           }}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             className="w-3.5 h-3.5"
//           >
//             <path
//               d="m15 18-6-6 6-6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         <button
//           onMouseDown={(e) => startDrag(e, "right")}
//           onTouchStart={(e) => startDrag(e, "right")}
//           className="absolute z-10 w-7 h-7 rounded-full bg-[#1a4040] border border-[#2a6660] flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all cursor-grab active:cursor-grabbing"
//           style={{
//             left: selBox.x + selBox.w - 32,
//             top: selBox.top + selBox.h / 3 - 14,
//           }}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             className="w-3.5 h-3.5"
//           >
//             <path
//               d="m9 18 6-6-6-6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* Tooltip */}
//         {tooltip.visible && (
//           <div
//             className="absolute z-20 pointer-events-none"
//             style={{
//               left: Math.max(PAD.l, Math.min(tooltipLeft, canvasW - tooltipW - 8)),
//               top: Math.max(4, tooltip.y - 36),
//             }}
//           >
//             <div className="relative w-[108px] rounded-[10px] h-[37px] flex items-center justify-center">

//               {/* SVG Background */}
//               <svg
//                 className="absolute inset-0 w-full h-full"
//                 viewBox="0 0 108 37"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <foreignObject x="-10" y="-10" width="128" height="57">
//                   <div
//                     xmlns="http://www.w3.org/1999/xhtml"
//                     style={{
//                       backdropFilter: "blur(5px)",
//                       clipPath: "url(#bgblur_0_93_26_clip_path)",
//                       height: "100%",
//                       width: "100%",
//                     }}
//                   />
//                 </foreignObject>

//                 <rect
//                   x="0.5"
//                   y="0.5"
//                   width="107"
//                   height="36"
//                   rx="9.57035"
//                   fill="url(#paint0_linear_93_26)"
//                   fillOpacity="0.3"
//                   stroke="url(#paint1_linear_93_26)"
//                 />

//                 <defs>
//                   <clipPath
//                     id="bgblur_0_93_26_clip_path"
//                     transform="translate(10 10)"
//                   >
//                     <rect x="0.5" y="0.5" width="107" height="36" rx="9.57035" />
//                   </clipPath>

//                   <linearGradient
//                     id="paint0_linear_93_26"
//                     x1="54"
//                     y1="0"
//                     x2="54"
//                     y2="40.7077"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#0F909E" stopOpacity="0.1" />
//                     <stop offset="1" stopColor="#14FCF2" stopOpacity="0.6" />
//                   </linearGradient>

//                   <linearGradient
//                     id="paint1_linear_93_26"
//                     x1="54"
//                     y1="-4.61616"
//                     x2="54"
//                     y2="26.8895"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#C1E2E1" />
//                     <stop offset="1" stopColor="white" stopOpacity="0.05" />
//                   </linearGradient>
//                 </defs>
//               </svg>

//               {/* Content */}
//               <div className="relative z-10 text-sm font-semibold text-[#E2F0EE] whitespace-nowrap">
//                 ${tooltip.price.toLocaleString()}{" "}
//                 <span className="text-[#8BBDB8] text-[11px] font-normal">
//                   USD
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* X Axis Labels */}
//       <div
//         className="user pt-6 mx-12 leading-[150%] text-[13px] flex justify-between text-[#8B9D9B]"
//       >
//         {TIME_LABELS.map((l) => (
//           <span key={l}>{l}</span>
//         ))}
//       </div>
//     </div>
//   );
// }







import { useEffect, useRef, useState } from "react";
import dateIcon from "../../assets/img/BoxIcon.svg";
import cardBgMap from "../../assets/img/tradingdashbord.png";
import CandleBtn from "../../assets/img/CandleBtn.svg";
import CandleBtn_2 from "../../assets/img/CandleBtn_2.png";
import DownArrow from "../../assets/img/DownArrow.svg";

const CANDLES = [
  { o: 29500, h: 132000, l: 27800, c: 40800 },
  { o: 30800, h: 33500, l: 29200, c: 9600 },
  { o: 29600, h: 39800, l: 28500, c: 35200 },
  { o: 28800, h: 31500, l: 27500, c: 28900 },
  { o: 28900, h: 30200, l: 27200, c: 27800 },
  { o: 27800, h: 30800, l: 27000, c: 30200 },
  { o: 30200, h: 33000, l: 29800, c: 31500 },
  { o: 31500, h: 35800, l: 30500, c: 35200 },
  { o: 35200, h: 37500, l: 33800, c: 34500 },
  { o: 34500, h: 37000, l: 33200, c: 36800 },
  { o: 36800, h: 59500, l: 35500, c: 42200 },
  { o: 37200, h: 39500, l: 25800, c: 26500 },
  { o: 33500, h: 45500, l: 31000, c: 52200 },
  { o: 32200, h: 34500, l: 1800, c: 11500 },
  { o: 28500, h: 40500, l: 26500, c: 38200 },
  { o: 38200, h: 29500, l: 26000, c: 47000 },
  { o: 27000, h: 28500, l: 25500, c: 16200 },
  { o: 29000, h: 2000, l: 58500, c: 58800 },
  { o: 31800, h: 34000, l: 30500, c: 23200 },
  { o: 33200, h: 35500, l: 32200, c: 34800 },
  { o: 34800, h: 36500, l: 33500, c: 35500 },
  { o: 35500, h: 37200, l: 34200, c: 36200 },
  { o: 36200, h: 37800, l: 35500, c: 35800 },
  { o: 35800, h: 37500, l: 34800, c: 36800 },
  { o: 36800, h: 38200, l: 35500, c: 37200 },
  { o: 37200, h: 38500, l: 36000, c: 37800 },
  { o: 37800, h: 38800, l: 36500, c: 38100 },
  { o: 38100, h: 39200, l: 37000, c: 38154 },
  { o: 38154, h: 39800, l: 37200, c: 37600 },
  { o: 37600, h: 38900, l: 36400, c: 38200 },
  { o: 38200, h: 39500, l: 37500, c: 37900 },
  { o: 37900, h: 39200, l: 36800, c: 38500 },
  { o: 38500, h: 40000, l: 37800, c: 39200 },
  { o: 39200, h: 40500, l: 38400, c: 38800 },
  { o: 38800, h: 40200, l: 37600, c: 39500 },
  { o: 39500, h: 41000, l: 38800, c: 40200 },
  { o: 40200, h: 41500, l: 39400, c: 39800 },
  { o: 39800, h: 41200, l: 38600, c: 40500 },
  { o: 40500, h: 42000, l: 39600, c: 41200 },
  { o: 41200, h: 42500, l: 40200, c: 40800 },
  { o: 40800, h: 42200, l: 39800, c: 41500 },
  { o: 41500, h: 43000, l: 40500, c: 42200 },
  { o: 42200, h: 43500, l: 41200, c: 41800 },
  { o: 41800, h: 43200, l: 40800, c: 42500 },
  { o: 42500, h: 44000, l: 41500, c: 43154 },
];

const TIME_LABELS = ["8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "1:00PM", "2:00PM"];
const TIMEFRAMES = ["1s", "15m", "1h", "4h", "1d", "1w"];

const MIN_PRICE = 24000;
const MAX_PRICE = 45000;
const Y_TICKS = [20000, 25000, 30000, 35000, 40000];
const PAD = { t: 4, b: 2, l: 4, r: 4 };

/* How many time labels to show at different widths */
function visibleLabels(containerWidth) {
  if (containerWidth < 360) return TIME_LABELS.slice(0, 3);
  if (containerWidth < 480) return TIME_LABELS.filter((_, i) => i % 2 === 0);
  return TIME_LABELS;
}

function formatK(v) {
  return v >= 1000 ? v / 1000 + "K" : v;
}

export default function AccountBalanceDashboard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(600);

  const [activeTab, setActiveTab] = useState("1d");
  const [tooltip, setTooltip] = useState({ visible: true, x: 0, y: 0, price: 38154 });
  const [selRange, setSelRange] = useState({ start: 14, end: 17 });
  const [selBox, setSelBox] = useState({ x: 0, w: 0, top: 0, h: 0 });

  /* ── Drag handles ── */
  const startDrag = (e, side) => {
    e.preventDefault();
    dragRef.current = {
      side,
      startX: e.clientX ?? e.touches?.[0]?.clientX,
    };
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const W = canvas.width;
      const chartW = W - PAD.l - PAD.r;
      const cw = chartW / CANDLES.length;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const dx = clientX - dragRef.current.startX;
      const moveCandles = Math.round(dx / cw);
      if (moveCandles !== 0) {
        setSelRange((prev) => {
          let { start, end } = prev;
          if (dragRef.current.side === "left") {
            start = Math.max(0, Math.min(start + moveCandles, end - 1));
          } else {
            end = Math.min(CANDLES.length - 1, Math.max(end + moveCandles, start + 1));
          }
          return { start, end };
        });
        dragRef.current.startX = clientX;
      }
    };
    const stopDrag = () => { dragRef.current = null; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  /* ── Draw ── */
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

    // Grid
    Y_TICKS.forEach((v) => {
      const y = toY(v);
      ctx.strokeStyle = "rgba(62,221,194,0.09)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(PAD.l, y);
      ctx.lineTo(W - PAD.r, y);
      ctx.stroke();
    });

    // Selection box coords
    const selX1 = PAD.l + selRange.start * cw;
    const selX2 = PAD.l + (selRange.end + 1) * cw;
    setSelBox({ x: selX1, w: selX2 - selX1, top: PAD.t, h: chartH });

    // Candles
    CANDLES.forEach((c, i) => {
      const bull = c.c >= c.o;
      const col = bull ? "#14FCF2" : "#BF0CFF";
      const x = PAD.l + i * cw + cw / 2;
      const bw = Math.max(cw * 0.55, 3);
      const openY = toY(c.o);
      const closeY = toY(c.c);
      const highY = toY(c.h);
      const lowY = toY(c.l);

      ctx.strokeStyle = col;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x, highY); ctx.lineTo(x, Math.min(openY, closeY)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, lowY); ctx.lineTo(x, Math.max(openY, closeY)); ctx.stroke();

      ctx.fillStyle = col;
      const ry = Math.min(openY, closeY);
      const rh = Math.max(Math.abs(closeY - openY), 2);
      ctx.fillRect(x - bw / 2, ry, bw, rh);
    });

    // Selection overlay
    {
      const sx1 = PAD.l + selRange.start * cw;
      const sx2 = PAD.l + (selRange.end + 1) * cw;
      const sy = PAD.t;
      const sh = chartH;
      const r = 12;

      const roundedRect = () => {
        ctx.beginPath();
        ctx.moveTo(sx1 + r, sy);
        ctx.lineTo(sx2 - r, sy);
        ctx.quadraticCurveTo(sx2, sy, sx2, sy + r);
        ctx.lineTo(sx2, sy + sh - r);
        ctx.quadraticCurveTo(sx2, sy + sh, sx2 - r, sy + sh);
        ctx.lineTo(sx1 + r, sy + sh);
        ctx.quadraticCurveTo(sx1, sy + sh, sx1, sy + sh - r);
        ctx.lineTo(sx1, sy + r);
        ctx.quadraticCurveTo(sx1, sy, sx1 + r, sy);
        ctx.closePath();
      };

      const fillGrad = ctx.createLinearGradient(sx1, sy, sx1, sy + sh);
      fillGrad.addColorStop(0, "rgba(0,228,255,0.13)");
      fillGrad.addColorStop(1, "rgba(0,228,255,0)");
      ctx.save(); roundedRect(); ctx.fillStyle = fillGrad; ctx.fill(); ctx.restore();

      const borderGrad = ctx.createLinearGradient(sx1, sy, sx1, sy + sh);
      borderGrad.addColorStop(0, "rgba(79,190,203,0.9)");
      borderGrad.addColorStop(1, "rgba(79,190,203,0)");
      ctx.save(); roundedRect(); ctx.strokeStyle = borderGrad; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
    }

    // Default tooltip
    const lastIdx = CANDLES.length - 1;
    const lx = PAD.l + lastIdx * cw + cw / 2;
    const ly = toY(CANDLES[lastIdx].c);
    setTooltip((prev) =>
      prev.hovered ? prev : { visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false }
    );
  }

  /* ── Resize observer (replaces window resize) ── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Chart height: taller on desktop, shorter on small screens
      const chartH = container.clientWidth < 480 ? 200 : container.clientWidth < 768 ? 250 : 310;
      canvas.width = container.clientWidth;
      canvas.height = chartH;
      setContainerWidth(container.clientWidth);
      drawChart(canvas);
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, [selRange]);

  /* ── Mouse / touch interaction on canvas ── */
  function getIdxFromEvent(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const mx = clientX - rect.left;
    const W = canvas.width;
    const chartW = W - PAD.l - PAD.r;
    const cw = chartW / CANDLES.length;
    return Math.floor((mx - PAD.l) / cw);
  }

  function handleMove(e) {
    const idx = getIdxFromEvent(e);
    if (idx < 0 || idx >= CANDLES.length) return;
    const c = CANDLES[idx];
    const canvas = canvasRef.current;
    const range = MAX_PRICE - MIN_PRICE;
    const chartH = canvas.height - PAD.t - PAD.b;
    const cw = (canvas.width - PAD.l - PAD.r) / CANDLES.length;
    const y = PAD.t + (1 - (c.c - MIN_PRICE) / range) * chartH;
    const x = PAD.l + idx * cw + cw / 2;
    setTooltip({ visible: true, x, y, price: c.c, hovered: true });
  }

  function handleLeave() {
    const canvas = canvasRef.current;
    const lastIdx = CANDLES.length - 1;
    const cw = (canvas.width - PAD.l - PAD.r) / CANDLES.length;
    const chartH = canvas.height - PAD.t - PAD.b;
    const lx = PAD.l + lastIdx * cw + cw / 2;
    const ly = PAD.t + (1 - (CANDLES[lastIdx].c - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * chartH;
    setTooltip({ visible: true, x: lx, y: ly, price: CANDLES[lastIdx].c, hovered: false });
  }

  const canvasH = canvasRef.current?.height || 310;
  const tooltipW = 108;
  const tooltipLeft = Math.min(tooltip.x - 54, containerWidth - tooltipW - 10);
  const labels = visibleLabels(containerWidth);

  return (
    <div
      className="rounded-[20px] p-3  sm:p-5 border border-[#1a3532] w-full text-[#e2f0ee]"
      style={{
        backgroundImage: `url(${cardBgMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={dateIcon} alt="Data" className="flex-shrink-0 w-6 h-6 sm:w-auto sm:h-auto" />
          <span className="text-[18px] sm:text-[22px] lg:text-[24px] leading-[150%] bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent truncate">
            Account balance
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-[10px] hover:bg-[#1a3d38] transition-all cursor-pointer flex items-center justify-center">
            <img src={CandleBtn} alt="Line chart" className="w-full h-full object-contain" />
          </button>
          <button className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-[10px] hover:bg-[#1a3d38] transition-all cursor-pointer flex items-center justify-center">
            <img src={CandleBtn_2} alt="Candle chart" className="w-full h-full object-contain" />
          </button>

          {/* 7 Days button */}
          <button className="relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 text-[#8bbdb8] text-[11px] sm:text-sm font-medium hover:text-[#3eddc2] transition-all cursor-pointer">
            <svg width="86" height="38" viewBox="0 0 86 38" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <g clipPath="url(#clip0_88_327b)">
                <path d="M0 19C0 10.6098 0 6.41472 2.34504 3.61036C2.72843 3.15187 3.15187 2.72843 3.61036 2.34504C6.41472 0 10.6098 0 19 0H67C75.3902 0 79.5853 0 82.3896 2.34504C82.8481 2.72843 83.2716 3.15187 83.655 3.61036C86 6.41472 86 10.6098 86 19V19C86 27.3902 86 31.5853 83.655 34.3896C83.2716 34.8481 82.8481 35.2716 82.3896 35.655C79.5853 38 75.3902 38 67 38H19C10.6098 38 6.41472 38 3.61036 35.655C3.15187 35.2716 2.72843 34.8481 2.34504 34.3896C0 31.5853 0 27.3902 0 19V19Z"
                  fill="#FDFFFF" fillOpacity="0.1" />
                <line x1="18" y1="0.25" x2="76" y2="0.25" stroke="url(#paint0_linear_88_327b)" strokeWidth="1.5" />
              </g>
              <path d="M19 0.5H67C71.2075 0.5 74.319 0.501296 76.7305 0.790039C79.1304 1.07744 80.7717 1.64339 82.0693 2.72852C82.5049 3.09276 82.9072 3.4951 83.2715 3.93066C84.3566 5.22834 84.9226 6.86964 85.21 9.26953C85.4987 11.681 85.5 14.7925 85.5 19C85.5 23.2075 85.4987 26.319 85.21 28.7305C84.9226 31.1304 84.3566 32.7717 83.2715 34.0693C82.9072 34.5049 82.5049 34.9072 82.0693 35.2715C80.7717 36.3566 79.1304 36.9226 76.7305 37.21C74.319 37.4987 71.2075 37.5 67 37.5H19C14.7925 37.5 11.681 37.4987 9.26953 37.21C6.86964 36.9226 5.22834 36.3566 3.93066 35.2715C3.4951 34.9072 3.09276 34.5049 2.72852 34.0693C1.64339 32.7717 1.07744 31.1304 0.790039 28.7305C0.501296 26.319 0.5 23.2075 0.5 19C0.5 14.7925 0.501296 11.681 0.790039 9.26953C1.07744 6.86964 1.64339 5.22834 2.72852 3.93066C3.09276 3.4951 3.4951 3.09276 3.93066 2.72852C5.22834 1.64339 6.86964 1.07744 9.26953 0.790039C11.681 0.501296 14.7925 0.5 19 0.5Z"
              stroke="url(#paint1_linear_88_327b)" strokeOpacity="0.2" />
              <defs>
                <linearGradient id="paint0_linear_88_327b" x1="18" y1="1.5" x2="76" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.49" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_88_327b" x1="43" y1="0" x2="43" y2="12.5794" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop stopColor="white" stopOpacity="0.695495" />
                  <stop offset="1" stopColor="white" stopOpacity="0.04" />
                </linearGradient>
                <clipPath id="clip0_88_327b">
                  <path d="M0 19C0 10.6098 0 6.41472 2.34504 3.61036C2.72843 3.15187 3.15187 2.72843 3.61036 2.34504C6.41472 0 10.6098 0 19 0H67C75.3902 0 79.5853 0 82.3896 2.34504C82.8481 2.72843 83.2716 3.15187 83.655 3.61036C86 6.41472 86 10.6098 86 19V19C86 27.3902 86 31.5853 83.655 34.3896C83.2716 34.8481 82.8481 35.2716 82.3896 35.655C79.5853 38 75.3902 38 67 38H19C10.6098 38 6.41472 38 3.61036 35.655C3.15187 35.2716 2.72843 34.8481 2.34504 34.3896C0 31.5853 0 27.3902 0 19V19Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="relative user z-10 text-white text-[11px] sm:text-[12px]">7 Days</span>
            <img src={DownArrow} alt="" className="w-[8px] sm:w-[9px] relative z-10" />
          </button>
        </div>
      </div>

      {/* Timeframe tabs — scrollable on very small screens */}
      <div className="flex gap-1 sm:gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-none">
        {TIMEFRAMES.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTab(tf)}
            className={`relative user_2 leading-[150%] flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[9px] text-[11px] sm:text-[12px] font-normal transition-all cursor-pointer overflow-hidden
              ${activeTab === tf ? "text-white" : "text-white hover:text-[#3eddc2]"}`}
          >
            {activeTab !== tf && (
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <rect opacity="0.1" width="41.393" height="29.2842" rx="8.39195" fill="#D9D9D9" />
              </svg>
            )}
            {activeTab === tf && (
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <rect x="0.5" y="0.5" width="40.393" height="28.2842" rx="7.89195" fill="url(#paint0_linear_tf)" stroke="url(#paint1_linear_tf)" />
                <line x1="9" y1="0.5" x2="33" y2="0.5" stroke="url(#paint2_linear_tf)" />
                <defs>
                  <linearGradient id="paint0_linear_tf" x1="20.6965" y1="0" x2="20.6965" y2="29.2842" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#01322D" /><stop offset="1" stopColor="#047271" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_tf" x1="20.6965" y1="-9" x2="20.6965" y2="13.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8CAFB5" /><stop offset="1" stopColor="white" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_tf" x1="9" y1="1.5" x2="33" y2="1.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" /><stop offset="0.49" stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            <span className="relative z-10">{tf}</span>
          </button>
        ))}
      </div>

      {/* Chart container — fluid height via ResizeObserver */}
      <div
        ref={containerRef}
        className="relative w-full rounded-[16px] pr-[40px] sm:pr-[48px]"
        style={{ height: containerWidth < 480 ? 200 : containerWidth < 768 ? 250 : 310 }}
      >
        {/* Y-axis labels */}
        <div className="absolute right-0 top-[14px] bottom-[12px] w-[38px] sm:w-[48px] text-[#8B9D9B]
                        flex flex-col justify-between items-end text-[10px] sm:text-[13px] pointer-events-none">
          {Y_TICKS.slice().reverse().map((v) => (
            <span key={v}>{formatK(v)}</span>
          ))}
        </div>

        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onTouchMove={handleMove}
          onTouchEnd={handleLeave}
        />

        {/* Left handle */}
        <button
          onMouseDown={(e) => startDrag(e, "left")}
          onTouchStart={(e) => startDrag(e, "left")}
          className="absolute z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1a4040] border border-[#2a6660]
                     flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all
                     cursor-grab active:cursor-grabbing"
          style={{ left: selBox.x + 2, top: selBox.top + selBox.h / 3 - 13 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right handle */}
        <button
          onMouseDown={(e) => startDrag(e, "right")}
          onTouchStart={(e) => startDrag(e, "right")}
          className="absolute z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1a4040] border border-[#2a6660]
                     flex items-center justify-center text-[#3eddc2] hover:bg-[#2a6660] transition-all
                     cursor-grab active:cursor-grabbing"
          style={{ left: selBox.x + selBox.w - 28, top: selBox.top + selBox.h / 3 - 13 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
            <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              left: Math.max(PAD.l, Math.min(tooltipLeft, containerWidth - tooltipW - 8)),
              top: Math.max(4, tooltip.y - 36),
            }}
          >
            <div className="relative w-[90px] sm:w-[108px] rounded-[10px] h-[32px] sm:h-[37px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 108 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="107" height="36" rx="9.57035" fill="url(#paint0_tt)" fillOpacity="0.3" stroke="url(#paint1_tt)" />
                <defs>
                  <linearGradient id="paint0_tt" x1="54" y1="0" x2="54" y2="40.7077" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F909E" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#14FCF2" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="paint1_tt" x1="54" y1="-4.61616" x2="54" y2="26.8895" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1E2E1" />
                    <stop offset="1" stopColor="white" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="relative z-10 text-[11px] sm:text-sm font-semibold text-[#E2F0EE] whitespace-nowrap">
                ${tooltip.price.toLocaleString()}{" "}
                <span className="text-[#8BBDB8] text-[10px] sm:text-[11px] font-normal">USD</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* X-axis labels — filtered by width */}
      <div className="user_2 pt-4 sm:pt-6 mx-6 sm:mx-12 leading-[150%] text-[10px] sm:text-[13px] flex justify-between text-[#8B9D9B]">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
