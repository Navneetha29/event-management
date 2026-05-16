import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
import LandingPage from './pages/public/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import EventsPage from './pages/public/EventsPage';

// Dashboards
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-background text-slate-100">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/events" element={<EventsPage />} />

                        {/* Dashboard Routes (Mocked Auth) */}
                        <Route path="/dashboard/user" element={<UserDashboard />} />
                        <Route path="/dashboard/admin" element={<AdminDashboard />} />
                        <Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
