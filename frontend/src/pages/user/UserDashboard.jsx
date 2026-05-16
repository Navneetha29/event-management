import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { dummyEvents, dummyUser } from '../../data/dummy';
import { FiCalendar, FiClock, FiMapPin, FiDownload } from 'react-icons/fi';

const UserDashboard = () => {
    const registeredEvents = dummyEvents.filter(e => dummyUser.registeredEvents.includes(e.id));

    return (
        <div className="flex bg-background min-h-[calc(100vh-4rem)]">
            <Sidebar role="User" />

            <div className="flex-1 p-8">
                <header className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Welcome, {dummyUser.name}!</h1>
                        <p className="text-slate-400 mt-1">Here is the overview of your registered events.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={dummyUser.avatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                    </div>
                </header>

                {/* Status Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="glass-card p-6 border-l-4 border-l-indigo-500">
                        <div className="text-slate-400 text-sm mb-1">Upcoming Events</div>
                        <div className="text-3xl font-bold">{registeredEvents.length}</div>
                    </div>
                    <div className="glass-card p-6 border-l-4 border-l-emerald-500">
                        <div className="text-slate-400 text-sm mb-1">Tickets Available</div>
                        <div className="text-3xl font-bold">{registeredEvents.length}</div>
                    </div>
                    <div className="glass-card p-6 border-l-4 border-l-violet-500">
                        <div className="text-slate-400 text-sm mb-1">Past Attended</div>
                        <div className="text-3xl font-bold">5</div>
                    </div>
                </div>

                {/* Registrations List */}
                <h2 className="text-xl font-bold mb-6 border-b border-slate-800 pb-2">Your Registrations</h2>
                <div className="space-y-4">
                    {registeredEvents.map(event => (
                        <div key={event.id} className="glass-card p-4 flex flex-col md:flex-row items-center gap-6 hover:bg-slate-800/60 transition-colors">
                            <img src={event.banner} alt={event.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                            <div className="flex-1">
                                <div className="text-indigo-400 text-xs font-semibold mb-1 uppercase tracking-wider">{event.category}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                    <div className="flex items-center"><FiCalendar className="mr-1.5" />{new Date(event.date).toLocaleDateString()}</div>
                                    <div className="flex items-center"><FiClock className="mr-1.5" />{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    <div className="flex items-center"><FiMapPin className="mr-1.5" />{event.venue}</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full md:w-auto">
                                <button className="btn-primary py-2 px-6 flex items-center justify-center text-sm shadow-none">
                                    <FiDownload className="mr-2" /> Ticket
                                </button>
                                <button className="text-slate-400 hover:text-red-400 text-sm transition-colors">
                                    Cancel RSVP
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
