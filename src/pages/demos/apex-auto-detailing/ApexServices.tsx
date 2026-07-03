import React, { useState } from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { ClientLink } from '../../../components/ui/ClientLink';

const ApexServices = () => {
  const { client } = useClient();
  const [activeTab, setActiveTab] = useState('Car');

  interface ServiceItem {
    id: string;
    title: string;
    price: string;
    popular?: boolean;
    label?: string;
    includes: string[];
  }
  
  const cars: ServiceItem[] = [
    {
      id: "car-interior",
      title: "Interior",
      price: "$140",
      includes: ["Vacuum Interior", "Shampoo Seats & Carpets", "Dashboard & Console Clean", "Door Panels & Trims Wiped", "Window Cleaning", "Air Vent Cleaning", "Interior Detail & Finish"]
    },
    {
      id: "car-exterior",
      title: "Exterior",
      price: "$120",
      includes: ["Hand Wash", "Wheel & Tire Clean", "Tire Shine", "Wax Protection", "Window Clean", "Door Jambs Cleaned", "Exterior Trim Shine"]
    },
    {
      id: "car-apex-full",
      title: "Apex Full Package",
      price: "$200",
      popular: true,
      includes: ["Full Interior Detail", "Full Exterior Detail", "Premium Protection", "Inside & Out", "Drive Like New", "Ceramic Coating"]
    }
  ];

  const suvs: ServiceItem[] = [
    {
      id: "suv-interior",
      title: "Interior",
      price: "$150",
      includes: ["Vacuum Interior", "Shampoo Seats & Carpets", "Dashboard & Console Clean", "Door Panels & Trims Wiped", "Window Cleaning", "Air Vent Cleaning", "Interior Detail & Finish"]
    },
    {
      id: "suv-exterior",
      title: "Exterior",
      price: "$130",
      includes: ["Hand Wash", "Wheel & Tire Clean", "Tire Shine", "Wax Protection", "Window Clean", "Door Jambs Cleaned", "Exterior Trim Shine"]
    },
    {
      id: "suv-apex-full",
      title: "Apex Full Package",
      price: "$225",
      popular: true,
      label: "Best Value",
      includes: ["Everything in Interior", "Everything in Exterior", "Premium Protection", "Inside & Out", "Drive Like New"]
    }
  ];

  const trucks: ServiceItem[] = [
    {
      id: "truck-interior",
      title: "Interior",
      price: "$160",
      includes: ["Vacuum Interior", "Shampoo Seats & Carpets", "Dashboard & Console Clean", "Door Panels & Trims Wiped", "Window Cleaning", "Air Vent Cleaning", "Interior Detail & Finish"]
    },
    {
      id: "truck-exterior",
      title: "Exterior",
      price: "$140",
      includes: ["Hand Wash", "Wheel & Tire Clean", "Tire Shine", "Wax Protection", "Window Clean", "Door Jambs Cleaned", "Exterior Trim Shine"]
    },
    {
      id: "truck-apex-full",
      title: "Apex Full Package",
      price: "$240",
      popular: true,
      label: "Best Value",
      includes: ["Everything in Interior", "Everything in Exterior", "Premium Protection", "Inside & Out", "Drive Like New"]
    }
  ];

  const addons = [
    { name: "Pet Hair Removal", price: "$50" },
    { name: "Ceramic Coating", price: "$50" }
  ];

  const getActiveData = () => {
    if (activeTab === 'Car') return cars;
    if (activeTab === 'SUV') return suvs;
    return trucks;
  };

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Detailing Options</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">
            Auto Detailing <span className="text-primary italic">Packages & Pricing</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary pl-6 mb-4">
            APEX Auto Detailing provides premium interior and exterior detailing packages for cars, SUVs, and trucks across North Jersey. Mobile service is available — we come to you.
          </p>
          <p className="text-sm text-on-surface-variant italic">
            * Prices and availability should be confirmed directly when booking.
          </p>
        </FadeIn>

        {/* Vehicle Tabs */}
        <div className="flex gap-4 mb-12 border-b border-outline-variant/20 pb-4 overflow-x-auto">
          {['Car', 'SUV', 'Truck'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded font-label-caps text-label-caps whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? 'bg-secondary/10 border-b-2 border-secondary text-secondary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab} PACKAGES
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16" key={activeTab}>
          {getActiveData().map((service) => (
            <StaggerItem key={service.id}>
              <div className={`bg-surface border ${service.popular ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-outline-variant/20'} rounded p-8 h-full flex flex-col relative hover:border-secondary transition-colors group`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-on-surface text-xs font-bold px-3 py-1 rounded-bl rounded-tr uppercase">
                    {service.label || "Best Value"}
                  </div>
                )}
                
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{service.title}</h3>
                
                <div className="text-3xl font-bold text-on-surface mb-6 pb-6 border-b border-outline-variant/10">
                  {service.price}
                </div>
                
                <ul className="mb-8 flex-grow space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <ClientLink to={`/book?service=${service.id}`} className={`w-full text-center font-label-caps py-4 rounded transition-colors border ${service.popular ? 'bg-primary text-on-primary border-primary hover:bg-primary/90 shadow-lg' : 'border-secondary text-secondary hover:bg-secondary/10'}`}>
                  BOOK APPOINTMENT
                </ClientLink>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Addons Grid */}
        <FadeIn className="mb-16">
          <h2 className="font-headline-md text-on-surface mb-6 uppercase text-secondary">Add-ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {addons.map(addon => (
              <div key={addon.name} className="bg-surface-container border border-outline-variant/20 rounded p-6 flex justify-between items-center hover:border-primary transition-colors">
                <span className="font-label-caps text-on-surface">{addon.name}</span>
                <span className="font-bold text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn className="bg-surface-container-low rounded border border-outline-variant/20 p-8 md:p-12 text-center border-t-4 border-t-primary">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Ready to Book?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Contact us today to schedule your mobile detailing appointment in North Jersey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 inline-block">
              BOOK YOUR APPOINTMENT
            </ClientLink>
            <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-secondary text-secondary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/10 transition-colors shadow-lg inline-block">
              CALL 973-897-1999
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

export default ApexServices;
