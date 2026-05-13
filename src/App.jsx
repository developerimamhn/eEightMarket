import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './component/common/Navbar'
import Sidebar from './component/common/sidebar'
import PageTransition from './component/common/PageTransition'

import Dashboard from './pages/Dashboard/index'
import UserSettings from './pages/UserSetting/UserSettings'
import Account from './pages/Account'
import Order from './pages/Order'
import Leaderboard from './pages/Leaderboard'
import Extras from './pages/Extras'
import NewsFeed from './pages/NewsFeed'
import EconomicCalendar from './pages/EconomicCalendar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="h-screen w-full flex bg-[#060F10] overflow-hidden">
        <svg className="absolute top-0 right-0" width="419" height="274" viewBox="0 0 419 274" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_74_376)">
            <circle cx="286.5" cy="-12.5" r="56.5" fill="#7DFFE9" fillOpacity="0.8" />
          </g>
          <defs>
            <filter id="filter0_f_74_376" x="0" y="-299" width="573" height="573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="115" result="effect1_foregroundBlur_74_376" />
            </filter>
          </defs>
        </svg>

        <Sidebar mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="shrink-0">
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
          </div>

          <main className="flex-1 overflow-y-auto p-6">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/account" element={<Account />} />
                <Route path="/order" element={<Order />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/extras" element={<Extras />} />
                <Route path="/news" element={<NewsFeed />} />
                <Route path="/calendar" element={<EconomicCalendar />} />
              </Routes>
            </PageTransition>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App