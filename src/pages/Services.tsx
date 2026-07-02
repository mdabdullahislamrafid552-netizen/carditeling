import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Services = () => {
  const { client } = useClient();

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-start overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6iwkRZPiZnG77Ie21lAYSQa7WsTeByK-3R1p5RBaDxuXNNLBSn4FanoUA8BqAy0INKomWEQBSu3XDLcb1sHHKjJXzHjRue9ogIvArbH-DbmhwqQJC6H17KEmIJ3ix3WpJU-noziTowDh0nYq-3pgBhD2e5PYe2q1jejHGVESfOjc41NOXk8ZK0UhDvNiwha0oW8-m_EXgCT98C9lzzO0kMxouf8oWCVRI9WgT2j_OXtxtlror8mte0Szd453Z7kAicVxEhJjhkbV2')" }}></div>
          <div className="absolute inset-0 bg-primary/5 blur-[200px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B0D] via-[#080B0D]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-display-lg font-display-lg text-on-surface mb-6">Our Services</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-xl">
            Meticulous craftsmanship across every stage of detailing. Explore our comprehensive suite of services designed to restore, protect, and elevate your vehicle at {client.name}.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
          {/* Exterior Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full lg:col-span-2">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-gx9VnAxuX-yMAYnoV1jd2X-wKC0mUMR5e4Y_0iuRipOXEz_ZOhuvf0vUQKmrXCLg-bvIFTlIPYNY_En8B2CIx29R-GPrO64NGp955GEDFdjxEvp--KjdPIiCgSRPij4n4e7ZRDMQOoxEyJRmFxPKl7HvKKMUAqW2NCOlQTawIQu96vpZ3y3ysdqMcbtdIL6WX7zdqUNwK-bByzhlV8PM5o3wxsFqid9DBN4bulagHVqlZTvkkj1MwxZqdaMATto-hoSEAqOO31OF" alt="Exterior Detailing" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Exterior</div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-center">
              <h3 className="text-headline-lg font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Signature Wash</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 max-w-2xl flex-grow">A meticulous hand wash using pH-neutral soaps, two-bucket method, and ultra-soft microfiber drying to prevent micro-marring.</p>
              <ClientLink to="/exterior-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link w-max">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Interior Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full lg:col-span-2">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAV2zTRxG_OsHkYYXUo7R6rk9f7UBmdVW2D_Mc3XHd5fheZuvP16YK2J3sx8vWKcwAEuTSzMq5_KNak43mqf0P-EczOBVndfoYvHicqT4nTq2OLvb5rw6P0kPsaYo83xx99FPmslAzDxQnKywXg6JxXZBwCqfpuQjbDdX6OQ2wXSXrxwySpZhvO0SDmxvIl6gDRjtRyhb9_lRjDxH5PNS4NSs3YabeaHKXpMkbu7_uvCCf3wWC90iJGElEO1XCdHyJb25XmKMCphs" alt="Interior Detailing" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Interior</div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-center">
              <h3 className="text-headline-lg font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Deep Interior Detail</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 max-w-2xl flex-grow">Comprehensive steam cleaning, leather conditioning, and stain removal to restore the cabin to a factory-fresh, sterile environment.</p>
              <ClientLink to="/interior-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link w-max">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Paint Correction */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfCoQX24kmGuBGWiZIt5-IiAH1_G5LYBQmo2sFO4pZfeC98G7GWYRd7ulhKx8mVaeqX27iqolSB9eIfcwHTFZYcUFqYQ_dlPap65NOj2O7LalMraboQKwUTI0zFagNv3LtiayaLRX_GlFNIqSMI0BgMNO1iEdY87PA1bcYoSy4stmd7QfB2kAwe6yYC7JsroFQawUutEt5pZOZ73c7Dm_PCi1m6lRkcmIAe1dMZ7baclBN5KGMmuMPXuj6KjPWk6_6E3ZvVNWqHUce" alt="Paint Correction" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Restoration</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Multi-Stage Paint Correction</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Level the clear coat to permanently remove swirl marks, scratches, and oxidation.</p>
              <ClientLink to="/paint-correction" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Ceramic Coating */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzJB-oPkZqOpn6g3jp5Hy_2sbZcPyQzDloT7lFQbC1VdeJGugSU5H47ggOdggpKBihcqIF0TaMmh0GVVun09XwEX2CtUbzm9eKocpU3BwQJnuGkMmUtHp6qtIYQHgV20fmEFjWZuqVa-Gyi5a5Jz9zMHhCuDaVAgIgbB10kH5vvzHiXWUe4V5ufncUWIufpqK5KMhaBhI6yNYXwXH-Ilp3-1-1b_uz1QJ631GIEVyRiTmTlceFeS0_mpwewx7Dntvmt8skN2iDAUKJ" alt="Ceramic Coating" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Protection</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Ceramic Coating</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Long-term nano-ceramic protection for unparalleled gloss, durability, and hydrophobic properties.</p>
              <ClientLink to="/ceramic-coating" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Paint Protection Film */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeY5F2_uE_T1_VjD94t21w_a-uS3Q9r_k6GzK53h1J1bH4yFzY5L_P4fG_a9XJb3W6K4s7P4H8R8tY5pB2N6X2f9t9Q9wZ7lG_D1B3mF_K_J9qG_sQyY0tZ6t9fM_G8jL_R8lH9L9C_Z1T_pG9gZ4dY3zX8H2B7jR6X4lJ9rG5zY8F7G3kX4tJ9Y1H8F_a1Q_K8l" alt="Paint Protection Film" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Protection</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Paint Protection Film</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Clear bra PPF installation to prevent rock chips and road damage.</p>
              <ClientLink to="/paint-protection-film" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Wheel & Caliper Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNS4eBNTrknasUKHnPfPjdTFAsMxhuNrOcwwZT4WaXInCaNXqj2qanGgNRELkYFaTMzR_SCdiqvMyTn3eWpbmKJSchE9xhW3VHq8vto9q-u1-3r1OQpBi-AP8Uy0Oi5EJZkaGEWQZ3L8ZSMk6p7PvA2Jhs09IWz1iIea--7fvYAA-3d5iBmguxTFEsuWbC15IkZLA3PM10zVU8-b0kcVxG1BLzGZc_H8mD5qPZ31hPLlhW42A8EL-4B0YVDN5MoFOt-8Ug4-YFQxhP" alt="Wheel and Caliper Detailing" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Detailing</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Wheel &amp; Caliper Detailing</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Deep clean of wheel faces, inner barrels, and brake calipers with protective coating.</p>
              <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Leather Conditioning */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo7UzkBb27rzJUwEVCbPG_ii7q9dt-011Qizn8goLO7bM3UH3GKMTeYOs65zf4BOwdjSyi_ABJIjGymFujyD202ehhsh_IEsLZBsgvQxaN7rz_gv4DA7fVX1398c8mQT9i4dc5eu_580uA-o_jJJvMK1FBFxptK4vKzam5NpRsXp8HwKYWFwul0cePUn22wb_Di6nRm6O_5oL14tvC08MtWFL-hwrgPI4BmCDl9CIx7wd5lOwlZoLWzkze3Z8xQf_QBFc5CZWj5mGT" alt="Leather Conditioning" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Interior</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Leather Conditioning</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Nourishing and protecting premium leather to prevent cracking and fading.</p>
              <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Engine Bay Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMASUzeKyhEMFnoN3z0y4jgePStM36TjgsgSvUBA9K0ZXl98BF-5Q2Q79WIcv1jygXYu3UrIXXeilxGNVdsyV-xB4Q-f-vG-VwYchOEruaYMqvKvXKpPxB_cXeHn1inbuswCA-kNeqF3-oMcuA8YljPTPI5GpYBF-aAmV7WqorAQbQsB994JjvlFeruLiupTSdO3IKKhX2j3fda6F7Pzm2HFmXhtacB9u4eaxu27Tt4pjIsonNzJBdmz_loISy0Quydi0LVcAfUafd" alt="Engine Bay" />
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Detailing</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Engine Bay Detailing</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Safe degreasing, steam cleaning, and dressing of engine compartments.</p>
              <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Mobile Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/50">local_shipping</span>
              </div>
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">On-Site</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Mobile Detailing</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Premium detailing brought directly to your home or office.</p>
              <ClientLink to="/mobile-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Fleet Detailing */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/50">directions_car</span>
              </div>
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Corporate</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Fleet Detailing</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Maintenance and aesthetic care for corporate and executive fleets.</p>
              <ClientLink to="/fleet-detailing" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

          {/* Headlight Restoration */}
          <div className="bg-[#11171B] border border-outline-variant/30 group cursor-pointer overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/50">highlight</span>
              </div>
              <div className="absolute top-4 left-4 bg-[#11171B] border border-outline-variant/30 text-on-surface-variant px-2 py-1 text-label-caps font-label-caps uppercase rounded-sm">Restoration</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">Headlight Restoration</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">Remove oxidation and restore clarity to aged headlight lenses.</p>
              <ClientLink to="/services" className="text-primary font-bold text-label-caps font-label-caps uppercase inline-flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </ClientLink>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-1/10 w-4/5 h-[2px] bg-outline-variant/30 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">01</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Inspection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Thorough assessment of vehicle condition.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">02</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Preparation</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Safe wash and complete decontamination.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">03</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Correction</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Precision polishing and defect removal.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">04</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Protection</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Application of ceramic coatings and sealants.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">05</div>
              <h4 className="font-headline-lg text-xl text-on-surface mb-2">Quality Check</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Final inspection for absolute perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-margin-mobile md:px-margin-desktop bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARn65Du7zSmIwuapavsHA-e19XudqK2FY6PU7IewT3hIlBDBDBzU9u5wzmt-Y_XCYDUfujRfPffq5ve30EuKuBMb2cd1bU7W3WFO9wLZqpt08j2jx4O7OcqPLFCAbcyhxAE9cqytIOaOcScC9WnjxkTo61s5Y46IaEt-BtteRU8vSM8aTfd2zeAsfwdxVqwp_fBM_OlOnMd5HffqrqNZURlVwhsW5W61oB2cIJ0APQ4E3F9Vk35DBYWSdklazr_icn3lAq8rZstFw-')" }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-xl text-4xl md:text-6xl text-on-surface mb-6">READY TO TRANSFORM YOUR VEHICLE?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Book your premium detailing package with {client.name} today and experience the difference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ClientLink to="/book-detail" className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary/90 transition-colors text-lg">BOOK YOUR DETAIL</ClientLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
