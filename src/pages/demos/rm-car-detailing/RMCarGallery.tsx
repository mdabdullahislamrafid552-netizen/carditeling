import React from 'react';
import { FadeIn } from '../../../components/animations/FadeIn';

const RMCarGallery = () => {
  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Detailing Results</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl uppercase">
            OUR <span className="text-primary italic">RESULTS</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-[#FFC000] pl-6">
            Real client photos can be added later. For now, this demo keeps the approved master website visuals in place to show how R&M Car Detailing's results and gallery sections will appear.
          </p>
        </FadeIn>

        {/* Gallery Grid (Demo Visuals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            '/images/hero.jpg',
            '/images/service_ceramic.jpg',
            '/images/service_exterior.jpg',
            '/images/service_interior.jpg',
            '/images/service_ppf.jpg',
            '/images/service_engine.jpg',
            '/images/service_wheel.jpg',
            '/images/service_paint_correction.jpg'
          ].map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow group relative border-b-4 border-b-transparent hover:border-b-primary transition-colors">
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center z-10 p-4 text-center">
                  <span className="text-white font-label-caps uppercase text-sm mb-2">Demo Result Visual</span>
                  <span className="text-[#FFC000] text-xs">Client photo to be added later</span>
                </div>
                <img src={src} alt={`Demo visual ${idx}`} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RMCarGallery;
