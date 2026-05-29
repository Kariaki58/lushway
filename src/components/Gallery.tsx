
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const galleryItems = [
    { id: 'gallery-1', span: 'row-span-2' },
    { id: 'gallery-2', span: 'row-span-1' },
    { id: 'gallery-3', span: 'row-span-2' },
    { id: 'braiding-service', span: 'row-span-1' },
    { id: 'nails-service', span: 'row-span-1' },
    { id: 'makeup-service', span: 'row-span-1' },
    { id: 'gallery-4', span: 'row-span-2' },
    { id: 'spa-service', span: 'row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Luxe Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Masterpieces of Artistry</h3>
          <p className="text-muted-foreground text-lg font-light">
            A curated collection of our finest work in hair, nails, makeup, and more.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            if (!imgData) return null;
            
            return (
              <div key={idx} className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
                <Image
                  src={imgData.imageUrl}
                  alt={imgData.description}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint={imgData.imageHint}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-headline text-lg font-bold">{imgData.description}</p>
                    <div className="w-12 h-[1px] bg-accent mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
