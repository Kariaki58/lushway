
"use client"

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { MessageSquare, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Sticky Mobile WhatsApp */}
      <a 
        href="https://wa.me/2347068473972" 
        className="fixed bottom-6 right-6 z-40 lg:hidden w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-in slide-in-from-bottom duration-500"
        title="Chat with us"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Desktop Sticky WhatsApp */}
      <a 
        href="https://wa.me/2347068473972" 
        className="fixed bottom-8 right-8 z-40 hidden lg:flex w-16 h-16 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        title="Chat with us"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          How can we help you?
        </span>
      </a>
    </main>
  );
}
