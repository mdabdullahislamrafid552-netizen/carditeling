import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Home = () => {
  const { client } = useClient();

  return (
    <div className="bg-background">
      {/* 3. Hero Section */}
      <section className="relative min-h-[921px] flex items-center pt-20 pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-container-lowest opacity-40 mix-blend-multiply absolute inset-0 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9y-HkeK3BjIWEQn_lIt_aWj7yeyq33pkOz6tWGik7uASreRzK3GglH4BLn5QQNO-Ar6englcLmOYSQF79mBR0Ahe8sxhkpALlWOpBQb72eHX_EioScIiVpS2j4iQWL6-rpiy3KuZ691cTqck-DGtpeHXTg4QxPtoj-2r1tz30aSulnpy5bOeD_QpO_kZMKwldmkQB5LkJ_iNwQKAMU_KJR_jZXNHzHU4_3jP9rRB9b-R7N_7O1Y01vuOaIjsd_EDDLBwdrTVOpaIi')" }}></div>
        </div>
        <div className="hero-glow z-10"></div>
        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-outline-variant/30 bg-surface/50 backdrop-blur-sm px-4 py-2 w-fit rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Elite Car Detailing</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl text-4xl md:text-7xl leading-tight">
              THE ULTIMATE CAR<br/><span className="text-primary italic pr-2">DETAILING</span> EXPERIENCE
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-primary/50 pl-6">
              {client.seo.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <ClientLink to="/services" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-primary/90 transition-colors rounded inline-block text-center">
                EXPLORE SERVICES
              </ClientLink>
              <ClientLink to="/gallery" className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-8 py-4 hover:bg-surface-variant transition-colors rounded flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">play_circle</span> VIEW GALLERY
              </ClientLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">TRANSFORM YOUR VEHICLE</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">High-quality detailing services tailored for automotive perfection.</p>
          </div>
          <ClientLink className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-primary/90 transition-colors" to="/services">
            ALL SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </ClientLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <ClientLink to="/exterior-detailing" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtWGk7dt1F_zcOxJGNAOFJbleV8cIp7VLqyNJWoufIg54Gy-GFF_A6XrN_EkJ45Qs7MEgWpNOvXyJWAE9zc1HP4Z-YztGm3CFb8H12BCm4vbsvkQpKM4Me5KKSfVoLK91slkogMKJdRsSwxl6F_Lrxf4KezZTmQn5ywM7FUHtqqicWCEVANay0lcz21hGqWA4KxEGL2rcdnEObMRbiW_gGkBxCKlbpwCUofyi3svk9qTQq1T-oxw18RCVUh_za9wAlKTT_y_udjz7G')" }}></div>
            </div>
            <div className="p-6 relative bg-surface">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Exterior Detailing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive hand wash, decontamination, and protection.</p>
            </div>
          </ClientLink>
          <ClientLink to="/interior-detailing" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMASUzeKyhEMFnoN3z0y4jgePStM36TjgsgSvUBA9K0ZXl98BF-5Q2Q79WIcv1jygXYu3UrIXXeilxGNVdsyV-xB4Q-f-vG-VwYchOEruaYMqvKvXKpPxB_cXeHn1inbuswCA-kNeqF3-oMcuA8YljPTPI5GpYBF-aAmV7WqorAQbQsB994JjvlFeruLiupTSdO3IKKhX2j3fda6F7Pzm2HFmXhtacB9u4eaxu27Tt4pjIsonNzJBdmz_loISy0Quydi0LVcAfUafd')" }}></div>
            </div>
            <div className="p-6 relative bg-surface">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Interior Detailing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Deep extraction, thorough vacuuming, and complete sanitization.</p>
            </div>
          </ClientLink>
          <ClientLink to="/paint-correction" className="group relative bg-surface border border-outline-variant/10 overflow-hidden cursor-pointer block">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK7339cMK2gD_iQxNvC5Sdg5gV2givJMJXJYDGy_JTbdILZEC5c7s-rZVGo1Y4Cf9wmkXnSRUHkfmAqlNlGSqy96OxNydWMJQl6C09oTcyG79oqoZl7PZidX3Iyj2MLQkagpM3OcyEGvdWUDOi_CObE1kYGG6CPahPV0A3xbs495u42_SwoZU2RLs-zFFlAoILzp52S07vw91DvZy97JHbyDQMgntKHK5kZ5S5co4kKNUhHzNME_Ck1aAtPL2XJ-AWkwfJ-Nyw4nOl')" }}></div>
            </div>
            <div className="p-6 relative bg-surface">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-2xl">Paint Correction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Multi-stage machine polishing to remove swirls and scratches.</p>
            </div>
          </ClientLink>
        </div>
      </section>

      {/* 5. Premium Vehicle Protection Split Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px]">
            <img alt="Ceramic Coating" className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded shadow-2xl border border-outline-variant/20 z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzJB-oPkZqOpn6g3jp5Hy_2sbZcPyQzDloT7lFQbC1VdeJGugSU5H47ggOdggpKBihcqIF0TaMmh0GVVun09XwEX2CtUbzm9eKocpU3BwQJnuGkMmUtHp6qtIYQHgV20fmEFjWZuqVa-Gyi5a5Jz9zMHhCuDaVAgIgbB10kH5vvzHiXWUe4V5ufncUWIufpqK5KMhaBhI6yNYXwXH-Ilp3-1-1b_uz1QJ631GIEVyRiTmTlceFeS0_mpwewx7Dntvmt8skN2iDAUKJ" />
            <img alt="Leather Interior" className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded shadow-2xl border border-outline-variant/20 z-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo7UzkBb27rzJUwEVCbPG_ii7q9dt-011Qizn8goLO7bM3UH3GKMTeYOs65zf4BOwdjSyi_ABJIjGymFujyD202ehhsh_IEsLZBsgvQxaN7rz_gv4DA7fVX1398c8mQT9i4dc5eu_580uA-o_jJJvMK1FBFxptK4vKzam5NpRsXp8HwKYWFwul0cePUn22wb_Di6nRm6O_5oL14tvC08MtWFL-hwrgPI4BmCDl9CIx7wd5lOwlZoLWzkze3Z8xQf_QBFc5CZWj5mGT" />
          </div>
          <div>
            <div className="mb-4 text-primary font-label-caps text-label-caps tracking-widest uppercase">PREMIUM VEHICLE PROTECTION</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">QUALITY CAR SERVICES YOU CAN TRUST</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Unmatched paint preservation against environmental contaminants.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Long-term gloss enhancement and hydrophobic properties.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Deep interior protection preserving leather and fabrics.</span></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="text-on-surface-variant">Exclusive use of premium-grade professional equipment.</span></li>
            </ul>
            <div className="flex gap-4">
              <ClientLink to="/services" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors">EXPLORE SERVICES</ClientLink>
              <ClientLink to="/contact" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/10 transition-colors">CONTACT US</ClientLink>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Five-Step Professional Detailing Process */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-center font-headline-xl text-headline-xl text-on-surface mb-16">OUR PROCESS</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-outline-variant/30 z-0"></div>
            <div className="hidden md:block absolute top-6 left-0 w-1/2 h-[2px] bg-primary z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">01</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Inspection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Thorough assessment of vehicle condition.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">02</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Preparation</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Safe wash and complete decontamination.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold mb-4">03</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Cleaning &amp; Correction</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Precision polishing and defect removal.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-bold mb-4">04</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Protection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Application of ceramic coatings and sealants.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-bold mb-4">05</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Quality Check</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Final inspection for absolute perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Final High-Ticket CTA */}
      <section className="relative py-32 px-margin-mobile md:px-margin-desktop bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARn65Du7zSmIwuapavsHA-e19XudqK2FY6PU7IewT3hIlBDBDBzU9u5wzmt-Y_XCYDUfujRfPffq5ve30EuKuBMb2cd1bU7W3WFO9wLZqpt08j2jx4O7OcqPLFCAbcyhxAE9cqytIOaOcScC9WnjxkTo61s5Y46IaEt-BtteRU8vSM8aTfd2zeAsfwdxVqwp_fBM_OlOnMd5HffqrqNZURlVwhsW5W61oB2cIJ0APQ4E3F9Vk35DBYWSdklazr_icn3lAq8rZstFw-')" }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-xl text-4xl md:text-6xl text-on-surface mb-6">YOUR VEHICLE DESERVES EXCEPTIONAL CARE</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Experience the pinnacle of automotive detailing. Secure your appointment with our master technicians today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book-detail" className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary/90 transition-colors text-lg">BOOK YOUR DETAIL</ClientLink>
            <a href={`tel:${client.contact.phone.replace(/[^0-9+]/g, '')}`} className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-10 py-5 rounded hover:bg-surface-variant transition-colors text-lg flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> CALL NOW
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
