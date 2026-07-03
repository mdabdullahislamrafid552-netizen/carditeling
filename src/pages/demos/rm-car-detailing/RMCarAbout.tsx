import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ClientLink } from '../../../components/ui/ClientLink';
import { Shield, MapPin, Award } from 'lucide-react';

const RMCarAbout = () => {
  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">About R&M Car Detailing</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            HIGH-END VEHICLE <span className="text-primary italic">CARE</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-[#FFC000] pl-6">
            R&M Car Detailing is an auto detailing service focused on premium mobile detailing, ceramic coating, and convenient pick up/drop off options. The business profile highlights professional detailing service and direct customer contact through Rakan.
          </p>
        </FadeIn>

        {/* Brand Statement Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/images/service_exterior.jpg" alt="Premium detailing" className="w-full h-full object-cover rounded shadow-2xl border border-outline-variant/20" />
          </FadeIn>
          
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Premium mobile detailing with a clean, high-end presentation.</h2>
            <p className="font-body-lg text-on-surface-variant mb-10">
              For clients who care about how their vehicle looks and feels.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <MapPin className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Mobile Detailing & Pick Up</h3>
                  <p className="text-on-surface-variant">Flexible convenience with mobile service or pick up/drop off availability.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <Shield className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Ceramic Coating Credibility</h3>
                  <p className="text-on-surface-variant">R&M Car Detailing’s Instagram profile states that the business is a certified ceramic coating installer with @feynlabs.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certification Section */}
        <FadeIn className="bg-surface-container-low border border-outline-variant/10 rounded overflow-hidden border-t-4 border-t-primary">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img src="/images/service_ceramic.jpg" alt="Certification visual" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-[#FFC000]">
                <Award />
                <span className="font-label-caps uppercase tracking-wider">Certified Installer</span>
              </div>
              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4">Protection-Focused Care</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                With verified credentials as a certified @feynlabs installer, R&M Car Detailing provides high-end protection for vehicles that need a premium touch. 
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="mt-24 text-center">
          <h2 className="font-display-md text-display-md text-on-surface mb-6 uppercase">Ready to get started?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg inline-block">
              BOOK DETAILING
            </ClientLink>
            <ClientLink to="/contact" className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors shadow-lg inline-block">
              CONTACT RAKAN
            </ClientLink>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default RMCarAbout;
