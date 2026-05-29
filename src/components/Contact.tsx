
"use client"

import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Location & Contact</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Step into luxury. We are conveniently located on Abak Road, easy to find and ready to serve you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Our Address</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    ABAK Road opposite St Mary Catholic Church, Uyo
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Phone Number</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    0706 847 3972
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Business Hours</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Open Daily: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">WhatsApp</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Available for bookings & chat
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full h-14 px-8 text-lg" asChild>
                <a href="https://wa.me/2347068473972">Book an Appointment</a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-full h-14 px-8 text-lg" asChild>
                <a href="https://maps.google.com?q=Lushways+Unisex+Salon+Uyo">
                  <Navigation className="mr-2 w-5 h-5" /> Get Directions
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.73712345678!2d7.912!3d5.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10609b5!2sAbak+Road+Uyo!5e0!3m2!1sen!2sng!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Placeholder Overlay for visual consistency if iframe doesn't load well */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none border-8 border-white rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
