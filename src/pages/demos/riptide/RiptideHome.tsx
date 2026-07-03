import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';

const RiptideHome = () => {
  const { client } = useClient();

  return (
    <div className="bg-background">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[800px] flex items-center pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-container-lowest/80 absolute inset-0 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        </div>
        {/* Cyan water glow effect */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-10"></div>
        
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="md:col-span-8 flex flex-col gap-6" delay={0.2}>
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Serving Alta Loma & Upland</span>
            </div>
            
            {client.branding.logoUrl && (
              <div className="mb-2">
                <img src={client.branding.logoUrl} alt="Logo" className="h-24 w-auto object-contain" />
              </div>
            )}

            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight">
              RIPTIDE CAR WASH
            </h1>
            
            <h2 className="text-xl md:text-2xl text-on-surface-variant font-light">
              Local car washing service for Alta Loma and Upland.
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary/50 pl-6">
              Get a clean, fresh wash with simple booking and easy payment options. Message Riptide Car Wash to book your next car wash.
            </p>
            
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="text-primary material-symbols-outlined text-sm">check_circle</span> Car Washing Only</li>
              <li className="flex items-center gap-2"><span className="text-primary material-symbols-outlined text-sm">check_circle</span> Cash, Apple Pay & Cash App Accepted</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center shadow-lg">
                DM TO BOOK
              </a>
              <a href="#about" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:bg-surface-variant transition-colors rounded flex items-center justify-center gap-2">
                REQUEST CAR WASH INFO
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Local Car Washing Made Simple</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Riptide Car Wash provides car washing service for customers in Alta Loma and Upland. The business currently accepts bookings through direct message and offers simple payment options including Cash, Apple Pay, and Cash App.
            </p>
            <div className="bg-surface border border-outline-variant/20 p-4 rounded text-sm text-on-surface-variant italic">
              More business details, photos, hours, and contact information can be added after client confirmation.
            </div>
          </div>
          <div className="bg-surface border border-outline-variant/10 rounded aspect-square overflow-hidden shadow-2xl">
            <img src="/images/service_exterior.jpg" alt="Client Facility" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <FadeIn className="mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Car Washing Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Simple, clean, and convenient.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-surface border border-outline-variant/20 h-full rounded flex flex-col justify-between hover:border-primary/50 transition-colors overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img src="/images/service_interior.jpg" alt="Car Washing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-headline-lg font-bold text-on-surface mb-4">Car Washing</h3>
                  <p className="text-on-surface-variant mb-6">A clean and convenient car wash service for customers in the Alta Loma and Upland area.</p>
                </div>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="bg-surface border border-outline-variant/10 p-8 h-full rounded flex flex-col justify-between opacity-70 border-dashed">
                <div>
                  <h3 className="text-headline-lg font-bold text-on-surface/50 mb-4">Wash Options</h3>
                  <p className="text-on-surface-variant mb-6 italic">[Wash options to be confirmed]</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-surface border border-outline-variant/10 p-8 h-full rounded flex flex-col justify-between opacity-70 border-dashed">
                <div>
                  <h3 className="text-headline-lg font-bold text-on-surface/50 mb-4">Packages & Pricing</h3>
                  <p className="text-on-surface-variant mb-6 italic">[Package details and pricing to be confirmed]</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Service Area Section & 6. Payment Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-outline-variant/10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">map</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Serving Alta Loma & Upland</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
            Riptide Car Wash currently lists Alta Loma and Upland as the visible service area.
          </p>
          <p className="text-sm text-on-surface-variant/50 italic">[Additional nearby service areas to be confirmed.]</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">payments</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Simple Payment Options</h2>
          </div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3 text-on-surface"><span className="w-2 h-2 rounded-full bg-primary"></span> Cash</li>
            <li className="flex items-center gap-3 text-on-surface"><span className="w-2 h-2 rounded-full bg-primary"></span> Apple Pay</li>
            <li className="flex items-center gap-3 text-on-surface"><span className="w-2 h-2 rounded-full bg-primary"></span> Cash App</li>
          </ul>
          <p className="font-body-md text-on-surface-variant">
            Payment details should be confirmed directly with the business before booking.
          </p>
        </FadeIn>
      </section>

      {/* 7. Gallery Section */}
      <section id="gallery" className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <FadeIn className="mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Car Wash Results</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow">
              <img src="/images/service_ceramic.jpg" alt="Wash Result 1" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow">
              <img src="/images/service_ppf.jpg" alt="Wash Result 2" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow">
              <img src="/images/service_engine.jpg" alt="Wash Result 3" className="w-full h-48 object-cover" />
            </div>
            <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow">
              <img src="/images/service_wheel.jpg" alt="Wash Result 4" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Reviews Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10 text-center">
        <FadeIn>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Customer Reviews</h2>
          <div className="inline-block bg-surface border border-outline-variant/30 text-primary px-6 py-3 rounded mb-6 font-label-caps">
            VERIFIED CUSTOMER REVIEWS REQUIRED
          </div>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Customer reviews and ratings can be added once verified review content is provided.
          </p>
        </FadeIn>
      </section>

      {/* 5. Booking / CTA Section & 9. Form */}
      <section id="book" className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <div className="bg-surface border border-outline-variant/20 rounded-xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <FadeIn>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Ready to Book Your Car Wash?</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                  Riptide Car Wash currently accepts booking requests by direct message.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href={client.social.instagram} target="_blank" rel="noreferrer" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg">
                    DM TO BOOK
                  </a>
                  <a href="#contact-form" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors">
                    CHECK AVAILABILITY
                  </a>
                </div>
                <p className="text-sm text-primary/70 italic">
                  Phone number and online booking link to be added after confirmation.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div id="contact-form" className="bg-background p-8 rounded border border-outline-variant/10">
                  <h3 className="text-headline-lg text-on-surface mb-6">Request a Car Wash</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                      <input type="tel" placeholder="Phone Number" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                    </div>
                    <input type="email" placeholder="Email" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Vehicle Type" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                      <input type="text" placeholder="Service Area (Alta Loma / Upland)" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="date" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                      <input type="time" className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none" />
                    </div>
                    <textarea placeholder="Message" rows={4} className="bg-surface border border-outline-variant/20 rounded px-4 py-3 text-on-surface w-full focus:border-primary focus:outline-none"></textarea>
                    
                    <button type="submit" className="w-full bg-primary text-on-primary font-bold font-label-caps text-label-caps px-6 py-4 rounded hover:bg-primary/90 transition-colors mt-4">
                      REQUEST BOOKING
                    </button>
                    <p className="text-xs text-on-surface-variant/70 text-center mt-4">
                      This is a demo booking form. Final phone, email, and booking destination to be connected after client confirmation.
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RiptideHome;
