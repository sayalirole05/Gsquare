import Link from 'next/link';
import { siteConfig, mainNav, servicePages } from '@/lib/data';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">{siteConfig.brandName}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted partner for comprehensive facility management and corporate support services in Pune.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-3">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {mainNav.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2">
                {servicePages.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>{siteConfig.name}</p>
                <p>
                  {siteConfig.address.street},<br />
                  {siteConfig.address.city}, {siteConfig.address.zip}
                </p>
                <p>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
