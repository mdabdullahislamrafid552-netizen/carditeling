import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';

const ExclusiveServiceAreas = () => {
  const { client } = useClient();

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C0C0C0] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Service Area</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            AUTO DETAILING FOR <span className="text-primary italic">BAY AREA CLIENTS</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-primary pl-6">
            Exclusive Detailing 02 serves Bay Area clients with mobile and local detailing appointment availability.
          </p>
        </FadeIn>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-4">Mobile & Local Detailing</h2>
            
            <p className="text-on-surface-variant text-lg">
              We bring that showroom shine right back to you. Whether you choose our mobile service or a local appointment, we don't miss a single detail.
            </p>
            
            <StaggerContainer className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">location_city</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Bay Area</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Mobile Service</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Local Appointments</span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <div className="bg-surface-container border border-outline-variant/20 rounded p-6 mt-8">
              <p className="text-on-surface-variant italic text-sm">
                * Exact city, address, and final mobile service radius to be confirmed. Please DM or call to confirm availability for your specific location.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg inline-block text-center border border-primary">
                CHECK AVAILABILITY
              </ClientLink>
              <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:border-primary transition-colors shadow-lg inline-block text-center">
                CALL (707) 333-6776
              </a>
            </div>
          </FadeIn>

          {/* Map/Image Placeholder */}
          <FadeIn delay={0.4} className="relative h-[500px] rounded overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface">
            <img 
              src="/images/map-placeholder.jpg" 
              alt="Exclusive Detailing 02 Service Area Map" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              onError={(e) => {
                // Fallback if map placeholder doesn't exist
                (e.target as HTMLImageElement).src = '/images/hero.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full animate-ping flex items-center justify-center"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(255,192,0,0.6)] border-4 border-surface flex items-center justify-center z-10">
              <div className="w-2 h-2 bg-surface rounded-full"></div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-surface/90 backdrop-blur border border-outline-variant/30 px-6 py-3 rounded shadow-lg text-center whitespace-nowrap z-20">
              <span className="font-headline-sm text-on-surface uppercase tracking-wider block">Bay Area</span>
              <span className="text-primary text-sm font-label-caps tracking-widest">Mobile & Local</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServiceAreas;
