import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { Phone, MapPin, Clock } from 'lucide-react';

const EqualizerContact = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Contact & Booking</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6">
            REQUEST A <span className="text-primary italic">DETAIL</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Reach out directly or use the form below to request an appointment. We bring premium detailing directly to you across St. Catharines and the Niagara Region.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary text-2xl">@</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">INSTAGRAM</h3>
                  <a href="https://www.instagram.com/equalizerdetailing/" target="_blank" rel="noreferrer" className="text-xl text-on-surface hover:text-primary transition-colors">
                    @equalizerdetailing
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">PHONE</h3>
                  <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xl text-on-surface hover:text-primary transition-colors">
                    {client.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">SERVICE AREA</h3>
                  <p className="text-xl text-on-surface">St. Catharines & Niagara Region</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">BUSINESS HOURS</h3>
                  <p className="text-xl text-on-surface">{client.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-outline-variant/20 bg-surface-container-low rounded text-on-surface-variant">
              <p className="font-body-md italic mb-4">
                "Demo site active. Direct messaging via Instagram is currently the best way to contact the business."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface border border-outline-variant/20 p-8 md:p-12 rounded">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Booking Request</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">First Name</label>
                  <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
                </div>
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
                </div>
                <div>
                  <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Vehicle Make/Model/Year</label>
                <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Service Location (City / Postal Code)</label>
                <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Message / Requested Service</label>
                <textarea rows={4} className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#D5F604] text-black font-bold font-label-caps text-label-caps py-4 rounded hover:bg-[#b5d103] transition-colors">
                SUBMIT REQUEST
              </button>
              <p className="text-xs text-on-surface-variant/70 text-center mt-4">
                This form currently does not send emails. This is a demo presentation.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default EqualizerContact;
