'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { mainNav } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/Logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GetStartedModal } from './GetStartedModal';

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
            <Logo className="h-12 w-auto" />
            <span className="hidden font-bold tracking-wider text-sm lg:block">
              <span className="text-primary">G</span><span className="text-secondary">SQUARE</span> CORPORATE SERVICES
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={cn(
                      'flex items-center gap-1 outline-none transition-colors hover:text-primary',
                      pathname.startsWith(item.href)
                        ? 'text-primary'
                        : 'text-navlink'
                    )}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <GetStartedModal />
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Toggle menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="p-6 pt-0">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold my-6"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Logo className="h-12 w-auto" />
                      <span className="sr-only">GSQUARE</span>
                    </Link>
                    <Accordion type="single" collapsible className="w-full">
                      {mainNav.map((item) =>
                        !item.children ? (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              'flex py-4 text-lg font-medium transition-colors hover:text-primary border-b',
                              pathname === item.href
                                ? 'text-primary'
                                : 'text-navlink'
                            )}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <AccordionItem value={item.title} key={item.title} className="border-b">
                            <AccordionTrigger
                              className={cn(
                                'py-4 text-lg font-medium transition-colors hover:text-primary hover:no-underline',
                                pathname.startsWith(item.href)
                                  ? 'text-primary'
                                  : 'text-navlink'
                              )}
                            >
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <nav className="grid gap-4 pl-4 pt-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                      'text-base transition-colors hover:text-primary',
                                      pathname === child.href ? 'text-primary' : 'text-navlink'
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </nav>
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                     <div className="mt-6">
                      <GetStartedModal />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
