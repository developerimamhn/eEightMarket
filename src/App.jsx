import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import AccountOverview from './pages/AccountOverview'
import OrderList from './pages/OrderList'
import UserSetting from './pages/UserSetting'
import Leaderboard from './pages/Leaderboard'
import AccountExtras from './pages/AccountExtras'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/accountoverview" element={<AccountOverview />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/usersetting" element={<UserSetting />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/accountextras" element={<AccountExtras />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

