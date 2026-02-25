import type { Metadata } from 'next';
import { processSteps, siteConfig } from '@/lib/data';
import { Search, FileText, Rocket, ShieldCheck, TrendingUp } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Our Engagement Process',
  description: 'Learn about our streamlined 5-step process for facility management, from requirement study to continuous improvement, ensuring transparent and efficient service.',
  openGraph: {
    title: 'Our Engagement Process | G Square Corporate Services',
    description: 'A transparent 5-step process for service excellence.',
    url: `${siteConfig.url}/process`,
  },
};

const icons = [
  <Search key={1} className="h-8 w-8 text-primary" />,
  <FileText key={2} className="h-8 w-8 text-primary" />,
  <Rocket key={3} className="h-8 w-8 text-primary" />,
  <ShieldCheck key={4} className="h-8 w-8 text-primary" />,
  <TrendingUp key={5} className="h-8 w-8 text-primary" />,
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Our Process',
          description: metadata.description,
          url: `${siteConfig.url}/process`,
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
              Our Engagement Process
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              A structured, transparent, and collaborative approach to guarantee service excellence from day one.
            </p>
          </div>
        </section>

        <FadeIn>
          <section>
            <div className="container px-4 md:px-6">
              <div className="relative max-w-3xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
                {processSteps.map((step, index) => (
                  <div key={index} className="relative pl-20 pb-16">
                    {/* Circle and Icon */}
                    <div className="absolute left-9 top-1 -translate-x-1/2">
                      <div className="bg-background border-2 border-primary rounded-full h-10 w-10 flex items-center justify-center">
                        {icons[index]}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-xl font-bold font-headline">{index + 1}. {step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
