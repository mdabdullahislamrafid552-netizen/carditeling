import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ClientLink } from '../../../components/ui/ClientLink';

const ApexAbout = () => {
  const { client } = useClient();

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn className="relative h-[600px] rounded overflow-hidden shadow-2xl border border-secondary/20">
            <img 
              src="/images/hero.jpg" 
              alt="APEX Auto Detailing demo image — client photo to be added later" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <div className="bg-surface/90 backdrop-blur border border-outline-variant/30 p-6 rounded shadow-lg border-t-4 border-t-primary">
                <div className="font-label-caps text-secondary tracking-widest uppercase mb-2">Our Mission</div>
                <p className="text-on-surface-variant italic">
                  "Detailing beyond expectations."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">About Us</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-surface uppercase">
              ABOUT <span className="text-primary italic">APEX AUTO DETAILING</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary pl-6">
              APEX Auto Detailing is a North Jersey auto detailing brand focused on premium interior and exterior details, ceramic coating, deep cleaning, and mobile service convenience.
            </p>

            <div className="space-y-4 text-on-surface-variant mt-4">
              <p>
                The business helps customers restore, protect, and maintain their vehicle’s appearance with professional detailing packages. Whether it’s a car, SUV, or truck, APEX Auto Detailing offers package-based detailing options designed to keep vehicles looking their best.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-secondary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Mobile Detail Convenience</h3>
                <p className="text-sm text-on-surface-variant">We come directly to your location in North Jersey.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-secondary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Interior & Exterior</h3>
                <p className="text-sm text-on-surface-variant">Deep cleaning, restoring, and protecting your vehicle inside and out.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-secondary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Ceramic Coating</h3>
                <p className="text-sm text-on-surface-variant">Premium protection for long-lasting results and shine.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-secondary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">All Vehicles</h3>
                <p className="text-sm text-on-surface-variant">Package-based pricing available for Cars, SUVs, and Trucks.</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 inline-block text-center w-full md:w-auto">
                BOOK DETAILING
              </ClientLink>
              <ClientLink to="/contact" className="bg-surface border border-secondary text-secondary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/10 transition-colors shadow-lg inline-block text-center w-full md:w-auto">
                CONTACT US
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ApexAbout;
