import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, FileText, Star, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Pricing Philosophy',
  description: 'Learn about G Square\'s transparent pricing, Service Level Agreement (SLA) commitments, and replacement guarantees for facility management services in Pune.',
  openGraph: {
    title: 'Our Pricing Philosophy | G SQUARE CORPORATE SERVICES',
    description: 'Transparent, value-driven pricing for facility management.',
    url: `${siteConfig.url}/pricing`,
  },
};

const pricingPrinciples = [
  {
    icon: <FileText className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: 'Transparent Proposals',
    description: 'We provide detailed, itemized proposals with a clear scope of work. You\'ll know exactly what you\'re paying for, with no hidden costs or surprise fees.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: 'Value-Driven Solutions',
    description: 'Our goal is to provide the best possible value. We focus on efficiency, quality, and long-term results to ensure a high return on your investment in our services.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: 'Service Level Agreement (SLA) Commitment',
    description: 'All our partnerships are governed by a stringent SLA that defines service standards, response times, and quality metrics, holding us accountable for our performance.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
    title: 'Replacement Guarantee',
    description: 'We stand by the quality of our team. Our replacement guarantee ensures that we provide swift and suitable replacements for staff if their performance does not meet your expectations.',
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Pricing Philosophy',
          description: metadata.description,
          url: `${siteConfig.url}/pricing`,
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Pricing Philosophy
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Transparent, Fair, and Value-Driven.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                  No-Nonsense Pricing for Quality Service
                </h2>
                <p className="text-muted-foreground md:text-xl mt-4">
                  We believe in building long-term partnerships based on trust and transparency. That's why we don't offer complex, one-size-fits-all pricing packages. Instead, we work with you to understand your unique needs and create a customized proposal that delivers maximum value for your budget.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mt-16">
                {pricingPrinciples.map((principle) => (
                  <Card key={principle.title} className="group text-center transition-all duration-300 border-2 border-secondary hover:border-primary hover:shadow-xl">
                    <CardHeader className="flex flex-col items-center">
                      <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full mb-4 transition-colors">
                        {principle.icon}
                      </div>
                      <CardTitle className="text-xl font-headline text-secondary group-hover:text-primary transition-colors">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="bg-muted">
              <div className="container">
                  <div className="rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
                      Ready for a Custom Quote?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                      Let's discuss your facility management needs. We'll prepare a detailed, no-obligation proposal tailored to your specific requirements and budget.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">Request a Consultation</Link>
                    </Button>
                  </div>
              </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
