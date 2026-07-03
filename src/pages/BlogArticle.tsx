import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const BlogArticle = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="flex-grow pt-32 pb-section-gap relative z-10">
        {/* Cinematic Hero */}
        <header className="relative w-full h-[614px] min-h-[500px] flex items-end pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg border border-outline-variant/10">
            <div className="bg-cover bg-center w-full h-full opacity-60" style={{ backgroundImage: "url('/images/gallery_car_1.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-6 font-label-caps text-label-caps text-primary">
              <ClientLink to="/blog" className="hover:text-primary-container transition-colors">BLOG</ClientLink>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-on-surface-variant">CERAMIC COATING</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">The Science Behind True Ceramic Coating Durability</h1>
            <div className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                <span>October 12, 2024</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">schedule</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-[800px] mx-auto px-margin-mobile md:px-0 mt-16 font-body-lg text-body-lg text-on-surface-variant space-y-8">
          <p className="text-xl leading-relaxed text-on-surface">
            In the realm of high-end automotive care, the term "ceramic coating" is frequently bandied about, often with promises of invincibility. However, true durability isn't born from simply wiping a liquid across clear coat; it's engineered through meticulous preparation, precise environmental control, and understanding the molecular bonding process.
          </p>

          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-16 mb-8">Preparation: The Foundation of Permanence</h2>
          <p>
            The longevity of any ceramic coating is intrinsically linked to the surface it bonds with. Even microscopic contaminants—iron particles, residual waxes, or minute scratches—compromise the molecular cross-linking required for a true ceramic shell to form. This is why our paint correction stage isn't merely an aesthetic choice; it's a structural necessity.
          </p>

          <div className="my-12 relative rounded-lg overflow-hidden border border-outline-variant/10">
            <img className="w-full h-auto object-cover" alt="Stage 2 Paint Correction" src="/images/gallery_car_4.jpg"/>
            <div className="p-4 bg-[#11171B] text-sm text-center font-label-caps text-label-caps tracking-widest border-t border-outline-variant/10">Stage 2 Paint Correction in Progress</div>
          </div>

          <h3 className="font-headline-lg text-headline-lg text-on-surface mt-12 mb-6">The Molecular Bond</h3>
          <p>
            Unlike traditional waxes or polymer sealants that sit passively on the surface, professional-grade ceramic coatings react chemically with the vehicle's clear coat. They form a covalent bond, essentially becoming a new, microscopic layer of the paint system itself. This quartz-like structure provides unparalleled resistance to UV degradation, chemical etching, and environmental fallout.
          </p>

          <ul className="space-y-4 my-8 pl-4 border-l-2 border-primary">
            <li className="pl-4"><strong>Hydrophobic Properties:</strong> Water beads and rolls off, encapsulating dirt and carrying it away, creating a self-cleaning effect.</li>
            <li className="pl-4"><strong>Chemical Resistance:</strong> Acts as a sacrificial barrier against bird droppings, tree sap, and harsh detergents that would otherwise etch the clear coat.</li>
            <li className="pl-4"><strong>UV Protection:</strong> Prevents oxidation and fading by blocking harmful ultraviolet rays.</li>
          </ul>

          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-16 mb-8">The {client.name} Standard</h2>
          <p>
            We do not compromise. Our application environment is rigorously climate-controlled to ensure optimal curing conditions. We utilize exclusively multi-layer, professional-only SiO2 formulations, applied with the precision expected of curatorial asset management. The result is a finish that doesn't just look cinematic; it performs under pressure.
          </p>

          {/* Author Bio */}
          <div className="mt-24 p-8 bg-[#11171B] border border-outline-variant/10 rounded-lg flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-outline-variant/30">
              <img className="w-full h-full object-cover" alt="Elias Thorne" src="/images/service_engine.jpg"/>
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-primary mb-2">WRITTEN BY</div>
              <h4 className="font-headline-lg text-headline-lg text-on-surface mb-2">Elias Thorne</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Lead Detailer &amp; Paint Correction Specialist at {client.name}. With over a decade of experience curating high-net-worth vehicle portfolios, Elias brings uncompromising standards to every project.</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;
