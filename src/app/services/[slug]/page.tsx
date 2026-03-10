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
export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const service = servicePages.find((p) => p.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceTitle = service.slug === 'housekeeping' ? 'Housekeeping Services' : service.title;

  return {
    title: serviceTitle,
    description: service.description,
    openGraph: {
      title: serviceTitle,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: 'article',
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicePages.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }
  
  const serviceTitle = service.slug === 'housekeeping' ? 'Housekeeping Services' : service.title;

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
      question: "Are your cleaning products and methods eco-friendly?",
      answer: "Yes, we prioritize the use of environmentally friendly and non-toxic cleaning agents that are safe for your employees and the planet. We are committed to sustainable practices in all our operations."
    },
    {
      question: "Can you provide housekeeping services outside of regular business hours?",
      answer: "Absolutely. We offer flexible scheduling options, including after-hours and weekend services, to minimize disruption to your business operations. We work with you to create a cleaning schedule that best suits your needs."
    }
  ];

  const cleaningEquipment = [
    { icon: <Wind className="h-8 w-8 text-primary" />, title: "Industrial Vacuum Cleaners", description: "High-performance machines to remove dust from carpets, workstations, and common areas." },
    { icon: <WashingMachine className="h-8 w-8 text-primary" />, title: "Floor Scrubbing Machines", description: "For deep cleaning and maintaining large floor surfaces in lobbies and corridors." },
    { icon: <Layers className="h-8 w-8 text-primary" />, title: "Microfiber Cleaning Systems", description: "Effectively trap dust and bacteria while minimizing chemical usage." },
    { icon: <GlassWater className="h-8 w-8 text-primary" />, title: "Glass Cleaning Tools", description: "Professional tools for streak-free cleaning of glass panels and windows." },
  ];

  const cleaningMaterials = [
      { icon: <Leaf className="h-8 w-8 text-primary" />, title: "Eco-friendly solutions" },
      { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Surface disinfectants" },
      { icon: <FlaskConical className="h-8 w-8 text-primary" />, title: "Floor cleaning chemicals" },
      { icon: <Droplets className="h-8 w-8 text-primary" />, title: "Glass cleaning liquids" },
      { icon: <ShowerHead className="h-8 w-8 text-primary" />, title: "Washroom hygiene products" },
  ];
  
  const safetyPractices = [
    'All staff members receive training on safe cleaning practices and proper equipment usage.',
    'Housekeeping staff use gloves, masks, and safety gear while performing cleaning tasks.',
    'Cleaning chemicals are used according to safety guidelines to avoid risks to employees and workplace infrastructure.',
    'Special attention is given to high-touch surfaces such as door handles, desks, and shared workspaces.',
    'Cleaning processes are designed to comply with corporate safety and facility management standards.',
  ];

  const qualityProcess = [
    'Each cleaning activity follows a structured checklist to ensure all areas are properly maintained.',
    'Dedicated supervisors conduct regular inspections to monitor cleaning quality and staff performance.',
    'Regular service evaluations help maintain high standards and identify areas for improvement.',
    'We actively collect client feedback to continuously improve service delivery.',
    'Housekeeping staff receive regular training updates to maintain service quality.',
  ];

  const serviceModels = [
    'Full-time housekeeping personnel deployed at your workplace for daily cleaning operations.',
    'Multiple cleaning shifts for offices with extended working hours.',
    'Cleaning services performed on daily, weekly, or periodic schedules.',
    'Special cleaning support for corporate events, office renovations, or seasonal cleaning.',
    'Service plans tailored to specific workplace requirements.',
  ];

  const siteInspectionPoints = [
    'Workplace size and layout',
    'Cleaning frequency requirements',
    'Washroom and pantry maintenance needs',
    'Workforce deployment requirements',
    'Specialized cleaning requirements',
  ];


  // Office Supplies data
  const officeSuppliesRange = [
      { icon: <PenSquare className="h-8 w-8 text-primary" />, title: "Writing Instruments", description: "Pens, pencils, markers, highlighters, and more." },
      { icon: <FileText className="h-8 w-8 text-primary" />, title: "Paper Products", description: "A4 paper, notepads, sticky notes, and registers." },
      { icon: <Archive className="h-8 w-8 text-primary" />, title: "Filing & Storage", description: "Files, folders, binders, and document organizers." },
      { icon: <Printer className="h-8 w-8 text-primary" />, title: "Office Consumables", description: "Printer cartridges, toners, and other machine supplies." }
  ];
  const officeSuppliesWhyChooseUs = [
      { icon: <Boxes className="h-8 w-8 text-primary" />, title: "Comprehensive Catalog", description: "A single source for every office supply item your office could possibly need." },
      { icon: <PackageCheck className="h-8 w-8 text-primary" />, title: "Assured Availability", description: "We maintain high stock levels to ensure your essential supplies are always available." },
      { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: "Cost-Effective Solutions", description: "Benefit from competitive pricing, bulk discounts, and annual contract options." }
  ];
  const officeSuppliesFaqs = [
      { question: "Can you print our company logo on notebooks and other items?", answer: "Yes, we offer full customization and branding services for a wide range of office supplies. This is great for enhancing your brand identity." },
      { question: "What are the benefits of an annual supply contract?", answer: "Annual contracts offer locked-in pricing, priority service, scheduled deliveries, and simplified budgeting and procurement processes." },
      { question: "Do you supply original printer cartridges?", answer: "Yes, we supply 100% original and genuine cartridges and consumables for all major printer brands." },
      { question: "How can your inventory management support help us?", answer: "We can work with your admin team to forecast needs, set reorder points, and automate the ordering process to prevent stockouts and reduce manual effort." }
  ];

  // Corporate Gifting data
  const giftCategories = [
      { icon: <Rocket className="h-8 w-8 text-primary" />, title: "Employee Welcome Kits", description: "Curated kits to make new hires feel valued from day one." },
      { icon: <PartyPopper className="h-8 w-8 text-primary" />, title: "Festive & Seasonal Gifts", description: "Thoughtful hampers for Diwali, New Year, and other celebrations." },
      { icon: <Award className="h-8 w-8 text-primary" />, title: "Rewards & Recognition", description: "Premium gifts to celebrate employee milestones and achievements." },
      { icon: <Leaf className="h-8 w-8 text-primary" />, title: "Eco-Friendly & Sustainable", description: "Green gifting options that align with your CSR goals." }
  ];
  const giftingWhyChooseUs = [
      { icon: <PackageSearch className="h-8 w-8 text-primary" />, title: "Creative Curation", description: "Our team designs unique gifting concepts that leave a lasting impression." },
      { icon: <Crown className="h-8 w-8 text-primary" />, title: "Premium Quality", description: "We source high-quality products and focus on elegant, professional packaging." },
      { icon: <Handshake className="h-8 w-8 text-primary" />, title: "End-to-End Management", description: "From sourcing to final delivery, we handle the entire process for a hassle-free experience." }
  ];
  const giftingFaqs = [
      { question: "What is the minimum order quantity for customized gifts?", answer: "MOQs depend on the product and level of customization. We can accommodate a wide range of needs, from small batches for executive gifts to large volumes for company-wide distribution." },
      { question: "Can we include our own branded materials in the gift boxes?", answer: "Absolutely. We can incorporate your company's merchandise, marketing materials, or personalized notes into the gift packages." },
      { question: "How long does it take to deliver bulk gift orders?", answer: "Lead times vary based on customization and product availability. We recommend planning 3-4 weeks in advance for festive or large orders to ensure a smooth process." },
      { question: "Do you handle delivery to multiple addresses?", answer: "Yes, we provide end-to-end logistics, including packaging and PAN-India delivery to individual employee or client addresses." }
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
              <section className="bg-muted">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">The Silent Cost of a Subpar Workplace</h2>
                      <p className="text-muted-foreground md:text-lg">
                        A neglected workplace environment does more than just look unprofessional. It can directly impact employee morale, hinder productivity, and even pose health risks. Dust, clutter, and unhygienic facilities create distractions and signal a lack of care, affecting your team's focus and your company's reputation.
                      </p>
                       <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>First impressions for clients and visitors are compromised.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Reduced employee well-being and increased sick days.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Difficulty in attracting and retaining top talent.</span>
                        </li>
                       </ul>
                    </div>
                    <div className="relative">
                        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw1fHxjb2xsYWJvcmF0aXZlJTIwb2ZmaWNlfGVufDB8fHx8MTcxMTU0ODk1Mnww&ixlib=rb-4.1.0&q=85" alt="Clean and modern office" width={600} height={400} className="rounded-lg shadow-xl" />
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">A Breakdown of Our Housekeeping Services</h2>
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Cleaning Equipment & Materials We Use</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">We use professional-grade cleaning equipment and high-quality materials to ensure consistent hygiene standards across workplaces. Our housekeeping teams are equipped with modern cleaning tools and safe cleaning products designed for corporate environments.</p>
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
                         <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold tracking-tighter font-headline text-secondary">Cleaning Materials</h3>
                        </div>
                        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                            {cleaningMaterials.map(item => (
                                <div key={item.title} className="flex flex-col items-center text-center gap-4">
                                    <div className="bg-accent p-5 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <p className="font-semibold text-secondary">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
             <FadeIn>
              <section>
                <div className="container px-4 md:px-6">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                     <div className="relative aspect-video">
                        <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920" alt="Cleaning staff with protective gear" fill className="rounded-lg shadow-xl object-cover" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Safety & Compliance Standards</h2>
                      <p className="text-muted-foreground md:text-lg">
                        We follow strict safety and hygiene practices to ensure safe workplace environments for both employees and visitors. Maintaining safety during cleaning operations is essential in corporate environments.
                      </p>
                       <h3 className="text-xl font-bold tracking-tighter font-headline text-secondary pt-4">Our Safety Practices</h3>
                       <ul className="space-y-3">
                        {safetyPractices.map((practice, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span>{practice}</span>
                          </li>
                        ))}
                       </ul>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>
            <FadeIn>
              <section className="bg-muted">
                <div className="container px-4 md:px-6">
                   <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Our Quality Assurance Process</h2>
                      <p className="text-muted-foreground md:text-lg">
                        We follow a structured monitoring process to maintain consistent housekeeping standards across all client locations. Quality and consistency are critical in housekeeping services.
                      </p>
                       <h3 className="text-xl font-bold tracking-tighter font-headline text-secondary pt-4">Our Quality Monitoring Process</h3>
                       <ul className="space-y-3">
                        {qualityProcess.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                       </ul>
                    </div>
                    <div className="relative aspect-video">
                        <Image src="https://images.unsplash.com/photo-1554435493-93422e8a142b?q=80&w=1920" alt="Supervisor with checklist" fill className="rounded-lg shadow-xl object-cover" />
                    </div>
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
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Why Outsource Housekeeping?</h2>
                      <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">Making the right choice for your facility management can impact efficiency, costs, and overall workplace quality.</p>
                  </div>
                  <div className="max-w-4xl mx-auto bg-card rounded-lg border-2 border-neutral-300 overflow-hidden">
                      <div className="grid grid-cols-3 text-left">
                          <div className="p-4 font-bold text-secondary bg-accent/50 text-lg">Feature</div>
                          <div className="p-4 font-bold text-secondary bg-accent/50 border-l text-lg">In-House Staff</div>
                          <div className="p-4 font-bold text-secondary bg-accent/50 border-l text-lg">Professional Housekeeping</div>
                      </div>
                      <div className="grid grid-cols-3 text-left border-t items-center">
                          <div className="p-4 font-semibold text-secondary">Training</div>
                          <div className="p-4 text-muted-foreground border-l">Training required</div>
                          <div className="p-4 text-muted-foreground border-l">Trained professionals</div>
                      </div>
                      <div className="grid grid-cols-3 text-left border-t items-center">
                          <div className="p-4 font-semibold text-secondary">Management Overhead</div>
                          <div className="p-4 text-muted-foreground border-l">Management overhead</div>
                          <div className="p-4 text-muted-foreground border-l">Managed services</div>
                      </div>
                      <div className="grid grid-cols-3 text-left border-t items-center">
                          <div className="p-4 font-semibold text-secondary">Equipment Investment</div>
                          <div className="p-4 text-muted-foreground border-l">Equipment investment</div>
                          <div className="p-4 text-muted-foreground border-l">Provided by vendor</div>
                      </div>
                  </div>
                </div>
              </section>
            </FadeIn>
             <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Flexible Service Plans & Staffing Models</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mt-4">We offer flexible housekeeping service models designed to meet the operational needs of different workplace environments. Every workplace has different operational requirements.</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <ul className="space-y-4">
                                {serviceModels.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 p-4 border-2 border-neutral-300 rounded-lg">
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
              <section className="bg-muted">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Request a Free Site Inspection</h2>
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
                          <GetStartedModal>
                              <Button size="lg" variant="outline">Request a Housekeeping Quote</Button>
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
              <section>
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Tailored for Every Industry</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We understand the unique cleaning requirements of different business environments.</p>
                    </div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((industry) => (
                      <Card key={industry.name} className="group text-center transition-all duration-300 border-2 border-neutral-300 hover:border-primary hover:shadow-xl">
                        <CardHeader className="flex flex-col items-center">
                          <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full mb-4 transition-colors">
                            {industryIcons[industry.name as keyof typeof industryIcons]}
                          </div>
                          <CardTitle className="text-2xl font-headline text-secondary group-hover:text-primary transition-colors">{industry.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{industry.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </FadeIn>
            <FadeIn>
                <section className='bg-muted'>
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why <span className="text-primary">G</span><span className="text-secondary">SQUARE</span> for Housekeeping?</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                                Our commitment to excellence ensures a clean, safe, and productive environment for your business.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseGsquareItems.map((item, index) => (
                                <div key={index} className="group bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent mb-5 transition-colors duration-300 group-hover:bg-primary">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-secondary transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
            <FadeIn>
                <section id="process" className="bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary">Our Structured Engagement Process</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">A transparent and collaborative approach guarantees service excellence.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-4 lg:gap-x-12">
                            {processSteps.map((step, index) => (
                              <div key={step.title} className="relative">
                                <div className="bg-card p-6 rounded-lg border-2 border-neutral-300 shadow-sm text-left h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary">
                                  <div className="text-5xl font-extrabold text-primary/20 mb-4">{`0${index + 1}`}</div>
                                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && (
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Complete Office Supplies Range</h2>
                                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">From the front desk to the boardroom, we equip your entire office for productivity.</p>
                            </div>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {officeSuppliesRange.map(item => (
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
                        <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                             <div>
                                <Image src={placeholderImages.stationeryPage.src} alt={placeholderImages.stationeryPage.alt} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Bulk Procurement & Customized Supplies</h2>
                                <p className="text-muted-foreground md:text-lg">Empower your brand with custom-printed supplies. We provide high-quality printing of your logo and brand elements on notebooks, pens, letterheads, and more, ensuring a consistent and professional image in all your communications.</p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>Annual contracts for predictable pricing.</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>Inventory management to prevent stockouts.</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>Fast, reliable delivery across India.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                <FadeIn>
                    <section>
                        <div className="container px-4 md:px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Why Choose Our Office Supply Services?</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {officeSuppliesWhyChooseUs.map((item, index) => (
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
                            <div className="text-center mb-12"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">FAQs – Office Supplies</h2></div>
                            <div className="max-w-3xl mx-auto">
                                <Accordion type="single" collapsible className="w-full">
                                    {officeSuppliesFaqs.map((faq, index) => (
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
        
        {/* Corporate Gifting Page Content */}
        {service.slug === 'corporate-gifting' && (
            <>
                <FadeIn>
                    <section>
                        <div className="container px-4 md:px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Our Corporate Gift Categories</h2>
                                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">Memorable gifting experiences designed to strengthen relationships and build brand loyalty.</p>
                            </div>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {giftCategories.map(item => (
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
                        <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter font-headline text-secondary">Customized & Branded Gift Solutions</h2>
                                <p className="text-muted-foreground md:text-lg">We transform gifts into powerful branding tools. Our team works with you to create custom packaging, branded merchandise, and personalized messages that make your gifts truly unique and reflective of your company's identity.</p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>Premium packaging with logo branding.</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>End-to-end logistics and PAN-India delivery.</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/>Wide range of products for all budgets.</li>
                                </ul>
                            </div>
                            <div>
                                <Image src={placeholderImages.giftingPage.src} alt={placeholderImages.giftingPage.alt} width={600} height={400} className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </section>
                </FadeIn>
                 <FadeIn>
                    <section>
                        <div className="container px-4 md:px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Why Choose Us for Corporate Gifting?</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {giftingWhyChooseUs.map((item, index) => (
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
                            <div className="text-center mb-12"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">FAQs – Corporate Gifting Services</h2></div>
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
