import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { dummyEvents } from '../../data/dummy';
import { FiPlus, FiMoreVertical, FiTrendingUp } from 'react-icons/fi';

const OrganizerDashboard = () => {
    return (
        <div className="flex bg-background min-h-[calc(100vh-4rem)]">
            <Sidebar role="Organizer" />

            <div className="flex-1 p-8">
                <header className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Organizer Portal</h1>
                        <p className="text-slate-400 mt-1">Manage your events and track performance.</p>
                    </div>
                    <button className="btn-primary flex items-center shadow-lg shadow-indigo-500/20">
                        <FiPlus className="mr-2" /> Create New Event
                    </button>
                </header>

                {/* Highlight Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="glass-card p-6 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/30">
                        <div className="text-indigo-300 text-sm font-medium mb-2 flex items-center justify-between">
                            Total Ticket Sales <FiTrendingUp />
                        </div>
                        <div className="text-4xl font-extrabold text-white mb-1">$12,450</div>
                        <div className="text-sm text-emerald-400">+14% this month</div>
                    </div>
                    <div className="glass-card p-6">
                        <div className="text-slate-400 text-sm font-medium mb-2">Total Attendees</div>
                        <div className="text-4xl font-bold text-white mb-1">843</div>
                        <div className="text-sm text-emerald-400">+5% this month</div>
                    </div>
                    <div className="glass-card p-6">
                        <div className="text-slate-400 text-sm font-medium mb-2">Active Events</div>
                        <div className="text-4xl font-bold text-white mb-1">2</div>
                        <div className="text-sm text-slate-500">Live now</div>
                    </div>
                </div>

                {/* Hosted Events List */}
                <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                        <h2 className="text-xl font-bold">Your Events</h2>
                        <div className="flex gap-2">
                            <select className="bg-slate-800 border-none text-slate-300 text-sm rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-indigo-500 outline-none">
                                <option>All Events</option>
                                <option>Active</option>
                                <option>Past</option>
                            </select>
                        </div>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {dummyEvents.slice(0, 2).map((event, i) => (
                            <div key={i} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-slate-800/30 transition-colors">
                                <img src={event.banner} alt={event.title} className="w-full sm:w-32 h-24 object-cover rounded-lg" />
                                <div className="flex-1 w-full text-left">
                                    <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                                    <div className="text-sm text-slate-400 flex items-center gap-4 mb-3">
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span>{event.venue}</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-xs font-medium px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20">Tickets Sold: 145/200</span>
                                        <span className="text-xs font-medium px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Revenue: ${(event.price * 145).toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                                    <button className="btn-secondary py-1.5 px-4 text-sm w-full sm:w-auto">Manage</button>
                                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                                        <FiMoreVertical />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrganizerDashboard;
