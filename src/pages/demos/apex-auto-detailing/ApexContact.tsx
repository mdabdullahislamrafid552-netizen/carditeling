import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';

const ApexContact = () => {
  const { client } = useClient();

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">
            CONTACT <span className="text-primary italic">APEX AUTO DETAILING</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary pl-6">
            Contact us to schedule your auto detailing service in North Jersey. Mobile service available — we come to you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form (Demo Safe) */}
          <FadeIn className="lg:col-span-7 bg-surface border border-outline-variant/20 rounded p-8 border-t-4 border-t-secondary">
            <h3 className="font-headline-md text-on-surface mb-6 uppercase">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks — APEX Auto Detailing will contact you to confirm availability."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Name</label>
                  <input type="text" required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Phone</label>
                  <input type="tel" required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Email</label>
                <input type="email" required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Vehicle Type</label>
                  <select required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors">
                    <option value="">Select vehicle...</option>
                    <option value="car">Car</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Vehicle Make/Model</label>
                  <input type="text" required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Service Package</label>
                <select required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors">
                    <optgroup label="Cars">
                      <option value="car-interior">Car Interior — $140</option>
                      <option value="car-exterior">Car Exterior — $120</option>
                      <option value="car-apex-full">Car Apex Full Package — $200</option>
                    </optgroup>
                    <optgroup label="SUVs">
                      <option value="suv-interior">SUV Interior — $150</option>
                      <option value="suv-exterior">SUV Exterior — $130</option>
                      <option value="suv-apex-full">SUV Apex Full Package — $225</option>
                    </optgroup>
                    <optgroup label="Trucks">
                      <option value="truck-interior">Truck Interior — $160</option>
                      <option value="truck-exterior">Truck Exterior — $140</option>
                      <option value="truck-apex-full">Truck Apex Full Package — $240</option>
                    </optgroup>
                </select>
              </div>

              <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Mobile Service Location</label>
                  <input type="text" placeholder="Your address in North Jersey" required className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Message (Include preferred date & add-ons)</label>
                <textarea rows={4} placeholder="E.g., Looking for Friday morning, add Ceramic Coating." className="w-full bg-surface-container border border-outline-variant/30 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"></textarea>
              </div>

              <button type="submit" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-full">
                REQUEST DETAILING
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn className="lg:col-span-5 flex flex-col gap-6" delay={0.2}>
            <div className="bg-surface-container border border-outline-variant/10 rounded p-6 hover:border-secondary transition-colors">
              <h4 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Direct Contact</h4>
              <p className="text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">call</span>
                <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors text-lg">
                  {client.contact.phone}
                </a>
              </p>
            </div>

            <div className="bg-surface-container border border-outline-variant/10 rounded p-6 hover:border-secondary transition-colors">
              <h4 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Email</h4>
              <p className="text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                <a href={`mailto:${client.contact.email}`} className="hover:text-primary transition-colors text-lg">
                  {client.contact.email}
                </a>
              </p>
            </div>

            <div className="bg-surface-container border border-outline-variant/10 rounded p-6 hover:border-secondary transition-colors">
              <h4 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Instagram</h4>
              <p className="text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">photo_camera</span>
                <a href={client.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg">
                  @apexautodetailingjb
                </a>
              </p>
            </div>

            <div className="bg-surface-container border border-outline-variant/10 rounded p-6 hover:border-secondary transition-colors">
              <h4 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Service Area</h4>
              <p className="text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">map</span>
                <span className="text-lg">North Jersey (Mobile Service)</span>
              </p>
            </div>
            
            <div className="bg-surface-container border border-outline-variant/10 rounded p-6 hover:border-secondary transition-colors">
              <h4 className="font-headline-sm text-on-surface mb-2 uppercase text-secondary">Business Hours</h4>
              <p className="text-on-surface-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">schedule</span>
                <span className="text-lg">To be added</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ApexContact;
