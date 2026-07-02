import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Gallery = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Hero Title */}
        <div className="mb-16">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 tracking-tight">Our Portfolio</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A curated selection of our finest detailing commissions at {client.name}. Witness the transformative power of precision engineering, state-of-the-art ceramic coatings, and meticulous paint correction on elite vehicles.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-outline-variant/20 pb-6">
          <button className="font-label-caps text-label-caps px-6 py-2 rounded-full bg-primary/10 text-primary border border-primary transition-colors">ALL</button>
          <button className="font-label-caps text-label-caps px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors">EXTERIOR</button>
          <button className="font-label-caps text-label-caps px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors">INTERIOR</button>
          <button className="font-label-caps text-label-caps px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors">CERAMIC COATING</button>
          <button className="font-label-caps text-label-caps px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors">LUXURY VEHICLES</button>
        </div>

        {/* Asymmetric Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Feature Item 1 */}
          <ClientLink to="/gallery/porsche-911-gt3-rs" className="md:col-span-8 md:row-span-2 group relative rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low min-h-[400px] md:min-h-[600px] cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2oPGL_P9V-tl45aZ5nZL2zx4ikQybCcsbZcE6Zme4DctkfmkWT---ADiynuei8WDOiXWtayyLvBzRYF8IYYyFUAhO3zCYrqX7wGav7DUoHeAIQBLw4Rjlj6XKwgUMDSZ4u8yZoT1DdXPNxDwl6tW6iHixH6J6lA4elHKBN3k2S9SBVeLhlBFhqVGhKoEu_Y0zeRolxVrbnNjxjwRuFfhELu3b7YWHHF6JnrsRtig376iQ3lCSii9i0PA2sUiddOayRoInjgCMKmwT')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <div className="inline-block bg-surface-container/80 backdrop-blur-md px-3 py-1 mb-3 rounded-sm border border-outline-variant/30">
                  <span className="font-label-caps text-label-caps text-secondary">Stage 3 Polish &amp; Ceramic</span>
                </div>
                <h3 className="font-headline-xl text-headline-xl text-on-surface">Porsche 911 GT3 RS</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span> {client.name} Studio
                </p>
              </div>
            </div>
          </ClientLink>

          {/* Smaller Item 2 */}
          <ClientLink to="/gallery/ferrari-f8" className="md:col-span-4 group relative rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low min-h-[288px] cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA003QB47dKYbqNQWg1Nf88C1frzzGM0ycfDL2OUQCEcMj80Xd-EeGWp83gOAM4_Ih_1ThM33mgQWTa0EvtEowpqq_lOnyRtE_sD0rFUSubRwRagEliUi0KdXefvbDXzDCXzFlcA6JAHoY8GCy4U-0v_BXfSwk4-QmmZuSuWd0NpP7tq1xSu4wi5QJqPUEe_hbSn48cP7swC1hS4zYFn45fLG6wpUpZ1snq_9KIBHZYLkUIwsk2k_LP6ngaOUnQFGCHf8OTnK_onbFe')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="font-headline-lg text-headline-lg text-on-surface text-xl">Wheel &amp; Caliper Refinement</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Ferrari F8 Tributo</p>
            </div>
          </ClientLink>

          {/* Smaller Item 3 */}
          <ClientLink to="/gallery/bentley-continental" className="md:col-span-4 group relative rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low min-h-[288px] cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeUCkUq6gNXtUp6xD8ij0RhO7u44DoHgI-BfntyUuJL0IFDEV0VQC3I2QSyGhtM65Rg_UNizw2SJ-18Vpw3ebM9OHw_oujddfcGdvdrePNTZeYsdxNTwkKmjoB9VqbtjDamqWM2qBbYFV8m8Xt6x1XnFRzOGknEDhKRfI4fyaBhdVsWI-b2FLvBBpE1u5m57lV95zgqqbBNsZz7-yIrs5L-RMjs_XJjCE3xvt6jfNGM_bpVrlgbkDMzg0AT3p1mxpWXwKQ8KIl8EW8')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="font-headline-lg text-headline-lg text-on-surface text-xl">Leather Restoration</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Bentley Continental GT</p>
            </div>
          </ClientLink>

          {/* Medium Item 4 */}
          <ClientLink to="/gallery/aston-martin-vantage" className="md:col-span-6 group relative rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low min-h-[400px] cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCypDxQg_Oi5ZitxZ9kQqBBhU7XhMnxOz0IDoNRgUN8dJaYzHzCwwyMWtpKWI4eddgEr-lKXeOiTu46gmWIIP9xs-0xg1-TllCw4aQtvq5RZ31RVXmjKf1NwMHs9dpAVdU936VfwYzmiYpmzdMo7KIWYY95L4NoYihBTHfjiO8-gcQberYP1hLh4k-RtnCFbnRnzroXRn9Yrsv0XTLWGZv9nacrkw3b95UukIZn9dfPN_d6Fe52CX9bYSsZv_KzzVdYVNk7ey_DvxgJ')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="inline-block bg-surface-container/80 backdrop-blur-md px-3 py-1 mb-3 rounded-sm border border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary">Paint Correction</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Aston Martin Vantage</h3>
            </div>
          </ClientLink>

          {/* Medium Item 5 */}
          <ClientLink to="/gallery/mclaren-720s" className="md:col-span-6 group relative rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low min-h-[400px] cursor-pointer block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFcPYqCz3tATHDNjurglGkylJ2Ll05u5C2K5A8XM6A4scZIsmODPJkog5fmmQJJIcRIHzHmhOwlcV7a6p6IwnTfcy5-1QKgZx8w1NX_R8KVS-ohCSQ7XewP-XpcceJpcBtEFDt0mxb8YwU9MojOnFTWXiV8fC8sbfBACUDwq1PZafJM4jHnlKO8Cga0KZOmJ99jue3-kZ9cJGpxmOb5QyVq9seO8xDFlXbESrxe1Ecl_haqF9Glqg9f7WzcxgotLmPnLyXablRiAwk')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="inline-block bg-surface-container/80 backdrop-blur-md px-3 py-1 mb-3 rounded-sm border border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary">Hydrophobic Seal</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">McLaren 720S</h3>
            </div>
          </ClientLink>
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 text-center bg-surface/60 backdrop-blur-xl border border-outline-variant/20 rounded-xl p-8 md:p-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6 relative z-10">Demand Perfection.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 relative z-10">
            Your vehicle deserves the uncompromising standard of {client.name}. Secure your commission for elite paint correction and ceramic protection.
          </p>
          <ClientLink to="/contact" className="relative z-10 bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary-fixed transition-colors tracking-widest inline-flex items-center gap-3">
            BOOK A CONSULTATION <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </ClientLink>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
