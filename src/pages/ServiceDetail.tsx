import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const ServiceDetail = () => {
  const { client } = useClient();
  const { serviceSlug } = useParams();
  const location = useLocation();

  // Determine title based on route or slug
  let title = "Exterior Detailing";
  let subtitle = "Flawless Imperfection Finish.";
  
  if (location.pathname.includes('ceramic-coating')) {
    title = "Ceramic Coating";
    subtitle = "9H Permanent Protection.";
  } else if (location.pathname.includes('paint-correction')) {
    title = "Paint Correction";
    subtitle = "Resurrecting Neglected Clear Coat.";
  } else if (location.pathname.includes('paint-protection-film')) {
    title = "Paint Protection Film";
    subtitle = "Invisible Armor.";
  } else if (location.pathname.includes('interior-detailing')) {
    title = "Interior Detailing";
    subtitle = "Preserving Heritage Leathers.";
  } else if (location.pathname.includes('mobile-detailing')) {
    title = "Mobile Detailing";
    subtitle = "Perfection at Your Doorstep.";
  } else if (location.pathname.includes('fleet-detailing')) {
    title = "Fleet Detailing";
    subtitle = "Corporate Excellence.";
  } else if (serviceSlug) {
    title = serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[700px] md:min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full overflow-visible py-section-gap">
          {/* Cinematic Glow */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[250px] rounded-full pointer-events-none transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-12 gap-gutter w-full relative z-10 items-center">
            {/* Typography / Left Column */}
            <div className="col-span-12 md:col-span-5 flex flex-col space-y-8 md:pr-12">
              <div className="flex items-center space-x-4">
                <div className="h-px w-8 bg-primary"></div>
                <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase">{title}</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface uppercase">
                {subtitle.split(' ').map((word, i, arr) => {
                  if (i === 1) return <React.Fragment key={i}><span className="text-surface-variant line-through decoration-primary decoration-4">{word}</span><br/></React.Fragment>;
                  if (i === arr.length - 1) return <span key={i} className="text-on-surface-variant">{word}</span>;
                  return <React.Fragment key={i}>{word}<br/></React.Fragment>;
                })}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md border-l border-outline-variant/30 pl-6">
                Meticulous, multi-stage correction and protection for automotive masterpieces at {client.name}. We elevate paintwork beyond factory standards using technical precision and cutting-edge nano-abrasives.
              </p>
              <div className="pt-8 flex space-x-6">
                <ClientLink to="/packages" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase hover:bg-primary-container transition-colors duration-300 tracking-widest flex items-center space-x-2 rounded w-fit">
                  <span>Explore Packages</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </ClientLink>
              </div>
            </div>
            
            {/* Asymmetric Imagery / Right Column */}
            <div className="col-span-12 md:col-span-7 relative h-[500px] md:h-[700px] w-full mt-12 md:mt-0">
              <div className="absolute inset-0 bg-[#111416] border border-outline-variant/10 md:transform md:translate-x-12 md:translate-y-8 overflow-hidden group rounded">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(156,142,128,0.15)_1px,transparent_1px)] [background-size:16px_16px] z-10 opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent z-10"></div>
                <img className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out" alt="Exterior Detailing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTJ-UAx8QSGDvix9ksFa3xbmJ8f5Oxitr0M2k6-o2TSShb9J_zaBHLSp1oR9DUZnJCEpSdD5Q65xpw5PrDSBik32Gy4cdPhU2rQ8xbcyhwUeKZzCxI-DSJBxNC8NUV2WgMfAlZ-zGKrrvAT7wWNHHlExfCpfmcKJ-kMf_O8y4yTK8u7drzYkbNNx4FrMrc4b5-wGEFWTvhE3Sb4ieiYo0jz--coeOvXFTgFv3tfOT-NDbjs3AWlp4o1LIJJNduqmMEArsXg27soR-D"/>
                
                {/* Technical Overlay Element */}
                <div className="absolute bottom-8 right-8 z-20 bg-[#11171B]/90 backdrop-blur-md border border-outline-variant/30 p-4 flex items-center space-x-4 rounded hidden sm:flex">
                  <span className="material-symbols-outlined text-primary font-light text-[32px]">architecture</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Clear Coat Status</span>
                    <span className="font-body-md text-body-md text-on-surface">100% Defect Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Methodology (Bento Grid) */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative">
          {/* Separator Line */}
          <div className="hidden md:block absolute top-0 left-margin-desktop right-margin-desktop h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
          
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">Precision Workflow</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase">The Methodology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:auto-rows-[340px]">
            {/* Stage 1: Safe Wash (Large span) */}
            <div className="col-span-1 md:col-span-8 md:row-span-2 bg-[#191c1e] border border-outline-variant/10 relative overflow-hidden group p-8 md:p-12 flex flex-col justify-end rounded min-h-[400px] md:min-h-0">
              <div className="absolute inset-0 bg-[#0b0f11]/50 z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" alt="Safe Wash" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8SQWVPoex5qU7ymEFaIP7ugCNW2ZlgrGqpfC5uf91WD03mNTcSgPXzMRFfhGyHcOhnxilP1XKabLNfFxJxoIT5WsK4WnAIlH1RiIGG23LS6AeyVWE8bSLGk_Gx8rWvUGyr92xerhk4NZbISDDDsyl4aYYWTB1OPBHz6nLd24qF83BXepBSyhdGZ1Ye7Jr7oRZq7dK0r3Y0Dy7yBrcespsn9fmSUXSzrnrZYd78H_thS0cqgMlYw6w5caEyEvTsy2i-QLPZbOSXHPe"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f11] via-[#0b0f11]/80 to-transparent z-10"></div>
              <div className="relative z-20 flex flex-col items-start md:w-2/3">
                <div className="bg-[#111416] border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest flex items-center space-x-2 rounded">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>Stage 01</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">De-ionized Safe Wash</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Touchless alkaline foam cannon application followed by a meticulous two-bucket contact wash using ultra-plush microfiber and high-lubricity shampoos to eliminate the risk of wash-induced marring.</p>
              </div>
            </div>

            {/* Stage 2: Decontamination */}
            <div className="col-span-1 md:col-span-4 md:row-span-1 bg-[#1d2022] border border-outline-variant/10 p-8 flex flex-col justify-between group hover:border-outline-variant/30 transition-colors rounded min-h-[300px] md:min-h-0">
              <div className="flex justify-between items-start">
                <div className="bg-[#272a2d] border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest rounded">Stage 02</div>
                <span className="material-symbols-outlined text-primary text-[28px] opacity-70 group-hover:opacity-100 transition-opacity">healing</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-[24px]">Chemical &amp; Mechanical Decon</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ferrous iron removal and highly-lubricated clay bar treatment extracting embedded industrial fallout, tar, and sap from the clear coat pores.</p>
              </div>
            </div>

            {/* Stage 3: Polishing */}
            <div className="col-span-1 md:col-span-4 md:row-span-1 bg-[#111416] border border-outline-variant/10 p-8 flex flex-col justify-between group hover:border-outline-variant/30 transition-colors rounded min-h-[300px] md:min-h-0">
              <div className="flex justify-between items-start">
                <div className="bg-[#272a2d] border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest rounded">Stage 03</div>
                <span className="material-symbols-outlined text-primary text-[28px] opacity-70 group-hover:opacity-100 transition-opacity">blur_on</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 text-[24px]">Defect Correction</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Multi-stage Dual Action machine polishing utilizing diminishing abrasives to permanently level swirls, scratches, and oxidation.</p>
              </div>
            </div>

            {/* Stage 4: Protection (Wide span bottom) */}
            <div className="col-span-1 md:col-span-12 md:row-span-1 bg-[#0b0f11] border border-outline-variant/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group rounded">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col max-w-lg z-10 w-full mb-8 md:mb-0">
                <div className="bg-[#111416] border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest self-start rounded">Stage 04</div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Sealant &amp; Ceramic Protection</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Locking in the flawless finish. From synthetic polymer sealants offering 6-month durability to 9H professional-grade ceramic coatings yielding years of hydrophobic armor.</p>
              </div>
              
              {/* Technical Specs List Graphic */}
              <div className="z-10 flex flex-col w-full md:w-[400px] space-y-4 md:border-l border-outline-variant/20 md:pl-12">
                <div className="flex justify-between items-center border-b border-outline-variant/10 border-dashed pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Contact Angle</span>
                  <span className="font-body-md text-body-md text-primary">110°+ Hydrophobic</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/10 border-dashed pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Hardness Level</span>
                  <span className="font-body-md text-body-md text-primary">Up to 9H Pencil</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/10 border-dashed pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Chemical Resistance</span>
                  <span className="font-body-md text-body-md text-primary">pH 2 - pH 11</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetail;
