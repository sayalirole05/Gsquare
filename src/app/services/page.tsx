import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ClipboardList, Truck, Package, Gift } from 'lucide-react';
import type { Metadata } from 'next';
import { servicePages, siteConfig } from '@/lib/data';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive facility management and corporate support services in Pune, including housekeeping, material supply, and corporate gifting.',
  openGraph: {
    title: 'Our Services | G Square Corporate Services',
    description: 'Comprehensive facility management and corporate support solutions.',
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'G Square Services',
          description: metadata.description,
          url: `${siteConfig.url}/services`,
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
              Our Corporate Services
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Integrated solutions designed to streamline your operations and enhance your workplace environment.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {servicePages.map((service) => (
                  <Card key={service.slug} className="group flex flex-col transition-all duration-300 border-2 border-secondary hover:border-primary hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-full transition-colors">
                        {
                          {
                            'housekeeping': <ClipboardList className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
                            'material-supply': <Truck className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
                            'stationery': <Package className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
                            'corporate-gifting': <Gift className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                          }[service.slug]
                        }
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-headline text-secondary group-hover:text-primary transition-colors">{service.title.replace(' in Pune', '')}</CardTitle>
                        <CardDescription>Comprehensive solutions for your business.</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>
                          View Details <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
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
