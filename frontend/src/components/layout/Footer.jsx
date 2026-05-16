import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <FiCalendar className="w-8 h-8 text-indigo-500" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                                Eventify
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6">
                            The modern way to manage, host, and discover incredible events worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FiTwitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FiGithub className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FiLinkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link to="/events" className="text-slate-400 hover:text-white transition-colors">Browse Events</Link></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Eventify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
