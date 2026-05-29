
"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Scissors, Sparkles, Heart, Wind, Eraser, Star } from 'lucide-react';

const services = [
  { 
    title: "Braiding of Hair", 
    image: 'braiding-service',
    price: "From ₦5,000",
    description: "Intricate, neat, and stylish braids for every occasion."
  },
  { 
    title: "Makeup Artistry", 
    image: 'makeup-service',
    price: "From ₦10,000",
    description: "Professional makeup for weddings, events, and photoshoots."
  },
  { 
    title: "Nail Care & Art", 
    image: 'nails-service',
    price: "From ₦3,000",
    description: "Premium manicures, gel polish, and artistic nail designs."
  },
  { 
    title: "Spa & Facials", 
    image: 'spa-service',
    price: "From ₦15,000",
    description: "Revitalizing skin treatments and relaxing facial massages."
  },
  { 
    title: "Executive Grooming", 
    image: 'grooming-service',
    price: "From ₦3,500",
    description: "Sharp haircuts, beard shaping, and hair dyeing for men."
  },
  { 
    title: "Pedicure", 
    image: 'gallery-2',
    price: "From ₦4,000",
    description: "Deep cleansing and foot care in a tranquil environment."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Luxury Salon Services</h3>
          <p className="text-muted-foreground text-lg font-light">
            Indulge in our wide range of premium beauty and grooming treatments, delivered by professional stylists in a relaxing atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <Card key={index} className="group overflow-hidden border-none shadow-none bg-secondary/50 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-2xl">
                <div className="relative h-[300px] overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-8 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors">{service.title}</h4>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4 flex items-center text-primary font-semibold text-xs uppercase tracking-widest cursor-pointer hover:text-accent group-hover:translate-x-1 transition-all">
                    Learn More 
                    <span className="ml-2">→</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">And many more: Weaving, Wig Making, Dreadlocks, Hair Treatments, Relaxing...</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-12 h-12">
            View Full Service Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
