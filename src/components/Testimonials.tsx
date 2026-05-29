
"use client"

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: "Emem Edet",
    text: "They are the best salon in Uyo ❤️❤️❤️. The service is exceptional and the environment is extremely clean and welcoming.",
    role: "Regular Customer"
  },
  {
    name: "David Okon",
    text: "Finally, a place in Uyo where men can get premium grooming. My beard has never looked better. Highly recommended!",
    role: "Executive Grooming"
  },
  {
    name: "Imaobong Umoh",
    text: "The spa treatment was heavenly. I felt completely relaxed and my skin is glowing. Lushways is the definition of luxury.",
    role: "Spa Enthusiast"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary/10 -skew-y-3 origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Wall of Fame</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Voices of Satisfaction</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <Card key={idx} className="bg-white border-none shadow-xl rounded-3xl p-4">
              <CardContent className="pt-6 space-y-6">
                <div className="flex text-accent space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-10 h-10 text-secondary/50 -z-10" />
                  <p className="text-lg font-light italic leading-relaxed text-primary/80">"{r.text}"</p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-secondary">
                  <Avatar className="w-12 h-12 border-2 border-accent/20">
                    <AvatarFallback className="bg-primary text-white font-bold">{r.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-bold text-primary">{r.name}</h5>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{r.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
