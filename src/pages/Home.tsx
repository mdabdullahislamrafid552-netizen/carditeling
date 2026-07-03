import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import RiptideHome from './demos/riptide/RiptideHome';
import EqualizerHome from './demos/equalizer/EqualizerHome';
import RMCarHome from './demos/rm-car-detailing/RMCarHome';
import DeFeosHome from './demos/defeos-diamond-detailing/DeFeosHome';
import ExclusiveHome from './demos/exclusive-detailing-02/ExclusiveHome';
import ApexHome from './demos/apex-auto-detailing/ApexHome';

const Home = () => {
  const { client } = useClient();

  if (client.slug === 'riptide-car-wash') {
    return <RiptideHome />;
  }

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerHome />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarHome />;
  }
  
  if (client.slug === 'defeos-diamond-detailing') {
    return <DeFeosHome />;
  }

  if (client.slug === 'exclusive-detailing-02') {
    return <ExclusiveHome />;
  }

  if (client.slug === 'apex-auto-detailing') {
    return <ApexHome />;
  }

  return (
    <div className="bg-background">
      {/* 3. Hero Section */}
      <section className="relative min-h-[921px] flex items-center pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-container-lowest opacity-40 mix-blend-multiply absolute inset-0 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        </div>
        <div className="hero-glow z-10"></div>
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="md:col-span-8 flex flex-col gap-6" delay={0.2}>
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Elite Car Detailing</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight">
              THE ULTIMATE CAR<br/><span className="text-primary italic pr-2">DETAILING</span> EXPERIENCE
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary/50 pl-6">
              {client.seo.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/services" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center">
                EXPLORE SERVICES
              </ClientLink>
              <ClientLink to="/gallery" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:bg-surface-variant transition-colors rounded flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">play_circle</span> VIEW GALLERY
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">TRANSFORM YOUR VEHICLE</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">High-quality detailing services tailored for automotive perfection.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors" to="/services">
            ALL SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <StaggerItem>
            <ClientLink to="/exterior-detailing" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_exterior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Exterior Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive hand wash, decontamination, and protection.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/interior-detailing" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_interior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Interior Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Deep extraction, thorough vacuuming, and complete sanitization.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/paint-correction" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_paint_correction.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Paint Correction</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Multi-stage machine polishing to remove swirls and scratches.</p>
              </div>
            </ClientLink>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 5. Premium Vehicle Protection Split Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative h-[600px]">
            <img alt="Ceramic Coating" className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded shadow-2xl border border-outline-variant/20 z-10" src="/images/service_ceramic.jpg" />
            <img alt="Leather Interior" className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded shadow-2xl border border-outline-variant/20 z-20" src="/images/service_interior.jpg" />
          </FadeIn>
          <FadeIn direction="left">
            <div className="mb-4 text-primary font-label-caps text-label-caps tracking-widest uppercase">PREMIUM VEHICLE PROTECTION</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">QUALITY CAR SERVICES YOU CAN TRUST</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Unmatched paint preservation against environmental contaminants.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Long-term gloss enhancement and hydrophobic properties.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Deep interior protection preserving leather and fabrics.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Exclusive use of premium-grade professional equipment.</span></li>
            </ul>
            <div className="flex gap-4">
              <ClientLink to="/services" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors">EXPLORE SERVICES</ClientLink>
              <ClientLink to="/contact" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/10 transition-colors">CONTACT US</ClientLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Five-Step Professional Detailing Process */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-center font-headline-xl text-headline-xl text-on-surface mb-16">OUR PROCESS</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-outline-variant/30 z-0"></div>
            <div className="hidden md:block absolute top-6 left-0 w-1/2 h-[2px] bg-primary z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">01</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Inspection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Thorough assessment of vehicle condition.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">02</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Preparation</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Safe wash and complete decontamination.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold mb-4">03</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Cleaning &amp; Correction</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Precision polishing and defect removal.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-bold mb-4">04</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Protection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Application of ceramic coatings and sealants.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-bold mb-4">05</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Quality Check</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Final inspection for absolute perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Final High-Ticket CTA */}
      <section className="relative py-32 px-margin-mobile md:px-margin-desktop bg-cover bg-center" style={{ backgroundImage: "url('/images/service_ceramic.jpg')" }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <FadeIn className="relative z-10 max-w-4xl mx-auto text-center" delay={0.2}>
          <h2 className="font-headline-xl text-4xl md:text-6xl text-on-surface mb-6">YOUR VEHICLE DESERVES EXCEPTIONAL CARE</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Experience the pinnacle of automotive detailing. Secure your appointment with our master technicians today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book-detail" className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary/90 transition-colors text-lg">BOOK YOUR DETAIL</ClientLink>
            <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-10 py-5 rounded hover:bg-surface-variant transition-colors text-lg flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> CALL NOW
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
};

export default Home;
