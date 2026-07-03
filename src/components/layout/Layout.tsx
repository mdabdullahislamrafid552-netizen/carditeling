import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ClientLink } from '../ui/ClientLink';
import { useClient } from '../../clients/ClientContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import RiptideLayout from '../../pages/demos/riptide/RiptideLayout';
import EqualizerLayout from '../../pages/demos/equalizer/EqualizerLayout';
import RMCarLayout from '../../pages/demos/rm-car-detailing/RMCarLayout';

const Layout = () => {
  const { client } = useClient();

  if (client.slug === 'riptide-car-wash') {
    return <RiptideLayout />;
  }

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerLayout />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarLayout />;
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background antialiased selection:bg-primary/30 selection:text-primary">
      {/* 1. Slim Top Bar */}
      <div className="hidden md:flex justify-between items-center px-margin-desktop py-2 bg-surface-container-lowest border-b border-outline-variant/10 text-on-surface-variant font-label-caps text-label-caps z-50 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><MapPin size={14} /> {client.contact.address}</span>
          <span className="flex items-center gap-2"><Clock size={14} /> {client.businessHours}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-primary" />
          <a className="hover:text-primary transition-colors" href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`}>{client.contact.phone}</a>
        </div>
      </div>

      {/* 2. Header */}
      <header className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-xl border-outline-variant/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center gap-4">
          <ClientLink to="/" className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface dark:text-on-surface flex items-center gap-2">
            {/* If we have a logo image, we'd use it here. For now, text. */}
            <span className="truncate max-w-[200px] md:max-w-none">{client.name.toUpperCase()}</span>
          </ClientLink>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <ClientLink to="/services" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/ceramic-coating" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Ceramic Coating
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/paint-correction" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Paint Correction
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/gallery" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/about" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/contact" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
        </nav>

        <div className="flex items-center gap-4">
          <ClientLink to="/book-detail" className="hidden md:block bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 transition-colors scale-95 hover:scale-100 active:scale-90 transition-transform">
            BOOK NOW
          </ClientLink>
          <button 
            className="md:hidden text-on-surface p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/services" className="text-headline-lg text-on-surface uppercase">Services</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/ceramic-coating" className="text-headline-lg text-on-surface uppercase">Ceramic Coating</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/paint-correction" className="text-headline-lg text-on-surface uppercase">Paint Correction</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/gallery" className="text-headline-lg text-on-surface uppercase">Gallery</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/about" className="text-headline-lg text-on-surface uppercase">About</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/contact" className="text-headline-lg text-on-surface uppercase">Contact</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/book-detail" className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 rounded text-center mt-4">BOOK NOW</ClientLink>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-margin-mobile md:px-margin-desktop mt-20">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-headline-lg font-bold mb-4">{client.name}</h3>
            <p className="text-on-surface-variant">{client.seo.description}</p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">SERVICES</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><ClientLink to="/ceramic-coating" className="hover:text-primary transition-colors">Ceramic Coating</ClientLink></li>
              <li><ClientLink to="/paint-correction" className="hover:text-primary transition-colors">Paint Correction</ClientLink></li>
              <li><ClientLink to="/exterior-detailing" className="hover:text-primary transition-colors">Exterior Detailing</ClientLink></li>
              <li><ClientLink to="/interior-detailing" className="hover:text-primary transition-colors">Interior Detailing</ClientLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">COMPANY</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><ClientLink to="/about" className="hover:text-primary transition-colors">About Us</ClientLink></li>
              <li><ClientLink to="/gallery" className="hover:text-primary transition-colors">Gallery</ClientLink></li>
              <li><ClientLink to="/reviews" className="hover:text-primary transition-colors">Reviews</ClientLink></li>
              <li><ClientLink to="/contact" className="hover:text-primary transition-colors">Contact</ClientLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">CONTACT</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><Phone size={14} /> {client.contact.phone}</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> {client.contact.address}</li>
              <li className="flex items-center gap-2"><Clock size={14} /> {client.businessHours}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant text-sm">
          &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
