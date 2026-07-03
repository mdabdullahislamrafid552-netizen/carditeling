import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';

const EqualizerServices = () => {
  const services = [
    {
      id: "interior-detail",
      title: "Interior Detailing",
      price: "price to be confirmed",
      description: "A focused interior clean designed to refresh the cabin, improve comfort, and restore attention to the surfaces you use every day.",
      image: "/images/service_interior.jpg"
    },
    {
      id: "exterior-detail",
      title: "Exterior Detailing",
      price: "price to be confirmed",
      description: "A careful exterior detailing process for a cleaner, sharper, better-presented vehicle finish.",
      image: "/images/service_exterior.jpg"
    },
    {
      id: "protection-detail",
      title: "Protection",
      price: "price to be confirmed",
      description: "Protection-focused detailing options designed to help preserve your vehicle’s finish and keep it looking its best.",
      image: "/images/service_ceramic.jpg"
    },
    {
      id: "mobile-detail",
      title: "Mobile Convenience",
      price: "price to be confirmed",
      description: "Convenient detailing service brought to your location in the St. Catharines and Niagara Region area. Service area to be confirmed.",
      image: "/images/hero.jpg"
    }
  ];

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Mobile Detailing Services</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl">
            PREMIUM VEHICLE <span className="text-primary italic">CARE</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Choose premium mobile detailing support for your vehicle’s interior, exterior, and protection needs. The Equalizer Mobile Car Detailing focuses on convenience, quality products, and careful attention to detail across St. Catharines and the Niagara Region.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-20">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="bg-surface border border-outline-variant/10 overflow-hidden h-full flex flex-col group">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface text-2xl">{service.title}</h2>
                    <span className="font-label-caps text-primary text-sm whitespace-nowrap bg-primary/10 px-3 py-1 rounded">{service.price}</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                    {service.description}
                  </p>
                  <ClientLink to="/book" className="text-primary font-label-caps uppercase flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
                    Request a Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </ClientLink>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="bg-surface-container-low border border-outline-variant/20 rounded p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4">Ready to Schedule?</h3>
          <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Book your mobile detailing appointment and we'll bring the detailing studio to you.
          </p>
          <ClientLink to="/book" className="bg-[#D5F604] text-black font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-[#b5d103] transition-colors shadow-lg inline-block">
            BOOK MOBILE DETAILING
          </ClientLink>
        </FadeIn>

      </div>
    </div>
  );
};

export default EqualizerServices;
