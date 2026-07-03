import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { ClientProfile } from '../types/client';
import vanta from './profiles/vanta-auto-detailing.json';
import obsidian from './profiles/obsidian-auto-spa.json';
import apex from './profiles/apex-detail-studio.json';
import riptide from './profiles/riptide-car-wash.json';
import equalizer from './profiles/the-equalizer-mobile-car-detailing.json';
import rmcar from './profiles/r-and-m-car-detailing.json';

const clientProfiles: Record<string, ClientProfile> = {
  'vanta-auto-detailing': vanta,
  'obsidian-auto-spa': obsidian,
  'apex-detail-studio': apex,
  'riptide-car-wash': riptide,
  'the-equalizer-mobile-car-detailing': equalizer,
  'r-and-m-car-detailing': rmcar,
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

    // Update favicon
    if (client.branding.faviconUrl) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = client.branding.faviconUrl;
    }
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
