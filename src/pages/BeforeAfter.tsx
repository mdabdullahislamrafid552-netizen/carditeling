import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const ImageSlider = ({ beforeSrc, afterSrc }: { beforeSrc: string, afterSrc: string }) => {
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
    <div 
      ref={sliderRef}
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden cursor-ew-resize border border-outline-variant/10 bg-[#11171B] rounded-lg select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      <img alt="Before" className="absolute inset-0 w-full h-full object-cover z-0" src={beforeSrc} />
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden z-10 border-r-2 border-primary" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          alt="After" 
          className="absolute top-0 left-0 h-full max-w-none object-cover" 
          style={{ width: sliderRef.current ? sliderRef.current.offsetWidth : '100vw' }}
          src={afterSrc} 
        />
      </div>
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="material-symbols-outlined text-on-primary text-sm">swap_horiz</span>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const { client } = useClient();

  return (
    <div className="bg-[#080B0D] text-[#e1e2e5] min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <main className="pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
        {/* Hero Section */}
        <section className="mb-section-gap text-center max-w-3xl mx-auto">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Visual Proof.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We don't just wash cars; we engineer perfection at {client.name}. Explore our evidence-based portfolio of paint correction, interior restoration, and ceramic coating transformations. Slide to reveal the difference.
          </p>
        </section>

        {/* Gallery / Comparisons Grid */}
        <div className="grid grid-cols-1 gap-[80px]">
          {/* Item 1: Paint Correction */}
          <article className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 border-b border-outline-variant/20 pb-4">
              <div>
                <div className="inline-block bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps px-3 py-1 mb-3 rounded-sm border border-outline-variant/30">Stage 2 Paint Correction</div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">Porsche 911 GT3</h2>
              </div>
              <div className="md:text-right md:w-1/3 mt-4 md:mt-0">
                <p className="font-body-md text-body-md text-on-surface-variant">Severe swirl marks and hologramming removed, revealing a mirror-finish deep black.</p>
              </div>
            </div>
            <ImageSlider 
              beforeSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBNw3KSv-6UKz8_tzNI0M8UYXx5x5uscPvTZGNa2XcQq7TYiO7O_AFtkhrIjN9Mx8zOxYIXp2ES3MZmCZhlYzBtpSxAOytvTYVWRaKa_7aLoyExPmpunGHkGdfVWG-MTohRSmGttgWWyy3GwXBbCeCRotwgoiSNYzVl3oF1bNThs4xK5xHJAeS01VWUkoELoP-mAJOYE0QrdeebGc1d_E6T89bIJNEBA3GLBxRvGkEiy6QNVJWSZoS8KxNQ59PxOtXdGu2OBCHf99WT"
              afterSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCRfmEQhSlAy4XvYskPqCYKobATeEiVs7MouhX314l5Pm9icgNoiGiCR2ULUn9chPKGOefhTMP2ryfGODLmUX7TGUd0l3DNjx_SI-JEWDSuRZlA5Mlwdu5O0eZbtnYg_xzxnRo5dTCkU80ZqSkF6v4qLIo-aOWAHyeo4bKPn4Pop0M2t15-_Nkd3yPkfBHmMp1NbLxncYL8RFyMgSI_Vj5nOhZR4tYQEXgWopali6s1SgD3NEKS4u3zEmDCeOD953lAqnFVho_RfZPZ"
            />
          </article>

          {/* Item 2: Interior */}
          <article className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 border-b border-outline-variant/20 pb-4">
              <div>
                <div className="inline-block bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps px-3 py-1 mb-3 rounded-sm border border-outline-variant/30">Interior Restoration</div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">Range Rover Autobiography</h2>
              </div>
              <div className="md:text-right md:w-1/3 mt-4 md:mt-0">
                <p className="font-body-md text-body-md text-on-surface-variant">Deep extraction of ingrained dirt and dye transfer from cream leather seating.</p>
              </div>
            </div>
            <ImageSlider 
              beforeSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAfTW7ihskjODuijg6NuRLUKQQYFqxtWv9eXoiVFt18DtO-wpMhXDSv_iN7vVVbuF5cTZHUCEldtw1xNTC711W3ulf0mJH6fHo2uFXkNC60bEh1xPZuzkOW8S7kI-_28bXeUF3e999Le9ZQahXcjJz5N_oHggYLN-vNriZmxpV12In5P7DJYg3Brk5mO0sYS_MSRgGBVmBRscXWLdDpRFsejtsnicF5QsxXFDvKzYh2oIi6-_eYV8n1A1pbredmoa9NU_6f8fgJ_ZR9"
              afterSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ViMmMKH5iDyJ775-O38Y23q2S4SRhKoS61XZsGCy7oxkyDTi7qBIT2AH4dsNhosv-mdrrnFHhj-gAfpXXvKy9gGsVv3bPYe5gvgfdlOyqi1KqTCo3mo_u3lBYewJOyrnI7mI87FfojMdVmJBEFM7kofrLl9ye1nTP1-lSw5IEIl7flZBt40bFrzCHoDEkIM1K_W_J18GAgMrAzYPs_Mn_syYYrtnWFGS_et74f40zDBbFlTVfKdMlgE-cbCWXZKkD2vEdCUamja8"
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default BeforeAfter;
