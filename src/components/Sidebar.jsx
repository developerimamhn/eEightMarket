import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="w-68 bg-[#07181c] p-5">
            <h1 className="text-xl font-bold mb-10">E8 Markets</h1>

            <ul className="space-y-8">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/accountoverview">Account Overview</Link>
                </li>
                <li>
                    <Link to="/orderlist">Order List</Link>
                </li>
                <li>
                    <Link to="/usersetting">User Setting</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/accountextras">Account Extras</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
