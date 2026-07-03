import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Process = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <main className="pt-20">
        {/* Hero Section: Cinematic Introduction */}
        <section className="relative w-full min-h-[600px] md:min-h-[819px] flex items-center justify-start overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-cover bg-center w-full h-full opacity-60 mix-blend-luminosity" style={{ backgroundImage: "url('/images/gallery_car_1.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6" style={{ boxShadow: '0 0 200px 5px rgba(242, 189, 121, 0.05)' }}>
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">The Protocol</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter">Precision in <br/><span className="text-on-surface-variant">8 Stages.</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mt-4">
                At {client.name}, we do not merely wash vehicles; we engineer their restoration. Discover the meticulous 8-step journey from initial consultation to final handover, designed for those who demand uncompromising perfection.
              </p>
            </div>
          </div>
        </section>

        {/* The 8-Step Journey (Asymmetric Layout) */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
          {/* Central connecting line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-section-gap bottom-section-gap w-[1px] bg-outline-variant/20 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-[120px] relative z-10">
            {/* Step 1: Left Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="order-2 md:order-1 flex justify-end md:pr-12">
                <div className="w-full md:w-[80%] aspect-[4/5] bg-cover bg-center border border-outline-variant/10 filter grayscale hover:grayscale-0 transition-all duration-700 rounded" style={{ backgroundImage: "url('/images/service_ppf.jpg')" }}></div>
              </div>
              <div className="order-1 md:order-2 md:pl-12 flex flex-col gap-4">
                <span className="font-display-lg text-display-lg text-surface-variant leading-none">01</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Consultation &amp; Assessment</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Every masterpiece requires a blueprint. We begin with a microscopic analysis of your vehicle's clear coat depth, identifying localized defects, industrial fallout, and specific restoration requirements to tailor the protocol uniquely to your asset.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Paint Gauge Reading</span>
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Client Briefing</span>
                </div>
              </div>
            </div>

            {/* Step 2: Right Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="order-1 md:order-1 md:pr-12 flex flex-col gap-4 text-left md:text-right md:items-end">
                <span className="font-display-lg text-display-lg text-surface-variant leading-none">02</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Decontamination Wash</h2>
                <p className="font-body-md text-body-md text-on-surface-variant text-left md:text-right">A multi-stage chemical and mechanical purification process. We utilize pH-neutral snow foams followed by ferrous metal extractors and specialized clay media to strip the surface of embedded contaminants, leaving an entirely virgin clear coat.</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-start md:justify-end">
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Iron X Treatment</span>
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Deionized Water</span>
                </div>
              </div>
              <div className="order-2 md:order-2 flex justify-start md:pl-12">
                <div className="w-full md:w-[80%] aspect-[4/5] bg-cover bg-center border border-outline-variant/10 filter grayscale hover:grayscale-0 transition-all duration-700 rounded" style={{ backgroundImage: "url('/images/gallery_car_1.jpg')" }}></div>
              </div>
            </div>

            {/* Step 3: Left Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="order-2 md:order-1 flex justify-end md:pr-12">
                <div className="w-full md:w-[80%] aspect-square bg-cover bg-center border border-outline-variant/10 filter grayscale hover:grayscale-0 transition-all duration-700 rounded" style={{ backgroundImage: "url('/images/service_paint_correction.jpg')" }}></div>
              </div>
              <div className="order-1 md:order-2 md:pl-12 flex flex-col gap-4">
                <span className="font-display-lg text-display-lg text-surface-variant leading-none">03</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Multi-Stage Correction</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">The core of our craftsmanship. Utilizing diminishing abrasives and highly calibrated dual-action polishers, we systematically level the clear coat, permanently erasing swirls, holograms, and marring to reveal a flawless, mirror-like depth.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Stage 1-3 Polish</span>
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Micro-abrasives</span>
                </div>
              </div>
            </div>

            {/* Step 8: Right Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="order-1 md:order-1 md:pr-12 flex flex-col gap-4 text-left md:text-right md:items-end">
                <span className="font-display-lg text-display-lg text-surface-variant leading-none">08</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Final Handover</h2>
                <p className="font-body-md text-body-md text-on-surface-variant text-left md:text-right">The culmination of our meticulous process. A final wipe-down under varying light spectrums ensures zero defects. The vehicle is presented in our climate-controlled staging area, accompanied by a comprehensive maintenance briefing.</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-start md:justify-end">
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Client Walkthrough</span>
                  <span className="bg-surface-container text-outline px-3 py-1 font-label-caps text-label-caps border border-outline-variant/20 rounded">Care Kit Provided</span>
                </div>
              </div>
              <div className="order-2 md:order-2 flex justify-start md:pl-12">
                <div className="w-full md:w-[100%] aspect-[16/9] bg-cover bg-center border border-outline-variant/10 filter grayscale hover:grayscale-0 transition-all duration-700 rounded" style={{ backgroundImage: "url('/images/service_paint_correction.jpg')" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Safety Standards */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
          <div className="flex flex-col gap-8 mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tighter">Uncompromising Standards.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Our facility operates under strict protocols to ensure absolute safety and the highest caliber of finish for your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 border border-outline-variant/10 rounded flex flex-col gap-6 hover:bg-surface-container transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Vehicle Safety</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">24/7 internal and external surveillance, climate-controlled storage, and fully insured movement protocols. Your asset is protected at all times.</p>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/10 rounded flex flex-col gap-6 hover:bg-surface-container transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Elite Technicians</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Our team undergoes rigorous continuous training, mastering the latest chemical advancements and mechanical techniques in paint correction.</p>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/10 rounded flex flex-col gap-6 hover:bg-surface-container transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl">thermostat</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Controlled Environment</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">All ceramic coatings are applied and cured via short-wave infrared technology in a dust-extracted, temperature-regulated studio for maximum bonding.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Process;
