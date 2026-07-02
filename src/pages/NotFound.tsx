import React from 'react';
import { useClient } from '../clients/ClientContext';
import { ClientLink } from '../components/ui/ClientLink';

const NotFound = () => {
  const { client } = useClient();
  
  return (
    <div className="bg-[#080B0D] text-[#e1e2e5] min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden justify-center items-center">
      <div className="text-center px-margin-mobile">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">404</h1>
        <p className="font-headline-lg text-headline-lg text-primary mb-6 uppercase tracking-widest">Page Not Found</p>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-10">
          The page you are looking for at {client.name} does not exist or has been moved.
        </p>
        <ClientLink to="/" className="inline-block bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-secondary transition-colors duration-300 rounded uppercase">
          Return Home
        </ClientLink>
      </div>
    </div>
  );
};

export default NotFound;
