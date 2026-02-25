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
} from 'lucide-react';
import { services, industries, processSteps, whyChooseUs, siteConfig } from '@/lib/data';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';
import placeholderImages from '@/lib/placeholder-images.json';

export default function Home() {
  const whyChooseGsquareItems = [
    {
      icon: <Focus className="h-7 w-7 text-[#f39c12]" />,
      title: 'Single-Window Solution',
      description: 'One trusted vendor for all your corporate operational needs - from housekeeping to gifting',
    },
    {
      icon: <CheckCircle className="h-7 w-7 text-[#f39c12]" />,
      title: 'Compliance Assured',
      description: 'Verified workforce with complete documentation transparency and adherence to corporate standards',
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-[#f39c12]" />,
      title: 'Enterprise Scalability',
      description: 'Seamless staffing solutions for large campuses and multi-location offices across India',
    },
    {
      icon: <Zap className="h-7 w-7 text-[#f39c12]" />,
      title: 'Reliable Delivery',
      description: 'Time-bound material supply with robust supply chain management and SLA discipline',
    },
    {
      icon: <BarChart2 className="h-7 w-7 text-[#f39c12]" />,
      title: 'Performance Driven',
      description: 'Supervised teams with measurable service quality and professional reporting systems',
    },
    {
      icon: <Handshake className="h-7 w-7 text-[#f39c12]" />,
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
          <div className="absolute inset-0 bg-[#2c3e50]/90" />
          <div className="container relative px-4 md:px-6 flex items-center min-h-[90vh] md:min-h-screen">
            <div className="flex flex-col space-y-8 max-w-3xl py-24">
              <div>
                <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  Executive Corporate Support Partner
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl leading-tight">
                  Strategic Workplace
                  <br />
                  Support for Modern
                  <br />
                  <span className="text-[#f39c12]">Enterprises</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-gray-200">
                  Empowering Organisations with Operational Excellence, Compliance,
                  and Scalable Workforce Solutions
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-[#f39c12]" />
                  <span>Operational Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-[#f39c12]" />
                  <span>Compliance Ready</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-[#f39c12]" />
                  <span>Scalable Solutions</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-[#f39c12] text-white hover:bg-[#f39c12]/90">
                  <Link href="/contact">Request Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#2c3e50]">Why Leading Companies Choose GSquare</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We deliver enterprise-ready solutions that transform operational efficiency and enable your leadership to focus on strategic growth
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseGsquareItems.map((item, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg border shadow-sm text-left">
                        <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-[#f39c12]/10 mb-5">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-[#2c3e50]">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mt-20 text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <p className="text-4xl lg:text-5xl font-bold text-[#f39c12]">{stat.value}</p>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">{stat.label}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="process">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Engagement Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">A streamlined, transparent process to ensure your needs are met efficiently.</p>
              </div>
              <div className="relative mt-12 max-w-3xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between my-8 w-full">
                    <div className={`w-[calc(50%-2rem)] text-right ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="z-10 bg-background p-2 rounded-full border-2 border-primary order-2">
                      <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="industries" className="bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Industries We Serve</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Providing expert facility management across Pune's diverse corporate landscape.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-10">
                {industries.map((industry) => (
                  <div key={industry.name} className="flex flex-col items-center space-y-3">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {
                        {
                          'IT Parks': <Building className="h-8 w-8 text-primary" />,
                          'Manufacturing Units': <Factory className="h-8 w-8 text-primary" />,
                          'Corporate Offices': <Briefcase className="h-8 w-8 text-primary" />,
                          'Commercial Complexes': <Users className="h-8 w-8 text-primary" />
                        }[industry.name]
                      }
                    </div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                    <p className="text-center text-muted-foreground">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <div className="container">
              <div className="rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Ready to Elevate Your Facility?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                  Let's discuss how G Square can create a cleaner, safer, and more efficient environment for your business.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
