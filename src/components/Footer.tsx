import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/data';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    { title: 'Housekeeping Services', href: '/services/housekeeping' },
    { title: 'Office Stationery', href: '/services/stationery' },
    { title: 'Corporate Gifting', href: '/services/corporate-gifting' },
  ];

  const footerCompany = [
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact Us', href: '/#contact-us' },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          
          <div className="md:col-span-4 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/Logo-Final.png" alt="GSQUARE CORPORATE SERVICES Logo" width={104} height={52} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Executive Corporate Support Partner for Organisations, delivering operational excellence and compliance-driven facility management services across India.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-secondary mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-secondary mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="font-bold text-secondary mb-4 tracking-wide">Contact Us</h4>
            <address className="not-italic space-y-4 text-sm">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{siteConfig.address.street},<br/>{siteConfig.address.city}, {siteConfig.address.zip}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.email}</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.phone}</a>
                </div>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
