import { servicePages, siteConfig } from '@/lib/data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, ClipboardList, Truck, Package, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

// Generate static pages for each service
export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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

        <FadeIn>
          <section>
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

        <FadeIn>
          <section className="bg-muted">
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
