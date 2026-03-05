import placeholderImages from './placeholder-images.json';

export const siteConfig = {
  name: 'G SQUARE CORPORATE SERVICES',
  brandName: 'G SQUARE',
  description: 'Premier Facility Management and Corporate Support Services across India. We provide housekeeping, material supply, stationery, and corporate gifting solutions.',
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
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'Corporate Housekeeping',
        href: '/services/housekeeping',
      },
      {
        title: 'Cleaning Material Supply',
        href: '/services/material-supply',
      },
      {
        title: 'Office Stationery',
        href: '/services/stationery',
      },
      {
        title: 'Corporate Gifting',
        href: '/services/corporate-gifting',
      },
    ],
  },
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
    title: 'Corporate Housekeeping Services',
    description: 'We provide top-tier corporate housekeeping and facility management services. Our trained professionals ensure your workspace is immaculate, safe, and hygienic, using industry-best practices and eco-friendly products.',
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
    title: 'Cleaning Material Suppliers',
    description: 'G Square is a leading supplier of cleaning, housekeeping, and pantry materials. We offer a comprehensive range of high-quality products at competitive prices, ensuring you never run out of essential supplies.',
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
    title: 'Office Stationery Suppliers',
    description: 'Streamline your office supplies with our complete stationery solutions. From basic pens and paper to custom-printed materials, we provide everything your office needs to operate efficiently.',
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
    title: 'Corporate Gifting Solutions',
    description: 'Strengthen client and employee relationships with our curated corporate gifting services. We provide thoughtful, customized gifts for festivals, milestones, and corporate events that reflect your brand\'s values.',
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
    description: 'Servicing major IT hubs with specialized cleaning and support services.',
  },
  {
    name: 'Manufacturing Units',
    description: 'Providing robust facility services for manufacturing units and industrial zones.',
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
    description: 'Years of experience in managing facilities for top corporates ensures efficient and reliable service delivery.'
  },
  {
    title: 'Compliance & Verification',
    description: 'We ensure 100% compliance with labor laws and conduct thorough background verification for all our staff.'
  },
  {
    title: 'Nationwide Network',
    description: 'With a robust network spanning across India, we deliver consistent services to multi-location offices and large campuses.'
  },
  {
    title: 'Client-Centric Approach',
    description: 'Flexible SLAs, replacement guarantees, and a commitment to building long-term partnerships based on trust.'
  }
];

export const newTestimonials = [
    {
        "text": "Gsquare transformed our workplace operations with structured housekeeping and timely material supply. Their professionalism reflects true enterprise standards.",
        "image": "https://images.unsplash.com/photo-1615109398623-88346a601842?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Siddharth Rao",
        "role": "Admin Head, IT Park Pune"
    },
    {
        "text": "Their manpower deployment process is systematic and reliable. We’ve seen improved cleanliness standards across our corporate campus.",
        "image": "https://images.unsplash.com/photo-1593230594363-695a99d4e2f3?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Rahul Mehta",
        "role": "Facility Manager"
    },
    {
        "text": "From onboarding to supervision, Gsquare maintains strong compliance and operational discipline. A dependable partner.",
        "image": "https://images.unsplash.com/photo-1604234898338-644a420959ed?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Neha Deshpande",
        "role": "Operations Director"
    },
    {
        "text": "Their corporate gifting solutions are thoughtfully curated and premium. Perfectly aligned with our brand standards.",
        "image": "https://images.unsplash.com/photo-1619438363782-b5659b8a3e47?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Anita Kulkarni",
        "role": "HR Manager"
    },
    {
        "text": "We appreciate their structured reporting and daily supervision model. It gives us full operational visibility.",
        "image": "https://images.unsplash.com/photo-1618751320367-1a7afa7a9b69?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Priya Shah",
        "role": "Corporate Administrator"
    },
    {
        "text": "Their housekeeping team is well-trained, uniformed, and punctual. The service quality is consistent and dependable.",
        "image": "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Vikram Patil",
        "role": "Plant Head"
    },
    {
        "text": "Gsquare helped us consolidate multiple vendors into one structured solution, reducing operational complexity.",
        "image": "https://images.unsplash.com/photo-1613040801198-a0852b41c640?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Karan Gupta",
        "role": "Procurement Lead"
    },
    {
        "text": "Their SLA-driven approach ensures performance accountability. A reliable facility management partner.",
        "image": "https://images.unsplash.com/photo-1620021313245-8c76b26b45e8?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Meera Joshi",
        "role": "Business Operations Manager"
    },
    {
        "text": "Material supply is always timely with zero stock-out situations. Their supply chain reliability is commendable.",
        "image": "https://images.unsplash.com/photo-1615995719343-6d33306d8717?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Rohit Agarwal",
        "role": "Warehouse Supervisor"
    },
    {
        "text": "The transition from our previous vendor to Gsquare was smooth and professionally managed.",
        "image": "https://images.unsplash.com/photo-1549419683-16a85f52309f?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Amit Verma",
        "role": "Facility Head"
    },
    {
        "text": "Their integrated support model has significantly improved workplace hygiene and operational efficiency.",
        "image": "https://images.unsplash.com/photo-1619290680197-2a83234d5884?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Sneha Kulkarni",
        "role": "Admin Executive"
    },
    {
        "text": "We value their responsiveness and structured communication. It makes coordination seamless.",
        "image": "https://images.unsplash.com/photo-1609132718484-cc4f45a5a1e2?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Nikhil Bhosale",
        "role": "Corporate Services Manager"
    },
    {
        "text": "Gsquare understands corporate expectations and delivers with consistency and discipline.",
        "image": "https://images.unsplash.com/photo-1624224999912-7c39981881a5?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Divya Iyer",
        "role": "HR Business Partner"
    },
    {
        "text": "Their workforce training standards ensure professional behavior and quality service delivery.",
        "image": "https://images.unsplash.com/photo-1600600932598-1f1659a8c13f?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Arjun Nair",
        "role": "Operations Supervisor"
    },
    {
        "text": "We appreciate their structured engagement model and ongoing improvement initiatives.",
        "image": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Pooja Sethi",
        "role": "Corporate Admin Lead"
    },
    {
        "text": "Corporate gifting campaigns were executed flawlessly during festive season. Highly professional.",
        "image": "https://images.unsplash.com/photo-1611064629479-b0c2a86b3a7a?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Manish Khanna",
        "role": "Marketing Head"
    },
    {
        "text": "Their housekeeping manpower deployment has elevated workplace standards across our offices.",
        "image": "https://images.unsplash.com/photo-1544717404-4b5b6a7e02e3?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Shreya Patankar",
        "role": "Office Manager"
    },
    {
        "text": "Gsquare’s structured processes and supervisor oversight ensure consistent service quality.",
        "image": "https://images.unsplash.com/photo-1613340641403-34444e277636?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Aditya Deshmukh",
        "role": "Facility Operations Head"
    },
    {
        "text": "Their ability to manage multiple services under one umbrella simplifies vendor management.",
        "image": "https://images.unsplash.com/photo-1620802394236-47677843d4c3?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Kavita Rao",
        "role": "Procurement Manager"
    },
    {
        "text": "A trusted facility management partner with professional execution and enterprise focus.",
        "image": "https://images.unsplash.com/photo-1605332152697-a41151d6e5a0?w=150&h=150&fit=crop&crop=face&q=80",
        "name": "Saurabh Kulkarni",
        "role": "Operations Director"
    }
];
