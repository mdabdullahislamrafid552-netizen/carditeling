import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ClientLink } from '../../../components/ui/ClientLink';
import { Shield, MapPin, Award } from 'lucide-react';

const DeFeosAbout = () => {
  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">About DeFeo's Diamond Detailing</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            About DeFeo's <span className="text-primary italic">Diamond Detailing</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-[#FFC000] pl-6">
            DeFeo's Diamond Detailing is a mobile auto detailing service serving Bergen County, NJ and surrounding areas. The business offers exterior washes, interior cleanses, full details, and advanced detail packages with convenient mobile booking.
          </p>
        </FadeIn>

        {/* Brand Statement Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/images/service_exterior.jpg" alt="Premium detailing" className="w-full h-full object-cover rounded shadow-2xl border border-outline-variant/20" />
          </FadeIn>
          
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Clean, convenient mobile detailing with a polished diamond-inspired brand look.</h2>
            <p className="font-body-lg text-on-surface-variant mb-10">
              Professional vehicle care brought directly to your location in Bergen County, NJ.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <MapPin className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Bergen County Service Area</h3>
                  <p className="text-on-surface-variant">We bring the detailing experience directly to you with convenient mobile service.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-outline-variant/20 shrink-0">
                  <Shield className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface mb-2">Clear Package Pricing</h3>
                  <p className="text-on-surface-variant">We offer exterior washes, interior cleanses, and full details. (Note: Paint correction is not currently offered).</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mobile Detail Section */}
        <FadeIn className="bg-surface-container-low border border-outline-variant/10 rounded overflow-hidden border-t-4 border-t-primary">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img src="/images/service_exterior.jpg" alt="Mobile detailing visual" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-[#FFC000]">
                <Award />
                <span className="font-label-caps uppercase tracking-wider">Mobile Service</span>
              </div>
              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4">Interior and Exterior Service Focus</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                DeFeo's Diamond Detailing provides high-end care for vehicles that need a premium touch without the hassle of a physical shop location.
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
              CONTACT US
            </ClientLink>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default DeFeosAbout;
