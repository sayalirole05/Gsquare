import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data';
import { Phone, Mail, MapPin } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from './ContactForm';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with G SQUARE CORPORATE SERVICES for a free quote on facility management in Pune. Call us at ${siteConfig.phone} or visit our office.`,
  openGraph: {
    title: 'Contact G SQUARE CORPORATE SERVICES',
    description: 'Reach out for top-tier facility management solutions.',
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact G SQUARE CORPORATE SERVICES',
        description: metadata.description,
        url: `${siteConfig.url}/contact`,
        mainEntity: {
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
        }
      }} />
      <div className="flex flex-col">
        <section className="bg-primary/5 border-b">
          <div className="container px-4 md:px-6 py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Get in Touch
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              We're here to help. Contact us for a free consultation and quote for your facility needs.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                   <div>
                      <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
                      <div className="space-y-6 text-lg">
                          <div className="flex items-start gap-4">
                              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                              <address className="not-italic text-muted-foreground">
                                  {siteConfig.name},<br />
                                  {siteConfig.address.street},<br />
                                  {siteConfig.address.city}, {siteConfig.address.zip}
                              </address>
                          </div>
                           <div className="flex items-start gap-4">
                              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                              <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                  {siteConfig.phone}
                              </a>
                          </div>
                          <div className="flex items-start gap-4">
                              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                  {siteConfig.email}
                              </a>
                          </div>
                      </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-headline mb-4 hidden lg:block">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
