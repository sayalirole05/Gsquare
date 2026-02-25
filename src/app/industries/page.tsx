import { Building, Factory, Briefcase, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { industries, siteConfig } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'G Square provides expert facility management services to IT Parks, Manufacturing Units, Corporate Offices, and Commercial Complexes across Pune.',
  openGraph: {
    title: 'Industries We Serve | G SQUARE CORPORATE SERVICES',
    description: 'Specialized facility management for diverse industries in Pune.',
    url: `${siteConfig.url}/industries`,
  },
};

const icons = {
  'IT Parks': <Building className="h-10 w-10 text-primary" />,
  'Manufacturing Units': <Factory className="h-10 w-10 text-primary" />,
  'Corporate Offices': <Briefcase className="h-10 w-10 text-primary" />,
  'Commercial Complexes': <Users className="h-10 w-10 text-primary" />,
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Industries Served by G Square',
          description: metadata.description,
          url: `${siteConfig.url}/industries`,
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
              Industries We Serve
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Delivering specialized facility management solutions tailored to the unique demands of Pune's diverse business landscape.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry) => (
                  <Card key={industry.name} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-col items-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-4">
                        {icons[industry.name as keyof typeof icons]}
                      </div>
                      <CardTitle className="text-2xl font-headline">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-muted">
            <div className="container px-4 md:px-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                  Customized Solutions for Every Sector
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                  Whether you're an IT giant in Hinjewadi or a manufacturing leader in PCMC, we have the expertise to manage your facility. We understand that each industry has unique compliance, safety, and operational requirements. Our team is trained to adapt and deliver services that not only meet but exceed industry-specific standards.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
