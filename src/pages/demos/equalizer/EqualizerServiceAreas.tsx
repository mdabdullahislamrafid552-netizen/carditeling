import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';
import { MapPin, Phone } from 'lucide-react';

const EqualizerServiceAreas = () => {
  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Mobile Detailing in St. Catharines & Niagara Region</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl">
            OUR <span className="text-primary italic">SERVICE</span> AREA
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-primary/50 pl-6">
            The Equalizer Mobile Car Detailing provides mobile detailing service for customers in St. Catharines and the Niagara Region.
          </p>
        </FadeIn>

        {/* Areas List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="bg-surface border border-outline-variant/20 p-8 rounded hover:border-primary/50 transition-colors">
                <MapPin className="text-primary mb-4" size={32} />
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">St. Catharines</h3>
                <p className="text-on-surface-variant">Mobile service directly to your location.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-surface border border-outline-variant/20 p-8 rounded hover:border-primary/50 transition-colors">
                <MapPin className="text-primary mb-4" size={32} />
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Niagara Region</h3>
                <p className="text-on-surface-variant">Including Niagara Falls and surrounding areas.</p>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <div className="bg-surface-container-low border border-outline-variant/10 p-8 rounded flex items-center justify-between">
                <div>
                  <h3 className="font-headline-md text-on-surface mb-1">Ontario, Canada</h3>
                  <p className="text-sm text-on-surface-variant">Exact address and final service radius to be confirmed.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Map Fallback */}
          <FadeIn className="h-[400px] bg-surface border border-outline-variant/20 rounded overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center flex-col text-center p-8">
              <MapPin className="text-primary mb-4" size={48} />
              <p className="font-headline-md text-on-surface mb-2">Map View</p>
              <p className="text-on-surface-variant">Map will be updated once exact address and service radius are confirmed.</p>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn className="bg-surface-container-low border border-outline-variant/20 rounded p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4">Are you in our service area?</h3>
          <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Contact us to check availability or book your mobile detailing service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book" className="bg-[#D5F604] text-black font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-[#b5d103] transition-colors shadow-lg">
              BOOK MOBILE DETAILING
            </ClientLink>
            <ClientLink to="/contact" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors">
              CHECK AVAILABILITY
            </ClientLink>
            <a href="https://www.instagram.com/equalizerdetailing/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors">
              <span className="font-bold">@</span> MESSAGE ON INSTAGRAM
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default EqualizerServiceAreas;
