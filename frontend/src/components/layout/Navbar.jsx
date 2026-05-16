import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCalendar, FiUser, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const location = useLocation();
    const isDashboard = location.pathname.includes('/dashboard');

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <FiCalendar className="w-8 h-8 text-indigo-500" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                            Eventify
                        </span>
                    </Link>

                    {!isDashboard && (
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/events" className="text-slate-300 hover:text-white transition-colors">Events</Link>
                            <Link to="/#features" className="text-slate-300 hover:text-white transition-colors">Features</Link>
                            <Link to="/#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link>
                        </div>
                    )}

                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-slate-300 hover:text-white transition-colors">Log in</Link>
                        <Link to="/signup" className="btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
