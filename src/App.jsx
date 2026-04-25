


import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'

// Pages
import Dashboard from './pages/Dashboard'
import UserSettings from './pages/UserSettings'
import Account from './pages/Account'
import Order from './pages/Order'
import Leaderboard from './pages/Leaderboard'
import Extras from './pages/Extras'
import NewsFeed from './component/NewsFeed'
import EconomicCalendar from './pages/EconomicCalendar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex bg-[#060F10]">

        {/* Sidebar */}
        <Sidebar
          mobileOpen={sidebarOpen}
          setMobileOpen={setSidebarOpen}
        />

        {/* Main */}
        <div className="flex flex-col flex-1 overflow-hidden">

          <Navbar onMenuClick={() => setSidebarOpen(true)} />

          <div className="flex-1 overflow-y-auto p-[24px]">

            <Routes>

              {/* 🔥 IMPORTANT: default route */}
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

          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App