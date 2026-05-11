export const heroStats = [
  { value: 'Free', label: 'for spaces' },
  { value: 'Zero', label: 'lead cost' },
  { value: '100+', label: 'spaces' },
];

export const opportunityStats = [
  { value: 2.1, suffix: '%', label: 'of office inventory globally is coworking' },
  { value: 59, suffix: '%', label: 'of growing companies want flexible space' },
  { value: 28, suffix: 'x', label: 'gap between supply and demand' },
  { value: 0, prefix: '₹', label: 'cost for leads to partner spaces' },
];

export const passTiers = [
  {
    name: 'Explorer',
    desc: 'Browse, compare, and discover your perfect workspace.',
    price: 'Free',
    period: '',
    features: [
      'Browse all listed spaces',
      'Compare prices & amenities',
      'Read verified reviews',
      'Save your favorites',
      'Basic search filters',
    ],
    cta: 'Start Exploring',
    badge: null,
  },
  {
    name: 'Day Pass',
    desc: 'Drop in anywhere for a productive work day.',
    price: '₹499',
    period: 'per day',
    features: [
      'Access any partner space for a day',
      'High-speed WiFi included',
      'Complimentary beverages',
      '10 pages printing',
      'Community events access',
    ],
    cta: 'Get Day Pass',
    badge: null,
  },
  {
    name: 'Flex Pass',
    desc: 'The perfect balance of flexibility and value.',
    price: '₹4,999',
    period: 'per month',
    features: [
      '10 days/month at any space',
      '2 hrs meeting room credits',
      'Priority booking',
      'Community events access',
      'Dedicated support line',
      '2 guest passes/month',
    ],
    cta: 'Get Flex Pass',
    badge: 'Most Popular',
  },
  {
    name: 'Unlimited',
    desc: 'Unrestricted access to the entire network.',
    price: '₹8,999',
    period: 'per month',
    features: [
      'Unlimited access everywhere',
      'Dedicated desk priority',
      '24/7 access at select spaces',
      '5 hrs meeting room credits',
      'VIP networking events',
      'All amenities included',
      'Personal concierge',
    ],
    cta: 'Go Unlimited',
    badge: null,
  },
];

export const spaces = [
  {
    id: 1,
    name: 'The Starter Hub',
    location: 'Connaught Place, Delhi',
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    stats: { hot: 40, dedicated: 20, cabins: 5 },
    amenities: ['WiFi', 'AC', 'Cafeteria', 'Parking'],
    price: 299,
  },
  {
    id: 2,
    name: 'Innovation Loft',
    location: 'Indiranagar, Bangalore',
    rating: 4.9,
    featured: false,
    image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    stats: { hot: 60, dedicated: 30, cabins: 8 },
    amenities: ['WiFi', 'AC', 'Gym', 'Rooftop'],
    price: 399,
  },
  {
    id: 3,
    name: 'The Co-Lab',
    location: 'Andheri East, Mumbai',
    rating: 4.7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    stats: { hot: 35, dedicated: 15, cabins: 4 },
    amenities: ['WiFi', 'AC', 'Lounge', 'Events'],
    price: 349,
  },
  {
    id: 4,
    name: 'Hustle Station',
    location: 'Sector 62, Noida',
    rating: 4.6,
    featured: true,
    image: 'https://images.pexels.com/photos/7428854/pexels-photo-7428854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    stats: { hot: 22, dedicated: 10, cabins: 2 },
    amenities: ['WiFi', 'AC', 'Tea/Coffee', 'Printer'],
    price: 199,
  },
  {
    id: 5,
    name: 'Skyline Workspace',
    location: 'Baner, Pune',
    rating: 4.5,
    featured: false,
    image: 'https://images.unsplash.com/photo-1742630394132-cbd951f7d924?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    stats: { hot: 50, dedicated: 25, cabins: 6 },
    amenities: ['WiFi', 'AC', 'Cafeteria', 'Gaming'],
    price: 279,
  },
  {
    id: 6,
    name: 'Catalyst Cowork',
    location: 'HSR Layout, Bangalore',
    rating: 4.8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1637665662134-db459c1bbb46?crop=entropy&cs=srgb&fm=jpg&w=900&q=85',
    stats: { hot: 45, dedicated: 22, cabins: 7 },
    amenities: ['WiFi', 'AC', 'Nap Room', 'Library'],
    price: 349,
  },
];

export const managedOffices = [
  {
    id: 1, code: 'WW', name: 'WeWork India', locations: 12, seats: 5200, occupancy: 87,
    inventory: [
      { name: 'BKC, Mumbai', tier: 'Premium', seats: 800, available: 120 },
      { name: 'Cyber City, Gurgaon', tier: 'Enterprise', seats: 600, available: 85 },
      { name: 'Koramangala, Bangalore', tier: 'Premium', seats: 450, available: 60 },
    ],
  },
  {
    id: 2, code: '91', name: '91springboard', locations: 8, seats: 3800, occupancy: 82,
    inventory: [
      { name: 'Outer Ring Road, Bangalore', tier: 'Startup', seats: 500, available: 95 },
      { name: 'Nehru Place, Delhi', tier: 'Business', seats: 400, available: 70 },
      { name: 'Navi Mumbai', tier: 'Startup', seats: 350, available: 55 },
    ],
  },
  {
    id: 3, code: 'IN', name: 'Innov8', locations: 10, seats: 4100, occupancy: 79,
    inventory: [
      { name: 'Connaught Place, Delhi', tier: 'Premium', seats: 550, available: 110 },
      { name: 'Lower Parel, Mumbai', tier: 'Enterprise', seats: 420, available: 80 },
      { name: 'Whitefield, Bangalore', tier: 'Business', seats: 380, available: 65 },
    ],
  },
  {
    id: 4, code: 'AW', name: 'Awfis', locations: 15, seats: 6500, occupancy: 91,
    inventory: [
      { name: 'Powai, Mumbai', tier: 'Enterprise', seats: 700, available: 45 },
      { name: 'HITEC City, Hyderabad', tier: 'Business', seats: 600, available: 90 },
      { name: 'MG Road, Bangalore', tier: 'Premium', seats: 500, available: 75 },
    ],
  },
];

export const meetingRooms = [
  { id: 1, name: 'Executive Boardroom', location: 'Connaught Place, Delhi', rating: 4.9, seats: 12, image: 'https://images.unsplash.com/photo-1646215993365-125e6428e1dc?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', amenities: ['4K Display', 'Video Conferencing', 'Whiteboard', 'AC'], price: 1500 },
  { id: 2, name: 'Strategy Room', location: 'BKC, Mumbai', rating: 4.7, seats: 8, image: 'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', amenities: ['Projector', 'Whiteboard', 'Teleconferencing', 'AC'], price: 1200 },
  { id: 3, name: 'Innovation Pod', location: 'Indiranagar, Bangalore', rating: 4.8, seats: 6, image: 'https://images.unsplash.com/photo-1637665662134-db459c1bbb46?crop=entropy&cs=srgb&fm=jpg&w=900&q=85', amenities: ['Smart TV', 'Whiteboard', 'Standing Desks', 'AC'], price: 800 },
];

export const virtualSpaces = [
  { id: 1, name: 'Prime Business Address', location: 'BKC, Mumbai', features: ['Premium business address', 'Mail handling', 'GST registration', 'Reception services'], price: 1499, period: 'per month' },
  { id: 2, name: 'Startup Virtual', location: 'Indiranagar, Bangalore', features: ['Business address', 'Mail forwarding', 'Phone answering', 'Meeting room credits'], price: 999, period: 'per month' },
  { id: 3, name: 'Enterprise Suite', location: 'Connaught Place, Delhi', features: ['Premium address', 'Dedicated phone line', 'Concierge', '5 hrs meeting room/mo'], price: 2499, period: 'per month' },
];

export const community = [
  { title: 'Networking Events', desc: 'Monthly meetups connecting freelancers, startups, and enterprises under one roof.', icon: 'Users' },
  { title: 'Skill Workshops', desc: 'Free workshops on marketing, tech, finance, and more—exclusively for pass holders.', icon: 'GraduationCap' },
  { title: 'Founder Circle', desc: 'An invite-only community of founders sharing resources, deals, and introductions.', icon: 'Sparkles' },
  { title: 'Slack Community', desc: 'A 24/7 online hub for questions, collaborations, and real-time space recommendations.', icon: 'MessagesSquare' },
  { title: 'Referral Rewards', desc: 'Earn free pass days when you refer a friend. They get a discount, you get rewarded.', icon: 'Gift' },
  { title: 'City Guides', desc: 'Curated guides to the best coworking neighborhoods, cafes, and hidden gems.', icon: 'Map' },
];

export const testimonials = [
  { quote: 'The Flex Pass changed how I work. I hop between 3 different spaces a week depending on my mood.', name: 'Priya Sharma', role: 'Freelance Designer', initials: 'PS' },
  { quote: 'Zero lead cost for our 22-seater space? We listed in a day and got 8 inquiries the first week.', name: 'Rohit Kapoor', role: 'Startup Founder, TechNova', initials: 'RK' },
  { quote: 'Managing flexible seating for 40 employees across cities used to be a nightmare. Not anymore.', name: 'Ananya Desai', role: 'HR Manager, FinServ Corp', initials: 'AD' },
];

export const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Noida', 'Gurgaon', 'Kolkata', 'Ahmedabad'];
