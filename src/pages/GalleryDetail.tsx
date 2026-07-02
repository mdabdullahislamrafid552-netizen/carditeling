import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const GalleryDetail = () => {
  const { client } = useClient();
  const { vehicleSlug } = useParams();
  
  // Format slug for title
  const title = vehicleSlug 
    ? vehicleSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : "Porsche 911 GT3 RS";

  // Before/After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (isDragging && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let x = clientX - rect.left;
      let position = (x / rect.width) * 100;
      position = Math.max(0, Math.min(position, 100));
      setSliderPosition(position);
    }
  };

  const handleMouseMove = (e: ReactMouseEvent | globalThis.MouseEvent) => {
    handleMove((e as globalThis.MouseEvent).clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent | globalThis.TouchEvent) => {
    handleMove((e as globalThis.TouchEvent).touches[0].clientX);
  };

  useEffect(() => {
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: globalThis.MouseEvent) => handleMouseMove(e);
    const onTouchMove = (e: globalThis.TouchEvent) => handleTouchMove(e);

    if (isDragging) {
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchend', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden antialiased">
      <main className="flex-grow pt-20">
        {/* Hero Section - Full Width */}
        <section className="relative w-full h-[500px] md:h-[819px] flex items-end">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Vehicle Project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB08YDgOeCIzbcYGR0bhk3j3MIy2KjiirkTY8WPayJOFuB_LXlJpS4vvLtoSUZE1BWjxfdeT7_69svlvQPQIKaG2ovtlbIizD-jooix6izlGylXa1ZX88JeMP6OsEYkZFHMjGs5SyayvaaR2N6ewCoc3NAvhReG2w5nRZAdqRY9DAW-VTinWo5hNvRM7YMuk8vYhL_G1XBWa8iGAPN5y6caF4GR6vTPwLfrU_A-gKZt7zyGiKWPAwSB5ctdG-8dT7IyNcLma-It8nyI"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111416] via-[rgba(8,11,13,0.8)] to-transparent"></div>
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-20">
            <div className="max-w-3xl">
              <div className="flex gap-4 mb-6 flex-wrap">
                <span className="bg-[#11171B] text-[#E1E2E5] border border-outline-variant/20 px-4 py-2 font-label-caps text-label-caps rounded-full inline-flex items-center justify-center">STAGE 2 CORRECTION</span>
                <span className="bg-[#11171B] text-[#E1E2E5] border border-outline-variant/20 px-4 py-2 font-label-caps text-label-caps rounded-full inline-flex items-center justify-center">5-YEAR CERAMIC</span>
                <span className="bg-[#11171B] text-[#E1E2E5] border border-outline-variant/20 px-4 py-2 font-label-caps text-label-caps rounded-full inline-flex items-center justify-center">INTERIOR DETAIL</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-4">{title}</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Complete restorative detail and long-term protection for a track-focused masterpiece at {client.name}. Bringing the paintwork back to absolute perfection.</p>
            </div>
          </div>
        </section>

        {/* Project Details Bento */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* The Findings */}
            <div className="md:col-span-5 bg-surface-container-highest p-10 border border-outline-variant/10 rounded-lg relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 relative z-10">Initial Findings</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 relative z-10">Upon inspection under our specialized Scangrip lighting, the vehicle exhibited moderate wash marring, several deeper clear coat scratches on the rear haunches, and significant embedded iron contamination from track use. The interior showed light Alcantara matting on the steering wheel.</p>
              <ul className="space-y-4 relative z-10">
                <li className="flex justify-between border-b border-outline-variant/20 pb-2 border-dotted">
                  <span className="text-on-surface-variant">Paint Condition</span>
                  <span className="text-on-surface">6/10 (Heavy Swirling)</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/20 pb-2 border-dotted">
                  <span className="text-on-surface-variant">Contamination</span>
                  <span className="text-on-surface">High (Track Rubber/Brake Dust)</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/20 pb-2 border-dotted">
                  <span className="text-on-surface-variant">Interior</span>
                  <span className="text-on-surface">8/10 (Light Wear)</span>
                </li>
              </ul>
            </div>

            {/* Detailing Plan */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-[#111416] p-8 border border-outline-variant/10 rounded-lg hover:border-primary/30 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Decontamination</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Intensive chemical and mechanical decontamination to remove embedded iron particles, tar, and track rubber, creating a pristine canvas for correction.</p>
              </div>
              <div className="bg-[#111416] p-8 border border-outline-variant/10 rounded-lg hover:border-primary/30 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Stage 2 Correction</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A heavy compounding step followed by an ultra-fine finishing polish to remove 95%+ of defects and maximize gloss levels.</p>
              </div>
              <div className="bg-[#111416] p-8 border border-outline-variant/10 rounded-lg hover:border-primary/30 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Ceramic Application</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Application of a professional-grade 9H ceramic coating to paint, glass, and wheel faces for extreme durability and self-cleaning properties.</p>
              </div>
              <div className="bg-[#111416] p-8 border border-outline-variant/10 rounded-lg hover:border-primary/30 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>airline_seat_recline_normal</span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Interior Rejuvenation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Steam cleaning and dedicated Alcantara treatment to lift fibers, restoring the factory fresh matte look to all surfaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Interactive */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-10 text-center">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">The Transformation</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Drag the slider to reveal the dramatic difference achieved through our meticulous paint correction process on the passenger side door.</p>
          </div>
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div 
              ref={sliderRef}
              className="relative w-full h-[400px] md:h-[600px] overflow-hidden cursor-ew-resize border border-outline-variant/20 rounded-lg select-none"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <img alt="After Polish" className="absolute inset-0 w-full h-full object-cover z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ltiDa-tT8ovxuyG064FwqZPrKVKG7kg1DhlIVeH-xyZyebJB2sb593_elcukgIO-xsFpsFuG7JHgFaeNwqpH3cbLIjA9zqt4EH5GsnDur92icjX7WTsEH9kKSwGgXN6pSXnJHLIitG2uUE398R3gWV5jpafVQ0pzyCq7KuxiHxAt1V8jiHn7Yz2puJaBcF_UOV10HT5GSg3aCt3F8FDhGohZIFY0kz_rt2lWvbewFmEPZ-Im8W2KUbTPcCOTZ8kV25K0ABFpKPjt"/>
              <img 
                alt="Before Polish" 
                className="absolute inset-0 w-full h-full object-cover z-10" 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvTFLWUw5VNmYAFiVSqAoZcb6tp5ktufWmQJBiHdFbB4FxICIngM5oJcaApAem0-QRVQBTYuIavfpqHvG7EFLbvmGff4b_86iH6CGwO4D3kU6amH5GnAEfbOUnwyxeDfa-ecQRcy-vnSX_qWF9TJhv0AXt1JiTccYA94swhCNGFgUoYtcMPKh8BYBzpxp100-8D0zjO7qyiOeyQtSlDmjjTb4xE80cLhC43x8sZmNDcgVfUqWoK-hIbtSPJ3GG7i-HFVx8Knn1NG49"
              />
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-primary z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-[#111416] flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]">swap_horiz</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery (Asymmetric Layout) */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:auto-rows-[300px]">
            <div className="col-span-1 md:col-span-8 md:row-span-2 group overflow-hidden rounded-lg relative min-h-[300px] md:min-h-0">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6l5o1Dch7O1Nu3ubYljsrS8AVSzdqG-_2NNOysjjW95asZewjuZtGkqbYUDBFKvWM2VIi1PsFVmYSUFBTvoKks_37wT1WJkkJxxR4aNMeIUjlECJ4ruGQb6bV7JNBIrcnITk4P2kIM74W87vQ5gQdM6eGwvJkamB3Ci9Uxfnr2DqhTWRi_-M23J_cmsznmLiVYYLygHaBdealcBl_0oSYfm86TNDZUVpdJGeV1KV36CAOv2pLrC6IWWdvcF96RhmcEw9m9HDeFEJ"/>
            </div>
            <div className="col-span-1 md:col-span-4 group overflow-hidden rounded-lg relative min-h-[300px] md:min-h-0">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnhVRnMEj0uvJ0bcesU1SOqDWe43cU3_eXaUkBLdeFnV5jr9eU1AWL5vpCI-7-Fl7lcDeHYTV7DCRaTI_KRnb0_Gdm0NzsFvSJPGmPEMV10kKPymVtc7XkcA8MAkt-rGFOVi8hfc0EzsIa15rjeEkgAm8imDB4yHIshIIr2nKwjH4e9kNhXRW1jOIXogh6SwDMHGy6F5sEel0AuOdPgKACUON1NBD3yKKdUIMp97wRN0ncxRKgzxZpMHrMNd8IolohTuX6sieeAYk"/>
            </div>
            <div className="col-span-1 md:col-span-4 group overflow-hidden rounded-lg relative min-h-[300px] md:min-h-0">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXG272s44FGDc7T43wG6bWVKCxOKQEB-cYQ9_P-8AXJRRYIl8gJKHlcjdUoLGa-DCdc_hWtwmxh2CxledrKRhYFnc3us5AJCpqe8vAUqZ2xn1KSL-6BLiP0wYXBfxZFVHO6VIgVT8uRoy3IjYfNjYJYRudZVOMbpbseORJcIs6h7ReEjLBdkiwRa9DQc1pVZhjrOghEkxHp3JwH70-_X3bonuHnGAEBG4BQiWGD7DoWqzMUHOaxPMel6riIUxqdNYxt18WTkOggJJ"/>
            </div>
            <div className="col-span-1 md:col-span-6 group overflow-hidden rounded-lg relative min-h-[300px] md:min-h-0">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp9JDl5ksRMRFUOhLnNViobWWOXV-LymmpJaR0HNsH7dMr8Y89-E0AtsWyLmYL41DaBRC3imE7M4y11KVg3Bik_h-E3cuvrzfY0JQsx-aM3rHqinKk0i7WMJTZEI_c1yvY8vsHARIrMvVa9OlHWfcts-mnkfYXSyyistUWaq8d9y73ZgYVrV8v4RL34nprVIe0p90NClamvK6KZQEQ_vsaRoFIubcZ87lJEwSWC8rLYd39UiwCIZhX3AVpGvu1KOsLqhThIaqVKs4l"/>
            </div>
            <div className="col-span-1 md:col-span-6 group overflow-hidden rounded-lg relative min-h-[300px] md:min-h-0">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1ivZo7ZR_u6c98_bTRrUyzW2VlTjhZpD8qKWLy_CpCPFf3JuRw8X8T1qFFn3a9I4YmIpi1-oMrT6M5Z3icJhvfnD0AByNc2XeDtXpjDfglWzXedhw_AlkugCJGrRsi5BpyUmzEMoKfbaqbB9QvIlMty1_ErOXfzwmUpTX5ZQmFRioFbkjI6X46AQvcy4APibuU3hKKKpeTpl41uYVbfi8dffdSsvjZAEQqZ8VL6N-xs9fuDZuPgb-SC4ccPx4Q5RhlPHmYP0Z2Ho"/>
            </div>
          </div>
        </section>

        {/* Final Results & Testimonial */}
        <section className="py-section-gap relative overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-highest z-0"></div>
          {/* Subtly animated background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#f2bd79 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">The Final Verdict</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">After 35 hours of meticulous labor, the vehicle was transformed. The multi-stage correction removed deep-seated track debris and severe marring, revealing a depth to the paintwork that surpassed factory standards. The application of our flagship ceramic coating ensures this pristine finish will withstand the rigors of future track days while remaining effortless to maintain.</p>
              <ClientLink to="/gallery" className="inline-block border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary hover:text-on-primary-fixed transition-colors duration-300">VIEW ALL PROJECTS</ClientLink>
            </div>
            <div className="w-full md:w-1/2 bg-[#111416] p-10 rounded-xl border border-outline-variant/20 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-[#323537] text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="font-body-lg text-body-lg text-on-surface italic mb-6 relative z-10">"I thought the car looked decent when I dropped it off, but seeing it under those studio lights after {client.name} was finished... it was like looking at a different vehicle. The attention to detail in the tightest crevices is what sets them apart. Unbelievable craftsmanship."</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#272a2d] border border-outline-variant/30 flex items-center justify-center font-headline-lg-mobile text-primary">J</div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface">JAMES M.</p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryDetail;
