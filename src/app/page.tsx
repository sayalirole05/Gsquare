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
} from 'lucide-react';
import { services, industries, processSteps, whyChooseUs, siteConfig } from '@/lib/data';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';
import placeholderImages from '@/lib/placeholder-images.json';

export default function Home() {
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
          <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-label="Scroll to next section">
             <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
          </a>
        </section>

        <FadeIn>
          <section id="services">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                    Our Core Services
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Tailored facility management and corporate support to meet your
                    unique business needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
                {services.map((service) => (
                  <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                         {
                          {
                            'housekeeping': <ClipboardList className="h-6 w-6 text-primary" />,
                            'material-supply': <Truck className="h-6 w-6 text-primary" />,
                            'stationery': <Package className="h-6 w-6 text-primary" />,
                            'corporate-gifting': <Gift className="h-6 w-6 text-primary" />
                          }[service.slug]
                        }
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href={`/services/${service.slug}`}>Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="why-choose-us" className="bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                    Why G Square is Your Ideal Partner
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We are committed to excellence, compliance, and building long-term partnerships through reliable service.
                  </p>
                  <ul className="grid gap-4">
                    {whyChooseUs.map((item, index) => (
                       <li key={index} className="flex items-start gap-4">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div className="hidden lg:flex items-center justify-center">
                   <Handshake className="h-64 w-64 text-primary/20" />
                </div>
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
