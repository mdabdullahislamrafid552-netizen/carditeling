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
            See the transformative results of our premium detailing and ceramic coating services.
          </p>
        </FadeIn>

        {/* Gallery Grid (Client Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            '/images/rmcar/gallery-1.jpg',
            '/images/rmcar/gallery-2.jpg',
            '/images/rmcar/gallery-3.jpg',
            '/images/rmcar/gallery-4.jpg',
            '/images/rmcar/gallery-5.jpg'
          ].map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-surface border border-outline-variant/10 rounded overflow-hidden shadow group relative border-b-4 border-b-transparent hover:border-b-primary transition-colors">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center z-10 p-4 text-center">
                  <span className="text-white font-label-caps uppercase text-sm mb-2">R&M Detailing</span>
                  <span className="text-[#FFC000] text-xs">Premium Result</span>
                </div>
                <img src={src} alt={`R&M Car Detailing Result ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RMCarGallery;
