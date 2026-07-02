import React from 'react';
import { useClient } from '../clients/ClientContext';

const TermsAndConditions = () => {
  const { client } = useClient();
  
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-display-lg text-display-lg uppercase mb-6">Terms &amp; Conditions</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Last Updated: October 2024</p>
        </div>
        
        <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface max-w-none">
          <p>
            Welcome to {client.name}.
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of {client.name}'s Website.
          </p>
          
          <h2 className="font-headline-lg mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use {client.name} if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="font-headline-lg mt-8 mb-4">2. Services</h2>
          <p>
            {client.name} provides premium automotive detailing, paint correction, ceramic coating, and paint protection film services. All services are subject to availability and vehicle condition upon inspection.
          </p>

          <h2 className="font-headline-lg mt-8 mb-4">3. Bookings and Cancellations</h2>
          <p>
            A deposit may be required to secure a booking. We request at least 48 hours notice for any cancellations or rescheduling. Failure to provide adequate notice may result in forfeiture of your deposit.
          </p>
          
          <h2 className="font-headline-lg mt-8 mb-4">4. Liability</h2>
          <p>
            While we take the utmost care with every vehicle, {client.name} is not liable for any pre-existing damage, wear and tear, or inherent defects in the vehicle's paint, trim, or interior materials that become apparent during or after the detailing process.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
