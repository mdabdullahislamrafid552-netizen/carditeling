import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import EqualizerAbout from './demos/equalizer/EqualizerAbout';
import RMCarAbout from './demos/rm-car-detailing/RMCarAbout';

const About = () => {
  const { client } = useClient();

  if (client.slug === 'the-equalizer-mobile-car-detailing') {
    return <EqualizerAbout />;
  }

  if (client.slug === 'r-and-m-car-detailing') {
    return <RMCarAbout />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-[#080B0D] z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('/images/service_exterior.jpg')" }}></div>
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mt-20">
          <p className="text-primary text-label-caps font-label-caps mb-6 tracking-[0.3em] uppercase">The Pursuit of Perfection</p>
          <h1 className="text-display-lg font-display-lg text-on-surface mb-8">ENGINEERED FOR <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">PRECISION</span></h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {client.name} was founded on a singular obsession: elevating automotive detailing from a service to a science. We preserve automotive masterpieces.
          </p>
        </div>
        <div className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Philosophy / Stats Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="bg-surface/80 backdrop-blur-xl p-8 md:p-12 relative z-10 border-l-2 border-primary border border-outline-variant/10">
              <h2 className="text-headline-xl font-headline-xl mb-6 text-on-surface">Our Philosophy</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-6">
                We do not simply wash cars. We orchestrate a meticulous restoration of automotive finishes. Every vehicle that enters our studio is treated as a curated asset, requiring analytical precision and uncompromising standards.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Our technicians employ advanced nanotechnologies and multi-stage correction processes to achieve a flawless, mirror-like depth that surpasses factory specifications.
              </p>
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-gutter mt-12 lg:mt-0">
            <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/10 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              <div className="text-display-lg font-display-lg text-on-surface mb-2">15+</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant">Years Expertise</div>
            </div>
            <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/10 p-8 text-center hover:-translate-y-2 transition-transform duration-300 mt-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>directions_car</span>
              <div className="text-display-lg font-display-lg text-on-surface mb-2">2.5k</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant">Vehicles Detailed</div>
            </div>
            <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/10 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <div className="text-display-lg font-display-lg text-on-surface mb-2">100%</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant">Ceramic Certified</div>
            </div>
            <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/10 p-8 text-center hover:-translate-y-2 transition-transform duration-300 mt-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <div className="text-display-lg font-display-lg text-on-surface mb-2">5-Star</div>
              <div className="text-label-caps font-label-caps text-on-surface-variant">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-xl font-headline-xl text-on-surface mb-4">Master Technicians</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our team undergoes rigorous training and certification to ensure every vehicle receives world-class treatment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="overflow-hidden rounded mb-4 border border-outline-variant/20">
                <img alt="Lead Detailer" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/images/service_wheel.jpg"/>
              </div>
              <h4 className="font-headline-lg text-lg text-on-surface">Michael T.</h4>
              <p className="text-body-md text-primary">Lead Detailer</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="overflow-hidden rounded mb-4 border border-outline-variant/20">
                <img alt="Paint Specialist" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/images/gallery_car_1.jpg"/>
              </div>
              <h4 className="font-headline-lg text-lg text-on-surface">Sarah K.</h4>
              <p className="text-body-md text-primary">Paint-Correction Specialist</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="overflow-hidden rounded mb-4 border border-outline-variant/20">
                <img alt="Ceramic Technician" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/images/service_engine.jpg"/>
              </div>
              <h4 className="font-headline-lg text-lg text-on-surface">David R.</h4>
              <p className="text-body-md text-primary">Ceramic-Coating Technician</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="overflow-hidden rounded mb-4 border border-outline-variant/20">
                <img alt="Interior Specialist" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/images/service_wheel.jpg"/>
              </div>
              <h4 className="font-headline-lg text-lg text-on-surface">Marcus W.</h4>
              <p className="text-body-md text-primary">Interior Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap relative">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-20" style={{ backgroundImage: "url('/images/service_engine.jpg')" }}></div>
          <div className="absolute inset-0 bg-[#080B0D]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-margin-mobile">
          <h2 className="text-headline-xl font-headline-xl text-on-surface mb-6">Experience Elite Detailing</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">Protect your investment with uncompromising quality. Schedule your private consultation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <ClientLink to="/book-detail" className="bg-primary text-on-primary px-8 py-4 text-label-caps font-label-caps font-bold uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors rounded">BOOK APPOINTMENT</ClientLink>
            <ClientLink to="/services" className="border border-outline/30 text-on-surface px-8 py-4 text-label-caps font-label-caps font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors rounded">VIEW SERVICES</ClientLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
