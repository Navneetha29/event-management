import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiList, FiUsers, FiSettings, FiPieChart, FiLogOut, FiCalendar } from 'react-icons/fi';

const Sidebar = ({ role }) => {
    const adminLinks = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard/admin' },
        { name: 'Manage Users', icon: FiUsers, path: '#users' },
        { name: 'Manage Events', icon: FiCalendar, path: '#events' },
        { name: 'Analytics', icon: FiPieChart, path: '#analytics' },
        { name: 'Settings', icon: FiSettings, path: '#settings' },
    ];

    const userLinks = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard/user' },
        { name: 'My Registrations', icon: FiList, path: '#registrations' },
        { name: 'Browse Events', icon: FiCalendar, path: '/events' },
        { name: 'Profile', icon: FiUsers, path: '#profile' },
    ];

    const organizerLinks = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard/organizer' },
        { name: 'My Events', icon: FiList, path: '#my-events' },
        { name: 'Create Event', icon: FiCalendar, path: '#create' },
        { name: 'Sales & Analytics', icon: FiPieChart, path: '#sales' },
    ];

    let links = userLinks;
    if (role === 'Admin') links = adminLinks;
    if (role === 'Organizer') links = organizerLinks;

    return (
        <div className="w-64 h-[calc(100vh-4rem)] bg-slate-900/50 border-r border-slate-800 p-4 sticky top-16 hidden md:flex flex-col">
            <div className="mb-8 p-4">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                    {role} Portal
                </h2>
            </div>

            <nav className="flex-1 space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive && !link.path.startsWith('#')
                                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`
                        }
                    >
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="border-t border-slate-800 pt-4 mt-auto">
                <NavLink to="/login" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                    <FiLogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
