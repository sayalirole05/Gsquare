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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Testimonials } from '@/components/Testimonials';
import React from 'react';

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

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
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

  const icons: { [key: string]: React.ReactNode } = {
    'housekeeping': <ClipboardList className="h-16 w-16 text-primary" />,
    'material-supply': <Truck className="h-16 w-16 text-primary" />,
    'stationery': <Package className="h-16 w-16 text-primary" />,
    'corporate-gifting': <Gift className="h-16 w-16 text-primary" />,
  };
  
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

  const processIcons = [
    <Search key={1} className="h-8 w-8 text-primary" />,
    <FileText key={2} className="h-8 w-8 text-primary" />,
    <Rocket key={3} className="h-8 w-8 text-primary" />,
    <ShieldCheck key={4} className="h-8 w-8 text-primary" />,
    <TrendingUp key={5} className="h-8 w-8 text-primary" />,
  ];

  const stats = [
    { value: '500+', label: 'Organisations Served' },
    { value: '50+', label: 'Multi-Location Offices' },
    { value: '99.5%', label: 'SLA Compliance' },
    { value: '10+', label: 'Years of Excellence' },
  ];

  const serviceBreakdown = [
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
  
  const faqs = [
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

  return (
    <>
       <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.title,
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
            '@type': 'City',
            name: 'Pune'
          },
          description: service.description
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary/5 border-b">
          <div className="container px-4 md:px-6 py-16">
            <div className="grid md:grid-cols-[auto_1fr] items-center gap-8">
                <div className="bg-primary/10 p-4 rounded-full hidden md:block">
                    {icons[service.slug]}
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">{service.title}</h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
                        {service.description}
                    </p>
                </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <FadeIn>
            <section className="bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
                                <p className="text-muted-foreground mt-2 text-sm sm:text-base">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>

        {service.slug === 'housekeeping' && (
          <>
            {/* Problem & Importance Section */}
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

            {/* Service Breakdown Section */}
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">A Breakdown of Our Housekeeping Services</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We offer a comprehensive suite of services to ensure every corner of your workspace is pristine.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {serviceBreakdown.map(item => (
                                <Card key={item.title} className="text-center border-secondary/20">
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
          </>
        )}

        <FadeIn>
          <section className="bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline">Key Features</h2>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-lg">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline">Benefits for Your Business</h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                       <li key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-lg text-muted-foreground">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        {service.slug === 'housekeeping' && (
          <>
             {/* Industries Served Section */}
            <FadeIn>
              <section>
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Tailored for Every Industry</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">We understand the unique cleaning requirements of different business environments.</p>
                    </div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((industry) => (
                      <Card key={industry.name} className="group text-center transition-all duration-300 border-2 border-secondary hover:border-primary hover:shadow-xl">
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

            {/* Why Choose Us Section */}
            <FadeIn>
                <section className='bg-muted'>
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why GSquare for Housekeeping?</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                                Our commitment to excellence ensures a clean, safe, and productive environment for your business.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseGsquareItems.map((item, index) => (
                                <div key={index} className="group bg-card p-6 rounded-lg border-2 border-secondary shadow-sm text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
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

            {/* Process Section */}
            <FadeIn>
                <section>
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Our Structured Engagement Process</h2>
                             <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mt-4">A transparent and collaborative approach guarantees service excellence.</p>
                        </div>
                         <div className="relative max-w-3xl mx-auto">
                            <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
                            {processSteps.map((step, index) => (
                            <div key={index} className="relative pl-20 pb-16">
                                <div className="absolute left-9 top-1 -translate-x-1/2">
                                <div className="bg-background border-2 border-primary rounded-full h-10 w-10 flex items-center justify-center">
                                    {processIcons[index]}
                                </div>
                                </div>
                                <div className="pt-1">
                                <h3 className="text-xl font-bold font-headline">{index + 1}. {step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>
            
            {/* Compliance Section */}
            <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                         <div className="text-center">
                            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                                <ShieldCheck className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">
                                Committed to Compliance & Security
                            </h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                                We are steadfast in our commitment to 100% statutory compliance. All our operations adhere to labor laws, safety regulations, and industry standards. Every member of our staff undergoes a rigorous background verification process, ensuring a trustworthy and secure service for your peace of mind.
                            </p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQs */}
            <FadeIn>
                <section className="bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-secondary">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
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

        {/* CTA */}
        <FadeIn>
          <section className="bg-background">
            <div className="container">
              <div className="rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Interested in our {service.title.replace(' in Pune', '')} services?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                  Contact us today for a customized proposal and discover how we can add value to your business.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
