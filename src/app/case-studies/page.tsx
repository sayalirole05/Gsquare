import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { siteConfig, testimonials } from '@/lib/data';
import { Quote, Building, Factory, Briefcase } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Case Studies & Testimonials',
  description: 'Read what our clients in Pune say about G Square\'s facility management, housekeeping, and corporate support services.',
  openGraph: {
    title: 'Client Success Stories | G SQUARE CORPORATE SERVICES',
    description: 'Real-world examples of our impact on businesses in Pune.',
    url: `${siteConfig.url}/case-studies`,
  },
};

const industryIcons: { [key: string]: React.ReactNode } = {
  'IT Park': <Building className="h-5 w-5 text-muted-foreground" />,
  'Corporate Office': <Briefcase className="h-5 w-5 text-muted-foreground" />,
  'Manufacturing': <Factory className="h-5 w-5 text-muted-foreground" />,
};

export default function CaseStudiesPage() {
  return (
    <>
       <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Case Studies & Testimonials',
          description: metadata.description,
          url: `${siteConfig.url}/case-studies`,
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
              Client Success Stories
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Discover how we help businesses across Pune thrive with reliable and professional facility management.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <CardContent className="p-0 flex-grow">
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </CardHeader>
                    <CardFooter className="flex flex-col items-start gap-2 mt-auto">
                      <div className="w-full border-t pt-4">
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {industryIcons[testimonial.industry]}
                          <span className="text-xs font-medium text-muted-foreground">{testimonial.industry}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
