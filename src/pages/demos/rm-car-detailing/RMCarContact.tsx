import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { Phone, MapPin, Clock } from 'lucide-react';

const RMCarContact = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Contact R&M Car Detailing</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">
            REQUEST A <span className="text-primary italic">DETAIL</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Reach out directly or use the form below to request an appointment. We bring premium detailing directly to you, and pick up/drop off is available.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <span className="font-bold text-[#FFC000] text-2xl">@</span>
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">INSTAGRAM</h3>
                  <a href={client.social.instagram} target="_blank" rel="noreferrer" className="text-xl text-on-surface hover:text-[#FFC000] transition-colors">
                    @rmcar.detailing
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <Phone className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">PHONE</h3>
                  <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xl text-on-surface hover:text-[#FFC000] transition-colors">
                    {client.contact.phone} (Rakan)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">SERVICE AREA</h3>
                  <p className="text-xl text-on-surface">75013 (Area to be confirmed)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-outline-variant/20 rounded flex items-center justify-center shrink-0">
                  <Clock className="text-[#FFC000]" />
                </div>
                <div>
                  <h3 className="font-label-caps text-on-surface-variant mb-2">BUSINESS HOURS</h3>
                  <p className="text-xl text-on-surface">{client.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-outline-variant/20 bg-surface-container-low rounded text-on-surface-variant">
              <p className="font-body-md italic mb-4">
                "Demo site active. Direct messaging via Instagram or calling Rakan is currently the best way to contact the business."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface border border-outline-variant/20 p-8 md:p-12 rounded border-t-4 border-t-primary">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Request Detailing</h2>
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
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Vehicle Make/Model</label>
                <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Service Needed</label>
                <select className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface">
                  <option value="">Select a service...</option>
                  <option value="mobile">Premium Mobile Detailing</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="interior">Interior Cleaning & Detailing</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Preference</label>
                <select className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface">
                  <option value="mobile">Mobile Service (We come to you)</option>
                  <option value="pickup">Pick Up / Drop Off Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Location (ZIP Code / Area)</label>
                <input type="text" className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface" />
              </div>

              <div>
                <label className="block text-sm font-label-caps text-on-surface-variant mb-2">Message</label>
                <textarea rows={4} className="w-full bg-background border border-outline-variant/30 rounded px-4 py-3 focus:border-primary focus:outline-none text-on-surface"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-on-primary font-bold font-label-caps text-label-caps py-4 rounded hover:bg-primary/90 transition-colors">
                REQUEST DETAILING
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

export default RMCarContact;
