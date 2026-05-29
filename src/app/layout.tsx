
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lushways Luxe | Premium Salon & Spa Uyo',
  description: 'Luxury Hair, Beauty & Grooming Experience in Uyo, Nigeria. Braiding, Nails, Makeup, Spa & Grooming.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
