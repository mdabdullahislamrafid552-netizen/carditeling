import React from 'react';
import { useClient } from '../clients/ClientContext';

const PrivacyPolicy = () => {
  const { client } = useClient();
  
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-display-lg text-display-lg uppercase mb-6">Privacy Policy</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Last Updated: October 2024</p>
        </div>
        
        <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface max-w-none">
          <p>
            At {client.name}, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {client.name} and how we use it.
          </p>
          
          <h2 className="font-headline-lg mt-8 mb-4">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="font-headline-lg mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-5 space-y-2 text-on-surface-variant">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="font-headline-lg mt-8 mb-4">Log Files</h2>
          <p>
            {client.name} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
