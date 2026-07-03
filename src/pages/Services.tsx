import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';

import EqualizerServices from './demos/equalizer/EqualizerServices';
import RMCarServices from './demos/rm-car-detailing/RMCarServices';

const Services = () => {
  const { client } = useClient();

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerServices />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarServices />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-start overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-40" style={{ backgroundImage: "url('/images/gallery_car_1.jpg')" }}></div>
          <div className="absolute inset-0 bg-primary/5 blur-[200px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B0D] via-[#080B0D]/80 to-transparent"></div>
        </div>
        <FadeIn className="relative z-10 max-w-2xl" delay={0.2}>
          <h1 className="text-display-lg font-display-lg text-on-surface mb-6">Our Services</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-xl">
            Meticulous craftsmanship across every stage of detailing. Explore our comprehensive suite of services designed to restore, protect, and elevate your vehicle at {client.name}.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
          {/* Exterior Detailing */}
          <StaggerItem className="lg:col-span-2">
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_exterior.jpg" alt="Exterior Detailing" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Exterior</div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-center">
                <h3 className="text-headline-lg font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Signature Wash</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 max-w-2xl flex-grow">A meticulous hand wash using pH-neutral soaps, two-bucket method, and ultra-soft microfiber drying to prevent micro-marring.</p>
                <ClientLink to="/exterior-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link w-max">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Interior Detailing */}
          <StaggerItem className="lg:col-span-2">
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_interior.jpg" alt="Interior Detailing" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Interior</div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-center">
                <h3 className="text-headline-lg font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Deep Interior Detail</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 max-w-2xl flex-grow">Comprehensive steam cleaning, leather conditioning, and stain removal to restore the cabin to a factory-fresh, sterile environment.</p>
                <ClientLink to="/interior-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link w-max">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Paint Correction */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_paint_correction.jpg" alt="Paint Correction" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Restoration</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Multi-Stage Paint Correction</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Level the clear coat to permanently remove swirl marks, scratches, and oxidation.</p>
                <ClientLink to="/paint-correction" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Ceramic Coating */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_ceramic.jpg" alt="Ceramic Coating" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Protection</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Ceramic Coating</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Long-term nano-ceramic protection for unparalleled gloss, durability, and hydrophobic properties.</p>
                <ClientLink to="/ceramic-coating" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Paint Protection Film */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_ppf.jpg" alt="Paint Protection Film" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Protection</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Paint Protection Film</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Clear bra PPF installation to prevent rock chips and road damage.</p>
                <ClientLink to="/paint-protection-film" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Wheel & Caliper Detailing */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_wheel.jpg" alt="Wheel and Caliper Detailing" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Detailing</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Wheel &amp; Caliper Detailing</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Deep clean of wheel faces, inner barrels, and brake calipers with protective coating.</p>
                <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Leather Conditioning */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_interior.jpg" alt="Leather Conditioning" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Interior</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Leather Conditioning</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Nourishing and protecting premium leather to prevent cracking and fading.</p>
                <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Engine Bay Detailing */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/images/service_engine.jpg" alt="Engine Bay" />
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Detailing</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Engine Bay Detailing</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Safe degreasing, steam cleaning, and dressing of engine compartments.</p>
                <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Mobile Detailing */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/50">local_shipping</span>
                </div>
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">On-Site</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Mobile Detailing</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Premium detailing brought directly to your home or office.</p>
                <ClientLink to="/mobile-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Fleet Detailing */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/50">directions_car</span>
                </div>
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Corporate</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Fleet Detailing</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Maintenance and aesthetic care for corporate and executive fleets.</p>
                <ClientLink to="/fleet-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>

          {/* Headlight Restoration */}
          <StaggerItem>
            <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary/50">highlight</span>
                </div>
                <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Restoration</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Headlight Restoration</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Remove oxidation and restore clarity to aged headlight lenses.</p>
                <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Process Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-1/10 w-4/5 h-[2px] bg-outline-variant/30 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">01</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Inspection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Thorough assessment of vehicle condition.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">02</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Preparation</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Safe wash and complete decontamination.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">03</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Correction</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Precision polishing and defect removal.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">04</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Protection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Application of ceramic coatings and sealants.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">05</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Quality Check</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Final inspection for absolute perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-margin-mobile md:px-margin-desktop bg-cover bg-center" style={{ backgroundImage: "url('/images/service_ceramic.jpg')" }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-xl text-4xl md:text-6xl text-on-surface mb-6">READY TO TRANSFORM YOUR VEHICLE?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Book your premium detailing package with {client.name} today and experience the difference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book-detail" className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary/90 transition-colors text-lg">BOOK YOUR DETAIL</ClientLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
