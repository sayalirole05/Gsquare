import { CheckCircle, MapPin, Users, Award, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/data';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about G Square Corporate Services, our mission, operational expertise, and commitment to providing top-tier facility management in Pune.`,
  openGraph: {
    title: 'About Us | G SQUARE CORPORATE SERVICES',
    description: 'Discover our commitment to excellence in facility management.',
    url: `${siteConfig.url}/about`,
  },
};

const aboutData = {
  mission: "Our mission is to deliver exceptional facility management and corporate support services through reliability, integrity, and a client-first approach. We aim to create clean, safe, and efficient environments that empower businesses in Pune to thrive.",
  expertise: "With years of hands-on experience, our leadership team possesses deep operational expertise in managing diverse facilities. We leverage proven processes, technology, and a highly trained workforce to deliver consistent, high-quality outcomes. Our proactive approach anticipates client needs and resolves issues before they impact operations.",
  compliance: "We are steadfast in our commitment to 100% statutory compliance. All our operations adhere to labor laws, safety regulations, and industry standards. Every member of our staff undergoes a rigorous background verification process, ensuring a trustworthy and secure service for your peace of mind.",
  coverage: [
    { name: 'Hinjewadi', description: 'Serving the heart of Pune\'s IT sector.' },
    { name: 'Baner', description: 'Providing support to the growing corporate hub.' },
    { name: 'Wakad', description: 'Catering to commercial and residential complexes.' },
    { name: 'Pimpri-Chinchwad', description: 'Expertise in industrial and manufacturing zones.' },
  ],
};


export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'About G SQUARE CORPORATE SERVICES',
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
        <section className="bg-primary/5 border-b">
          <div className="container px-4 md:px-6 py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">About G Square</h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Your Partner in Creating Exceptional Work Environments
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-headline">Our Mission</h2>
                      <p className="text-muted-foreground mt-2">{aboutData.mission}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-headline">Operational Expertise</h2>
                      <p className="text-muted-foreground mt-2">{aboutData.expertise}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-headline">Compliance & Background Verification</h2>
                      <p className="text-muted-foreground mt-2">{aboutData.compliance}</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-headline">Geographic Coverage</h2>
                      <p className="text-muted-foreground mt-2">
                        Our strong presence across Pune ensures prompt and efficient service delivery. We have dedicated teams covering all major business districts:
                      </p>
                      <ul className="mt-4 grid grid-cols-2 gap-4">
                        {aboutData.coverage.map((area) => (
                          <li key={area.name} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="font-semibold">{area.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="bg-muted">
              <div className="container">
                  <div className="rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Partner with the Experts</h2>
                  <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                      Discover the difference that professional, compliant, and client-focused facility management can make.
                  </p>
                  <Link href="/#contact-us" className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Request a Consultation
                  </Link>
                  </div>
              </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
