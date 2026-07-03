import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ClientLink } from '../../../components/ui/ClientLink';

const ExclusiveAbout = () => {
  const { client } = useClient();

  return (
    <div className="bg-background pt-32 pb-section-gap min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn className="relative h-[600px] rounded overflow-hidden shadow-2xl">
            <img 
              src="/images/hero.jpg" 
              alt="Exclusive Detailing 02 demo image — client photo to be added later" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <div className="bg-surface/80 backdrop-blur border border-outline-variant/30 p-6 rounded shadow-lg">
                <div className="font-label-caps text-primary tracking-widest uppercase mb-2">Our Mission</div>
                <p className="text-on-surface-variant italic">
                  "Where clean isn't enough — perfection is the standard."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn delay={0.2} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-[#C0C0C0] animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">About Us</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-surface uppercase">
              ABOUT <span className="text-primary italic">EXCLUSIVE DETAILING 02</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary pl-6">
              Exclusive Detailing 02 is an auto detailing brand serving Bay Area clients with mobile and local appointment availability. The business positions itself around reliable service, professional results, and a premium standard where clean is not enough.
            </p>

            <div className="space-y-4 text-on-surface-variant mt-4">
              <p>
                From basic wash services to exclusive detail packages, Exclusive Detailing 02 focuses on helping vehicles look sharper, cleaner, and ready to turn heads.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-primary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase">Mobile & Local</h3>
                <p className="text-sm text-on-surface-variant">Mobile and local detailing appointments available for maximum convenience.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-primary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase">Package-Based</h3>
                <p className="text-sm text-on-surface-variant">Clear, straightforward package-based service approach.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-primary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase">Bay Area Focus</h3>
                <p className="text-sm text-on-surface-variant">Serving Bay Area clients with dedicated professional detailing.</p>
              </div>
              <div className="bg-surface border border-outline-variant/10 p-6 rounded hover:border-primary transition-colors">
                <h3 className="font-headline-sm text-on-surface mb-2 uppercase">Premium Standard</h3>
                <p className="text-sm text-on-surface-variant">Premium black and chrome brand presentation that matches our results.</p>
              </div>
            </div>

            <div className="mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg inline-block text-center w-full md:w-auto">
                BOOK DETAILING
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveAbout;
