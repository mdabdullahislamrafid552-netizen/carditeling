import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';
import { useClient } from '../../../clients/ClientContext';

const DeFeosServices = () => {
  const { client } = useClient();
  const services = [
    {
      id: "exterior-wash",
      title: "Exterior Wash",
      price: "$60",
      description: "Includes hand wash, spray wax, and water-repellent glass treatment.",
      image: "/images/hero.jpg"
    },
    {
      id: "basic-interior",
      title: "Basic Interior Cleanse",
      price: "$60",
      description: "Includes full vacuum and thorough cleaning of all interior surfaces.",
      image: "/images/service_interior.jpg"
    },
    {
      id: "deep-interior",
      title: "Deep Interior Cleanse",
      price: "$85",
      description: "Includes basic interior cleanse, plus spot treatment and stain removal for carpets and seats.",
      image: "/images/service_interior.jpg"
    },
    {
      id: "full-detail",
      title: "Full Detail",
      price: "$100",
      description: "Includes exterior wash and basic interior cleanse.",
      image: "/images/service_exterior.jpg"
    },
    {
      id: "advanced-detail",
      title: "Advanced Detail",
      price: "$125",
      description: "Includes exterior wash and deep interior cleanse.",
      image: "/images/service_exterior.jpg"
    }
  ];

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Premium Detailing Services</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            Mobile Detailing <span className="text-primary italic">Services & Pricing</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            DeFeo's Diamond Detailing offers mobile auto detailing packages for exterior care, interior cleaning, and full detail services in Bergen County, NJ and surrounding areas.
            <br/><br/>
            <span className="text-sm italic">Prices and availability should be confirmed directly when booking. Paint correction is not currently offered.</span>
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-20">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="bg-surface border border-outline-variant/10 overflow-hidden h-full flex flex-col group border-b-4 border-b-transparent hover:border-b-primary transition-colors">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface text-2xl">{service.title}</h2>
                    <span className="font-label-caps text-[#FFC000] text-sm whitespace-nowrap bg-[#FFC000]/10 px-3 py-1 rounded">{service.price}</span>
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
        <FadeIn className="bg-surface-container-low border border-outline-variant/20 rounded p-12 text-center max-w-4xl mx-auto border-t-4 border-t-[#FFC000]">
          <h3 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Ready to Schedule?</h3>
          <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Book your mobile detailing appointment and we'll bring the detailing studio to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg inline-block">
              BOOK DETAILING
            </ClientLink>
            <ClientLink to="/contact" className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors shadow-lg inline-block">
              CALL 201-800-0401
            </ClientLink>
            <a href={`mailto:${client.contact.email}`} className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-variant transition-colors shadow-lg inline-block">
              Email to Schedule
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default DeFeosServices;
