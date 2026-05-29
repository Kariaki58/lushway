
"use client"

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-headline text-3xl font-bold tracking-tighter">LUSHWAYS</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium -mt-1">Unisex Salon & Spa</span>
            </div>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Uyo's premier destination for luxury hair care, beauty treatments, and executive grooming. Experience elegance in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-headline font-bold text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-headline font-bold text-accent">Services</h4>
            <ul className="space-y-4">
              {['Hair Braiding', 'Makeup Artistry', 'Nail Care', 'Facial & Spa', 'Male Grooming', 'Bridal Styling'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-headline font-bold text-accent">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  ABAK Road opposite St Mary Catholic Church, Uyo, Akwa Ibom State.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-white/70 text-sm">0706 847 3972</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <p className="text-white/70 text-sm">hello@lushwaysluxe.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-light">
            © {new Date().getFullYear()} Lushways Unisex Salon & Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
