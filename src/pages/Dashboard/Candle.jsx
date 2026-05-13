import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import dateIcon from "../../assets/img/BoxIcon.svg";
import CandleBtn from "../../assets/img/CandleBtn.svg";
import CandleBtn_2 from "../../assets/img/CandleBtn_2.png";
import DownArrow from "../../assets/img/DownArrow.svg";

const CANDLES = [
  { o: 36500, h: 38800, l: 31000, c: 32500 },
  { o: 32500, h: 36000, l: 30000, c: 34200 },
  { o: 34200, h: 37500, l: 32000, c: 36000 },
  { o: 36000, h: 39000, l: 33500, c: 34500 },
  { o: 34500, h: 37000, l: 31500, c: 36500 },
  { o: 36500, h: 39500, l: 33000, c: 34800 },
  { o: 34800, h: 41000, l: 34000, c: 37200 },
  { o: 37200, h: 42000, l: 35000, c: 35500 },
  { o: 35500, h: 40000, l: 32500, c: 38000 },
  { o: 38000, h: 43000, l: 36000, c: 36500 },
  { o: 36500, h: 41500, l: 34000, c: 39200 },
  { o: 39200, h: 44000, l: 37000, c: 37500 },
  { o: 37500, h: 41800, l: 33000, c: 35500 },
  { o: 35500, h: 39000, l: 32000, c: 37200 },
  { o: 37200, h: 41000, l: 35000, c: 39500 },
  { o: 39500, h: 45000, l: 36000, c: 37000 },
  { o: 37000, h: 43000, l: 34000, c: 41000 },
  { o: 41000, h: 44500, l: 38000, c: 39200 },
  { o: 39200, h: 42000, l: 36000, c: 37500 },
  { o: 37500, h: 40000, l: 33000, c: 41500 },
  { o: 41500, h: 45000, l: 39000, c: 40200 },
  { o: 40200, h: 43500, l: 37000, c: 38800 },
  { o: 38800, h: 42000, l: 35000, c: 36000 },
  { o: 36000, h: 39000, l: 32000, c: 34500 },
  { o: 34500, h: 38000, l: 31000, c: 36500 },
  { o: 36500, h: 41000, l: 33000, c: 39500 },
  { o: 39500, h: 44000, l: 36000, c: 37200 },
  { o: 37200, h: 45000, l: 34000, c: 41000 },
  { o: 41000, h: 44500, l: 38000, c: 39800 },
  { o: 39800, h: 43000, l: 36000, c: 41500 },
  { o: 41500, h: 44800, l: 39000, c: 40200 },
  { o: 40200, h: 44000, l: 37000, c: 37500 },
  { o: 37500, h: 42000, l: 34000, c: 36000 },
  { o: 36000, h: 39500, l: 33000, c: 38800 },
  { o: 38800, h: 45000, l: 35000, c: 42000 },
  { o: 42000, h: 44500, l: 39000, c: 41000 },
  { o: 41000, h: 43000, l: 36000, c: 37500 },
  { o: 37500, h: 40000, l: 33000, c: 39200 },
  { o: 39200, h: 43500, l: 35000, c: 40500 },
  { o: 40500, h: 45000, l: 37000, c: 38800 },
  { o: 38800, h: 44000, l: 34000, c: 41500 },
  { o: 41500, h: 44800, l: 36000, c: 39800 },
  { o: 39800, h: 43000, l: 35000, c: 37200 },
  { o: 37200, h: 42000, l: 33000, c: 36500 },
  { o: 36500, h: 41000, l: 31000, c: 38800 },
];

const TIME_LABELS = ["8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "1:00PM", "2:00PM"];
const TIMEFRAMES = ["1s", "15m", "1h", "4h", "1d", "1w"];
const MIN_PRICE = 24000;
const MAX_PRICE = 45000;
const Y_TICKS = [20000, 25000, 30000, 35000, 40000];
const PAD = { t: 4, b: 2, l: 4, r: 4 };

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
  const gsapTweenRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(600);
  const [activeTab, setActiveTab] = useState("1d");
  const [tooltip, setTooltip] = useState({ visible: true, x: 0, y: 0, price: 38154 });
  const [selRange, setSelRange] = useState({ start: 14, end: 17 });
  const [selBox, setSelBox] = useState({ x: 0, w: 0, top: 0, h: 0 });

  const selRangeRef = useRef(selRange);
  useEffect(() => { selRangeRef.current = selRange; }, [selRange]);

  // draw function — clipWidth controls reveal
  function drawChart(canvas, clipWidth = null) {
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

    const sr = selRangeRef.current;
    const selX1 = PAD.l + sr.start * cw;
    const selX2 = PAD.l + (sr.end + 1) * cw;
    setSelBox({ x: selX1, w: selX2 - selX1, top: PAD.t, h: chartH });

    // Clip candles left → right
    const maxDrawWidth = clipWidth !== null ? clipWidth : chartW;
    ctx.save();
    ctx.beginPath();
    ctx.rect(PAD.l, 0, maxDrawWidth, H);
    ctx.clip();

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

    ctx.restore();

    const selIdx = Math.floor((sr.start + sr.end) / 2);
    const fallbackIdx = Math.min(Math.max(selIdx, 0), CANDLES.length - 1);
    const lx = PAD.l + fallbackIdx * cw + cw / 2;
    const ly = toY(CANDLES[fallbackIdx].c);
    setTooltip((prev) =>
      prev.hovered
        ? prev
        : { visible: true, x: lx, y: ly, price: CANDLES[fallbackIdx].c, hovered: false }
    );
  }

  // Drag
  const startDrag = (e, side) => {
    e.preventDefault();
    dragRef.current = { side, startX: e.clientX ?? e.touches?.[0]?.clientX };
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const chartW = canvas.width - PAD.l - PAD.r;
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

          const idx = dragRef.current.side === "left" ? start : end;
          const chartH = canvas.height - PAD.t - PAD.b;
          const x = PAD.l + idx * cw + cw / 2;
          const y = PAD.t + (1 - (CANDLES[idx].c - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * chartH;
          setTooltip({ visible: true, x, y, price: CANDLES[idx].c, hovered: true });

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

  // ResizeObserver + candle reveal animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeChart = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const chartH = container.clientWidth < 480 ? 200 : container.clientWidth < 768 ? 250 : 310;
      canvas.width = container.clientWidth;
      canvas.height = chartH;
      setContainerWidth(container.clientWidth);

      const chartW = canvas.width - PAD.l - PAD.r;
      if (gsapTweenRef.current) gsapTweenRef.current.kill();

      const obj = { val: 0 };
      gsapTweenRef.current = gsap.to(obj, {
        val: chartW,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => drawChart(canvas, obj.val),
      });
    };

    const ro = new ResizeObserver(resizeChart);
    ro.observe(container);
    resizeChart();

    return () => {
      ro.disconnect();
      if (gsapTweenRef.current) gsapTweenRef.current.kill();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (gsapTweenRef.current) gsapTweenRef.current.kill();
    drawChart(canvas);
  }, [selRange]);

  // Mouse/touch on canvas
  function getIdxFromEvent(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const mx = clientX - rect.left;
    const chartW = canvas.width - PAD.l - PAD.r;
    const cw = chartW / CANDLES.length;
    return Math.floor((mx - PAD.l) / cw);
  }

  function handleMove(e) {
    const idx = getIdxFromEvent(e);
    if (idx < 0 || idx >= CANDLES.length) return;
    const c = CANDLES[idx];
    const canvas = canvasRef.current;
    const chartH = canvas.height - PAD.t - PAD.b;
    const cw = (canvas.width - PAD.l - PAD.r) / CANDLES.length;
    const y = PAD.t + (1 - (c.c - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * chartH;
    const x = PAD.l + idx * cw + cw / 2;
    setTooltip({ visible: true, x, y, price: c.c, hovered: true });
  }

  function handleLeave() {
    const canvas = canvasRef.current;
    const cw = (canvas.width - PAD.l - PAD.r) / CANDLES.length;
    const chartH = canvas.height - PAD.t - PAD.b;
    const centerIdx = Math.floor((selRange.start + selRange.end) / 2);
    const lx = PAD.l + centerIdx * cw + cw / 2;
    const ly = PAD.t + (1 - (CANDLES[centerIdx].c - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * chartH;
    setTooltip({ visible: true, x: lx, y: ly, price: CANDLES[centerIdx].c, hovered: false });
  }

  const tooltipW = 108;
  const tooltipH = 40;
  const selectionAnchorLeft = Math.min(
    Math.max(selBox.x + selBox.w - tooltipW - 10, 10),
    Math.max(containerWidth - tooltipW - 10, 10)
  );
  const tooltipLeft = tooltip.hovered
    ? Math.min(Math.max(tooltip.x - tooltipW / 2, 10), Math.max(containerWidth - tooltipW - 10, 10))
    : selectionAnchorLeft;
  const tooltipTop = Math.max(-32, selBox.top - 10);
  const labels = visibleLabels(containerWidth);

  return (
    <div className="rounded-[20px] p-3 sm:p-5 w-full text-[#e2f0ee] relative overflow-hidden bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.7)_100%)]">
      <div className="absolute top-0 right-0 sm:right-6 lg:right-10 w-109.25 h-px bg-linear-to-r from-[#8FB9C2]/0 via-[#8FB9C2] to-[#8FB9C2]/0" />

      <svg className="w-full h-fit absolute top-0 left-0 z-0" viewBox="0 0 653 364" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_2204_349)">
          <path d="M399.605 -91.2331C351.044 23.047 276.997 138.413 264.259 133C251.52 127.587 312.2 7.78015 360.761 -106.5C409.322 -220.78 451.728 -313.37 464.466 -307.957C477.205 -302.544 448.166 -205.513 399.605 -91.2331Z" fill="#14FCF2" fillOpacity="0.25" />
        </g>
        <g filter="url(#filter1_f_2204_349)">
          <ellipse cx="562.058" cy="-111.411" rx="41.0681" ry="318.93" transform="rotate(23.0221 562.058 -111.411)" fill="#14FCF2" fillOpacity="0.25" />
        </g>
        <path d="M0.838867 363.906H0V25.0205H0.838867V363.906ZM77.1836 363.906H76.3447V25.0205H77.1836V363.906ZM153.528 363.906H152.689V25.0205H153.528V363.906ZM229.873 363.906H229.034V25.0205H229.873V363.906ZM306.221 363.906H305.382V25.0205H306.221V363.906ZM382.555 363.906H381.555V25.0205H382.555V363.906ZM458.918 363.906H458.079V25.0205H458.918V363.906ZM535.263 363.906H534.424V25.0205H535.263V363.906Z" fill="url(#paint0_radial_2204_349)" fillOpacity="0.1" />
        <defs>
          <filter id="filter0_f_2204_349" x="162.54" y="-408.183" width="404.923" height="641.366" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_2204_349" />
          </filter>
          <filter id="filter1_f_2204_349" x="331.693" y="-505.386" width="460.73" height="787.95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_2204_349" />
          </filter>
          <radialGradient id="paint0_radial_2204_349" cx="0" cy="0" r="1" gradientTransform="matrix(-126.352 -138.5 226.241 -237.617 365.799 271.5)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 block h-full w-full rounded-[inherit] p-px [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-subtract! [background:linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap relative z-10">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={dateIcon} alt="Data" className="shrink-0 w-6 h-6 sm:w-auto sm:h-auto" />
          <span className="accountfas">Account balance</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 scale-80 sm:scale-100 origin-left">
          <button className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-[10px] hover:bg-[#1a3d38] transition-all cursor-pointer flex items-center justify-center">
            <img src={CandleBtn} alt="Line chart" className="w-full h-full object-contain" />
          </button>
          <button className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-[10px] hover:bg-[#1a3d38] transition-all cursor-pointer flex items-center justify-center">
            <img src={CandleBtn_2} alt="Candle chart" className="w-full h-full object-contain" />
          </button>
          <button className="relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2.25 text-[#8bbdb8] text-[11px] sm:text-sm font-medium hover:text-[#3eddc2] transition-all cursor-pointer">
            <svg width="86" height="38" viewBox="0 0 86 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <g clipPath="url(#clip0_88_327b)">
                <path d="M0 19C0 10.6098 0 6.41472 2.34504 3.61036C2.72843 3.15187 3.15187 2.72843 3.61036 2.34504C6.41472 0 10.6098 0 19 0H67C75.3902 0 79.5853 0 82.3896 2.34504C82.8481 2.72843 83.2716 3.15187 83.655 3.61036C86 6.41472 86 10.6098 86 19V19C86 27.3902 86 31.5853 83.655 34.3896C83.2716 34.8481 82.8481 35.2716 82.3896 35.655C79.5853 38 75.3902 38 67 38H19C10.6098 38 6.41472 38 3.61036 35.655C3.15187 35.2716 2.72843 34.8481 2.34504 34.3896C0 31.5853 0 27.3902 0 19V19Z" fill="#FDFFFF" fillOpacity="0.1" />
                <line x1="18" y1="0.25" x2="76" y2="0.25" stroke="url(#paint0_linear_88_327b)" strokeWidth="1.5" />
              </g>
              <path d="M19 0.5H67C71.2075 0.5 74.319 0.501296 76.7305 0.790039C79.1304 1.07744 80.7717 1.64339 82.0693 2.72852C82.5049 3.09276 82.9072 3.4951 83.2715 3.93066C84.3566 5.22834 84.9226 6.86964 85.21 9.26953C85.4987 11.681 85.5 14.7925 85.5 19C85.5 23.2075 85.4987 26.319 85.21 28.7305C84.9226 31.1304 84.3566 32.7717 83.2715 34.0693C82.9072 34.5049 82.5049 34.9072 82.0693 35.2715C80.7717 36.3566 79.1304 36.9226 76.7305 37.21C74.319 37.4987 71.2075 37.5 67 37.5H19C14.7925 37.5 11.681 37.4987 9.26953 37.21C6.86964 36.9226 5.22834 36.3566 3.93066 35.2715C3.4951 34.9072 3.09276 34.5049 2.72852 34.0693C1.64339 32.7717 1.07744 31.1304 0.790039 28.7305C0.501296 26.319 0.5 23.2075 0.5 19C0.5 14.7925 0.501296 11.681 0.790039 9.26953C1.07744 6.86964 1.64339 5.22834 2.72852 3.93066C3.09276 3.4951 3.4951 3.09276 3.93066 2.72852C5.22834 1.64339 6.86964 1.07744 9.26953 0.790039C11.681 0.501296 14.7925 0.5 19 0.5Z" stroke="url(#paint1_linear_88_327b)" strokeOpacity="0.2" />
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
            <img src={DownArrow} alt="" className="w-2 sm:w-2.25 relative z-10" />
          </button>
        </div>
      </div>

      {/* Timeframes */}
      <div className="flex gap-1 sm:gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-none relative z-10">
        {TIMEFRAMES.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTab(tf)}
            className={`relative user_2 leading-[150%] shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[9px] text-[11px] sm:text-[12px] font-normal transition-all cursor-pointer overflow-hidden
              ${activeTab === tf ? "text-white" : "text-white hover:text-[#3eddc2]"}`}
          >
            {activeTab !== tf && (
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <rect opacity="0.1" width="41.393" height="29.2842" rx="8.39195" fill="#D9D9D9" />
              </svg>
            )}
            {activeTab === tf && (
              <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
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
            <span className="relative gmail text-[10px] sm:text-[11.75px] leading-[150%] z-10">{tf}</span>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div
        ref={containerRef}
        className="w-full rounded-2xl pr-10 sm:pr-12 relative z-10"
        style={{ height: containerWidth < 480 ? 200 : containerWidth < 768 ? 250 : 310 }}
      >
        <div className="absolute right-0 top-3.5 bottom-3 w-9.5 sm:w-12 text-[#8B9D9B] flex flex-col justify-between items-end text-[10px] sm:text-[13px] pointer-events-none">
          {Y_TICKS.slice().reverse().map((v) => (
            <span key={v}>{formatK(v)}</span>
          ))}
        </div>

        {/* Selection overlay */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: selBox.x, top: selBox.top, width: selBox.w, height: selBox.h,
            borderRadius: "16px", overflow: "hidden",
            borderTop: "1px solid rgba(79,190,203,1)",
            borderLeft: "1px solid rgba(79,190,203,1)",
            borderRight: "1px solid rgba(79,190,203,1)",
            borderBottom: "none",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            background: "linear-gradient(180deg, rgba(0,228,255,0.28) 0%, rgba(0,228,255,0.10) 45%, rgba(0,0,0,0) 100%)",
          }}
        />

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
          className="drag-handle-left"
          style={{ left: selBox.x - 12, top: selBox.top + selBox.h / 3 - 24 }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
            <path d="M28 12C28 5.37258 22.6274 0 16 0H12C5.37258 0 0 5.37258 0 12V16C0 22.6274 5.37258 28 12 28H16C22.6274 28 28 22.6274 28 16V12Z" fill="url(#paint0_linear)" />
            <path d="M16 10C16 10 12 12.9459 12 14C12 15.0541 16 18 16 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="14" x2="28" y2="14" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14C0DA" /><stop offset="1" stopColor="#0B6674" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        {/* Right handle */}
        <button
          onMouseDown={(e) => startDrag(e, "right")}
          onTouchStart={(e) => startDrag(e, "right")}
          className="drag-handle-right"
          style={{ background: "linear-gradient(270deg, #14C0DA 0%, #0B6674 100%)", left: selBox.x + selBox.w, top: selBox.top + selBox.h / 3 - 24, transform: "translateX(-50%)" }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H16C22.6274 0 28 5.37258 28 12V16C28 22.6274 22.6274 28 16 28H12C5.37258 28 0 22.6274 0 16V12Z" fill="url(#paint0_linear_right)" />
            <path d="M12 10C12 10 16 12.9459 16 14C16 15.0541 12 18 12 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_right" x1="28" y1="14" x2="0" y2="14" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14C0DA" /><stop offset="1" stopColor="#0B6674" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="hidden md:block absolute z-20 pointer-events-none"
            style={{ left: tooltipLeft, top: tooltipTop, transform: "translateY(-50%)" }}
          >
            <div className="relative Tooltip w-22.5 sm:w-27 rounded-[10px] h-8 sm:h-9.25 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 108 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="107" height="36" rx="9.57" fill="url(#paint0_tt)" fillOpacity="0.3" stroke="url(#paint1_tt)" />
                <defs>
                  <linearGradient id="paint0_tt" x1="54" y1="0" x2="54" y2="40.7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0F909E" stopOpacity="0.1" /><stop offset="1" stopColor="#14FCF2" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="paint1_tt" x1="54" y1="-4.6" x2="54" y2="26.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1E2E1" /><stop offset="1" stopColor="white" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="relative user leading-[150%] z-10 text-[12px] sm:text-[14px] tracking-[0.05em] text-white whitespace-nowrap">
                ${tooltip.price.toLocaleString()} <span className="user leading-[150%] tracking-[0.05em] text-white text-[12px] sm:text-[14px]">USD</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* X-axis labels */}
      <div className="gmail pt-4 sm:pt-6 mx-6 sm:mx-12 leading-[150%] text-[10px] sm:text-[13px] flex justify-between text-[#8B9D9B] relative z-10">
        {labels.map((l) => (<span key={l}>{l}</span>))}
      </div>
    </div>
  );
}