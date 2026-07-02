import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { ClientProfile } from '../types/client';
import vanta from './profiles/vanta-auto-detailing.json';
import obsidian from './profiles/obsidian-auto-spa.json';
import apex from './profiles/apex-detail-studio.json';

const clientProfiles: Record<string, ClientProfile> = {
  'vanta-auto-detailing': vanta,
  'obsidian-auto-spa': obsidian,
  'apex-detail-studio': apex,
};

// Fallback is Vanta
const defaultClient = vanta;

interface ClientContextProps {
  client: ClientProfile;
  setClientSlug: (slug: string) => void;
  isDemo: boolean;
}

const ClientContext = createContext<ClientContextProps | undefined>(undefined);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<ClientProfile>(defaultClient);
  const [isDemo, setIsDemo] = useState<boolean>(false);

  const setClientSlug = (slug: string) => {
    if (clientProfiles[slug]) {
      setClient(clientProfiles[slug]);
      setIsDemo(true);
    } else {
      console.warn(`Client slug ${slug} not found. Falling back to default.`);
      setClient(defaultClient);
      setIsDemo(false);
    }
  };

  useEffect(() => {
    // Inject dynamic CSS variables if needed
    document.documentElement.style.setProperty('--primary', client.branding.colors.primary);
  }, [client]);

  return (
    <ClientContext.Provider value={{ client, setClientSlug, isDemo }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};
