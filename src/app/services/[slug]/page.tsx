import { servicePages, siteConfig, industries, processSteps, whyChooseUs, newTestimonials } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CheckCircle,
  ClipboardList,
  Truck,
  Package,
  Gift,
  Building,
  Factory,
  Briefcase,
  Users,
  Focus,
  TrendingUp,
  Zap,
  BarChart2,
  Handshake,
  Search,
  FileText,
  Rocket,
  ShieldCheck,
  Layers,
  Recycle,
  Droplets,
  Sparkles,
  FlaskConical,
  Trash2,
  Warehouse,
  ScrollText,
  PackageCheck,
  PenSquare,
  Printer,
  Archive,
  Boxes,
  PartyPopper,
  Crown,
  Leaf,
  PackageSearch,
  Award,
  ArrowRight,
  ChevronRight,
  Wind,
  WashingMachine,
  GlassWater,
  ShowerHead,
  ClipboardCheck,
  CalendarDays,
  Settings2,
  Building2,
  Coffee,
  BadgePercent,
  CalendarClock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import placeholderImages from '@/lib/placeholder-images.json';
import { GetStartedModal } from '@/components/GetStartedModal';

// Generate static pages for each service
export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((p) => p.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceTitle = service.title;

  return {
    title: serviceTitle,
    description: service.description,
    openGraph: {
      title: `${serviceTitle} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((p) => p.slug === slug);

  if (!service) {
    notFound();
  }
  
  const serviceTitle = service.title;

  const serviceHeroImages: { [key: string]: { src: string; alt: string; } } = {
    'housekeeping': {
      src: (placeholderImages as any).housekeeping.src,
      alt: (placeholderImages as any).housekeeping.alt,
    },
    'office-supplies': {
      src: placeholderImages.officeSupplies.src,
      alt: placeholderImages.officeSupplies.alt,
    },
    'corporate-gifting': {
      src: placeholderImages.corporateGifting.src,
      alt: placeholderImages.corporateGifting.alt,
    },
  };
  const heroImage = serviceHeroImages[service.slug as keyof typeof serviceHeroImages];
  
  const industryIcons = {
    'IT Parks': <Building className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />,
    'Manufacturing Units': <Factory className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />,
    'Corporate Offices': <Briefcase className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />,
    'Commercial Complexes': <Users className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />,
  };

  const whyChooseGsquareItems = [
    {
      icon: <Focus className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Single-Window Solution',
      description: 'One trusted vendor for all your corporate operational needs - from housekeeping to gifting',
    },
    {
      icon: <CheckCircle className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Compliance Assured',
      description: 'Verified workforce with complete documentation transparency and adherence to corporate standards',
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Enterprise Scalability',
      description: 'Seamless staffing solutions for large campuses and multi-location offices across India',
    },
  ];

  // Housekeeping data
  const housekeepingServiceBreakdown = [
      {
        icon: <Sparkles className="h-8 w-8 text-primary" />,
        title: "Daily Cleaning & Maintenance",
        description: "Scheduled cleaning of floors, desks, cabins, and common areas to maintain a consistently professional look."
      },
      {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Periodic Deep Cleaning",
        description: "Intensive cleaning of carpets, upholstery, windows, and high-touch surfaces to ensure thorough hygiene."
      },
      {
        icon: <Droplets className="h-8 w-8 text-primary" />,
        title: "Washroom & Pantry Hygiene",
        description: "Sanitization of washrooms and pantry areas, including restocking of consumables for a safe environment."
      },
      {
        icon: <Recycle className="h-8 w-8 text-primary" />,
        title: "Waste Management",
        description: "Systematic collection, segregation, and disposal of waste in compliance with local regulations."
      }
  ];
  const housekeepingFaqs = [
    {
      question: "What is included in a standard corporate housekeeping package?",
      answer: "Our standard package includes daily cleaning of all office spaces, washroom and pantry hygiene management, and waste disposal. We can customize the scope based on your specific requirements, including services like deep cleaning, window washing, and more."
    },
    {
      question: "How do you ensure the quality and reliability of your staff?",
      answer: "Every member of our staff undergoes a rigorous background verification process. They receive professional training on cleaning protocols, equipment usage, and corporate etiquette. We also have on-site supervisors to ensure consistent quality and adherence to SLAs."
    },
    {
      question: "Are your cleaning products and methods eco-friendly / sustainable ?",
      answer: "Yes, we prioritize the use of environmentally friendly and non-toxic cleaning agents that are safe for your employees and the planet. We are committed to sustainable practices in all our operations."
    },
    {
      question: "Can you provide housekeeping services outside of regular business hours?",
      answer: "Absolutely. We offer flexible scheduling options, including after-hours and weekend services, to minimize disruption to your business operations. We work with you to create a cleaning schedule that best suits your needs."
    },
    {
      question: "How do you monitor the quality of your housekeeping services?",
      answer: "We have a multi-layered quality assurance process that includes regular supervisor inspections, detailed cleaning checklists for every task, and a client feedback system to ensure our high standards are consistently met."
    },
    {
      question: "What types of service plans do you offer?",
      answer: "We offer flexible plans including dedicated full-time staff, shift-based teams for 24/7 operations, and scheduled daily or weekly services. We can customize a plan to fit your exact needs."
    }
  ];

  const cleaningEquipment = [
    { icon: <Wind className="h-8 w-8 text-primary" />, title: "Industrial Vacuum Cleaners", description: "High-performance machines to remove dust from carpets, workstations, and common areas." },
    { icon: <WashingMachine className="h-8 w-8 text-primary" />, title: "Floor Scrubbing Machines", description: "For deep cleaning and maintaining large floor surfaces in lobbies and corridors." },
    { icon: <Layers className="h-8 w-8 text-primary" />, title: "Microfiber Cleaning Systems", description: "Effectively trap dust and bacteria while minimizing chemical usage." },
    { icon: <GlassWater className="h-8 w-8 text-primary" />, title: "Glass Cleaning Tools", description: "Professional tools for streak-free cleaning of glass panels and windows." },
  ];
  
  const safetyPractices = [
    { icon: <Users className="h-6 w-6 text-primary flex-shrink-0" />, title: "Trained Housekeeping Staff", description: "All staff members receive training on safe cleaning practices and proper equipment usage." },
    { icon: <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />, title: "Use of Personal Protective Equipment (PPE)", description: "Housekeeping staff use gloves, masks, and safety gear while performing cleaning tasks." },
    { icon: <FlaskConical className="h-6 w-6 text-primary flex-shrink-0" />, title: "Safe Chemical Handling", description: "Cleaning chemicals are used according to safety guidelines to avoid risks to employees and workplace infrastructure." },
    { icon: <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0" />, title: "Compliance with Workplace Safety Standards", description: "Cleaning processes are designed to comply with corporate safety and facility management standards." },
  ];

  const qualityProcess = [
    { icon: <ClipboardList className="h-6 w-6 text-primary" />, title: 'Cleaning Checklists', description: 'Each cleaning activity follows a structured checklist to ensure all areas are properly maintained.'},
    { icon: <Search className="h-6 w-6 text-primary" />, title: 'Supervisor Inspections', description: 'Dedicated supervisors conduct regular inspections to monitor cleaning quality and staff performance.'},
    { icon: <CalendarDays className="h-6 w-6 text-primary" />, title: 'Scheduled Service Reviews', description: 'Regular service evaluations help maintain high standards and identify areas for improvement.'},
    { icon: <Users className="h-6 w-6 text-primary" />, title: 'Client Feedback Mechanism', description: 'We actively collect client feedback to continuously improve service delivery.'},
    { icon: <Rocket className="h-6 w-6 text-primary" />, title: 'Continuous Training', description: 'Housekeeping staff receive regular training updates to maintain service quality.'},
  ];

  const serviceModels = [
    { icon: <Users className="h-6 w-6 text-primary flex-shrink-0" />, title: "Dedicated Housekeeping Staff", description: "Full-time housekeeping personnel deployed at your workplace for daily cleaning operations."},
    { icon: <CalendarClock className="h-6 w-6 text-primary flex-shrink-0" />, title: "Shift-Based Cleaning Teams", description: "Multiple cleaning shifts for offices with extended working hours."},
    { icon: <CalendarDays className="h-6 w-6 text-primary flex-shrink-0" />, title: "Scheduled Cleaning Services", description: "Cleaning services performed on daily, weekly, or periodic schedules."},
    { icon: <Settings2 className="h-6 w-6 text-primary flex-shrink-0" />, title: "Customized Service Plans", description: "Service plans tailored to specific workplace requirements, including event and deep cleaning support."},
  ];

  const siteInspectionPoints = [
    'Workplace size and layout',
    'Cleaning frequency requirements',
    'Washroom and pantry maintenance needs',
    'Workforce deployment requirements',
    'Specialized cleaning requirements',
  ];

  // Office Supplies data
  const officeSupplyCategories = [
    { icon: <PenSquare className="h-8 w-8 text-primary" />, title: "Writing Instruments" },
    { icon: <FileText className="h-8 w-8 text-primary" />, title: "Paper & Notebooks" },
    { icon: <Printer className="h-8 w-8 text-primary" />, title: "Printer & Copier Supplies" },
    { icon: <Archive className="h-8 w-8 text-primary" />, title: "Desk Accessories" },
    { icon: <Boxes className="h-8 w-8 text-primary" />, title: "Files & Storage" },
    { icon: <Coffee className="h-8 w-8 text-primary" />, title: "Pantry Supplies" },
    { icon: <Trash2 className="h-8 w-8 text-primary" />, title: "Cleaning & Utility" },
    { icon: <Package className="h-8 w-8 text-primary" />, title: "Packaging & Shipping" },
  ];

  const supplyProcessSteps = [
      { title: 'Requirement Assessment', description: 'Consultation to map your complete office supply needs.' },
      { title: 'Product & Brand Selection', description: 'Choose from our catalog of trusted brands and products.' },
      { title: 'Contract & Order Processing', description: 'Finalize bulk orders or annual supply contracts with ease.' },
      { title: 'Scheduled Packaging & Dispatch', description: 'Supplies are packaged and dispatched as per the agreed schedule.' },
      { title: 'Timely Delivery & Confirmation', description: 'Reliable delivery to your office with confirmation.' },
  ];

  const whyChooseSupplies = [
      { icon: <PackageCheck className="h-8 w-8 text-primary" />, title: "Reliable Product Availability", description: "Robust inventory to ensure you never run out of essential supplies." },
      { icon: <BadgePercent className="h-8 w-8 text-primary" />, title: "Competitive Bulk Pricing", description: "Benefit from corporate pricing and annual contracts for significant savings." },
      { icon: <Award className="h-8 w-8 text-primary" />, title: "Quality Branded Products", description: "We supply 100% genuine products from nationally recognized brands." },
      { icon: <CalendarClock className="h-8 w-8 text-primary" />, title: "Scheduled & On-Demand Delivery", description: "Flexible delivery schedules tailored to your procurement cycle." },
      { icon: <Users className="h-8 w-8 text-primary" />, title: "Single Vendor Advantage", description: "Simplify your supply chain with a single, trusted partner for all office needs." },
      { icon: <Settings2 className="h-8 w-8 text-primary" />, title: "Custom Solutions", description: "From branded stationery to custom kits, we tailor solutions for you." },
  ];

  const supplyBrands = [ "Camlin", "Classmate", "Reynolds", "Kangaro", "Faber-Castell", "BILT", "JK Paper" ];

  const contractBenefits = [
      "Long-term supply agreements with locked-in corporate pricing.",
      "Priority stock availability for all your essential items.",
      "Scheduled monthly or quarterly deliveries to streamline procurement.",
      "Dedicated account support for all your queries and requirements.",
      "Simplified billing and payment with consolidated invoicing."
  ];

  const officeSuppliesFaqs = [
    {
        question: "What types of office supplies do you provide?",
        answer: "We supply a wide range of office essentials including writing instruments, printing paper, files, desk accessories, printer cartridges, notebooks, and meeting supplies."
    },
    {
        question: "Do you supply office materials in bulk?",
        answer: "Yes. We specialize in bulk supply for corporate offices and businesses, ensuring consistent product availability and competitive pricing."
    },
    {
        question: "Do you offer corporate supply contracts?",
        answer: "Yes. We offer long-term office supply solutions for businesses that require regular deliveries and bulk procurement support, which includes benefits like locked-in pricing and priority stock."
    },
    {
        question: "What brands of office stationery do you supply?",
        answer: "We provide quality products from trusted brands such as Camlin, Classmate, Kangaro, Reynolds, Faber-Castell, JK Paper, and many more."
    },
    {
        question: "How can we place an order for office supplies?",
        answer: "You can start by requesting a quotation through our website or by contacting our team directly to discuss your specific office supply requirements, quantities, and delivery schedule."
    },
    {
        question: "How quickly can office supplies be delivered?",
        answer: "Delivery timelines depend on the order size and product availability. However, most standard orders are processed and delivered within a short turnaround time. We will provide a clear timeline when you place your order."
    }
  ];

  // Corporate Gifting data
  const giftOccasions = [
      { icon: <Rocket className="h-8 w-8 text-primary" />, title: "Employee Onboarding", description: "Curated kits to make new hires feel valued from day one." },
      { icon: <PartyPopper className="h-8 w-8 text-primary" />, title: "Festive Gifts", description: "Thoughtful hampers for Diwali, New Year, and other celebrations." },
      { icon: <Award className="h-8 w-8 text-primary" />, title: "Employee Milestones", description: "Celebrate work anniversaries, promotions, and achievements." },
      { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Client Appreciation", description: "Strengthen business relationships with elegant and memorable gifts." },
      { icon: <Briefcase className="h-8 w-8 text-primary" />, title: "Corporate Events", description: "Branded merchandise and kits for conferences and seminars." },
      { icon: <Crown className="h-8 w-8 text-primary" />, title: "Leadership & Executive Gifts", description: "Exclusive gifts for senior management and board members." },
  ];

  const customBrandingOptions = [
    { icon: <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />, text: "Logo printing on a wide range of products and merchandise." },
    { icon: <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />, text: "Custom-designed packaging and gift boxes with your brand identity." },
    { icon: <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />, text: "Personalized notes, greeting cards, and messages." },
    { icon: <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />, text: "Branded ribbons, stickers, and other finishing touches." },
  ];

  const giftingProcessSteps = [
    { title: 'Consultation', description: "We start by understanding your gifting occasion, budget, and branding requirements." },
    { title: 'Gift Selection', description: "Our team presents a curated selection of gift options and concepts for your review." },
    { title: 'Customization', description: "We handle all aspects of branding, from logo printing to personalized messaging." },
    { title: 'Packaging & Prep', description: "Gifts are elegantly packaged in premium materials and prepared for bulk dispatch." },
    { title: 'Delivery', description: "We manage PAN-India delivery to single or multiple locations, ensuring timely arrival." },
  ];

  const ecoGifts = [
      { icon: <Leaf className="h-8 w-8 text-primary" />, title: "Sustainable Materials", description: "Gifts made from bamboo, cork, recycled paper, and other eco-friendly materials." },
      { icon: <Recycle className="h-8 w-8 text-primary" />, title: "Reusable Products", description: "Items like reusable coffee cups, durable tote bags, and plantable stationery." },
      { icon: <Package className="h-8 w-8 text-primary" />, title: "Green Packaging", description: "We use minimalist, recyclable, and biodegradable packaging options." },
  ];

  const whyChooseGifting = [
      { icon: <PackageSearch className="h-8 w-8 text-primary" />, title: "Creative Curation", description: "Our team designs unique gifting concepts that leave a lasting impression." },
      { icon: <Crown className="h-8 w-8 text-primary" />, title: "Premium Quality & Packaging", description: "We source high-quality products and focus on elegant, professional presentation." },
      { icon: <Handshake className="h-8 w-8 text-primary" />, title: "End-to-End Management", description: "From sourcing to final delivery, we handle the entire process for a hassle-free experience." },
      { icon: <Truck className="h-8 w-8 text-primary" />, title: "PAN-India Logistics", description: "Reliable, timely delivery to single or multiple locations across the country." },
      { icon: <Settings2 className="h-8 w-8 text-primary" />, title: "Full Customization", description: "Extensive branding and personalization options to align with your brand." },
      { icon: <Layers className="h-8 w-8 text-primary" />, title: "Scalable Solutions", description: "Efficiently managing bulk orders for large enterprises and corporate events." },
  ];
  
  const giftingFaqs = [
      { question: "What is the minimum order quantity for customized gifts?", answer: "Minimum Order Quantities (MOQs) depend on the product and the level of customization required. We work with you to find solutions for both small and large-scale orders." },
      { question: "Can we include our own company's branded materials in the gift boxes?", answer: "Absolutely. We encourage you to include your own merchandise, marketing materials, or personalized notes, and we can seamlessly integrate them into the gift packages." },
      { question: "What is the typical lead time for bulk corporate gift orders?", answer: "Lead times vary based on product selection and customization complexity. We generally recommend planning 3-4 weeks in advance, especially for festive seasons or large orders, to ensure a smooth process from production to delivery." },
      { question: "Do you handle delivery to multiple addresses for remote employees?", answer: "Yes, we provide end-to-end logistics, including secure packaging and PAN-India delivery to individual employee or client addresses. We ensure every gift arrives safely and on time." },
      { question: "What occasions do you create gifts for?", answer: "We cater to a wide range of occasions including employee onboarding, festive celebrations like Diwali, client appreciation, corporate events, and employee milestones. We can curate the perfect gift for any business moment." },
      { question: "Do you offer eco-friendly and sustainable gifting options?", answer: "Yes, we have a growing range of eco-friendly gifts made from materials like bamboo and recycled paper, and we use sustainable packaging options to align with modern corporate values." }
  ];


  return (
    <>
       <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: serviceTitle,
          provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.zip,
                addressRegion: 'MH',
                addressCountry: 'IN',
            },
            telephone: siteConfig.phone,
          },
          areaServed: {
            '@type': 'Country',
            name: 'IN'
          },
          description: service.description
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
            className="relative w-full bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url(${heroImage.src})`,
                height: '400px'
            }}
        >
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="relative container h-full flex flex-col justify-center items-center text-center text-white">
                <FadeIn>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                        {serviceTitle}
                    </h1>
                    <div className="mt-4 text-lg">
                        <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link>
                        <span className="mx-2 text-primary-foreground/50">&gt;</span>
                        <Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">Services</Link>
                        <span className="mx-2 text-primary-foreground/50">&gt;</span>
                        <span className="font-semibold">{serviceTitle}</span>
                    </div>
                </FadeIn>
            </div>
        </section>
        
        {/* Housekeeping Page Content */}
        {service.slug === 'housekeeping' && (
          <>
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Our Housekeeping Services</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We offer a comprehensive suite of services to ensure every corner of your workspace is pristine.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {housekeepingServiceBreakdown.map(item => (
                                <Card key={item.title} className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="text-xl font-headline text-secondary">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Cleaning Equipment & Materials</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">We use professional cleaning equipment and safe materials to maintain consistent workplace hygiene.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                            {cleaningEquipment.map(item => (
                                <Card key={item.title} className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
                                        <CardTitle className="text-xl font-headline text-secondary">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Eco-Friendly Cleaning Practices</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We are committed to sustainability and use environmentally responsible cleaning methods.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <Card className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                                        <Wind className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-headline text-secondary">Low-Chemical Methods</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Using microfiber systems to reduce reliance on harsh chemicals.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                                        <Recycle className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-headline text-secondary">Waste Segregation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Implementing proper waste segregation for recycling and responsible disposal.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                                        <Leaf className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-headline text-secondary">Sustainable Products</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Prioritizing the use of biodegradable and eco-friendly cleaning agents.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </FadeIn>
             <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Flexible Service Plans & Staffing Models</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">We offer flexible housekeeping service models designed to meet the operational needs of different workplace environments. Every workplace has different operational requirements.</p>
                        </div>
                        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                            {serviceModels.map((item, index) => (
                                <Card key={index} className="bg-card text-left p-6 border-2 border-neutral-300 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg mt-1">{item.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-secondary mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
              <section>
                <div className="container px-4 md:px-6 lg:px-12">
                  <div className="grid gap-5 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary mb-0">Request a Free Site Inspection</h2>
                      <p className="text-muted-foreground md:text-lg">
                        Our experts can assess your workplace and recommend the most suitable housekeeping plan for your organization. Understanding the facility layout is essential for designing an effective housekeeping plan.
                      </p>
                       <h3 className="text-xl font-bold tracking-tighter font-headline text-secondary pt-4">During the Site Inspection, We Assess:</h3>
                       <ul className="space-y-3">
                        {siteInspectionPoints.map((point, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                       </ul>
                       <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <GetStartedModal>
                              <Button size="lg">Schedule Site Inspection</Button>
                          </GetStartedModal>
                       </div>
                    </div>
                    <div className="relative aspect-video">
                        <Image src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1920" alt="Team having a discussion" fill className="rounded-lg shadow-xl object-cover" />
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>
            <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {housekeepingFaqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-lg text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </FadeIn>
          </>
        )}

        {/* Office Supplies Page Content */}
        {service.slug === 'office-supplies' && (
           <>
              <FadeIn>
                  <section>
                      <div className="container px-4 md:px-6">
                          <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Our Complete Office Supply Categories</h2>
                              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">From stationery and pantry items to cleaning utilities, we are your single source for all office supplies.</p>
                          </div>
                          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                              {officeSupplyCategories.map(item => (
                                  <Card key={item.title} className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                      <CardHeader className="items-center">
                                          <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
                                          <CardTitle className="text-xl font-headline text-secondary">{item.title}</CardTitle>
                                      </CardHeader>
                                  </Card>
                              ))}
                          </div>
                      </div>
                  </section>
              </FadeIn>
              <FadeIn>
                  <section className="bg-muted">
                      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                           <div className="relative aspect-video">
                              <Image src={placeholderImages.stationeryPage.src} alt={placeholderImages.stationeryPage.alt} fill className="rounded-lg shadow-xl object-cover" />
                          </div>
                          <div className="space-y-4">
                              <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Bulk Procurement & Customized Supplies</h2>
                              <p className="text-muted-foreground md:text-lg">We specialize in bulk order fulfillment and corporate supply contracts, positioning us as an ideal partner for large enterprises. Empower your brand with custom-printed supplies like notebooks, pens, and letterheads.</p>
                              <ul className="space-y-3 pt-4">
                                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Most requested items include A4 paper, pens, staplers, and printer ink.</span></li>
                                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Annual contracts for predictable pricing and simplified budgeting.</span></li>
                                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Fast, reliable delivery schedules tailored to your inventory cycle.</span></li>
                              </ul>
                          </div>
                      </div>
                  </section>
              </FadeIn>
              <FadeIn>
                  <section>
                      <div className="container px-4 md:px-6">
                          <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Why Businesses Choose Our Office Supplies</h2>
                               <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We are more than a supplier; we are a strategic partner in your operational efficiency.</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                              {whyChooseSupplies.map((item, index) => (
                                  <Card key={index} className="group bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
                                      <div className="bg-primary/10 p-4 rounded-full mb-4 w-max">{item.icon}</div>
                                      <h3 className="text-lg font-bold mb-2 text-secondary transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                  </Card>
                              ))}
                          </div>
                      </div>
                  </section>
              </FadeIn>
               <FadeIn>
                  <section className="bg-muted">
                      <div className="container px-4 md:px-6">
                          <div className="text-center mb-16">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary">Our Streamlined Supply Process</h2>
                              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">A clear and efficient process from order to delivery, ensuring trust and transparency.</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-4 lg:gap-x-12">
                            {supplyProcessSteps.map((step, index) => (
                              <div key={step.title} className="relative">
                                <div className="bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary">
                                  <div className="text-5xl font-extrabold text-primary/20 mb-4">{`0${index + 1}`}</div>
                                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                                {index < supplyProcessSteps.length - 1 && (
                                  <ChevronRight 
                                    className="absolute top-1/2 -right-7 -translate-y-1/2 h-8 w-8 text-primary/40 hidden lg:block"
                                    aria-hidden="true"
                                  />
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                  </section>
              </FadeIn>
              <FadeIn>
                  <section>
                      <div className="container px-4 md:px-6">
                          <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Corporate Office Supply Contracts</h2>
                              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">For large organizations, our corporate contracts offer a seamless and cost-effective procurement solution.</p>
                          </div>
                          <div className="max-w-4xl mx-auto">
                              <ul className="space-y-4">
                                  {contractBenefits.map((item, index) => (
                                      <li key={index} className="flex items-start gap-4 p-4 border-2 border-neutral-300 rounded-lg bg-card">
                                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                          <span>{item}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </section>
              </FadeIn>
              <FadeIn>
                  <section className='bg-muted'>
                      <div className="container px-4 md:px-6">
                           <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Trusted Brands & Reliable Delivery</h2>
                              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">We ensure quality by supplying products from recognized brands, delivered reliably to your office.</p>
                          </div>
                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                              <div>
                                  <h3 className="text-2xl font-bold text-secondary mb-4">Brands We Supply</h3>
                                  <div className="flex flex-wrap gap-4 items-center">
                                      {supplyBrands.map(brand => (
                                          <div key={brand} className="bg-accent text-accent-foreground font-semibold px-4 py-2 rounded-md">{brand}</div>
                                      ))}
                                      <div className="bg-accent text-accent-foreground font-semibold px-4 py-2 rounded-md">and many more...</div>
                                  </div>
                              </div>
                               <div>
                                  <h3 className="text-2xl font-bold text-secondary mb-4">Delivery & Logistics</h3>
                                  <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Scheduled office deliveries to match your inventory cycle.</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Organized packaging for easy distribution within your office.</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/><span>Fast dispatch and reliable supply chain management.</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>
              </FadeIn>
              <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {officeSuppliesFaqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-lg text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </FadeIn>
          </>
        )}
        
        {/* Corporate Gifting Page Content */}
        {service.slug === 'corporate-gifting' && (
          <>
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Gifting for Every Business Moment</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We create memorable gifting experiences designed to strengthen relationships and build brand loyalty.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {giftOccasions.map(item => (
                                <Card key={item.title} className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
                                        <CardTitle className="text-xl font-headline text-secondary">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Corporate Gifts by Budget</h2>
                             <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">Find the perfect gifts that align with your budget and impress your recipients.</p>
                        </div>
                        <div className="max-w-4xl mx-auto bg-card rounded-lg border-2 border-neutral-300 overflow-hidden">
                            <div className="grid grid-cols-2 text-left">
                                <div className="p-4 font-bold text-secondary bg-accent/50 text-lg">Budget Range</div>
                                <div className="p-4 font-bold text-secondary bg-accent/50 border-l text-lg">Ideal For</div>
                            </div>
                            <div className="grid grid-cols-2 text-left border-t items-center">
                                <div className="p-4 font-semibold text-secondary">₹500 – ₹999</div>
                                <div className="p-4 text-muted-foreground border-l">Large-scale employee gifting, event giveaways</div>
                            </div>
                            <div className="grid grid-cols-2 text-left border-t items-center">
                                <div className="p-4 font-semibold text-secondary">₹1000 – ₹1999</div>
                                <div className="p-4 text-muted-foreground border-l">Festive hampers, new hire welcome kits, team rewards</div>
                            </div>
                            <div className="grid grid-cols-2 text-left border-t items-center">
                                <div className="p-4 font-semibold text-secondary">₹2000 – ₹5000</div>
                                <div className="p-4 text-muted-foreground border-l">Client appreciation, key employee milestones</div>
                            </div>
                             <div className="grid grid-cols-2 text-left border-t items-center">
                                <div className="p-4 font-semibold text-secondary">Premium (₹5000+)</div>
                                <div className="p-4 text-muted-foreground border-l">Executive gifts, leadership recognition, top-tier clients</div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Custom Branding & Premium Packaging</h2>
                            <p className="text-muted-foreground md:text-lg">We transform gifts into powerful branding tools. Our team works with you to create custom packaging, branded merchandise, and personalized messages that make your gifts truly unique and reflective of your company's identity.</p>
                            <ul className="space-y-3 pt-4">
                                {customBrandingOptions.map((item) => (
                                  <li key={item.text} className="flex items-start gap-3">{item.icon}<span>{item.text}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-video">
                            <Image src={placeholderImages.giftingPage.src} alt={placeholderImages.giftingPage.alt} fill className="rounded-lg shadow-xl object-cover" data-ai-hint="custom branded gifts" />
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                  <section className="bg-muted">
                      <div className="container px-4 md:px-6">
                          <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Corporate Gift Showcase</h2>
                              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">Get inspired by our collection of curated corporate gifts.</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {(placeholderImages as any).giftShowcase.map((image: { src: string; alt: string; hint: string }) => (
                                  <div key={image.src} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                                      <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={image.hint} />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                      <p className="absolute bottom-4 left-4 text-white font-bold">{image.alt}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </section>
            </FadeIn>
            <FadeIn>
              <section>
                  <div className="container px-4 md:px-6">
                      <div className="text-center mb-16">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary">Our Corporate Gifting Process</h2>
                          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">A clear and efficient process from order to delivery, ensuring trust and transparency.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-4 lg:gap-x-12">
                        {giftingProcessSteps.map((step, index) => (
                          <div key={step.title} className="relative">
                            <div className="bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary">
                              <div className="text-5xl font-extrabold text-primary/20 mb-4">{`0${index + 1}`}</div>
                              <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                            {index < giftingProcessSteps.length - 1 && (
                              <ChevronRight 
                                className="absolute top-1/2 -right-7 -translate-y-1/2 h-8 w-8 text-primary/40 hidden lg:block"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section className="bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Eco-Friendly Corporate Gifts</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">Align your brand with modern corporate values by choosing from our range of sustainable and eco-friendly gifting options.</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {ecoGifts.map(item => (
                            <Card key={item.title} className="text-center border-2 border-neutral-300 hover:border-primary transition-all duration-300">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
                                    <CardTitle className="text-xl font-headline text-secondary">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
              </section>
            </FadeIn>
            
             <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Why Businesses Choose GSQUARE for Gifting</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We are more than a supplier; we are a strategic partner in strengthening your corporate relationships.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseGifting.map((item, index) => (
                                <Card key={index} className="group bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4 w-max">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-2 text-secondary transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
             <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Frequently Asked Questions</h2></div>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {giftingFaqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-lg text-muted-foreground">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </FadeIn>
        </>
        )}

        {/* CTA */}
        <FadeIn>
          <section>
            <div className="container">
              <div className="relative rounded-lg overflow-hidden p-8 md:p-12 lg:p-20 text-center">
                <Image
                  alt={placeholderImages.cta.alt}
                  src={placeholderImages.cta.src}
                  fill
                  className="object-cover"
                  data-ai-hint={placeholderImages.cta.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A7C]/95 to-[#2B4A7C]/85" />
                <div className="relative space-y-6">
                  {service.slug === 'housekeeping' ? (
                    <>
                      <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Need Reliable Housekeeping for Your Workplace?</h2>
                      <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
                        Our team can help maintain a clean, professional environment for your employees and visitors.
                      </p>
                      <GetStartedModal>
                        <Button size="lg">Request a Service Quote<ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </GetStartedModal>
                    </>
                  ) : service.slug === 'office-supplies' ? (
                     <>
                      <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Request an Office Supply Quote</h2>
                      <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
                        Let us handle your office supply needs. Contact us for a bulk pricing quote or to set up a corporate contract.
                      </p>
                      <GetStartedModal>
                        <Button size="lg">Request a Quote<ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </GetStartedModal>
                    </>
                  ) : service.slug === 'corporate-gifting' ? (
                    <>
                      <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Need Help Choosing Corporate Gifts?</h2>
                      <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
                        Our team can help you select the right gifts based on your budget, audience, occasion, and branding requirements.
                      </p>
                      <GetStartedModal>
                        <Button size="lg">Book Gifting Consultation<ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </GetStartedModal>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Interested in our {serviceTitle} services?</h2>
                      <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
                        Contact us today for a customized proposal and discover how we can add value to your business.
                      </p>
                      <GetStartedModal>
                        <Button size="lg">Get a Quote<ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </GetStartedModal>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
