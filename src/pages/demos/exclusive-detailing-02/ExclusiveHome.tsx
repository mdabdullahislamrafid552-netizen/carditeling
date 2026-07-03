import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { CheckCircle } from 'lucide-react';

const ExclusiveHome = () => {
  const { client } = useClient();

  return (
    <div className="bg-background">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[800px] flex items-center pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-container-lowest/80 absolute inset-0 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        </div>
        
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="md:col-span-8 flex flex-col gap-6" delay={0.2}>
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-[#C0C0C0] animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Mobile & Local Appointments</span>
            </div>
            
            {client.branding.logoUrl && (
              <div className="mb-2">
                <img src={client.branding.logoUrl} alt="Logo" className="h-24 w-auto object-contain" />
              </div>
            )}
            
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight uppercase">
              Premium Mobile <span className="text-primary italic">Detailing</span> in the Bay Area
            </h1>
            
            <h2 className="text-xl md:text-2xl text-on-surface-variant font-light">
              Where Clean Isn't Enough — Perfection Is The Standard
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary pl-6">
              Exclusive Detailing 02 provides professional auto detailing for Bay Area clients who want their vehicle turning heads again. From basic wash services to mini details and exclusive detail packages, the business focuses on clean results, reliable service, and a polished finish that speaks for itself.
            </p>
            
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Mobile & local appointments available</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Bay Area detailing clients</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Basic Wash, Mini Detail, and Exclusive Detail packages</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Clear package pricing</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> DM or call to book</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center shadow-lg border border-primary">
                BOOK DETAILING
              </ClientLink>
              <ClientLink to="/services" className="bg-surface border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:border-primary transition-colors rounded flex items-center justify-center gap-2 shadow-lg">
                VIEW PACKAGES
              </ClientLink>
              <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 hover:border-primary transition-colors rounded inline-block text-center shadow-lg">
                CALL (707) 333-6776
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trust/Value Badges */}
      <section className="py-8 bg-surface border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-headline-md text-on-surface">Mobile Service</h4>
            <p className="text-sm text-on-surface-variant mt-2">Bay Area</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Packages</h4>
            <p className="text-sm text-on-surface-variant mt-2">Clear pricing</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Options</h4>
            <p className="text-sm text-primary mt-2">Basic to Luxury</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Booking</h4>
            <p className="text-sm text-on-surface-variant mt-2">DM or call to book</p>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Detailing Packages</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Clear package pricing for every level of care.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors" to="/services">
            ALL PACKAGES <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <div className="bg-surface-container border border-outline-variant/20 rounded p-8 h-full flex flex-col hover:border-primary transition-colors">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Basic Wash</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">Basic Clean Care</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$60 & up</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Exterior wash, interior vacuum, window cleaning, and wheels & tire shine.</p>
              <ClientLink to="/book" className="w-full text-center border border-outline-variant text-on-surface font-label-caps py-3 rounded hover:bg-surface-variant transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-surface border border-primary/50 rounded p-8 h-full flex flex-col relative shadow-lg">
              <div className="absolute top-0 right-0 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-bl rounded-tr">POPULAR</div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Mini Detail</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">Detailing Clean</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$80 & up</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Foam wash, interior detailing & wipe down, tire & rim clean, wheel and tire shine, and vacuum.</p>
              <ClientLink to="/book" className="w-full text-center bg-primary text-on-primary font-label-caps py-3 rounded hover:bg-primary/90 transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-surface-container border border-outline-variant/20 rounded p-8 h-full flex flex-col hover:border-primary transition-colors">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Exclusive Detail</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">Luxury Treatment</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$175–$200</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Ceramic coating + wax, interior vacuum, dash, console, door panels, detail motor, and steam cleaning.</p>
              <ClientLink to="/book" className="w-full text-center border border-outline-variant text-on-surface font-label-caps py-3 rounded hover:bg-surface-variant transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Why Choose Exclusive Detailing 02</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
              Where clean isn't enough — perfection is the standard.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">map</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Mobile & Local</h4>
                <p className="text-on-surface-variant text-sm">Bay Area clients served</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Clear Pricing</h4>
                <p className="text-on-surface-variant text-sm">Basic wash to luxury treatment options</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Professional</h4>
                <p className="text-on-surface-variant text-sm">Reliable positioning and premium service</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Results-Focused</h4>
                <p className="text-on-surface-variant text-sm">Your car deserves more than a basic wash</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Mobile & Local Appointments */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Mobile & Local Appointments Available</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
              Exclusive Detailing 02 makes it easy for Bay Area clients to book detailing service. Customers can DM or call to schedule an appointment, choose a package, and confirm availability before spots fill up.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg border border-primary inline-block">
                DM OR CALL TO BOOK
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">How It Works</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Simple, straightforward booking for a showroom-style finish.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Choose Package', desc: 'Select your package' },
              { step: '02', title: 'Contact Us', desc: 'DM or call to book' },
              { step: '03', title: 'Confirm', desc: 'Confirm your location and appointment' },
              { step: '04', title: 'Get Detailed', desc: 'Get your vehicle detailed' },
              { step: '05', title: 'Enjoy', desc: 'Enjoy a cleaner, sharper finish' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="bg-surface border border-outline-variant/20 rounded p-6 text-center h-full hover:border-primary transition-colors">
                  <div className="text-primary font-display-sm text-3xl mb-4">{s.step}</div>
                  <h4 className="font-headline-sm text-on-surface mb-2">{s.title}</h4>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Results Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Our Results</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Demo visuals shown until final client photos are added.</p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/images/gallery-1.jpg" alt="Exclusive Detailing 02 demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow" />
            <img src="/images/gallery-2.jpg" alt="Exclusive Detailing 02 demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow" />
            <img src="/images/gallery-3.jpg" alt="Exclusive Detailing 02 demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow" />
            <img src="/images/gallery-4.jpg" alt="Exclusive Detailing 02 demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow" />
          </div>
          
          <div className="text-center">
            <ClientLink to="/results" className="inline-flex items-center gap-2 text-primary font-label-caps hover:text-primary/90 transition-colors">
              VIEW ALL RESULTS <span className="material-symbols-outlined">arrow_forward</span>
            </ClientLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExclusiveHome;
