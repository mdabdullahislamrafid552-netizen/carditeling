import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import EqualizerServiceAreas from './demos/equalizer/EqualizerServiceAreas';
import RMCarServiceAreas from './demos/rm-car-detailing/RMCarServiceAreas';
import DeFeosServiceAreas from './demos/defeos-diamond-detailing/DeFeosServiceAreas';

const ServiceAreas = () => {
  const { client } = useClient();

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerServiceAreas />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarServiceAreas />;
  }
  
  if (client.slug === 'defeos-diamond-detailing') {
    return <DeFeosServiceAreas />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="pt-[104px] flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[716px] flex items-center justify-center overflow-hidden border-b border-outline-variant/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-0"></div>
          <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('/images/gallery_car_4.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-start space-y-6">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Coverage &amp; Locations</span>
              <h1 className="font-display-lg text-display-lg text-on-surface">Precision Detailing, <br/> Wherever You Are.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Experience uncompromising automotive care at our flagship {client.name} studio, or let our elite mobile units bring perfection directly to your driveway.</p>
            </div>
          </div>
        </section>

        {/* Studio Location */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5 space-y-8">
              <div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">The Studio</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Our climate-controlled, dust-free facility is engineered for ultimate precision. Featuring advanced lighting tunnels and dedicated bays for paint correction and ceramic coatings.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">HEADQUARTERS</h3>
                    <p className="font-body-md text-body-md text-on-surface">{client.contact?.address || '123 Detailers Lane, Suite 100, Los Angeles, CA 90015'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-1">Hours</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment Only</p>
                  </div>
                </li>
              </ul>
              <button className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-6 py-3 hover:bg-surface-container transition-colors duration-300 rounded">GET DIRECTIONS</button>
            </div>
            <div className="col-span-12 md:col-span-7 h-[400px] md:h-[600px] bg-[#11171B] rounded border border-outline-variant/10 overflow-hidden relative mt-8 md:mt-0">
              <img className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" alt="Studio exterior" src="/images/service_wheel.jpg"/>
            </div>
          </div>
        </section>

        {/* Services Areas & Map */}
        <section className="bg-[#11171B] border-y border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Mobile Coverage</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Our fully-equipped mobile detailing units serve the greater Los Angeles area, delivering meticulous care without the commute.</p>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 lg:col-span-8 h-[300px] md:h-[500px] border border-outline-variant/10 relative overflow-hidden group rounded">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img className="w-full h-full object-cover" alt="Service areas map" src="/images/gallery_car_2.jpg"/>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col justify-between bg-background p-6 md:p-8 border border-outline-variant/10 rounded mt-8 lg:mt-0">
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">Primary Zones</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">Beverly Hills</span>
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">Santa Monica</span>
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">West Hollywood</span>
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">Malibu</span>
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">Pasadena</span>
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-2">Check Availability</h4>
                  <div className="flex gap-2">
                    <input className="bg-[#11171B] border-b border-outline-variant/30 focus:border-primary text-on-surface px-4 py-3 w-full font-body-md focus:ring-0 transition-colors outline-none" placeholder="Enter ZIP Code" type="text"/>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 transition-colors rounded">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pickup & Delivery */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 h-[300px] md:h-[400px] border border-outline-variant/10 p-2 bg-[#11171B] rounded mt-8 md:mt-0">
              <img className="w-full h-full object-cover rounded" alt="Enclosed transport" src="/images/service_wheel.jpg"/>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#11171B] border border-outline-variant/20 text-on-surface-variant font-label-caps text-label-caps rounded">WHITE GLOVE SERVICE</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">Secure Transport.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">For extensive restoration or multi-day ceramic coating processes, we offer enclosed pickup and delivery. Your vehicle is transported with total discretion and fully insured security.</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span className="text-on-surface-variant font-body-md">Climate-controlled enclosed trailers</span></li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span className="text-on-surface-variant font-body-md">Comprehensive transit insurance</span></li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span className="text-on-surface-variant font-body-md">Available for projects over $2,500</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-gap border-t border-outline-variant/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10 space-y-8">
            <h2 className="font-display-lg text-display-lg text-on-surface">Ready for Perfection?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Schedule your consultation or book a detail at our studio or your residence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
              <ClientLink to="/contact" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-primary-fixed transition-colors duration-300 rounded inline-block text-center">BOOK YOUR DETAIL</ClientLink>
              <ClientLink to="/contact" className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-8 py-4 hover:bg-surface-container transition-colors duration-300 rounded inline-block text-center">CONTACT US</ClientLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceAreas;
