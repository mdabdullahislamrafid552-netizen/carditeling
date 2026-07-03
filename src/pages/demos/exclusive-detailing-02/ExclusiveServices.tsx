import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';

const ExclusiveServices = () => {
  const { client } = useClient();
  
  const services = [
    {
      id: "basic-wash",
      title: "Basic Wash",
      packageLabel: "Basic Clean Care",
      price: "$60 & up",
      includes: [
        "Exterior Wash",
        "Interior Vacuum",
        "Window Cleaning",
        "Wheels & Tire Shine"
      ]
    },
    {
      id: "mini-detail",
      title: "Mini Detail",
      packageLabel: "Detailing Clean",
      price: "$80 & up",
      includes: [
        "Foam Wash",
        "Interior Detailing & Wipe Down",
        "Tire & Rim Clean",
        "Wheel and tire shine",
        "Vacuum"
      ],
      popular: true
    },
    {
      id: "exclusive-detail",
      title: "Exclusive Detail",
      packageLabel: "Luxury Treatment",
      price: "$175–$200",
      includes: [
        "Ceramic coating + Wax",
        "Interior Vacuum",
        "Dash, Console, Door Panels",
        "Detail motor",
        "Steam Cleaning"
      ]
    }
  ];

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C0C0C0] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Detailing Options</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">
            Auto Detailing Packages & <span className="text-primary italic">Pricing</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary pl-6 mb-4">
            Exclusive Detailing 02 offers package-based auto detailing for Bay Area clients, including basic wash care, mini detail service, and an exclusive luxury treatment package.
          </p>
          <p className="text-sm text-on-surface-variant italic">
            * Prices and availability should be confirmed directly when booking.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <StaggerItem key={service.id}>
              <div className={`bg-surface border ${service.popular ? 'border-primary/50 shadow-lg' : 'border-outline-variant/20'} rounded p-8 h-full flex flex-col relative hover:border-primary transition-colors group`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-bl rounded-tr">
                    POPULAR
                  </div>
                )}
                
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{service.title}</h3>
                <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">{service.packageLabel}</p>
                
                <div className="text-3xl font-bold text-on-surface mb-6 pb-6 border-b border-outline-variant/10">
                  {service.price}
                </div>
                
                <ul className="mb-8 flex-grow space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <ClientLink to={`/book?service=${service.id}`} className={`w-full text-center font-label-caps py-4 rounded transition-colors border ${service.popular ? 'bg-primary text-on-primary border-primary hover:bg-primary/90' : 'border-outline-variant text-on-surface hover:border-primary hover:bg-surface-variant'}`}>
                  BOOK APPOINTMENT
                </ClientLink>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn className="bg-surface-container-low rounded border border-outline-variant/20 p-8 md:p-12 text-center">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Ready to Turn Heads?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Contact us today to schedule your mobile detailing appointment in the Bay Area. Spots fill fast!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg border border-primary inline-block">
              BOOK DETAILING
            </ClientLink>
            <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:border-primary transition-colors shadow-lg inline-block">
              CALL (707) 333-6776
            </a>
            <ClientLink to="/results" className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:border-primary transition-colors shadow-lg inline-block">
              VIEW RESULTS
            </ClientLink>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default ExclusiveServices;
