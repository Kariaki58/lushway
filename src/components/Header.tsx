
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-sm ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="relative h-16 w-16 sm:h-20 sm:w-20">
            <Image src="/logo.png" alt="Lushways logo" fill className="object-contain" />
          </div> */}
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-bold text-primary tracking-tighter">LUSHWAYS</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium -mt-1">Unisex Salon & Spa</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6" asChild>
            <Link href="/appointment">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="bg-primary text-white w-full" asChild>
                <a href="https://wa.me/2347068473972">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
