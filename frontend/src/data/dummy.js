export const dummyEvents = [
    {
        id: 1,
        title: 'Global Tech Summit 2026',
        description: 'Join the brightest minds in technology for a 3-day deep dive into AI, Web3, and the future of SaaS.',
        date: '2026-06-15T09:00:00Z',
        venue: 'San Francisco, CA',
        category: 'Technical',
        price: 299,
        organizer: 'TechCorp Inc.',
        banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        popularity: 95
    },
    {
        id: 2,
        title: 'Summer Music Festival',
        description: 'A weekend of live music, food trucks, and unforgettable memories at the city park.',
        date: '2026-07-20T14:00:00Z',
        venue: 'Central Park, NY',
        category: 'Music',
        price: 150,
        organizer: 'LiveNation',
        banner: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
        popularity: 88
    },
    {
        id: 3,
        title: 'Startup Founders Meetup',
        description: 'Networking event for early-stage startup founders to meet investors and co-founders.',
        date: '2026-05-25T18:00:00Z',
        venue: 'Austin, TX',
        category: 'Business',
        price: 0,
        organizer: 'StartupGrind',
        banner: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
        popularity: 70
    },
    {
        id: 4,
        title: 'Design Dynamics Workshop',
        description: 'Hands-on UI/UX workshop focusing on modern glassmorphism and animation techniques.',
        date: '2026-06-05T10:00:00Z',
        venue: 'Online',
        category: 'Workshop',
        price: 49,
        organizer: 'DesignMasters',
        banner: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        popularity: 82
    }
];

export const dummyUser = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'User',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
    registeredEvents: [1, 4]
};

export const dashboardAnalytics = {
    totalUsers: 1450,
    totalEvents: 85,
    revenue: 45200,
    activeEvents: 12,
    chartData: [
        { name: 'Jan', registrations: 400, revenue: 2400 },
        { name: 'Feb', registrations: 300, revenue: 1398 },
        { name: 'Mar', registrations: 550, revenue: 3800 },
        { name: 'Apr', registrations: 450, revenue: 3908 },
        { name: 'May', registrations: 600, revenue: 4800 },
        { name: 'Jun', registrations: 700, revenue: 5800 },
    ]
};
