import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';

const ApexServiceAreas = () => {
  const { client } = useClient();

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Service Area</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            MOBILE AUTO DETAILING IN <span className="text-primary italic">NORTH JERSEY</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-primary pl-6">
            APEX Auto Detailing serves North Jersey with mobile auto detailing service for cars, SUVs, and trucks.
          </p>
        </FadeIn>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-4">We Come To You</h2>
            
            <p className="text-on-surface-variant text-lg">
              APEX Auto Detailing brings professional detailing directly to your home or office in North Jersey. Our mobile service makes maintaining your vehicle's appearance easier than ever.
            </p>
            
            <StaggerContainer className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">location_city</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">North Jersey</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">local_shipping</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Morris County, NJ</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">storefront</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Passaic County, NJ</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-surface border border-outline-variant/10 rounded p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">map</span>
                  <span className="text-on-surface font-headline-sm uppercase text-sm">Bergen County, NJ</span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <div className="bg-surface-container border border-outline-variant/20 rounded p-6 mt-8">
              <p className="text-on-surface-variant italic text-sm">
                * Exact address and final mobile service radius to be confirmed. Please DM or call to confirm availability for your specific location.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 inline-block text-center border border-primary">
                CHECK AVAILABILITY
              </ClientLink>
              <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-secondary text-secondary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/10 transition-colors shadow-lg inline-block text-center">
                CALL 973-897-1999
              </a>
            </div>
          </FadeIn>

          {/* Map/Image Placeholder */}
          <FadeIn delay={0.4} className="relative h-[500px] rounded overflow-hidden shadow-2xl border border-secondary/20 bg-surface">
            <img 
              src="/images/map-placeholder.jpg" 
              alt="APEX Auto Detailing Service Area Map" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              onError={(e) => {
                // Fallback if map placeholder doesn't exist
                (e.target as HTMLImageElement).src = '/images/hero.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full animate-ping flex items-center justify-center"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)] border-4 border-surface flex items-center justify-center z-10">
              <div className="w-2 h-2 bg-surface rounded-full"></div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-surface/90 backdrop-blur border border-outline-variant/30 px-6 py-3 rounded shadow-lg text-center whitespace-nowrap z-20 border-t-2 border-secondary">
              <span className="font-headline-sm text-on-surface uppercase tracking-wider block">North Jersey</span>
              <span className="text-secondary text-sm font-label-caps tracking-widest">Mobile Service Available</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ApexServiceAreas;
