import { CheckCircle, Eye, Goal, Layers, Scaling, ThumbsUp, Briefcase, Factory, Users, School, Store, Laptop } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/data';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We partner with organizations to simplify workplace operations and create productive environments through reliable operational support services.',
  openGraph: {
    title: 'About Us | GSQUARE CORPORATE SERVICES',
    description: 'Building Efficient Workplaces for Modern Businesses.',
    url: `${siteConfig.url}/about`,
  },
};

const valueProps = [
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Reliable Operational Support',
    description: 'Dependable services that ensure smooth workplace operations.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Consistent Service Quality',
    description: 'Structured processes that maintain professional service standards.',
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Simplified Vendor Management',
    description: 'Integrated services that reduce operational complexity.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Scalable Workplace Solutions',
    description: 'Flexible support designed to grow with your organization.',
  },
];

const approachSteps = [
    {
        title: 'Understanding Client Needs',
        description: 'We analyze operational requirements and provide tailored support.'
    },
    {
        title: 'Structured Service Delivery',
        description: 'Our processes ensure consistent service quality and reliability.'
    },
    {
        title: 'Long-Term Partnerships',
        description: 'We focus on building trusted and lasting relationships with clients.'
    }
];

const industries = [
    { icon: <Laptop className="h-10 w-10 text-primary" />, name: 'IT & Technology' },
    { icon: <Briefcase className="h-10 w-10 text-primary" />, name: 'Corporate Offices' },
    { icon: <Users className="h-10 w-10 text-primary" />, name: 'Co-working Spaces' },
    { icon: <Factory className="h-10 w-10 text-primary" />, name: 'Manufacturing' },
    { icon: <School className="h-10 w-10 text-primary" />, name: 'Educational Institutions' },
    { icon: <Store className="h-10 w-10 text-primary" />, name: 'Retail & Commercial' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'About GSQUARE CORPORATE SERVICES',
          description: metadata.description,
          url: `${siteConfig.url}/about`,
          isPartOf: {
            '@type': 'WebSite',
            url: siteConfig.url,
            name: siteConfig.name,
          },
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section 
            className="relative w-full bg-cover bg-center bg-fixed" 
            style={{ 
                backgroundImage: `url(${placeholderImages.aboutHero.src})`,
                height: '400px' 
            }}
        >
            <div className="absolute inset-0 bg-secondary/70" />
            <div className="relative container h-full flex flex-col justify-center items-center text-center text-white">
                <FadeIn>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                        About Us
                    </h1>
                    <div className="mt-4 text-lg">
                        <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link>
                        <span className="mx-2 text-primary-foreground/50">&gt;</span>
                        <span className="font-semibold">About Us</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* Company Story Section */}
        <FadeIn>
          <section className='py-16'>
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center  lg:px-6">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-headline">Strong Productive Workplaces</h2>
                    <div className="text-muted-foreground space-y-4 text-lg">
                        <p>Every successful organization relies on well-managed workplace operations. Clean facilities, organized environments, and dependable operational support create the conditions where teams can focus on productivity, efficiency, and innovation. Our goal is to help businesses streamline daily workplace operations so employees can concentrate on what truly drives growth.</p>
                    </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={placeholderImages.aboutStory.src}
                        alt={placeholderImages.aboutStory.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={placeholderImages.aboutStory.hint}
                    />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        {/* Value Proposition Section */}
        <FadeIn>
            <section className="bg-muted py-16">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-headline">Designed for Modern Enterprises</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valueProps.map((item, index) => (
                            <Card key={index} className="bg-card text-left p-6 border-transparent shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>

        {/* Mission & Vision Section */}
        {/* <FadeIn>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="group bg-accent/50 p-8 rounded-lg border border-transparent hover:border-primary transition-all duration-300 flex items-start gap-6">
                            <div className="bg-white p-3 rounded-lg shadow-sm mt-1">
                                <Goal className="h-8 w-8 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Our Mission</h3>
                                <p className="text-muted-foreground text-lg">To empower organizations with dependable workplace support services that create efficient, well-managed, and productive business environments.</p>
                            </div>
                        </div>
                         <div className="group bg-accent/50 p-8 rounded-lg border border-transparent hover:border-primary transition-all duration-300 flex items-start gap-6">
                             <div className="bg-white p-3 rounded-lg shadow-sm mt-1">
                                <Eye className="h-8 w-8 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Our Vision</h3>
                                <p className="text-muted-foreground text-lg">To be recognized as a reliable and innovative workplace solutions partner, helping organizations operate more efficiently and sustainably.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FadeIn> */}

        {/* Our Approach Section */}
        <FadeIn>
            <section className="bg-muted py-16">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-headline">How We Work</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {approachSteps.map((step, index) => (
                           <Card key={index} className="bg-card text-left p-8 border-transparent shadow-md hover:shadow-xl hover:border-primary transition-all duration-300">
                                <div className="text-5xl font-extrabold text-primary/20 mb-4">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                           </Card>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>

         {/* Industries Section */}
        <FadeIn>
            <section>
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-headline">Industries We Support</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {industries.map((industry) => (
                            <div key={industry.name} className="flex flex-col items-center text-center gap-4">
                                <div className="bg-accent p-5 rounded-lg">
                                    {industry.icon}
                                </div>
                                <p className="font-semibold text-secondary">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>

        {/* Closing Statement Section */}
        <FadeIn>
            <section className="bg-muted">
                <div className="container text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-headline">Supporting Workplaces That Drive Business Success</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Well-maintained workplaces create the foundation for productivity, collaboration, and growth. Our goal is to help organizations maintain efficient environments so teams can focus on delivering their best work.
                    </p>
                </div>
            </section>
        </FadeIn>

        {/* Final CTA Section */}
        <FadeIn>
          <section className="bg-secondary">
              <div className="container text-center">
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Let’s Build Better Workplace Operations Together</h2>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button asChild size="lg">
                            <Link href="/#contact-us">Contact Us</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-secondary">
                            <Link href="/#contact-us">Request Consultation</Link>
                        </Button>
                    </div>
                  </div>
              </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
