import { useState } from "react";
import GBPLogo from "../assets/GBP.png";
import EURLogo from "../assets/EUR.png";
import CHFLogo from "../assets/CHU.png";
import CADLogo from "../assets/CAD.png";
import USDLogo from "../assets/USD.png";
import All_Logo from "../assets/All.png";
import Calendar_Logo from "../assets/EC_Logo.png";
import CurrencyLogo from "../assets/Currency_Logo2.png";
import ImpactLogo from "../assets/Impact_Logo.png";
import RestrictedIcon from "../assets/Restrictd_Icon.png";
import IconArrow from "../assets/IconArrow.png";

const SAMPLE_EVENTS = [
  { id: 1, name: "Retail Sales m/m", impact: "high", currency: "GBP", date: "25/04/2025 12:00:00", forecast: "-0.4%", previous: "1.0%" },
  { id: 2, name: "Italian Bank Holiday", impact: "holiday", currency: "EUR", date: "25/04/2025 12:03:00", forecast: "0", previous: "0" },
  { id: 3, name: "SNB Chairman Schlegel Speaks", impact: "high", currency: "CHF", date: "25/04/2025 14:00:00", forecast: "0", previous: "0" },
  { id: 4, name: "Core Retail Sales m/m", impact: "high", currency: "CAD", date: "25/04/2025 18:30:00", forecast: "0.0%", previous: "0.2%" },
  { id: 5, name: "Retail Sales m/m", impact: "high", currency: "CAD", date: "25/04/2025 12:00:00", forecast: "-0.4%", previous: "-0.6%" },
  { id: 6, name: "Revised UoM Inflation Expect", impact: "low", currency: "USD", date: "25/04/2025 20:00:00", forecast: "0", previous: "6.7%" },
  { id: 7, name: "Revised UoM Consumer Sentiment", impact: "medium", currency: "USD", date: "25/04/2025 20:00:00", forecast: "50.8", previous: "50.8" },
  { id: 8, name: "MPC Member Greene Speaks", impact: "low", currency: "GBP", date: "25/04/2025 20:00:00", forecast: "0", previous: "0" },
  { id: 9, name: "IMF Meeting", impact: "low", currency: "All", date: "25/04/2025 20:15:00", forecast: "0", previous: "0" },
  { id: 10, name: "IMF Meeting", impact: "low", currency: "All", date: "25/04/2025 20:15:00", forecast: "0", previous: "0" },
];

const DAYS = ["Friday", "Saturday"];
const CURRENCIES = ["All", "GBP", "EUR", "CHF", "CAD", "USD"];

const CURRENCY_LOGOS = {
  GBP: GBPLogo,
  EUR: EURLogo,
  CHF: CHFLogo,
  CAD: CADLogo,
  USD: USDLogo,
  All: All_Logo,
};

const IMPACT_STYLES = {
  high: { dot: "bg-red-400", badge: "bg-red-500/15 text-red-400", label: "High" },
  medium: { dot: "bg-yellow-400", badge: "bg-yellow-500/15 text-yellow-400", label: "Medium" },
  low: { dot: "bg-emerald-400", badge: "bg-emerald-500/15 text-emerald-400", label: "Low" },
  holiday: { dot: "bg-violet-400", badge: "bg-violet-500/15 text-violet-400", label: "Holiday" },
};

function ImpactBadge({ impact }) {
  const s = IMPACT_STYLES[impact] || IMPACT_STYLES.low;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${s.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

function CurrencyDisplay({ currency }) {
  const logo = CURRENCY_LOGOS[currency];
  return (
    <span className="inline-flex items-center gap-1.5">
      {logo && (
        <img src={logo} alt={currency} className="w-4 h-4 object-contain" />
      )}
      <span className="text-[12px] font-medium text-slate-300">{currency}</span>
    </span>
  );
}

function colorVal(val) {
  if (!val || val === "0") return "text-slate-500";
  if (val.startsWith("-")) return "text-red-400";
  return "text-emerald-400";
}

function Pagination({ current, total, onChange }) {
  const getPages = () => {
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);
    if (end - start < 4) {
      if (start === 1) end = Math.min(total, start + 4);
      else if (end === total) start = Math.max(1, end - 4);
    }
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        className="w-7 h-7 flex items-center justify-center rounded text-slate-500 hover:text-slate-300 text-base transition-colors"
      >‹</button>
      {getPages().map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-7 h-7 flex items-center justify-center rounded text-[11px] font-semibold transition-colors ${p === current
              ? "bg-slate-800 text-slate-100 border border-slate-600"
              : "text-slate-500 hover:text-slate-300"
            }`}
        >
          {String(p).padStart(2, "0")}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        className="w-7 h-7 flex items-center justify-center rounded text-slate-500 hover:text-slate-300 text-base transition-colors"
      >›</button>
    </div>
  );
}

function MobileEventRow({ event }) {
  const [open, setOpen] = useState(false);
  const s = IMPACT_STYLES[event.impact] || IMPACT_STYLES.low;

  return (
    <div className="border-b border-slate-800/50 last:border-b-0">
      {/* ── Collapsed row ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-800/20 active:bg-slate-800/30 transition-colors"
      >
        <span className={`shrink-0 w-2 h-2 rounded-full ${s.dot}`} />

        <span className="flex-1 text-slate-200 text-[13px] font-medium leading-snug">
          {event.name}
        </span>

        {/* currency pill with logo */}
        <span className="shrink-0 inline-flex items-center gap-1.5 bg-slate-800/60 px-2 py-0.5 rounded">
          {CURRENCY_LOGOS[event.currency] && (
            <img
              src={CURRENCY_LOGOS[event.currency]}
              alt={event.currency}
              className="w-[12px] h-[12px] object-contain"
            />
          )}
          <span className="text-[11px] font-semibold text-slate-400">
            {event.currency}
          </span>
        </span>

        <span className={`shrink-0 text-slate-500 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* ── Expanded details ── */}
      {open && (
        <div className="px-4 pb-4 pt-1 grid grid-cols-2 gap-x-6 gap-y-3 bg-slate-900/40">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Impact</p>
            <ImpactBadge impact={event.impact} />
          </div>

          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Currency</p>
            <CurrencyDisplay currency={event.currency} />
          </div>

          <div className="col-span-2">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Date</p>
            <p className="text-[11px] text-slate-400 font-mono">{event.date}</p>
          </div>

          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Forecast</p>
            <p className={`text-[14px] font-mono font-semibold ${colorVal(event.forecast)}`}>
              {event.forecast === "0" ? "—" : event.forecast}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Previous</p>
            <p className={`text-[14px] font-mono font-semibold ${colorVal(event.previous)}`}>
              {event.previous === "0" ? "—" : event.previous}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const TABLE_COLS = [
  { label: "Event", sortable: true },
  { label: "Impact", sortable: true },
  { label: "Currency", sortable: false },
  { label: "Date", sortable: true },
  { label: "Forecast", sortable: false },
  { label: "Previous", sortable: false },
];

export function EconomicCalendar() {
  const [selectedImpact, setSelectedImpact] = useState("all");
  const [activeDay, setActiveDay] = useState("Friday");
  const [selectedCurrency, setSelectedCurrency] = useState("All");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const filtered = SAMPLE_EVENTS.filter((e) => {
    const currencyMatch = selectedCurrency === "All" ? true : e.currency === selectedCurrency;
    const impactMatch = selectedImpact === "all" ? true : e.impact === selectedImpact;
    return currencyMatch && impactMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleCurrencyClick = (cur) => { setSelectedCurrency(cur); setPage(1); };
  const handleImpactClick = (key) => { setSelectedImpact(key); setPage(1); };

  return (
    <div className="p-3 sm:p-6">
      <div className="w-full rounded-[19px] bg-[linear-gradient(180deg,#011314_0%,#011515_85%,rgba(9,42,45,0.7)_100%)]">

        {/* ── Top header ── */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <img src={Calendar_Logo} alt="calendar" className="w-9 h-9 sm:w-[43px] sm:h-[43px] object-contain" />
            <span className="text-[15px] sm:text-[17px] font-medium text-white">
              Economic Calendar
            </span>
          </div>
          <div className="flex items-center gap-1 bg-white/[0.03] border border-slate-800 rounded-lg p-1">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-3 py-1 rounded-md text-xs font-medium  ${activeDay === day
                    ? "bg-slate-800 border border-slate-700 text-slate-100"
                    : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main card ── */}
        <div className="w-full bg-[#0d1117] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="w-full p-[1px] bg-[linear-gradient(252.84deg,#86B4B4_0.99%,rgba(58,78,78,0.1)_36.61%)]" />

          {/* ════════════════════════════════
              MOBILE filters
          ════════════════════════════════ */}
          <div className="block sm:hidden  bg-[#0a0f16]">

            {/* Currency chips */}
            <div
              className="flex items-center gap-2 px-3 pt-3 pb-2 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="shrink-0 flex items-center">
                <img src={CurrencyLogo} alt="currency" className="w-5 h-5 object-contain opacity-60" />
              </div>
              {CURRENCIES.map((cur) => (
                <button
                  key={cur}
                  onClick={() => handleCurrencyClick(cur)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${selectedCurrency === cur
                      ? "bg-slate-700 border-slate-500 text-white"
                      : "border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
                    }`}
                >
                  {CURRENCY_LOGOS[cur] && (
                    <img src={CURRENCY_LOGOS[cur]} alt={cur} className="w-3.5 h-3.5 object-contain" />
                  )}
                  {cur}
                </button>
              ))}
            </div>

            {/* Impact chips */}
            <div
              className="flex items-center gap-2 px-3 pb-3 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="shrink-0 flex items-center">
                <img src={ImpactLogo} alt="impact" className="w-5 h-5 object-contain opacity-60" />
              </div>
              <button
                onClick={() => handleImpactClick("all")}
                className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${selectedImpact === "all"
                    ? "bg-slate-700 border-slate-500 text-white"
                    : "border-slate-800 text-slate-500 hover:border-slate-700"
                  }`}
              >
                All
              </button>
              {Object.entries(IMPACT_STYLES).map(([key, s]) => (
                <button
                  key={key}
                  onClick={() => handleImpactClick(key)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${selectedImpact === key
                      ? "bg-slate-700 border-slate-500 text-white"
                      : "border-slate-800 text-slate-500 hover:border-slate-700"
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════
              DESKTOP filters
          ════════════════════════════════ */}
          <div className="hidden sm:flex items-start justify-between gap-4 bg-[#0a0f16] px-4 py-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src={CurrencyLogo} alt="currency" className="w-[36px] h-[36px] object-contain" />
                <span className="text-[16px] font-medium text-white">Currency</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {CURRENCIES.map((cur) => (
                  <button
                    key={cur}
                    onClick={() => handleCurrencyClick(cur)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all ${selectedCurrency === cur
                        ? "bg-slate-800 border-slate-600 text-slate-200"
                        : "border-transparent text-slate-600 hover:text-slate-400"
                      }`}
                  >
                    {CURRENCY_LOGOS[cur] && (
                      <img src={CURRENCY_LOGOS[cur]} alt={cur} className="w-3 h-3 object-contain" />
                    )}
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <div className="flex items-center gap-2">
                <img src={ImpactLogo} alt="impact" className="w-[36px] h-[36px] object-contain" />
                <span className="text-[16px] font-medium text-white">Impact</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap justify-end">
                {Object.entries(IMPACT_STYLES).map(([key, s]) => (
                  <button
                    key={key}
                    onClick={() => handleImpactClick(key)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[13px] font-medium border transition-all ${selectedImpact === key
                        ? "bg-slate-800 border-slate-600 text-slate-200"
                        : "border-transparent text-slate-600 hover:text-slate-400"
                      }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              MOBILE: Accordion list
          ════════════════════════════════ */}
          <div className="block sm:hidden">
            {paged.length === 0 ? (
              <p className="text-center py-10 text-slate-600 text-sm">No events found</p>
            ) : (
              paged.map((event) => (
                <MobileEventRow key={event.id} event={event} />
              ))
            )}
          </div>

          {/* ════════════════════════════════
              DESKTOP: Table
          ════════════════════════════════ */}
          <div className="hidden sm:block px-4">
            <table className="w-full border-collapse" style={{ minWidth: "600px" }}>
              <thead>
                <tr>
                  {TABLE_COLS.map((col, idx, arr) => (
                    <th
                      key={col.label}
                      className={`px-0 py-0 text-left bg-white/[0.03]
                        ${idx === 0 ? "rounded-l-[16px]" : ""}
                        ${idx === arr.length - 1 ? "rounded-r-[16px]" : ""}
                      `}
                    >
                      <div className={`flex items-center ${idx < arr.length - 1 ? "border-r border-slate-700/60" : ""}`}>
                        <button className="inline-flex items-center gap-2 px-[20px] py-[12px] cursor-pointer select-none whitespace-nowrap bg-transparent hover:bg-slate-800/50 transition-all w-full text-white text-[16px] font-medium leading-[150%] tracking-normal min-w-[44px]">
                          {col.label}
                          {col.sortable && (
                            <img src={IconArrow} alt="sort" className="ml-auto w-3 h-3 object-contain " />
                          )}
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paged.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-slate-600 text-sm">
                      No events found
                    </td>
                  </tr>
                ) : (
                  paged.map((event) => (
                    <tr
                      key={event.id}
                      className="border-b border-slate-800/30 hover:bg-slate-800/20 transition-colors"
                    >
                      <td className="px-4 py-2.5 text-slate-200 text-[16px] font-[450] whitespace-nowrap">
                        {event.name}
                      </td>
                      <td className="px-4 py-2.5">
                        <ImpactBadge impact={event.impact} />
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="inline-flex items-center gap-1.5">
                          {CURRENCY_LOGOS[event.currency] && (
                            <img
                              src={CURRENCY_LOGOS[event.currency]}
                              alt={event.currency}
                              className="w-[12px] h-[12px] object-contain"
                            />
                          )}
                          <span className="text-slate-400 text-[12px]">{event.currency}</span>
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-400 text-[16px] font-mono whitespace-nowrap">
                        {event.date}
                      </td>
                      <td className={`px-4 py-2.5 text-[16px] font-mono ${colorVal(event.forecast)}`}>
                        {event.forecast}
                      </td>
                      <td className={`px-4 py-2.5 text-[16px] font-mono ${colorVal(event.previous)}`}>
                        {event.previous}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* ── Footer ── */}


          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-t border-slate-800/60 bg-[#0a0f16]">
            <div className="flex items-center gap-2 text-[11px]">
              <img
                src={RestrictedIcon}
                alt="Restricted"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="text-slate-500 text-[18px]">Restricted News.</span>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-[18px]">More Info</button>
            </div>
            <Pagination current={page} total={totalPages} onChange={setPage} />
          </div>


        </div>
      </div>
    </div>
  );
}

export default EconomicCalendar;