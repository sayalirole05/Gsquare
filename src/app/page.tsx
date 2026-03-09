import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Building,
  Factory,
  Briefcase,
  Gift,
  Handshake,
  Users,
  ChevronRight,
  ClipboardList,
  Truck,
  Package,
  ArrowRight,
  ChevronDown,
  Focus,
  TrendingUp,
  Zap,
  BarChart2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { services, industries, processSteps, whyChooseUs, siteConfig } from '@/lib/data';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';
import placeholderImages from '@/lib/placeholder-images.json';
import React from 'react';
import { HomeContactForm } from '@/components/HomeContactForm';
import { GetStartedModal } from '@/components/GetStartedModal';

export default function Home() {
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
    {
      icon: <Zap className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Reliable Delivery',
      description: 'Time-bound material supply with robust supply chain management and SLA discipline',
    },
    {
      icon: <BarChart2 className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Performance Driven',
      description: 'Supervised teams with measurable service quality and professional reporting systems',
    },
    {
      icon: <Handshake className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />,
      title: 'Long-Term Partnership',
      description: 'Relationship-driven approach focused on continuous improvement and strategic alignment',
    },
  ];

  const stats = [
      { value: '500+', label: 'Organisations Served' },
      { value: '50+', label: 'Multi-Location Offices' },
      { value: '99.5%', label: 'SLA Compliance' },
      { value: '10+', label: 'Years of Excellence' },
  ];


  return (
    <>
     <JsonLd data={{
        '@context': 'https://schema.org',
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
        url: siteConfig.url,
      }} />
      <div className="flex flex-col ">
        <section className="w-full relative py-20">
          <Image
            alt={placeholderImages.hero.alt}
            src={placeholderImages.hero.src}
            fill
            priority
            className="object-cover"
            data-ai-hint={placeholderImages.hero.hint}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B4A7C]/90 to-[#1a2d4d]/90" />
          <div className="container relative px-4 md:px-6 flex items-center">
            <div className="flex flex-col space-y-8 max-w-3xl py-0">
              <div>
                <div className="inline-block bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  Executive Corporate Support Partner
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                  Strategic Workplace Support for <span className="text-primary">Modern Enterprises</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-gray-200">
                  Empowering Organisations with Operational Excellence, Compliance,
                  and Scalable Workforce Solutions
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Operational Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Compliance Ready</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Scalable Solutions</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact-us">Request Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
          <a href="#why-choose-us" className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-label="Scroll to next section">
             <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
          </a>
        </section>

        <FadeIn>
          <section id="why-choose-us">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why <span className="text-primary">G</span>SQUARE Stands Out</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We deliver enterprise-ready solutions that transform operational efficiency and enable your leadership to focus on strategic growth
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mt-20 text-center">
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

        <FadeIn>
          <section id="services-portfolio" className="bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-secondary">Our Corporate Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Integrated services designed to support modern workplaces with efficiency, reliability, and operational excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Corporate Gifting Card */}
                <div className="bg-white rounded-lg border-2 border-neutral-300 group text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
                  <div className="relative h-64">
                    <Image
                        src={placeholderImages.corporateGifting.src}
                        alt={placeholderImages.corporateGifting.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={placeholderImages.corporateGifting.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">Corporate Gifting</h3>
                  </div>
                   <div className="p-6 space-y-4 bg-card">
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">Customized Solutions</h4>
                      <p className="text-sm text-muted-foreground">Custom festive and employee engagement kits with branded and non-branded products.                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">Timely Delivery</h4>
                      <p className="text-sm text-muted-foreground">Bulk ordering and timely delivery to ensure your gifts arrive on schedule.</p>
                    </div>
                  </div>
                </div>
                
                {/* Housekeeping Card */}
                <div className="bg-white rounded-lg border-2 border-neutral-300 group text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
                  <div className="relative h-64">
                    <Image
                      src={placeholderImages.housekeeping.src}
                      alt={placeholderImages.housekeeping.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={placeholderImages.housekeeping.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">Housekeeping Services</h3>
                  </div>
                  <div className="p-6 space-y-4 bg-card">
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">Trained Manpower</h4>
                      <p className="text-sm text-muted-foreground">Verified, uniformed workforce with dedicated supervisors ensuring consistent quality</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">Premium Materials</h4>
                      <p className="text-sm text-muted-foreground">High-quality chemicals, tools, and consumables for professional maintenance</p>
                    </div>
                  </div>
                </div>

                {/* Office Supplies Card */}
                <div className="bg-white rounded-lg border-2 border-neutral-300 group text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
                  <div className="relative h-64">
                    <Image
                      src={placeholderImages.officeSupplies.src}
                      alt={placeholderImages.officeSupplies.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={placeholderImages.officeSupplies.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">Office Supplies</h3>
                  </div>
                  <div className="p-6 space-y-4 bg-card">
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">Stationery Management</h4>
                      <p className="text-sm text-muted-foreground">End-to-end supply of desk essentials, print materials, and office consumables</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-md text-secondary group-hover:text-primary transition-colors">General Supplies</h4>
                      <p className="text-sm text-muted-foreground">Pantry items, utilities, and recurring operational materials with automated inventory</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="process" className="bg-white">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary">
                  Our Workforce Strategy
                </h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                  A strategic framework for recruiting, training, and deploying the right talent to support seamless business operations.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-4 lg:gap-x-12">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="bg-card p-6 rounded-lg border border-neutral-300 shadow-sm text-left h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
            <div className="container">
              <div className="relative rounded-lg overflow-hidden p-8 md:p-12 lg:p-20 text-center">
                <Image
                  alt={placeholderImages.cta.alt}
                  src={placeholderImages.cta.src}
                  fill
                  className="object-cover"
                  data-ai-hint={placeholderImages.cta.hint}
                />
                <div className="absolute inset-0 bg-foreground/80" />
                <div className="relative space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Ready to Transform Your Operations?</h2>
                  <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
                    Join leading organisations who trust <span className="text-primary">G</span>SQUARE for their operational excellence
                  </p>
                  <GetStartedModal>
                    <Button size="lg">Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </GetStartedModal>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="contact-us" className="bg-white">
            <div className="container px-4 md:px-6">
              <div className="w-full max-w-6xl mx-auto space-y-12">
                <div className="space-y-3 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary font-headline">Let’s Work Together</h2>
                  <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    Whether you're looking to streamline operations, ensure compliance, or scale your workforce, we're here to help. Get in touch with our team today.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Call Us</h4>
                      <p className="font-semibold text-foreground">+91 97649 97648</p>
                      <p className="font-semibold text-foreground">+91 70208 13399</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Email Us</h4>
                      <a href="mailto:services@gsquarecorp.co.in" className="font-semibold text-foreground hover:underline break-all">
                        services@gsquarecorp.co.in
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Registered Office</h4>
                      <address className="not-italic font-semibold text-foreground">
                        C/13, S NO 6, SHUBHAM COMPLEX,<br/>
                        OLD JAKAT NAKA, CHINCHWAD,<br/>
                        PUNE, India - 411033
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
