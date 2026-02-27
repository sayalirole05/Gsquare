import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerQuickLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Process', href: '/process' },
    { title: 'Contact', href: '/contact' },
  ];

  const footerServices = [
    { title: 'Housekeeping Manpower', href: '/services/housekeeping' },
    { title: 'Housekeeping Materials', href: '/services/material-supply' },
    { title: 'Office Stationery', href: '/services/stationery' },
    { title: 'General Supplies', href: '/services/material-supply' },
    { title: 'Corporate Gifting', href: '/services/corporate-gifting' },
  ];

  return (
    <footer className="bg-[#34495e] text-gray-300">
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 text-white font-bold">
              <Logo className="h-8 w-auto" />
              <span>GSQUARE CORPORATE SERVICES</span>
            </Link>
            <p className="text-sm text-gray-400">
              Executive Corporate Support Partner for Organisations
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} GSquare Corporate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
