import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';

const EqualizerHome = () => {
  const { client } = useClient();

  return (
    <div className="bg-background">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[800px] flex items-center pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-container-lowest/80 absolute inset-0 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        </div>
        
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="md:col-span-8 flex flex-col gap-6" delay={0.2}>
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Serving St. Catharines & Niagara Region</span>
            </div>
            
            {client.branding.logoUrl && (
              <div className="mb-2">
                <img src={client.branding.logoUrl} alt="Logo" className="h-24 w-auto object-contain" />
              </div>
            )}
            
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight uppercase">
              Premium Mobile Car <span className="text-primary italic">Detailing</span> in Niagara
            </h1>
            
            <h2 className="text-xl md:text-2xl text-on-surface-variant font-light">
              {client.tagline}
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary/50 pl-6">
              The Equalizer Mobile Car Detailing brings premium interior, exterior, and protection-focused auto detailing directly to customers across St. Catharines and the Niagara Region. Every vehicle deserves more than a quick wash — it deserves careful attention to detail, quality products, and professional care.
            </p>
            
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="text-primary material-symbols-outlined text-sm">check_circle</span> Mobile convenience — we come to you</li>
              <li className="flex items-center gap-2"><span className="text-primary material-symbols-outlined text-sm">check_circle</span> Interior, exterior, and protection detailing</li>
              <li className="flex items-center gap-2"><span className="text-primary material-symbols-outlined text-sm">check_circle</span> Quality products and careful process</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/book" className="bg-[#D5F604] text-black font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-[#b5d103] transition-colors rounded inline-block text-center shadow-lg">
                BOOK MOBILE DETAILING
              </ClientLink>
              <ClientLink to="/services" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:bg-surface-variant transition-colors rounded flex items-center justify-center gap-2">
                VIEW SERVICES
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trust/Value Badges */}
      <section className="py-8 bg-surface border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-headline-md text-on-surface">Mobile Service</h4>
            <p className="text-sm text-on-surface-variant mt-2">We come to you</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Premium Products</h4>
            <p className="text-sm text-on-surface-variant mt-2">Quality guaranteed</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Detail Oriented</h4>
            <p className="text-sm text-on-surface-variant mt-2">Perfection focused</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Niagara Region</h4>
            <p className="text-sm text-on-surface-variant mt-2">Local expertise</p>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">OUR PREMIUM SERVICES</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Exceptional care delivered directly to your location.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors" to="/services">
            ALL SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_interior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Interior Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A focused interior clean designed to refresh the cabin, improve comfort, and restore attention to the surfaces you use every day.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_exterior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Exterior Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A careful exterior detailing process for a cleaner, sharper, better-presented vehicle finish.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_ceramic.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Protection</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Protection-focused detailing options designed to help preserve your vehicle’s finish and keep it looking its best.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Mobile Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Convenient detailing service brought to your location in the St. Catharines and Niagara Region area.</p>
              </div>
            </ClientLink>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. Why Choose The Equalizer */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Why Choose The Equalizer</h2>
            <p className="font-body-lg text-on-surface-variant mb-6">
              Andrés Pupo is shown as a certified auto detailer through One York Academy training content. We bring that professional, detail-oriented process directly to your driveway.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline-md text-on-surface">Premium Mobile Auto Detailing</h4>
                  <p className="text-on-surface-variant">Convenience without sacrificing quality.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline-md text-on-surface">Comprehensive Services</h4>
                  <p className="text-on-surface-variant">Interior, exterior, and protection-focused care.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline-md text-on-surface">Customer Satisfaction Focus</h4>
                  <p className="text-on-surface-variant">We ensure you are thrilled with the final result.</p>
                </div>
              </li>
            </ul>
          </FadeIn>
          <FadeIn className="relative h-[500px]">
             <img src="/images/service_paint_correction.jpg" alt="Detailing Process" className="w-full h-full object-cover rounded shadow-2xl border border-outline-variant/20" />
          </FadeIn>
        </div>
      </section>

      {/* 5. Process / How It Works */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/10">
        <FadeIn className="mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">HOW IT WORKS</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Our simple process for a pristine vehicle.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
             <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
             <h4 className="font-headline-lg text-on-surface mb-2">Request a detail</h4>
             <p className="text-on-surface-variant text-sm">Reach out via our booking form.</p>
          </div>
          <div className="relative">
             <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
             <h4 className="font-headline-lg text-on-surface mb-2">Share your needs</h4>
             <p className="text-on-surface-variant text-sm">Tell us about your vehicle and service needs.</p>
          </div>
          <div className="relative">
             <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
             <h4 className="font-headline-lg text-on-surface mb-2">Confirm location</h4>
             <p className="text-on-surface-variant text-sm">Confirm location and appointment time.</p>
          </div>
          <div className="relative">
             <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
             <h4 className="font-headline-lg text-on-surface mb-2">Mobile service</h4>
             <p className="text-on-surface-variant text-sm">Mobile detailing service is completed with attention to detail.</p>
          </div>
        </div>
      </section>

      {/* 6. Results/Gallery Preview */}
      <section className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <FadeIn className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">OUR RESULTS</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Demo visuals shown until client photos are added.</p>
            </div>
            <ClientLink to="/results" className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors">
              VIEW FULL GALLERY <span className="material-symbols-outlined">arrow_forward</span>
            </ClientLink>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/service_ceramic.jpg" alt="Demo Result 1" className="w-full h-48 object-cover rounded opacity-80" />
            <img src="/images/service_ppf.jpg" alt="Demo Result 2" className="w-full h-48 object-cover rounded opacity-80" />
            <img src="/images/service_engine.jpg" alt="Demo Result 3" className="w-full h-48 object-cover rounded opacity-80" />
            <img src="/images/service_wheel.jpg" alt="Demo Result 4" className="w-full h-48 object-cover rounded opacity-80" />
          </div>
        </div>
      </section>
      
      {/* 7. CTA */}
      <section className="py-24 bg-primary text-on-primary px-margin-mobile md:px-margin-desktop text-center">
        <FadeIn>
          <h2 className="font-display-md text-display-md mb-6 max-w-2xl mx-auto">READY FOR A PREMIUM DETAIL?</h2>
          <p className="font-body-lg text-on-primary/90 mb-10 max-w-xl mx-auto">
            Book your mobile detailing appointment today.
          </p>
          <ClientLink to="/book" className="bg-background text-on-background font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface transition-colors shadow-lg inline-block border-2 border-background hover:border-[#D5F604]">
            REQUEST APPOINTMENT
          </ClientLink>
        </FadeIn>
      </section>

    </div>
  );
};

export default EqualizerHome;
