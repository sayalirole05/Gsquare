
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Testimonials } from '@/components/Testimonials';
import { LogoCloudSection } from '@/components/LogoCloudSection';

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
      <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full relative">
          <Image
            alt={placeholderImages.hero.alt}
            src={placeholderImages.hero.src}
            fill
            priority
            className="object-cover"
            data-ai-hint={placeholderImages.hero.hint}
          />
          <div className="absolute inset-0 bg-foreground/90" />
          <div className="container relative px-4 md:px-6 flex items-center min-h-[90vh] md:min-h-screen">
            <div className="flex flex-col space-y-8 max-w-3xl py-24">
              <div>
                <div className="inline-block bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  Executive Corporate Support Partner
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
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
                  <Link href="/contact">Request Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">Why Leading Companies Choose GSquare</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We deliver enterprise-ready solutions that transform operational efficiency and enable your leadership to focus on strategic growth
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-secondary">Our Integrated Corporate Service Portfolio</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Comprehensive solutions designed to streamline your operational excellence
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Housekeeping Card */}
                <div className="rounded-lg border-2 border-secondary group text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
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
                <div className="rounded-lg border-2 border-secondary group text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
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

                {/* Corporate Gifting Card */}
                <div className="rounded-lg border-2 border-secondary group text-card-foreground shadow-sm lg:col-span-2 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-card">
                    <div className="relative min-h-[300px] md:h-full">
                       <Image
                          src={placeholderImages.corporateGifting.src}
                          alt={placeholderImages.corporateGifting.alt}
                          fill
                          className="object-cover"
                          data-ai-hint={placeholderImages.corporateGifting.hint}
                       />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                       <h3 className="text-2xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">Corporate Gifting</h3>
                       <p className="text-muted-foreground mb-6">
                         Customized festive and employee engagement kits that strengthen relationships and boost morale. From festival celebrations to employee milestones, we create memorable gifting experiences.
                       </p>
                       <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Customized gift solutions</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Festival & occasion-based kits</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Employee engagement packages</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Bulk ordering & timely delivery</span>
                        </li>
                       </ul>
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
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-secondary">
                  Structured Workforce Deployment Process
                </h2>
                <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed">
                  A proven methodology that ensures seamless onboarding and exceptional service delivery
                </p>
              </div>

              {/* Mobile View */}
              <div className="grid grid-cols-1 gap-y-12 md:hidden">
                {processSteps.map((step, index) => (
                    <div key={index} className="group bg-card p-8 rounded-lg border-2 border-secondary shadow-sm text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
                      <span className="text-7xl font-extrabold text-accent group-hover:text-primary transition-colors">{`0${index + 1}`}</span>
                      <h3 className="font-bold text-xl mt-4 text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground text-base mt-2">{step.description}</p>
                    </div>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden md:block">
                <div className="flex items-stretch justify-start md:justify-center overflow-x-auto pb-4">
                  {processSteps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="w-72 flex-shrink-0 mx-2">
                        <div className="group bg-card rounded-lg p-6 border-2 border-secondary shadow-sm flex flex-col h-full text-left transition-all duration-300 hover:border-primary hover:shadow-xl">
                          <span className="text-6xl font-extrabold text-accent group-hover:text-primary transition-colors">{`0${index + 1}`}</span>
                          <h3 className="font-bold text-lg mt-4 text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2 flex-grow">{step.description}</p>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="flex items-center justify-center px-4 flex-shrink-0">
                          <ArrowRight className="h-8 w-8 text-primary" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <LogoCloudSection />
        </FadeIn>

        <FadeIn>
          <Testimonials />
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
                    Join leading organisations who trust GSquare for their operational excellence
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="contact-us" className="bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 justify-items-center gap-16">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary font-headline">Let's Start a Conversation</h2>
                    <p className="text-muted-foreground text-lg">
                      Whether you're looking to streamline operations, ensure compliance, or scale your workforce, we're here to help. Get in touch with our team today.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm text-secondary">Call Us</h4>
                          <p className="font-semibold text-foreground text-lg">+91 97649 97648</p>
                          <p className="font-semibold text-foreground text-lg">+91 70208 13399</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm text-secondary">Email Us</h4>
                          <a href="mailto:services@gsquarecorp.co.in" className="font-semibold text-foreground text-lg hover:underline">
                            services@gsquarecorp.co.in
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm text-secondary">Registered Office</h4>
                          <address className="not-italic font-semibold text-foreground text-lg">
                            C/13, S NO 6, SHUBHAM COMPLEX,<br/>
                            OLD JAKAT NAKA, CHINCHWAD,<br/>
                            PUNE, India - 411033
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-accent p-8 rounded-xl mt-12">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white p-4 rounded-full shadow-md mb-4">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary">Let's Connect</h3>
                      <p className="text-muted-foreground mt-2">We're here to help transform your operations</p>
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
