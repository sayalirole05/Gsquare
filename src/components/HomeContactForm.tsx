'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

export function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Website Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:services@gsquarecorp.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] w-full max-w-lg">
        <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Request a Consultation</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                <Input id="name" name="name" type="text" placeholder="John Doe" required value={formData.name} onChange={handleChange} className="mt-1 bg-white"/>
            </div>
            <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} className="mt-1 bg-white"/>
            </div>
             <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={handleChange} className="mt-1 bg-white"/>
            </div>
            <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></Label>
                <Input id="company" name="company" type="text" placeholder="Your Company Pvt Ltd" required value={formData.company} onChange={handleChange} className="mt-1 bg-white"/>
            </div>
            <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your requirements..." rows={4} value={formData.message} onChange={handleChange} className="mt-1 bg-white"/>
            </div>
            <Button type="submit" className="w-full bg-[#f39c12] hover:bg-[#e68a00] text-white text-base" size="lg">
                Submit Request <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    </div>
  );
}
