import React, { useState } from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Blog = () => {
  const { client } = useClient();
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'CERAMIC COATING', 'PAINT CORRECTION', 'MAINTENANCE'];

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -z-0 bg-primary/5"></div>
      
      <main className="pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 flex-grow">
        {/* Header & Search/Filters */}
        <header className="mb-section-gap">
          <div className="grid grid-cols-12 gap-gutter items-end">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Journal</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Insights, techniques, and stories from the pinnacle of automotive craftsmanship at {client.name}. Explore our meticulous processes and the vehicles that define exclusivity.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col items-end gap-6 w-full mt-8 md:mt-0">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
                <input className="w-full bg-[#11171B] border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 text-on-surface font-body-md py-4 pl-12 pr-4 transition-colors outline-none" placeholder="Search the journal..." type="text"/>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                {filters.map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`font-label-caps text-label-caps px-4 py-2 border transition-colors rounded ${activeFilter === filter ? 'bg-surface-container-high text-primary border-primary/20' : 'bg-[#11171B] text-on-surface-variant hover:text-on-surface border-outline-variant/10 hover:border-outline-variant/30'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Article Hero */}
        <section className="mb-section-gap relative group cursor-pointer">
          <ClientLink to="/blog/featured-article" className="block">
            <div className="absolute inset-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="grid grid-cols-12 gap-0 border border-outline-variant/10 bg-[#11171B] overflow-hidden rounded">
              <div className="col-span-12 lg:col-span-8 relative h-[400px] lg:h-[600px] overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Featured Article" src="/images/gallery_car_2.jpg"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden"></div>
              </div>
              <div className="col-span-12 lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-[#11171B]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-3 py-1 uppercase tracking-widest border border-outline-variant/10 rounded">Ceramic Coating</span>
                  <span className="text-on-surface-variant font-body-md text-sm">October 24, 2024</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6 group-hover:text-primary transition-colors duration-300">The Anatomy of a Flawless Finish: 9H Ceramic Mastery</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 line-clamp-4">
                  Discover the exacting process behind our signature multi-stage paint correction and 9H ceramic coating application. We delve into the science of surface preparation and the microscopic precision required to achieve a true mirror reflection that stands the test of time.
                </p>
                <div className="mt-auto">
                  <span className="text-primary font-label-caps text-label-caps flex items-center gap-2 uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Read Full Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </ClientLink>
        </section>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-section-gap">
          {/* Card 1 */}
          <ClientLink to="/blog/stage-3-correction">
            <article className="bg-[#11171B] border border-outline-variant/10 rounded group cursor-pointer flex flex-col h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden border-b border-outline-variant/10">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Paint Correction" src="/images/service_ceramic.jpg"/>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest text-[10px]">Paint Correction</span>
                  <span className="text-on-surface-variant font-body-md text-xs">Oct 18, 2024</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 group-hover:text-primary transition-colors duration-300 text-2xl">Stage 3 Correction: Resurrecting Neglected Clear Coat</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  When heavy swirling and deep scratches compromise a vehicle's aesthetic integrity, our Stage 3 correction process is the ultimate intervention. A detailed look at compound aggression and pad selection.
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/10 border-dotted">
                  <span className="text-on-surface font-label-caps text-label-caps flex items-center gap-2 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                    Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                  </span>
                </div>
              </div>
            </article>
          </ClientLink>

          {/* Card 2 */}
          <ClientLink to="/blog/preserving-heritage-leathers">
            <article className="bg-[#11171B] border border-outline-variant/10 rounded group cursor-pointer flex flex-col h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden border-b border-outline-variant/10">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Interior Detailing" src="/images/service_ppf.jpg"/>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest text-[10px]">Interior Detailing</span>
                  <span className="text-on-surface-variant font-body-md text-xs">Oct 12, 2024</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 group-hover:text-primary transition-colors duration-300 text-2xl">Preserving Heritage Leathers &amp; Exotic Materials</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Modern luxury interiors utilize an array of delicate materials. Learn our non-abrasive techniques for cleaning, conditioning, and protecting semi-aniline leathers and matte carbon fiber weaves.
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/10 border-dotted">
                  <span className="text-on-surface font-label-caps text-label-caps flex items-center gap-2 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                    Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                  </span>
                </div>
              </div>
            </article>
          </ClientLink>

          {/* Card 3 */}
          <ClientLink to="/blog/architecture-of-hydrophobicity">
            <article className="bg-[#11171B] border border-outline-variant/10 rounded group cursor-pointer flex flex-col h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden border-b border-outline-variant/10">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Maintenance" src="/images/gallery_car_1.jpg"/>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest text-[10px]">Maintenance</span>
                  <span className="text-on-surface-variant font-body-md text-xs">Oct 05, 2024</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 group-hover:text-primary transition-colors duration-300 text-2xl">The Architecture of Hydrophobicity</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Understanding contact angles and surface tension. Why maintaining the hydrophobic layer of your ceramic coating is critical for long-term preservation and ease of maintenance washes.
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/10 border-dotted">
                  <span className="text-on-surface font-label-caps text-label-caps flex items-center gap-2 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                    Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                  </span>
                </div>
              </div>
            </article>
          </ClientLink>
        </section>

        {/* Newsletter Sign-up */}
        <section className="bg-[#11171B] border border-outline-variant/10 rounded p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f2bd79 0%, transparent 50%)" }}></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">mail</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Join the Inner Circle</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Subscribe to receive exclusive insights on vehicle preservation, early access to premium detailing slots, and technical masterclasses from our experts.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-grow bg-background border border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface font-label-caps text-label-caps py-4 px-6 uppercase placeholder:text-outline-variant transition-colors outline-none rounded" placeholder="ENTER EMAIL ADDRESS" type="email"/>
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
