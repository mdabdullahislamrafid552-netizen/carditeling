import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ClientLink } from '../../../components/ui/ClientLink';
import { Shield, MapPin, Award, CheckCircle } from 'lucide-react';

const EqualizerAbout = () => {
  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">About The Equalizer</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl">
            PRECISION. <span className="text-primary italic">PROTECTION.</span> PERFECTION.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-primary/50 pl-6">
            The Equalizer Mobile Car Detailing is a premium mobile auto detailing brand serving the St. Catharines and Niagara Region area. The business focuses on interior detailing, exterior detailing, protection, and convenient service that comes to the customer.
          </p>
        </FadeIn>

        {/* Brand Statement Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/20 rounded mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/images/service_paint_correction.jpg" alt="Detailing in progress" className="w-full h-full object-cover rounded shadow-2xl border border-outline-variant/20" />
          </FadeIn>
          
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Every vehicle deserves exceptional care.</h2>
            <p className="font-body-lg text-on-surface-variant mb-10">
              Your car deserves more than a wash — it deserves attention to detail.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Mobile Convenience</h3>
                  <p className="text-on-surface-variant">We bring premium detailing services directly to you across St. Catharines and the Niagara Region.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <Shield className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Quality Products</h3>
                  <p className="text-on-surface-variant">We carefully select and use high-quality products designed to protect your vehicle's finish.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certification Section */}
        <FadeIn className="bg-surface-container-low border border-outline-variant/10 rounded overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img src="/images/service_interior.jpg" alt="Certification visual" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Award />
                <span className="font-label-caps uppercase tracking-wider">Certified Professional</span>
              </div>
              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4">Detail-Oriented Process</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Andrés Pupo / Andre is shown in the available Instagram content as a certified auto detailer, with a One York Academy Auto Detailing Training Program completion post. 
              </p>
              <p className="font-body-md text-on-surface-variant">
                The training content highlights professional workflow, safety, interior and exterior detailing fundamentals, quality control, and customer service.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="mt-24 text-center">
          <h2 className="font-display-md text-display-md text-on-surface mb-6">Experience the Difference</h2>
          <ClientLink to="/book" className="bg-[#D5F604] text-black font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-[#b5d103] transition-colors shadow-lg inline-block">
            REQUEST AN APPOINTMENT
          </ClientLink>
        </FadeIn>

      </div>
    </div>
  );
};

export default EqualizerAbout;
