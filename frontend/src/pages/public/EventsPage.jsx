import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import api from '../../services/api';
// Fallback if backend is not running
import { dummyEvents } from '../../data/dummy';

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await api.get('/events');
                setEvents(data);
            } catch (error) {
                console.error('Failed to fetch events from API, using dummy data payload.');
                setEvents(dummyEvents);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const categories = ['All', 'Technical', 'Music', 'Business', 'Workshop', 'Sports', 'Cultural'];

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Discover Events</h1>
                <p className="text-slate-400 text-lg">Find the perfect event matching your interests.</p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="relative flex-grow">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategoryFilter(cat)}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${categoryFilter === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-400 animate-pulse">Loading events...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, i) => (
                            <motion.div
                                key={event._id || event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="glass-card group overflow-hidden flex flex-col"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img src={event.banner} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-indigo-300">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="text-indigo-400 text-xs mb-2 font-medium">
                                        {new Date(event.date).toLocaleDateString()} {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{event.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{event.description}</p>
                                    <div className="flex justify-between items-center border-t border-slate-700/50 pt-3 mt-auto">
                                        <span className="font-semibold">{event.price === 0 ? 'Free' : `$${event.price}`}</span>
                                        <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors text-sm font-medium">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-400">
                            <FiSearch className="mx-auto w-12 h-12 mb-4 opacity-50" />
                            <p className="text-lg">No events found matching your criteria.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventsPage;
