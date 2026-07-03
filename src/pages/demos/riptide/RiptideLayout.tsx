import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ClientLink } from '../../../components/ui/ClientLink';
import { useClient } from '../../../clients/ClientContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const RiptideLayout = () => {
  const { client } = useClient();
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
          <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {client.contact.address}</span>
          <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {client.businessHours}</span>
        </div>
        <div className="flex items-center gap-6">
          {client.social.instagram && (
            <a href={client.social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="text-primary font-bold">@</span> riptide_car.washing
            </a>
          )}
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            <a className="hover:text-primary transition-colors" href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`}>{client.contact.phone}</a>
          </div>
        </div>
      </div>

      {/* 2. Header */}
      <header className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-xl border-outline-variant/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center gap-4">
          <ClientLink to="/" className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface flex items-center gap-2">
            {client.branding.logoUrl ? (
              <img src={client.branding.logoUrl} alt={`${client.name} Logo`} className="h-10 object-contain" />
            ) : (
              <span className="truncate max-w-[200px] md:max-w-none">{client.name.toUpperCase()}</span>
            )}
          </ClientLink>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <ClientLink to="/" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <a href="#services" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#gallery" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#book" className="hidden md:block bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 transition-colors scale-95 hover:scale-100 active:scale-90 transition-transform">
            DM TO BOOK
          </a>
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
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/" className="text-headline-lg text-on-surface uppercase">Home</ClientLink>
             <a onClick={() => setMobileMenuOpen(false)} href="#services" className="text-headline-lg text-on-surface uppercase">Services</a>
             <a onClick={() => setMobileMenuOpen(false)} href="#about" className="text-headline-lg text-on-surface uppercase">About</a>
             <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="text-headline-lg text-on-surface uppercase">Gallery</a>
             <a onClick={() => setMobileMenuOpen(false)} href="#book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-4 rounded text-center mt-4">DM TO BOOK</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-margin-mobile md:px-margin-desktop mt-20 relative overflow-hidden">
        {/* subtle footer glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div>
            {client.branding.logoUrl ? (
              <img src={client.branding.logoUrl} alt={`${client.name} Logo`} className="h-12 mb-4 object-contain" />
            ) : (
              <h3 className="text-headline-lg font-bold mb-4 text-on-surface">{client.name}</h3>
            )}
            <p className="text-on-surface-variant">Local car washing service for Alta Loma and Upland.</p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">SERVICES</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li>Car Washing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">SERVICE AREA</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li>Alta Loma</li>
              <li>Upland</li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-4">CONTACT</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> {client.contact.phone}</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {client.contact.address}</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {client.businessHours}</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">@</span> {client.social.instagram ? 'riptide_car.washing' : ''}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant text-sm relative z-10">
          &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default RiptideLayout;
