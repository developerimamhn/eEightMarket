// import './App.css'
// import BillingInfo from './component/Billing'
// import Navbar from './component/Navbar'
// import Sidebar from './component/Sidebar'
// import Hero from './component/Hero'


// function App() {
//   return (
//     <div className="flex h-screen w-screen overflow-hidden bg-[#060F10]">
      
//       {/* Sidebar — বামে fixed */}
//       <Sidebar />

//       {/* Right side — Navbar উপরে, content নিচে */}
//       <div className="flex flex-col flex-1 overflow-hidden">
        
//         {/* Navbar — উপরে */}
//         <Navbar />
//         <Hero />

//         {/* Page content — scroll হবে */}
//         <div className="flex-1 overflow-y-auto p-[24px]">
//           <BillingInfo />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'
import BillingInfo from './component/Billing'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Hero from './component/Hero'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#060F10]">
      
      <Sidebar mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <Hero />

        <div className="flex-1 overflow-y-auto p-[24px]">
          <BillingInfo />
        </div>

      </div>
    </div>
  )
}

export default App