import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { dummyEvents } from '../../data/dummy';

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-32">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-indigo-950/20 -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            Host and attend <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                                unforgettable events
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
                            The modern SaaS platform to discover, register, and manage events. Built for organizers and attendees.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <Link to="/events" className="btn-primary flex items-center justify-center">
                                Explore Events <FiArrowRight className="ml-2" />
                            </Link>
                            <Link to="/signup" className="btn-secondary">
                                Create Event
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass-card p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                                alt="Tech Event"
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                                <span className="text-white font-semibold">1.5k+ Attendees</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Popular Events */}
            <section className="py-20 bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Popular Events</h2>
                            <p className="text-slate-400">Discover trending events highly rated by our community.</p>
                        </div>
                        <Link to="/events" className="hidden sm:flex text-indigo-400 hover:text-indigo-300 items-center">
                            View all <FiArrowRight className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dummyEvents.slice(0, 3).map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card group overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={event.banner} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-300">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-slate-400 text-sm mb-2 font-medium">
                                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{event.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                                    <div className="flex justify-between items-center border-t border-slate-700/50 pt-4">
                                        <span className="font-semibold">{event.price === 0 ? 'Free' : `$${event.price}`}</span>
                                        <Link to={`/events`} className="text-indigo-400 text-sm hover:text-indigo-300 font-medium">Details</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to host successful events</h2>
                        <p className="text-slate-400 text-lg">Our SaaS platform provides all the tools organizers and attendees need for a seamless experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Easy Registration', desc: 'Customizable forms and one-click registration for returning users.' },
                            { title: 'Dashboard Analytics', desc: 'Real-time sales, attendance, and revenue tracking.' },
                            { title: 'Automated Notifications', desc: 'Email and SMS reminders to reduce no-shows.' },
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8">
                                <FiCheckCircle className="w-10 h-10 text-indigo-400 mb-6" />
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
