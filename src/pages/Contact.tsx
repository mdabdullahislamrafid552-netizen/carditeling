import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

import EqualizerContact from './demos/equalizer/EqualizerContact';
import RMCarContact from './demos/rm-car-detailing/RMCarContact';
import DeFeosContact from './demos/defeos-diamond-detailing/DeFeosContact';

const Contact = () => {
  const { client } = useClient();

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerContact />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarContact />;
  }
  
  if (client.slug === 'defeos-diamond-detailing') {
    return <DeFeosContact />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col pt-24">
      {/* Main Content */}
      <main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-section-gap">
        <div className="mb-24">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-4">GET IN TOUCH.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Precision craftsmanship requires careful planning. Reach out to schedule a consultation for your vehicle's bespoke detailing service with {client.name}.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-gap">
          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div className="bg-[#11171B] border border-outline-variant/10 p-8 rounded">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Studio Details</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">LOCATION</h3>
                    <p className="font-body-md text-body-md text-on-surface">{client.contact?.address || '123 Detailers Lane, Suite 100, Los Angeles, CA 90015'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">phone</span>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">PHONE</h3>
                    <p className="font-body-md text-body-md text-on-surface">{client.contact?.phone || '+1 (310) 555-0198'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">mail</span>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">EMAIL</h3>
                    <p className="font-body-md text-body-md text-on-surface">{client.contact?.email || 'concierge@vantaauto.com'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#11171B] border border-outline-variant/10 p-8 rounded">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Hours</h2>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Monday - Friday</span>
                  <span className="font-body-md text-body-md text-on-surface">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Saturday</span>
                  <span className="font-body-md text-body-md text-on-surface">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Sunday</span>
                  <span className="font-body-md text-body-md text-on-surface">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 md:p-12 rounded h-full">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Request Consultation</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10">Fill out the form below to begin the booking process for our specialized services.</p>
              
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">FULL NAME</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-body-md px-0 py-3 transition-colors outline-none" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">EMAIL ADDRESS</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-body-md px-0 py-3 transition-colors outline-none" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">PHONE NUMBER</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-body-md px-0 py-3 transition-colors outline-none" placeholder="(555) 000-0000" type="tel" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">VEHICLE MAKE &amp; MODEL</label>
                    <input className="bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-body-md px-0 py-3 transition-colors outline-none" placeholder="e.g. Porsche 911 GT3" type="text" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-4">SERVICE INTEREST</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="bg-background border border-outline-variant/30 px-4 py-2 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                      <input type="checkbox" className="hidden" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">CERAMIC COATING</span>
                    </label>
                    <label className="bg-background border border-outline-variant/30 px-4 py-2 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                      <input type="checkbox" className="hidden" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">PAINT CORRECTION</span>
                    </label>
                    <label className="bg-background border border-outline-variant/30 px-4 py-2 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                      <input type="checkbox" className="hidden" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">INTERIOR DETAIL</span>
                    </label>
                    <label className="bg-background border border-outline-variant/30 px-4 py-2 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                      <input type="checkbox" className="hidden" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">MAINTENANCE</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-2">MESSAGE</label>
                  <textarea className="bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-body-md px-0 py-3 transition-colors resize-none outline-none" placeholder="Provide any specific details about your vehicle's condition or requirements..." rows={4}></textarea>
                </div>
                
                <button className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 mt-4 hover:bg-primary-fixed transition-colors w-fit rounded" type="submit">SUBMIT INQUIRY</button>
              </form>
            </div>
          </div>
        </div>

        {/* Integrated Map Area */}
        <div className="w-full h-96 bg-[#11171B] border border-outline-variant/10 mb-section-gap relative overflow-hidden group">
          <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 transform" style={{ backgroundImage: "url('/images/gallery_car_4.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-surface/80 backdrop-blur-md px-6 py-3 border border-outline-variant/30 rounded cursor-pointer hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-primary">directions</span>
            <span className="font-label-caps text-label-caps text-on-surface">GET DIRECTIONS</span>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="flex flex-col gap-6">
            <div className="border-b border-outline-variant/20 pb-6">
              <button className="flex justify-between items-center w-full text-left group">
                <span className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">How long does a full paint correction and ceramic coating take?</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
              </button>
            </div>
            <div className="border-b border-outline-variant/20 pb-6">
              <button className="flex justify-between items-center w-full text-left group">
                <span className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">Do I need to leave my vehicle overnight?</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
              </button>
            </div>
            <div className="border-b border-outline-variant/20 pb-6">
              <button className="flex justify-between items-center w-full text-left group">
                <span className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">Do you offer mobile detailing services?</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <ClientLink to="/faq" className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-8 py-4 hover:border-primary hover:text-primary transition-colors rounded inline-block">VIEW ALL FAQS</ClientLink>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
