
"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-salon');

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight">
              Luxury Hair, <br />
              <span className="text-accent italic">Beauty & Grooming</span> <br />
              Experience in Uyo
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
              Braiding • Nails • Makeup • Spa • Grooming
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-10 h-14 text-lg w-full sm:w-auto shadow-lg shadow-accent/20">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg w-full sm:w-auto backdrop-blur-sm">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphic Detail */}
      <div className="absolute bottom-12 right-6 lg:right-24 hidden md:block">
        <div className="glass-dark p-6 rounded-2xl max-w-xs space-y-2 text-white border-white/20">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase">Open Daily</p>
          <p className="font-headline text-xl font-bold">Experience Perfection</p>
          <p className="text-sm font-light text-white/70">Visit us today for a transformative beauty experience on Abak Road.</p>
        </div>
      </div>
    </section>
  );
}
