export interface ClientProfile {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    serviceArea?: string;
    whatsapp?: string;
  };
  businessHours: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  branding: {
    logoUrl: string;
    faviconUrl: string;
    colors: {
      primary: string;
    };
  };
  seo: {
    title: string;
    description: string;
  };
}
