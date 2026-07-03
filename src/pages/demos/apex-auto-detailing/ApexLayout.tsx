import React, { useState } from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';

const ApexLayout = ({ children }: { children: React.ReactNode }) => {
  const { client } = useClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/services', label: 'PACKAGES' },
    { to: '/results', label: 'RESULTS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/service-area', label: 'SERVICE AREA' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background font-body-lg text-on-surface antialiased selection:bg-secondary selection:text-surface">
      {/* 1. Header (Desktop & Mobile) */}
      <header className="fixed w-full top-0 z-50 bg-surface/90 backdrop-blur border-b border-outline-variant/20 transition-all duration-300 shadow-sm border-t-4 border-t-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
          
          {/* Logo */}
          <ClientLink to="/" className="flex items-center gap-3 group">
            {client.branding.logoUrl ? (
              <img src={client.branding.logoUrl} alt="APEX Auto Detailing Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            ) : (
              <div className="font-display-lg text-display-sm text-on-surface uppercase tracking-wider flex flex-col">
                <span className="leading-none text-xl text-primary font-bold">APEX</span>
                <span className="text-on-surface-variant text-sm leading-none tracking-widest mt-1">Auto Detailing</span>
              </div>
            )}
          </ClientLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <ClientLink 
                key={link.to} 
                to={link.to}
                className="font-label-caps text-label-caps text-on-surface hover:text-secondary transition-colors tracking-widest relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </ClientLink>
            ))}
            <ClientLink to="/book" className="ml-4 bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-2 rounded hover:bg-primary/90 transition-colors shadow shadow-primary/20 border border-primary">
              BOOK NOW
            </ClientLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-on-surface hover:text-secondary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* 2. Mobile Fullscreen Menu */}
      <div 
        className={`fixed inset-0 bg-surface z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <ClientLink 
              key={link.to} 
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="font-display-sm text-3xl text-on-surface hover:text-secondary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </ClientLink>
          ))}
          <ClientLink 
            to="/book" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-primary text-on-primary font-bold font-label-caps text-label-caps px-10 py-4 rounded hover:bg-primary/90 transition-colors border border-primary shadow-lg shadow-primary/20"
          >
            BOOK NOW
          </ClientLink>
        </nav>
      </div>

      {/* 3. Main Content Area */}
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

      {/* 4. Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 pt-20 pb-8 mt-auto">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="flex flex-col gap-6">
              <ClientLink to="/" className="flex items-center gap-3">
                {client.branding.logoUrl ? (
                  <img src={client.branding.logoUrl} alt="APEX Auto Detailing Logo" className="h-12 w-auto object-contain" />
                ) : (
                  <div className="font-display-sm text-2xl text-on-surface uppercase tracking-wider flex flex-col">
                    <span className="leading-none text-primary font-bold">APEX</span>
                    <span className="text-on-surface-variant text-sm leading-none tracking-widest mt-1">Auto Detailing</span>
                  </div>
                )}
              </ClientLink>
              <p className="text-on-surface-variant text-sm pr-4">
                Premium mobile auto detailing for cars, SUVs, and trucks across North Jersey. Interior detailing, exterior detailing, full detail packages, ceramic coatings, and pet hair removal.
              </p>
              <div className="flex gap-4 mt-2">
                {client.social.instagram && (
                  <a href={client.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-outline-variant/20 text-on-surface-variant hover:text-secondary hover:border-secondary transition-all">
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                  </a>
                )}
              </div>
            </div>

            {/* Links Col */}
            <div>
              <h4 className="font-headline-sm text-on-surface mb-6 uppercase tracking-wider text-secondary">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <ClientLink to={link.to} className="text-on-surface-variant hover:text-secondary transition-colors text-sm uppercase tracking-widest font-label-caps">
                      {link.label}
                    </ClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="font-headline-sm text-on-surface mb-6 uppercase tracking-wider text-secondary">Contact Us</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">map</span>
                  <span>{client.contact.serviceArea} (Mobile Service)</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                  <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-secondary transition-colors">
                    {client.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                  <a href={`mailto:${client.contact.email}`} className="hover:text-secondary transition-colors">
                    {client.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA Col */}
            <div className="flex flex-col items-start">
              <h4 className="font-headline-sm text-on-surface mb-6 uppercase tracking-wider text-secondary">Book Detailing</h4>
              <p className="text-on-surface-variant text-sm mb-6">
                DM or call to book — spots fill fast. Detailing beyond expectations.
              </p>
              <ClientLink to="/book" className="bg-surface text-secondary font-label-caps text-label-caps px-6 py-3 border border-secondary hover:bg-secondary/10 transition-colors rounded text-sm w-full text-center">
                REQUEST APPOINTMENT
              </ClientLink>
            </div>
          </div>

          <div className="border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/70 font-label-caps tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} APEX Auto Detailing. All Rights Reserved.</p>
            <p>Demo Website | <span className="italic text-[10px]">Logo to be added later</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApexLayout;
