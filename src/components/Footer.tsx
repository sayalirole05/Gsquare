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
    { title: 'Industries', href: '/industries' },
    { title: 'Our Process', href: '/process' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="dark bg-foreground text-muted-foreground">
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/">
              <Logo className="h-16 w-auto" />
            </Link>
            <p className="text-sm max-w-sm mt-4">
              Executive Corporate Support Partner for Organisations
            </p>
          </div>

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-2">
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
          
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bold text-primary-foreground mb-4 tracking-wide">Stay Updated</h4>
            <p className="text-sm">Join our newsletter to stay up to date on features and releases.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-transparent text-primary-foreground placeholder:text-muted-foreground" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
