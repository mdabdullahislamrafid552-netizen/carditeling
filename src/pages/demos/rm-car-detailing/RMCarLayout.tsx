import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ClientLink } from '../../../components/ui/ClientLink';
import { useClient } from '../../../clients/ClientContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const RMCarLayout = () => {
  const { client } = useClient();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background antialiased selection:bg-primary/30 selection:text-primary">
      {/* 1. Slim Top Bar */}
      <div className="hidden md:flex justify-between items-center px-margin-desktop py-2 bg-surface-container-lowest border-b border-outline-variant/10 text-on-surface-variant font-label-caps text-label-caps z-50 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>{client.contact.serviceArea}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#FFC000]" />
            <a className="hover:text-[#FFC000] transition-colors" href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`}>{client.contact.phone}</a>
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
              <div className="flex flex-col leading-tight">
                <span className="text-xl">R&M</span>
                <span className="text-sm font-normal text-primary">Car Detailing</span>
                <span className="text-[10px] text-on-surface-variant font-normal tracking-normal">(Temporary logo)</span>
              </div>
            )}
          </ClientLink>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <ClientLink to="/" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/services" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/results" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/about" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/service-area" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Service Area
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
          <ClientLink to="/contact" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-caps font-label-caps uppercase relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </ClientLink>
        </nav>

        <div className="flex items-center gap-4">
          <ClientLink to="/book" className="hidden md:block bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 transition-colors scale-95 hover:scale-100 active:scale-90 transition-transform">
            BOOK DETAILING
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
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">Home</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/services" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">Services</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/results" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">Results</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/about" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">About</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/service-area" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">Service Area</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/contact" className="text-headline-lg text-on-surface uppercase hover:text-primary transition-colors">Contact</ClientLink>
             <ClientLink onClick={() => setMobileMenuOpen(false)} to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-4 rounded text-center mt-4">BOOK DETAILING</ClientLink>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-margin-mobile md:px-margin-desktop mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFC000] to-transparent opacity-50"></div>
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div>
            {client.branding.logoUrl ? (
              <img src={client.branding.logoUrl} alt={`${client.name} Logo`} className="h-12 mb-4 object-contain" />
            ) : (
              <div className="flex flex-col leading-tight mb-4">
                <span className="text-xl font-bold text-on-surface">R&M</span>
                <span className="text-sm font-normal text-primary">Car Detailing</span>
                <span className="text-[10px] text-on-surface-variant font-normal tracking-normal">(Temporary logo)</span>
              </div>
            )}
            <p className="text-on-surface-variant font-body-sm">Premium mobile auto detailing, ceramic coating support, and pick up/drop off availability. Contact Rakan to request service.</p>
          </div>
          <div>
            <h4 className="font-label-caps text-[#FFC000] mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><ClientLink to="/" className="hover:text-primary">Home</ClientLink></li>
              <li><ClientLink to="/services" className="hover:text-primary">Services</ClientLink></li>
              <li><ClientLink to="/results" className="hover:text-primary">Results</ClientLink></li>
              <li><ClientLink to="/about" className="hover:text-primary">About</ClientLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-[#FFC000] mb-4">SERVICE AREA</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><ClientLink to="/service-area" className="hover:text-primary">75013</ClientLink></li>
              <li><span className="text-sm opacity-70">Service area to be confirmed</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-[#FFC000] mb-4">CONTACT</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> {client.contact.phone}</li>
              <li className="flex items-center gap-2"><span className="font-bold text-primary">@</span> @rmcar.detailing</li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant text-sm relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} {client.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <ClientLink to="/contact" className="hover:text-primary">Contact</ClientLink>
            <ClientLink to="/book" className="hover:text-primary">Book</ClientLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RMCarLayout;
