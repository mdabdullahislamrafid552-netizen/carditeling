import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Packages = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md antialiased">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative">
        {/* Subtle Glow Accent for Studio Vibe */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary rounded-full blur-[200px] opacity-5 pointer-events-none -z-10"></div>
        
        {/* Hero Section */}
        <section className="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Precision Packages.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">
              Meticulously engineered detailing tiers designed for the uncompromising automotive enthusiast. Select a package to elevate and protect your asset at {client.name}.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant font-label-caps text-label-caps uppercase">
                <span className="material-symbols-outlined mr-2" style={{ fontSize: '16px' }}>verified</span> Paint Correction
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 text-on-surface-variant font-label-caps text-label-caps uppercase">
                <span className="material-symbols-outlined mr-2" style={{ fontSize: '16px' }}>shield</span> Ceramic Coating
              </span>
            </div>
          </div>
          <div className="md:col-span-6 relative h-[400px] md:h-[600px] rounded-lg overflow-hidden group">
            <div className="absolute inset-0 border border-outline-variant/10 z-10 pointer-events-none rounded-lg"></div>
            <img className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105" alt="Pristine metallic black sports car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqsw_Hs_bkdbt052kZRlfI1aWTz2ye-rPyxtsmMvUsb9t7MIMBpXEEpP93O2uvoz2P33JcdNkbKzIaJNeG67uTKlQtDA-seUKoi84rb5WYGmYXgZVhHTmePLJ4xgj_L_acpy0iHPbUpM0_E73VPhfWeAN5meZB8dHYYXoQyzxnuTrDHL7WuInkNpKOT9RdxWbnRJAFiMWF1eXqNfRwHoZUia0gcqiHcQOSKr3Zg6GO67TJCWkXj1I9PpNA9JKteuua6LHVSDGspMEr"/>
          </div>
        </section>

        {/* Tiered Packages Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          {/* Tier 1: Signature Exterior */}
          <div className="md:col-span-4 bg-surface rounded-lg p-8 border border-outline-variant/10 flex flex-col relative group hover:border-primary/30 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Signature Exterior</h2>
                <div className="text-primary font-headline-lg text-headline-lg mb-4">From $295</div>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 md:h-12">Essential revitalization focusing on deep decontamination and gloss enhancement.</p>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps uppercase mb-8">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span> Approx 3-4 Hours
                </div>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 font-body-md text-body-md">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Foam Cannon Pre-Soak &amp; Hand Wash</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Chemical Iron Decontamination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Clay Bar Treatment (Paint &amp; Glass)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Premium Silica Sealant Application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Wheel Face &amp; Barrel Detailing</span>
                  </li>
                </ul>
              </div>
              <ClientLink to="/book-detail" className="mt-10 w-full py-4 border border-outline-variant/30 text-on-surface rounded font-label-caps text-label-caps uppercase hover:bg-surface-container-high hover:text-primary hover:border-primary/50 transition-all duration-300 block text-center">
                Select Package
              </ClientLink>
            </div>
          </div>

          {/* Tier 2: Complete Restoration (Most Popular) */}
          <div className="md:col-span-4 bg-surface rounded-lg p-8 border border-primary/50 flex flex-col relative group overflow-hidden shadow-[0_0_40px_rgba(242,189,121,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 bg-primary text-on-primary-fixed px-4 py-1 font-label-caps text-label-caps uppercase rounded-bl-lg">
              Most Popular
            </div>
            <div className="relative z-10 flex flex-col h-full mt-4">
              <div className="mb-6">
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Complete Restoration</h2>
                <div className="text-primary font-headline-lg text-headline-lg mb-4">From $650</div>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 md:h-12">Comprehensive detailing inside and out, bringing the vehicle back to a showroom state.</p>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps uppercase mb-8">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span> Approx 6-8 Hours
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-on-surface-variant font-label-caps text-label-caps uppercase mb-4 tracking-widest border-b border-outline-variant/10 pb-2">Includes Signature Ext +</div>
                <ul className="space-y-4 font-body-md text-body-md">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Deep Steam Cleaning of Surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Leather Cleaning &amp; Conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Carpet &amp; Upholstery Extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Engine Bay Detailing &amp; Dressing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">1-Step Light Gloss Enhancement Polish</span>
                  </li>
                </ul>
              </div>
              <ClientLink to="/book-detail" className="mt-10 w-full py-4 bg-primary text-on-primary-fixed rounded font-label-caps text-label-caps uppercase hover:opacity-90 transition-opacity duration-300 font-bold block text-center">
                Select Package
              </ClientLink>
            </div>
          </div>

          {/* Tier 3: Ultimate Protection */}
          <div className="md:col-span-4 bg-surface rounded-lg p-8 border border-outline-variant/10 flex flex-col relative group hover:border-primary/30 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Ultimate Protection</h2>
                <div className="text-primary font-headline-lg text-headline-lg mb-4">From $1,450</div>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 md:h-12">The pinnacle of aesthetic refinement, featuring multi-stage correction and ceramic armor.</p>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps uppercase mb-8">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span> Approx 2-3 Days
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-on-surface-variant font-label-caps text-label-caps uppercase mb-4 tracking-widest border-b border-outline-variant/10 pb-2">Includes Complete Rest. +</div>
                <ul className="space-y-4 font-body-md text-body-md">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">2-Stage Paint Correction (Swirl Removal)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">5-Year Professional Ceramic Coating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Wheel Faces Ceramic Coated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Windshield Glass Coating applied</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1" style={{ fontSize: '20px' }}>check</span>
                    <span className="text-on-surface">Interior Surface Ceramic Protection</span>
                  </li>
                </ul>
              </div>
              <ClientLink to="/book-detail" className="mt-10 w-full py-4 border border-outline-variant/30 text-on-surface rounded font-label-caps text-label-caps uppercase hover:bg-surface-container-high hover:text-primary hover:border-primary/50 transition-all duration-300 block text-center">
                Select Package
              </ClientLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Packages;
