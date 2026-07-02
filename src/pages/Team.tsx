import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const Team = () => {
  const { client } = useClient();

  return (
    <div className="bg-[#080B0D] text-[#e1e2e5] min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-full h-[800px] bg-[radial-gradient(circle,rgba(242,189,121,0.05)_0%,rgba(242,189,121,0)_70%)] blur-[100px] z-0 pointer-events-none"></div>
      
      <main className="relative z-10 pt-32 pb-section-gap flex-grow">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="relative w-full h-[400px] md:h-[614px] lg:h-[819px] overflow-hidden group border border-outline-variant/10 rounded">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPWriTapstaQPrkb0EKTREZt7twTzUMMYYkmdZyCu6iolk0R85mwXquYvgZKm6afohMCSqZt_sUypjf00RRY4rbmDpHnl3LRaq-_kfUsU2AvQI1VK9UyQcTi1GADJF5VBnuW4ig3teKw6EMRwM2K64WzvsEhlgYiOyaGGksYRPbpU2EKCp6mx7znJ8fd0gxtC-btws9h7IHol0q-klWLTd3BGgWrBa_RmwE-NXLu3L1WDpEQ8YgffwJ7t2kXXF-AGetDgO6k7BZD-S')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/50 to-transparent"></div>
            <div className="absolute bottom-12 left-6 md:left-12 max-w-2xl">
              <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">THE MASTERS OF PRECISION.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">At {client.name}, we are artisans of the automotive surface. Our team consists of highly specialized technicians, each dedicated to pushing the boundaries of automotive perfection in their respective disciplines.</p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">OUR EXPERTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Elias Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgrBSYJg94UznOXLSfIvFlInVAUPjbruZVewDXMjtylKByjAIXC0SICxzDI-tlIS9mDhrDCkGxY-kuuuDUhSIeLRGyTSKPES0QmRBJz1esTt6YOGyPQwI9eNFLJYOMVC9m1O1ynxDG76UoPF3dx1e925M2_pGsVKiOoqHesuaEjqvJjhHy-SZ8kLY0bfg21Hr05bKBuJCmoR9KeA0p1g7mUH5KFIa3WFX1x-1QB26CCR3Uw_wuZ-5uLQGATVUk7WvcVj0KYhVa4K4"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">Elias Vance</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">LEAD DETAILER &amp; FOUNDER</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">15+ Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Concours Preparation</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded md:mt-12">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ty82rPylcDG7oTk80j4HvU-JjwWZWYmKDEibuTB7RB2A2WW-HkoOukLzvL_NNWNmDgCA_joYSIL3RYOEZqmoPpBgI9Ax-XPHgGTxghCEuJKLirOVE0Wvnuaq45zokABrKcefx2HjHNzq_dJeiWx-nzaAnHW7ARzH1FUGlWfOWimUqYohe3v5bLiV8pxK0zYyAhf80KXrcC6fb5rj0v1yR687AoCzQBlB9BGMDYTX_400lSVTi3pAizUh8hq-Wxs8tTVjI9e6itEO"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">Sarah Jenkins</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">PAINT CORRECTION SPECIALIST</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">8 Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Multi-Stage Compounding</span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Marcus Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0LojDIEu1RknOdlEOZbE1UP2kklp1X1VTS2CET8_44QZXp7Hef16Hd9ZyofCrmBifswCPu6lm2fk1cIoq5H80f_Q_U3ZuSjDrjoePqfOzfwn7uV7AQkvYzMvRhMd0cznG8xpdH1yfLolQxIn6br0cUAdmXSRfV8y1M_oXkQwJP2cKgNX-2u9tJRP7JGrFgnIl9a2MBPJamNE5AsJ8GZisJ3WTbXj9Xe3cPloX3kJKUsMljK0l2VLmUBvgrAKUWnHfsDalSu4ByHuL"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">Marcus Chen</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">CERAMIC COATING TECHNICIAN</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">6 Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Graphene Infusion Tech</span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded lg:-mt-12">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="David Russo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo9W2oAO8aaRHTGuyXrv7hBaaidzPgzhfIcNBYWe87NOedKxk62lzKAFulxIhwga4MpH5Y37wOTv7GyAIPylxEiXtgUho63I1ZS5O-VuxWE8_uhtHnUdP2YMQrc21EV9bebvmnmww9eqa6lFAHyDP7YFs2tAQVMD6v89J8Mgy4q_ZuXqx57zApx4piiU6I83DtoTVbvg9kz0p9tD_FGURJwjZTfQiTL1ZSNK4RfROwStVIc4kOtiwOI9vYoLTUupE2m_PIQbwiNfOl"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">David Russo</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">PPF INSTALLATION LEAD</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">10 Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Seamless Custom Cuts</span>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Elena Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2lxXk42rdzkoghHIf2rP0P2HQFdliDgfPXW0SuZpfYAAsqk5Kg18WJ4iO9pEVJBva05iqRykfyGFfhnjLUSiH9y48WxgF3wNGTmxeLKCuCNSJntX7PsBGzuAIcNf7ikbnqbnjhf0jLgcwsosiRX24rtmRnRtngyWwUg9csa4fKHo_XVE7M-pe9gzq55jlBF_ycMIrai8htcNUrTBIWBVRlvdzMvNynSF9Zou35XYkbHDd9QHTKP17WY0IL4HHs0Srz0O6sn4A3Jwh"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">Elena Rodriguez</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">INTERIOR DETAILING SPECIALIST</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">7 Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Exotic Leather Restoration</span>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-[#11171B] border border-outline-variant/10 p-6 group transition-all duration-300 hover:border-primary/30 rounded md:mt-12 lg:mt-0">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded">
                <img className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Jameson Wright" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPr06qFt7P-YET_EpTBKnCVSblOgeZN9wc2mJ2MGaSARbkasjDfmbqVx1068pg7ZIzBW1U9fZq8RPct22QSbI8NYnwMFK6BKFbL9aUuxa7AB4Oj6tQhRDyjBRm4jIBgADtXwtXgbwUxXtHNYR7sqN7ljYedJ13unHHc9O7V72GQJWt9lfUh0GDBV-gpLnavO2gbiJZu3dX4GaR1XaTiy-gklN6v7XlcwGJsZB0oJPxErhthfjyAgy2lFdKuDXmOEQZ3TgdVBiGassa"/>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2 group-hover:text-primary transition-colors text-on-surface">Jameson Wright</h3>
              <p className="font-label-caps text-label-caps text-[#9c8e80] mb-6 uppercase">STUDIO MANAGER</p>
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Experience</span>
                  <span className="font-body-md text-body-md text-on-surface">12 Years</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 border-dotted pb-2">
                  <span className="font-body-md text-body-md text-on-surface-variant">Specialty</span>
                  <span className="font-body-md text-body-md text-on-surface">Client Relations &amp; QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & CTAs */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-[#11171B] border border-outline-variant/10 p-8 md:p-12 rounded">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">CREDENTIALS</h2>
            </div>
            <h3 className="font-headline-xl text-headline-xl mb-6 text-on-surface uppercase">CERTIFIED EXCELLENCE.</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Our technicians undergo rigorous, ongoing training directly from the world's leading manufacturers of protective films, ceramic coatings, and compounding abrasives.</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#11171B] border border-outline-variant/10 font-label-caps text-label-caps text-on-surface rounded">XPEL CERTIFIED</span>
              <span className="px-4 py-2 bg-[#11171B] border border-outline-variant/10 font-label-caps text-label-caps text-on-surface rounded">GTECHNIQ ACCREDITED</span>
              <span className="px-4 py-2 bg-[#11171B] border border-outline-variant/10 font-label-caps text-label-caps text-on-surface rounded">RUPES ADVANCED</span>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface uppercase">JOIN THE ELITE.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">We are always looking for uncompromising talent to join our detailing studio.</p>
              <button className="border border-outline-variant/30 bg-transparent text-on-surface px-8 py-4 font-label-caps text-label-caps hover:bg-surface-container transition-colors duration-300 rounded uppercase">
                VIEW CAREERS
              </button>
            </div>
            <div className="h-[1px] w-full border-b border-outline-variant/20 border-dotted"></div>
            <div>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface uppercase">EXPERIENCE PERFECTION.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Trust your vehicle to the masters of automotive presentation.</p>
              <ClientLink to="/contact" className="inline-block bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary-fixed transition-colors duration-300 rounded uppercase">
                BOOK YOUR DETAIL
              </ClientLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
