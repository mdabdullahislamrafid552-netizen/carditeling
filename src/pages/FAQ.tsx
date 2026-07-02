import React, { useState } from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bg-[#11171B] border border-outline-variant/10 rounded cursor-pointer transition-colors ${isOpen ? 'border-primary/50' : 'hover:border-outline-variant/30'}`}>
      <div className="flex justify-between items-center p-6" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-body-lg text-body-lg text-on-surface font-bold">{question}</h3>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'}`}>
        <p className="text-on-surface-variant font-body-md text-body-md">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { client } = useClient();
  const [activeTab, setActiveTab] = useState('GENERAL');

  const tabs = ['GENERAL', 'CERAMIC COATING', 'PAINT CORRECTION', 'PPF', 'MOBILE DETAILING', 'MAINTENANCE'];

  return (
    <div className="bg-[#080B0D] min-h-screen flex flex-col font-body-md overflow-x-hidden">
      {/* Main Content */}
      <main className="pt-32 pb-section-gap relative flex-grow">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-primary/5 pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-primary/5 pointer-events-none -z-0"></div>
        
        {/* Hero & Search */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <p className="font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase">Support Center</p>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-8">Frequently Asked Questions</h1>
              <div className="relative max-w-2xl">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
                <input className="w-full bg-[#11171B] border-b border-outline-variant/30 text-on-surface py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors font-body-lg text-body-lg" placeholder={`Search for answers about ${client.name}...`} type="text" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Accordion */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Sidebar Categories */}
          <aside className="md:col-span-3 mb-8 md:mb-0">
            <div className="md:sticky md:top-32 flex flex-row md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left py-4 px-2 font-label-caps text-label-caps whitespace-nowrap border-b transition-colors ${activeTab === tab ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </aside>

          {/* FAQ Content */}
          <div className="md:col-span-8 md:col-start-5 flex flex-col gap-6">
            <FAQItem 
              question="How long does ceramic coating last?" 
              answer="Our professional-grade ceramic coatings typically last between 2 to 5 years, depending on the specific package chosen and how the vehicle is maintained. Regular washing using pH-neutral soaps and avoiding automated car washes will maximize the longevity of the coating." 
            />
            <FAQItem 
              question="What is the difference between polishing and correction?" 
              answer="Polishing is a less aggressive process designed to enhance gloss and remove very minor surface imperfections like light hazing. Paint correction is a more intensive, multi-stage process that removes deeper scratches, swirl marks, and oxidation by safely removing a microscopic layer of clear coat." 
            />
            <FAQItem 
              question="Do you need my car for multiple days?" 
              answer="For extensive services like multi-stage paint correction combined with a ceramic coating or full PPF installation, we require the vehicle for 2-4 days. This allows adequate time for meticulous preparation, application, and the necessary curing time in our controlled environment before the vehicle is exposed to the elements." 
            />
            <FAQItem 
              question="Can ceramic coating be applied over PPF?" 
              answer="Yes, and it is highly recommended. Applying a specialized ceramic coating over Paint Protection Film enhances the film's hydrophobic properties, makes it easier to clean, and provides an additional layer of UV protection to prevent premature yellowing or degradation of the film." 
            />
          </div>
        </section>

        {/* Support Card & CTA */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-[#11171B] border border-outline-variant/10 p-12 flex flex-col justify-between rounded">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">support_agent</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Still have questions?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Our detailing specialists at {client.name} are available to discuss your specific vehicle needs and recommend the perfect service package.</p>
            </div>
            <ClientLink to="/contact" className="font-label-caps text-label-caps text-primary hover:text-on-surface transition-colors flex items-center gap-2 uppercase tracking-widest w-fit">
              Contact Support <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </ClientLink>
          </div>

          <div className="relative bg-surface rounded overflow-hidden flex flex-col justify-end min-h-[400px]">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRTxjFHq24m6X96XWCdNgkMSC_7bR9M0zXnbSZV4bfUn2m2pJYGS1_ebB_05Gl51AQFK0coZcecFN2C8Lwy0eOyWQXQw5KzWGQ9Cn1r0l_vqTa1HGIUjUcOlla_haBqLqfkWT3tRd4CQHLOlr3clz01qIO_3cjIDyWBGN8RoayBEgZvj8IqNEaU3G3k-o06HmCZTvZ2-ZEqj8Z4FAFCGat_CUqeEuQZ3xv2ewh7SQECQrasxXneobMYeoHWR_aysnE4Fx6OEh8TfWg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/50 to-transparent pointer-events-none"></div>
            <div className="relative z-10 p-12">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Ready for perfection?</h3>
              <ClientLink to="/book-detail" className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded hover:bg-primary-fixed transition-colors duration-300 w-fit inline-block">BOOK YOUR DETAIL</ClientLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
