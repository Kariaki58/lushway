
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const image = PlaceHolderImages.find(img => img.id === 'gallery-4');

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt="Salon Interior"
                  width={600}
                  height={800}
                  className="object-cover w-full h-[600px]"
                  data-ai-hint="luxury salon interior"
                />
              )}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-24 h-24 border-2 border-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Uncompromising Elegance & Beauty</h3>
            </div>
            
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Located in the heart of Uyo on Abak Road, <span className="text-primary font-semibold">Lushways Unisex Salon & Spa</span> is more than just a beauty destination; it is a sanctuary of luxury. We believe in providing an experience that transcends the ordinary, combining world-class techniques with a warm, welcoming Nigerian hospitality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-xl text-primary">Professional Stylists</h4>
                <p className="text-sm text-muted-foreground font-light">Our team of experts are masters of their craft, staying ahead of global beauty trends.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-xl text-primary">Relaxing Atmosphere</h4>
                <p className="text-sm text-muted-foreground font-light">Escape the hustle and bustle of Uyo in our calm, spacious, and aromatic spa environment.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-xl text-primary">Unisex Expertise</h4>
                <p className="text-sm text-muted-foreground font-light">Dedicated sections for both male grooming and female beauty ensures privacy and focus.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-xl text-primary">Premium Products</h4>
                <p className="text-sm text-muted-foreground font-light">We use only the finest international brands to ensure your hair and skin receive the best care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
