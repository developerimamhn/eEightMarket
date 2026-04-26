import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-[272px] bg-[#07181c] p-5">
            <h1 className="text-xl font-bold mb-10">E8 Markets</h1>

            <ul className="space-y-4">
                <li>Dashboard</li>
                <li>Account Overview</li>
                <li>Order List</li>
                <li>User Setting</li>
                <li className="bg-teal-600 p-2 rounded">Leaderboard</li>
            </ul>
        </div>
    )
}

export default Sidebar
