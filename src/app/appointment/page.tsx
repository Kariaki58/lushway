"use client"

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';
import { Calendar, Clock, MessageSquare, Scissors, User, Phone } from 'lucide-react';

export default function AppointmentPage() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [service, setService] = useState(services[0]?.title ?? '');
  const [appointmentDate, setAppointmentDate] = useState(today);
  const [appointmentTime, setAppointmentTime] = useState('10:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const selectedService = services.find((item) => item.title === service);
  const whatsappText = encodeURIComponent(
    `Hello Lushways, I would like to book the following appointment:\n\nService: ${service}\nDate: ${appointmentDate}\nTime: ${appointmentTime}\nName: ${name || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nNotes: ${notes || 'None'}`
  );
  const whatsappLink = `https://wa.me/2347068473972?text=${whatsappText}`;

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Appointment Booking</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-headline font-bold text-primary">Choose your service and reserve your time</h1>
          <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
            Complete your booking request with the service, date, time, and contact details. We will confirm your appointment as soon as possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="text-sm text-primary hover:text-accent underline">Back to home</Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-2xl">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsSubmitted(true);
                setBookingReference(`LUSH-${Math.floor(Date.now() / 1000)}`);
              }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-primary">Select Service</label>
                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {services.map((item) => (
                    <option key={item.title} value={item.title}>{item.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-2 text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Preferred Date</span>
                  <input
                    type="date"
                    min={today}
                    value={appointmentDate}
                    onChange={(event) => setAppointmentDate(event.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <label className="block space-y-2 text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Preferred Time</span>
                  <input
                    type="time"
                    min="08:00"
                    max="20:00"
                    value={appointmentTime}
                    onChange={(event) => setAppointmentTime(event.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-2 text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2"><User className="h-4 w-4" /> Your Name</span>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <label className="block space-y-2 text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> Phone Number</span>
                  <input
                    type="tel"
                    placeholder="0706 847 3972"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm font-semibold text-primary">
                <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Additional Notes</span>
                <textarea
                  rows={4}
                  placeholder="Let us know any preferences or special requests."
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" className="w-full sm:w-auto rounded-full px-8 py-4">
                  Submit booking request
                </Button>
                {isSubmitted ? (
                  <Button asChild className="w-full sm:w-auto rounded-full px-8 py-4">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Confirm on WhatsApp
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full sm:w-auto rounded-full px-8 py-4">
                    Confirm on WhatsApp
                  </Button>
                )}
              </div>
              {!isSubmitted && (
                <p className="text-sm text-muted-foreground">
                  Submit the booking request first, then confirm the appointment on WhatsApp.
                </p>
              )}
            </form>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-2xl">
            <div className="space-y-6">
              <div className="rounded-3xl bg-primary/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">Booking Summary</p>
                <h2 className="mt-3 text-3xl font-headline font-bold text-primary">Your appointment details</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Choose the service, date, and time that work best for you, then confirm your appointment via WhatsApp.
                </p>
                {isSubmitted && (
                  <div className="mt-4 rounded-3xl border border-accent/20 bg-accent/10 p-4 text-sm text-accent">
                    <p className="font-semibold">Booking request submitted.</p>
                    <p className="mt-1">Reference: <span className="font-medium">{bookingReference}</span></p>
                    <p className="mt-1">You can now confirm on WhatsApp to complete the booking.</p>
                  </div>
                )}
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.24em] font-semibold">Service</p>
                  <p className="mt-2 text-xl font-bold text-primary">{service}</p>
                  <p className="text-sm text-muted-foreground mt-1">{selectedService?.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-muted-foreground uppercase tracking-[0.24em] font-semibold">Date</p>
                    <p className="mt-2 text-xl font-bold text-primary">{appointmentDate}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-muted-foreground uppercase tracking-[0.24em] font-semibold">Time</p>
                    <p className="mt-2 text-xl font-bold text-primary">{appointmentTime}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.24em] font-semibold">Contact</p>
                  <p className="mt-2 text-xl font-bold text-primary">{name || 'Your name'}</p>
                  <p className="text-sm text-muted-foreground mt-1">{phone || 'Your phone number'}</p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.24em] font-semibold">Notes</p>
                  <p className="mt-2 text-base text-primary">{notes || 'No additional requests yet.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
