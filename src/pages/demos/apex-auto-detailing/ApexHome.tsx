import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { CheckCircle } from 'lucide-react';

const ApexHome = () => {
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
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Premium Mobile Detailing</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight uppercase">
              Detailing <span className="text-primary italic">Beyond</span> Expectations
            </h1>
            
            <h2 className="text-xl md:text-2xl text-on-surface-variant font-light">
              Premium Mobile Auto Detailing in North Jersey
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary pl-6">
              APEX Auto Detailing provides premium interior and exterior detailing services designed to restore, protect, and maintain your vehicle's appearance. From deep interior cleaning to exterior detailing, full detail packages, ceramic coatings, and pet hair removal, APEX brings professional mobile service directly to you.
            </p>
            
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Mobile service available — we come to you</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Interior, exterior, and full detail packages</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Ceramic coatings and deep cleaning</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Cars, SUVs, and trucks</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Serving North Jersey</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center shadow-lg shadow-primary/20">
                BOOK YOUR APPOINTMENT
              </ClientLink>
              <ClientLink to="/services" className="bg-surface border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 hover:bg-secondary/10 transition-colors rounded flex items-center justify-center gap-2 shadow-lg">
                VIEW PACKAGES
              </ClientLink>
              <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface border border-outline-variant text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 hover:border-primary transition-colors rounded inline-block text-center shadow-lg">
                CALL 973-897-1999
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trust/Value Badges */}
      <section className="py-8 bg-surface border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-headline-md text-on-surface text-secondary">Premium Products</h4>
            <p className="text-sm text-on-surface-variant mt-2">Attention to detail</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface text-secondary">Reliable & On Time</h4>
            <p className="text-sm text-on-surface-variant mt-2">100% satisfaction</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface text-secondary">Mobile Service</h4>
            <p className="text-sm text-on-surface-variant mt-2">We come to you</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface text-secondary">North Jersey</h4>
            <p className="text-sm text-on-surface-variant mt-2">Cars, SUVs, and Trucks</p>
          </div>
        </div>
      </section>

      {/* 3. Packages Preview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Detailing Packages</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Car Pricing Preview. SUV and truck package pricing is available on the services page.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-secondary font-label-caps text-label-caps hover:text-secondary/80 transition-colors" to="/services">
            ALL PRICING <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <div className="bg-surface-container border border-outline-variant/20 rounded p-8 h-full flex flex-col hover:border-secondary transition-colors">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Interior</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">Clean inside. Drive better.</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$140</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Vacuum interior, shampoo seats & carpets, dashboard and console clean, door panels and trims wiped, window cleaning, air vent cleaning, and interior detail & finish.</p>
              <ClientLink to="/book?service=car-interior" className="w-full text-center border border-secondary text-secondary font-label-caps py-3 rounded hover:bg-secondary/10 transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-surface border border-primary/50 rounded p-8 h-full flex flex-col relative shadow-lg shadow-primary/5">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Exterior</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">Clean outside. Stand out.</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$120</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Hand wash, wheel & tire clean, tire shine, wax protection, window clean, door jambs cleaned, and exterior trim shine.</p>
              <ClientLink to="/book?service=car-exterior" className="w-full text-center border border-secondary text-secondary font-label-caps py-3 rounded hover:bg-secondary/10 transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-surface border border-secondary rounded p-8 h-full flex flex-col relative shadow-lg shadow-secondary/10">
              <div className="absolute top-0 right-0 bg-secondary text-on-surface font-bold text-xs px-3 py-1 rounded-bl rounded-tr uppercase tracking-wider">Best Value</div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Apex Full Package</h3>
              <p className="text-sm text-primary font-label-caps tracking-widest uppercase mb-4">The ultimate detail.</p>
              <div className="text-3xl font-bold text-on-surface mb-6">$200</div>
              <p className="text-on-surface-variant mb-8 flex-grow">Full interior detail, full exterior detail, premium protection, inside & out, drive like new, and ceramic coating.</p>
              <ClientLink to="/book?service=car-apex-full" className="w-full text-center bg-primary text-on-primary font-label-caps py-3 rounded hover:bg-primary/90 transition-colors">
                BOOK NOW
              </ClientLink>
            </div>
          </StaggerItem>
        </StaggerContainer>
        
        {/* Add-ons Preview */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <span className="text-on-surface-variant font-label-caps mr-4">ADD-ONS:</span>
          <span className="bg-surface border border-outline-variant px-4 py-2 rounded text-sm font-label-caps"><span className="text-secondary">Pet Hair Removal</span> — $50</span>
          <span className="bg-surface border border-outline-variant px-4 py-2 rounded text-sm font-label-caps"><span className="text-secondary">Ceramic Coating</span> — $50</span>
        </div>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Why Choose APEX Auto Detailing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
              Your vehicle deserves more than just a quick wash. We deliver 100% satisfaction.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Premium Products</h4>
                <p className="text-on-surface-variant text-sm">Attention to detail on every vehicle.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Reliable & On Time</h4>
                <p className="text-on-surface-variant text-sm">100% satisfaction guaranteed.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">directions_car</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">Mobile Service</h4>
                <p className="text-on-surface-variant text-sm">Serving Cars, SUVs, and Trucks.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container border border-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">map</span>
                </div>
                <h4 className="font-headline-md text-on-surface mb-2">North Jersey Area</h4>
                <p className="text-on-surface-variant text-sm">Clear package pricing available.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Mobile Service Section */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">We Come To You</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
              APEX Auto Detailing offers mobile service for North Jersey customers, making it easier to book interior detailing, exterior detailing, full detail packages, ceramic coatings, and pet hair removal without the hassle of going to a shop.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 border border-primary inline-block">
                DM OR CALL TO BOOK
              </ClientLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">How It Works</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Simple, straightforward booking for a showroom-style finish.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Vehicle Type', desc: 'Choose your vehicle type' },
              { step: '02', title: 'Select Package', desc: 'Select your package' },
              { step: '03', title: 'Contact Us', desc: 'DM or call to book' },
              { step: '04', title: 'Confirm Location', desc: 'Confirm your mobile service location' },
              { step: '05', title: 'Get Detailed', desc: 'Detailed beyond expectations' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="bg-surface border border-outline-variant/20 rounded p-6 text-center h-full hover:border-secondary transition-colors">
                  <div className="text-secondary font-display-sm text-3xl mb-4">{s.step}</div>
                  <h4 className="font-headline-sm text-on-surface mb-2">{s.title}</h4>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. Results Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Our Results</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Demo visuals shown until final client photos are added.</p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/images/gallery-1.jpg" alt="APEX Auto Detailing demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow border border-outline-variant/10" />
            <img src="/images/gallery-2.jpg" alt="APEX Auto Detailing demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow border border-outline-variant/10" />
            <img src="/images/gallery-3.jpg" alt="APEX Auto Detailing demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow border border-outline-variant/10" />
            <img src="/images/gallery-4.jpg" alt="APEX Auto Detailing demo image — client photo to be added later" className="w-full h-48 object-cover rounded shadow border border-outline-variant/10" />
          </div>
          
          <div className="text-center">
            <ClientLink to="/results" className="inline-flex items-center gap-2 text-secondary font-label-caps hover:text-secondary/80 transition-colors">
              VIEW ALL RESULTS <span className="material-symbols-outlined">arrow_forward</span>
            </ClientLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApexHome;
