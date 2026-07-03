import React from 'react';
import { useClient } from '../../../clients/ClientContext';
import { ClientLink } from '../../../components/ui/ClientLink';
import { FadeIn } from '../../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../../components/animations/StaggerContainer';
import { CheckCircle } from 'lucide-react';

const RMCarHome = () => {
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
              <span className="w-2 h-2 rounded-full bg-[#FFC000] animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Certified Ceramic Coating Installer</span>
            </div>
            
            {client.branding.logoUrl && (
              <div className="mb-2">
                <img src={client.branding.logoUrl} alt="Logo" className="h-24 w-auto object-contain" />
              </div>
            )}
            
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight uppercase">
              Premium Mobile Car <span className="text-primary italic">Detailing</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-on-surface-variant font-light">
              {client.tagline}
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-[#FFC000] pl-6">
              R&M Car Detailing provides premium mobile auto detailing with a focus on clean results, convenience, and professional vehicle care. From detailing services to ceramic coating support, R&M helps clients keep their vehicles looking sharp with mobile convenience and available pick up/drop off service.
            </p>
            
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Premium mobile detailing</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Certified ceramic coating installer with @feynlabs</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFC000]" /> Pick up / drop off available</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#FFC000]" /> Contact Rakan at (248) 205-9245</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center shadow-lg">
                BOOK DETAILING
              </ClientLink>
              <ClientLink to="/services" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:border-[#FFC000] transition-colors rounded flex items-center justify-center gap-2">
                VIEW SERVICES
              </ClientLink>
              <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-surface text-on-surface font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-surface-variant transition-colors rounded inline-block text-center shadow-lg">
                CALL RAKAN
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
            <p className="text-sm text-on-surface-variant mt-2">Premium convenience</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Certified</h4>
            <p className="text-sm text-on-surface-variant mt-2">@feynlabs installer</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Pick Up / Drop Off</h4>
            <p className="text-sm text-[#FFC000] mt-2">Available on request</p>
          </div>
          <div>
            <h4 className="font-headline-md text-on-surface">Area 75013</h4>
            <p className="text-sm text-on-surface-variant mt-2">Service area</p>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Premium Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Exceptional care tailored to your needs.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors" to="/services">
            ALL SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full border-b-4 border-b-transparent hover:border-b-primary transition-colors">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Premium Mobile Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Professional mobile detailing designed for clients who want their vehicle cared for with convenience and attention to detail.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full border-b-4 border-b-transparent hover:border-b-[#FFC000] transition-colors">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_ceramic.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Ceramic Coating</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Certified ceramic coating installation support with @feynlabs mentioned in the client's profile.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full border-b-4 border-b-transparent hover:border-b-primary transition-colors">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_interior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Interior Detailing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Interior cleaning and detailing support for a cleaner, fresher, more comfortable vehicle cabin. Final package details to be confirmed.</p>
              </div>
            </ClientLink>
          </StaggerItem>
          <StaggerItem>
            <ClientLink to="/services" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block h-full border-b-4 border-b-transparent hover:border-b-[#FFC000] transition-colors">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('/images/service_exterior.jpg')" }}></div>
              </div>
              <div className="p-6 relative bg-surface">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Pick Up / Drop Off</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Convenient pick up and drop off options are available for clients who need a more flexible detailing experience.</p>
              </div>
            </ClientLink>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6 uppercase">Why Choose R&M Car Detailing</h2>
            <p className="font-body-lg text-on-surface-variant mb-6">
              R&M Car Detailing's Instagram profile states that the business is a certified ceramic coating installer with @feynlabs. We provide high-end vehicle care with a focus on convenience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-headline-md text-on-surface">Premium mobile detailing</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-[#FFC000] mt-1" size={20} />
                <div>
                  <h4 className="font-headline-md text-on-surface">Certified ceramic coating installer</h4>
                  <p className="text-on-surface-variant text-sm">with @feynlabs</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-headline-md text-on-surface">Pick up / drop off available</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-[#FFC000] mt-1" size={20} />
                <div>
                  <h4 className="font-headline-md text-on-surface">Direct contact with Rakan</h4>
                </div>
              </li>
            </ul>
          </FadeIn>
          <FadeIn className="relative h-[500px]">
             <img src="/images/service_paint_correction.jpg" alt="Detailing Process" className="w-full h-full object-cover rounded shadow-2xl border border-outline-variant/20" />
          </FadeIn>
        </div>
      </section>
      
      {/* 4b. Ceramic Coating Highlight */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Certified Ceramic Coating Installer</h2>
            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-8">
              R&M Car Detailing's profile states that the business is a certified ceramic coating installer with @feynlabs. Use this section to position ceramic coating as a premium protection-focused service, while avoiding unsupported technical claims or invented warranty details.
            </p>
            <ClientLink to="/contact" className="bg-transparent border border-primary text-primary font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-primary/10 transition-colors rounded inline-block text-center shadow-lg">
              ASK ABOUT CERAMIC COATING
            </ClientLink>
          </FadeIn>
        </div>
      </section>
      
      {/* 4c. Convenience Section */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 uppercase">Mobile Service With Pick Up / Drop Off Available</h2>
            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-8">
              R&M Car Detailing offers premium mobile detailing and notes that pick up/drop off is available. Keep the booking flow flexible so customers can request the option that works best for them.
            </p>
            <ClientLink to="/book" className="bg-[#FFC000] text-black font-bold font-label-caps text-label-caps px-8 py-4 hover:bg-[#e6ad00] transition-colors rounded inline-block text-center shadow-lg">
              REQUEST PICK UP / DROP OFF
            </ClientLink>
          </FadeIn>
        </div>
      </section>

      {/* 5. Process / How It Works */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/10">
        <FadeIn className="mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">PROCESS</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Our simple steps for professional vehicle care.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/20">1</div>
             <h4 className="font-headline-sm text-on-surface mb-2">Contact R&M</h4>
          </div>
          <div className="relative">
             <div className="w-12 h-12 bg-[#FFC000]/10 text-[#FFC000] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-[#FFC000]/20">2</div>
             <h4 className="font-headline-sm text-on-surface mb-2">Share vehicle details</h4>
          </div>
          <div className="relative">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/20">3</div>
             <h4 className="font-headline-sm text-on-surface mb-2">Choose mobile/pickup</h4>
          </div>
          <div className="relative">
             <div className="w-12 h-12 bg-[#FFC000]/10 text-[#FFC000] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-[#FFC000]/20">4</div>
             <h4 className="font-headline-sm text-on-surface mb-2">Confirm appointment</h4>
          </div>
          <div className="relative">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/20">5</div>
             <h4 className="font-headline-sm text-on-surface mb-2">Vehicle care completed</h4>
          </div>
        </div>
      </section>

      {/* 6. Results/Gallery Preview */}
      <section className="py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <FadeIn className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">GALLERY PREVIEW</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">See the transformative results of our premium detailing services.</p>
            </div>
            <ClientLink to="/results" className="hidden md:flex items-center gap-2 text-[#FFC000] font-label-caps text-label-caps hover:text-[#FFC000]/80 transition-colors">
              VIEW FULL GALLERY <span className="material-symbols-outlined">arrow_forward</span>
            </ClientLink>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/rmcar/gallery-1.jpg" alt="R&M Detailing Result 1" className="w-full h-48 object-cover rounded opacity-80 border border-outline-variant/10" />
            <img src="/images/rmcar/gallery-2.jpg" alt="R&M Detailing Result 2" className="w-full h-48 object-cover rounded opacity-80 border border-outline-variant/10" />
            <img src="/images/rmcar/gallery-3.jpg" alt="R&M Detailing Result 3" className="w-full h-48 object-cover rounded opacity-80 border border-outline-variant/10" />
            <img src="/images/rmcar/gallery-4.jpg" alt="R&M Detailing Result 4" className="w-full h-48 object-cover rounded opacity-80 border border-outline-variant/10" />
          </div>
        </div>
      </section>
      
      {/* 7. CTA */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop text-center border-t border-primary/30">
        <FadeIn>
          <h2 className="font-display-md text-display-md mb-6 max-w-2xl mx-auto text-on-surface">CONTACT US TODAY</h2>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Book your mobile detailing appointment with R&M Car Detailing.
          </p>
          <ClientLink to="/book" className="bg-primary text-on-primary font-bold font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(230,0,0,0.3)] inline-block">
            BOOK DETAILING
          </ClientLink>
        </FadeIn>
      </section>

    </div>
  );
};

export default RMCarHome;
