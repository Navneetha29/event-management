import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));

            if (data.role === 'Admin') navigate('/dashboard/admin');
            else if (data.role === 'Organizer') navigate('/dashboard/organizer');
            else navigate('/dashboard/user');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to login');
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-background -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full glass-card p-8 rounded-2xl relative"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
                    <p className="mt-2 text-slate-400">Sign in to your account to continue</p>
                </div>

                {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 text-red-500 rounded text-sm text-center">{error}</div>}

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                            <input
                                type="password"
                                required
                                className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">Forgot your password?</a>
                        </div>
                    </div>

                    <button type="submit" className="w-full btn-primary flex justify-center items-center py-3">
                        Sign In <FiArrowRight className="ml-2" />
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-400 flex flex-col space-y-2">
                    <span>
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                            Sign up now
                        </Link>
                    </span>
                    <div className="pt-4 border-t border-slate-800 flex justify-center space-x-4 text-xs">
                        <button onClick={() => navigate('/dashboard/admin')} className="text-slate-500 hover:text-white">Admin Login</button>
                        <button onClick={() => navigate('/dashboard/organizer')} className="text-slate-500 hover:text-white">Organizer Login</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
