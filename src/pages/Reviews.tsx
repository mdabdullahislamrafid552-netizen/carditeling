import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Reviews = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary selection:text-on-primary">
      <main className="pt-32 pb-section-gap relative overflow-hidden flex-grow">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -z-10 bg-primary/5"></div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <h1 className="font-display-lg text-display-lg mb-6">UNCOMPROMISING<br/><span className="text-primary">EXCELLENCE</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">The verdict from collectors, enthusiasts, and perfectionists. At {client.name}, we treat every vehicle as a masterclass in precision engineering and cinematic detailing.</p>
            </div>
            <div className="md:col-span-4 flex flex-col md:items-end mt-12 md:mt-0">
              <div className="flex items-center gap-1 mb-4">
                <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline-xl text-headline-xl mb-1">5.0 / 5.0</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">BASED ON 248 CURATED REVIEWS</p>
            </div>
          </div>

          <div className="w-full h-px bg-on-surface opacity-10 mt-16 mb-16"></div>

          {/* Rating Distribution & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">RATING DISTRIBUTION</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-label-caps text-label-caps w-12">5 STAR</span>
                  <div className="flex-1 h-1 bg-surface-container overflow-hidden">
                    <div className="h-full bg-primary w-[98%]"></div>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">244</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label-caps text-label-caps w-12">4 STAR</span>
                  <div className="flex-1 h-1 bg-surface-container overflow-hidden">
                    <div className="h-full bg-primary w-[2%] opacity-50"></div>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">4</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label-caps text-label-caps w-12 text-on-surface-variant">3 STAR</span>
                  <div className="flex-1 h-1 bg-surface-container overflow-hidden"></div>
                  <span className="font-body-md text-body-md text-on-surface-variant">0</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between rounded">
                <span className="material-symbols-outlined text-primary mb-8" style={{ fontVariationSettings: "'FILL' 0" }}>directions_car</span>
                <div>
                  <p className="font-display-lg text-display-lg mb-2 text-on-surface">1,200+</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">VEHICLES DETAILED</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between rounded">
                <span className="material-symbols-outlined text-primary mb-8" style={{ fontVariationSettings: "'FILL' 0" }}>workspace_premium</span>
                <div>
                  <p className="font-display-lg text-display-lg mb-2 text-on-surface">15<span className="text-headline-lg"> YRS</span></p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">MASTER CRAFTSMANSHIP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonial / Video */}
        <section className="mb-section-gap relative">
          <div className="max-w-[1920px] mx-auto">
            <div className="relative aspect-video w-full group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7uSzeur_WxF7ym8b2vQAFSVgvHicgZtAAFNO72dsszHlwZBD3I_RvVXddrw0s_RElxfjWfqGx_CzLv13guyq3xC091_Wl-Kc_22mWLjKCtSLcdx8SekWsJD89OxRm2GhV_BZRI5pgBL9cElBy-Kijoej-17E3UuE7THGNPspVhkSxAHjr9R1JFH214RkDaizqTlmlS8U7HJutMcYiURCp9h1t0LxbmMYuVqqwJS7tMt-vCsCMCfrutQ7OoqdrFDPTLYrfLNtiaSZB')" }}></div>
              <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md mb-8 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
                <p className="font-headline-xl text-headline-xl max-w-4xl mb-6 text-on-surface">"THE ATTENTION TO DETAIL IS OBSESSIVE. MY GT3 LOOKS BETTER THAN THE DAY IT LEFT STUTTGART."</p>
                <p className="font-label-caps text-label-caps text-primary tracking-[0.2em]">— J. BLACKWOOD, PORSCHE 911 GT3</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
