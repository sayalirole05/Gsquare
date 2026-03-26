'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import React from 'react';

export function GetStartedModal({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button>Get Started</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Let's Connect</DialogTitle>
          <DialogDescription>
            Ready to enhance your workplace? Reach out to us today. Our team is available to discuss your needs and provide a custom solution.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <Button asChild size="lg">
            <Link href="https://wa.me/917020813399" target="_blank">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="tel:+91 7020813399">
              <Phone className="mr-2 h-5 w-5" />
              Call Us (+91 7020813399)
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
