import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { siteConfig } from '@/lib/data';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    { title: 'Housekeeping Manpower', href: '/services/housekeeping' },
    { title: 'Housekeeping Materials', href: '/services/material-supply' },
    { title: 'Office Stationery', href: '/services/stationery' },
    { title: 'General Supplies', href: '/services/material-supply' },
    { title: 'Corporate Gifting', href: '/services/corporate-gifting' },
  ];

  const footerCompany = [
    { title: 'About Us', href: '/about' },
  ];

  return (
    <footer className="dark bg-secondary text-muted-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Logo className="h-16 w-auto" />
            </Link>
            <p className="text-sm max-w-sm">
              Executive Corporate Support Partner for Organisations
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-primary-foreground mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm hover:text-primary-foreground transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-primary-foreground mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-primary-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-primary-foreground mb-4 tracking-wide">Stay Updated</h4>
            <p className="text-sm">Join our newsletter to stay up to date on features and releases.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-transparent text-primary-foreground placeholder:text-muted-foreground" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} <span className="font-semibold"><span className="text-primary">G</span><span className="text-secondary">SQUARE CORPORATE SERVICES</span></span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
