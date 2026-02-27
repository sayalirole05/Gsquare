import placeholderImages from './placeholder-images.json';

export const siteConfig = {
  name: 'G SQUARE CORPORATE SERVICES',
  brandName: 'G SQUARE',
  description: 'Premier Facility Management and Corporate Support Services in Pune, Maharashtra. We provide housekeeping, material supply, stationery, and corporate gifting solutions.',
  url: 'https://gsquarecorp.in',
  phone: '+917020813399',
  email: 'contact@gsquarecorp.in',
  address: {
    street: 'C-13, Shubham Complex',
    city: 'Chinchwad, Pune',
    zip: '411033',
  },
};

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Industries', href: '/industries' },
  { title: 'Process', href: '/process' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Contact', href: '/contact' },
];

export const services = [
  {
    slug: 'housekeeping',
    title: 'Corporate Housekeeping',
    shortDescription: 'Professional cleaning services for a pristine corporate environment.',
  },
  {
    slug: 'material-supply',
    title: 'Cleaning Material Supply',
    shortDescription: 'Reliable supply of high-quality cleaning and pantry materials.',
  },
  {
    slug: 'stationery',
    title: 'Office Stationery',
    shortDescription: 'Comprehensive solutions for all your office stationery needs.',
  },
  {
    slug: 'corporate-gifting',
    title: 'Corporate Gifting',
    shortDescription: 'Unique and thoughtful gifting solutions for employees and clients.',
  },
];

export const servicePages = [
  {
    slug: 'housekeeping',
    title: 'Corporate Housekeeping Services in Pune',
    description: 'We provide top-tier corporate housekeeping and facility management services in Pune. Our trained professionals ensure your workspace is immaculate, safe, and hygienic, using industry-best practices and eco-friendly products.',
    features: [
      'Trained & Verified Staff',
      'Flexible Scheduling (Daily, Weekly, Monthly)',
      'Use of Eco-Friendly Chemicals',
      'Advanced Cleaning Equipment',
      'Supervision & Quality Checks',
    ],
    benefits: [
      'Enhances corporate image and brand reputation.',
      'Promotes a healthy and productive work environment.',
      'Reduces administrative burden of in-house cleaning.',
      'Ensures compliance with health and safety standards.',
    ],
  },
  {
    slug: 'material-supply',
    title: 'Cleaning Material Suppliers in Pune',
    description: 'G Square is a leading supplier of cleaning, housekeeping, and pantry materials in Pune. We offer a comprehensive range of high-quality products at competitive prices, ensuring you never run out of essential supplies.',
    features: [
      'Wide Range of Products',
      'Branded & Quality Assured Items',
      'Scheduled & On-Demand Delivery',
      'Inventory Management Support',
      'Competitive Pricing',
    ],
    benefits: [
      'Consolidate procurement with a single, reliable vendor.',
      'Save time and resources on sourcing materials.',
      'Ensure consistent quality of supplies.',
      'Optimize inventory levels and reduce wastage.',
    ],
  },
  {
    slug: 'stationery',
    title: 'Office Stationery Suppliers in Pune',
    description: 'Streamline your office supplies with our complete stationery solutions. From basic pens and paper to custom-printed materials, we provide everything your Pune office needs to operate efficiently.',
    features: [
      'One-Stop-Shop for All Stationery',
      'Custom Printing Services',
      'Bulk Order Discounts',
      'Reliable and Timely Delivery',
      'Personalized Account Management',
    ],
    benefits: [
      'Simplify your procurement process.',
      'Reduce costs through bulk purchasing.',
      'Maintain a consistent and professional brand image.',
      'Ensure your team is always equipped.',
    ],
  },
  {
    slug: 'corporate-gifting',
    title: 'Corporate Gifting Solutions in Pune',
    description: 'Strengthen client and employee relationships with our curated corporate gifting services in Pune. We provide thoughtful, customized gifts for festivals, milestones, and corporate events that reflect your brand\'s values.',
    features: [
      'Wide Range of Gift Options',
      'Custom Branding and Packaging',
      'Gifts for All Budgets',
      'End-to-End Logistics and Delivery',
      'Seasonal and Event-Based Catalogs',
    ],
    benefits: [
      'Enhance employee morale and loyalty.',
      'Strengthen relationships with clients and partners.',
      'Increase brand visibility and recall.',
      'Save time on sourcing and logistics.',
    ],
  },
];

export const industries = [
  {
    name: 'IT Parks',
    description: 'Servicing major IT hubs in Hinjewadi, Baner, and across Pune with specialized cleaning and support.',
  },
  {
    name: 'Manufacturing Units',
    description: 'Providing robust facility services for manufacturing units in Pimpri-Chinchwad and beyond.',
  },
  {
    name: 'Corporate Offices',
    description: 'Tailored solutions for corporate headquarters and offices of all sizes.',
  },
  {
    name: 'Commercial Complexes',
    description: 'Managing common areas and facilities for multi-tenant commercial properties.',
  },
];

export const processSteps = [
  {
    title: 'Requirement Understanding',
    description: 'In-depth consultation to understand your specific operational needs and challenges.',
  },
  {
    title: 'Site Assessment',
    description: 'Comprehensive evaluation of your facilities and workflow requirements.',
  },
  {
    title: 'Tailored Proposal',
    description: 'Customized solution design with transparent pricing and SLA commitments.',
  },
  {
    title: 'Deployment & Onboarding',
    description: 'Smooth transition with trained teams and complete documentation.',
  },
  {
    title: 'Monitoring & Improvement',
    description: 'Continuous performance tracking with regular feedback and optimization.',
  },
];

export const whyChooseUs = [
  {
    title: 'Operational Expertise',
    description: 'Years of experience in managing facilities for Pune\'s top corporates ensures efficient and reliable service delivery.'
  },
  {
    title: 'Compliance & Verification',
    description: 'We ensure 100% compliance with labor laws and conduct thorough background verification for all our staff.'
  },
  {
    title: 'Local Focus',
    description: 'Deep operational presence in key Pune areas like Hinjewadi, Baner, Wakad, and Pimpri-Chinchwad for rapid support.'
  },
  {
    title: 'Client-Centric Approach',
    description: 'Flexible SLAs, replacement guarantees, and a commitment to building long-term partnerships based on trust.'
  }
];

export const testimonials = [
    {
        name: 'Amit Patel',
        title: 'Admin Manager, Tech Solutions Inc.',
        industry: 'IT Park',
        quote: 'G Square has transformed our facility management. Their team is professional, proactive, and incredibly reliable. Our office has never been cleaner, and their streamlined material supply has saved us countless hours.',
    },
    {
        name: 'Priya Sharma',
        title: 'HR Head, Innovate Labs',
        industry: 'Corporate Office',
        quote: 'The corporate gifting service from G Square was a huge success for our annual awards. The quality of gifts and the seamless execution were impressive. They are now our go-to partner for all employee engagement activities.',
    },
    {
        name: 'Rajesh Kumar',
        title: 'Plant Head, Precision Auto',
        industry: 'Manufacturing',
        quote: 'Managing a manufacturing plant\'s housekeeping is challenging, but G Square handles it with expertise. Their adherence to safety and compliance standards is commendable. A truly professional service.',
    }
];

export const newTestimonials = [
  {
    "text": "Gsquare transformed our workplace operations with structured housekeeping and timely material supply. Their professionalism reflects true enterprise standards.",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "name": "Anita Kulkarni",
    "role": "Admin Head, IT Park Pune"
  },
  {
    "text": "Their manpower deployment process is systematic and reliable. We’ve seen improved cleanliness standards across our corporate campus.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "name": "Rahul Mehta",
    "role": "Facility Manager"
  },
  {
    "text": "From onboarding to supervision, Gsquare maintains strong compliance and operational discipline. A dependable partner in Pune.",
    "image": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    "name": "Neha Deshpande",
    "role": "Operations Director"
  },
  {
    "text": "Their corporate gifting solutions are thoughtfully curated and premium. Perfectly aligned with our brand standards.",
    "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    "name": "Siddharth Rao",
    "role": "HR Manager"
  },
  {
    "text": "We appreciate their structured reporting and daily supervision model. It gives us full operational visibility.",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "name": "Priya Shah",
    "role": "Corporate Administrator"
  },
  {
    "text": "Their housekeeping team is well-trained, uniformed, and punctual. The service quality is consistent and dependable.",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "name": "Vikram Patil",
    "role": "Plant Head"
  },
  {
    "text": "Gsquare helped us consolidate multiple vendors into one structured solution, reducing operational complexity.",
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "name": "Karan Gupta",
    "role": "Procurement Lead"
  },
  {
    "text": "Their SLA-driven approach ensures performance accountability. A reliable facility management partner.",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "name": "Meera Joshi",
    "role": "Business Operations Manager"
  },
  {
    "text": "Material supply is always timely with zero stock-out situations. Their supply chain reliability is commendable.",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "name": "Rohit Agarwal",
    "role": "Warehouse Supervisor"
  },
  {
    "text": "The transition from our previous vendor to Gsquare was smooth and professionally managed.",
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "name": "Amit Verma",
    "role": "Facility Head"
  },
  {
    "text": "Their integrated support model has significantly improved workplace hygiene and operational efficiency.",
    "image": "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
    "name": "Sneha Kulkarni",
    "role": "Admin Executive"
  },
  {
    "text": "We value their responsiveness and structured communication. It makes coordination seamless.",
    "image": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    "name": "Nikhil Bhosale",
    "role": "Corporate Services Manager"
  },
  {
    "text": "Gsquare understands corporate expectations and delivers with consistency and discipline.",
    "image": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "name": "Divya Iyer",
    "role": "HR Business Partner"
  },
  {
    "text": "Their workforce training standards ensure professional behavior and quality service delivery.",
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    "name": "Arjun Nair",
    "role": "Operations Supervisor"
  },
  {
    "text": "We appreciate their structured engagement model and ongoing improvement initiatives.",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "name": "Pooja Sethi",
    "role": "Corporate Admin Lead"
  },
  {
    "text": "Corporate gifting campaigns were executed flawlessly during festive season. Highly professional.",
    "image": "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "name": "Manish Khanna",
    "role": "Marketing Head"
  },
  {
    "text": "Their housekeeping manpower deployment has elevated workplace standards across our offices.",
    "image": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    "name": "Shreya Patankar",
    "role": "Office Manager"
  },
  {
    "text": "Gsquare’s structured processes and supervisor oversight ensure consistent service quality.",
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "name": "Aditya Deshmukh",
    "role": "Facility Operations Head"
  },
  {
    "text": "Their ability to manage multiple services under one umbrella simplifies vendor management.",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "name": "Kavita Rao",
    "role": "Procurement Manager"
  },
  {
    "text": "A trusted facility management partner in Pune with professional execution and enterprise focus.",
    "image": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    "name": "Saurabh Kulkarni",
    "role": "Operations Director"
  }
];
