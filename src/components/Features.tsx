
"use client"

import React from 'react';
import { ShieldCheck, Users, Sparkles, Clock, Heart, Home } from 'lucide-react';

const features = [
  { icon: Users, title: "Experienced Stylists", desc: "Our professionals have years of expertise in luxury grooming." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "We maintain medical-grade sterilization for all tools and surfaces." },
  { icon: Sparkles, title: "Premium Products", desc: "Only the world's best beauty brands touch your skin and hair." },
  { icon: Heart, title: "Relaxing Experience", desc: "A tranquil environment designed to soothe your senses." },
  { icon: Home, title: "Family Friendly", desc: "Comfortable spaces for children and families to enjoy together." },
  { icon: Clock, title: "Extended Hours", desc: "Open daily until 8 PM to accommodate your busy schedule." },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Excellence Guaranteed</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Why Choose Lushways?</h3>
          </div>
          <p className="max-w-md text-muted-foreground font-light leading-relaxed">
            We've built a reputation for perfection by focusing on the smallest details that create a truly world-class experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-10 rounded-3xl border border-secondary bg-secondary/20 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm mb-6">
                <f.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-headline font-bold text-primary mb-3">{f.title}</h4>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
