'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { mainNav } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/Logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow',
        isScrolled ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <span className="hidden font-bold text-lg tracking-wide lg:block">
              <span className="text-primary">G</span>
              <span className="text-secondary">
                SQUARE CORPORATE SERVICES
              </span>
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-navlink'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 p-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Logo className="h-10 w-auto" />
                    <span className="sr-only">GSquare</span>
                  </Link>
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-navlink'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
