import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { dashboardAnalytics, dummyEvents } from '../../data/dummy';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiUsers, FiCalendar, FiDollarSign, FiActivity } from 'react-icons/fi';

const AdminDashboard = () => {
    return (
        <div className="flex bg-background min-h-[calc(100vh-4rem)]">
            <Sidebar role="Admin" />

            <div className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white">Platform Overview</h1>
                    <p className="text-slate-400 mt-1">Analytics and user management for the entire platform.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Users', value: dashboardAnalytics.totalUsers, icon: FiUsers, color: 'text-blue-500' },
                        { label: 'Total Events', value: dashboardAnalytics.totalEvents, icon: FiCalendar, color: 'text-violet-500' },
                        { label: 'Total Revenue', value: `$${dashboardAnalytics.revenue.toLocaleString()}`, icon: FiDollarSign, color: 'text-emerald-500' },
                        { label: 'Active Tasks', value: dashboardAnalytics.activeEvents, icon: FiActivity, color: 'text-orange-500' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-card p-6 flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            </div>
                            <div className={`p-4 rounded-full bg-slate-800/80 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts and Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 glass-card p-6">
                        <h2 className="text-lg font-bold mb-6">Revenue & Registrations Overview</h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dashboardAnalytics.chartData}>
                                    <defs>
                                        <linearGradient id="colorRegistrations" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                    <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area type="monotone" dataKey="registrations" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRegistrations)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-t-4 border-indigo-500">
                        <h2 className="text-lg font-bold mb-4">Pending Approvals</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                            <FiUsers className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">New Organizer</p>
                                            <p className="text-xs text-slate-400">2 hours ago</p>
                                        </div>
                                    </div>
                                    <button className="text-xs btn-primary px-3 py-1 rounded">Approve</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Events Table */}
                <div className="glass-card p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold">Recent Events</h2>
                        <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-400 text-sm">
                                    <th className="pb-3 font-medium">Event Name</th>
                                    <th className="pb-3 font-medium">Organizer</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyEvents.map((event, i) => (
                                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                                        <td className="py-4 text-white font-medium">{event.title}</td>
                                        <td className="py-4 text-slate-300">{event.organizer}</td>
                                        <td className="py-4 text-slate-400">{new Date(event.date).toLocaleDateString()}</td>
                                        <td className="py-4">
                                            <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <button className="text-slate-400 hover:text-white transition-colors">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
