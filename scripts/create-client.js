const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 2 || args[0] !== '--') {
  console.error('Usage: npm run create-client -- client-slug');
  process.exit(1);
}

const slug = args[1];
if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('Invalid slug format. Use only lowercase letters, numbers, and hyphens.');
  process.exit(1);
}

const clientsDir = path.join(__dirname, '../src/clients/profiles');
const profilePath = path.join(clientsDir, `${slug}.json`);

if (fs.existsSync(profilePath)) {
  console.error(`Client profile for ${slug} already exists.`);
  process.exit(1);
}

const name = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const template = {
  id: slug.split('-')[0],
  slug: slug,
  name: name,
  contact: {
    phone: "(555) 000-0000",
    email: `hello@${slug.replace(/-/g, '')}.com`,
    address: "City, State",
    whatsapp: "+15550000000"
  },
  businessHours: "Mon-Fri: 9AM - 5PM",
  social: {
    instagram: `https://instagram.com/${slug}`,
    facebook: `https://facebook.com/${slug}`
  },
  branding: {
    logoUrl: `/clients/${slug}/logo/logo.svg`,
    faviconUrl: `/clients/${slug}/favicon.ico`,
    colors: {
      primary: "#ffffff"
    }
  },
  seo: {
    title: `${name} | Auto Detailing`,
    description: `Premium auto detailing services by ${name}.`
  }
};

fs.writeFileSync(profilePath, JSON.stringify(template, null, 2));

const publicDir = path.join(__dirname, '../public/clients', slug);
const subfolders = [
  'logo', 'hero', 'services', 'ceramic-coating', 'paint-correction', 
  'ppf', 'before-after', 'gallery', 'team', 'reviews', 'blog'
];

subfolders.forEach(folder => {
  fs.mkdirSync(path.join(publicDir, folder), { recursive: true });
});

console.log(`Successfully created profile for ${slug}`);
console.log(`Demo URL: http://localhost:5173/demo/${slug}`);

// Update ClientContext.tsx to import the new profile
// (For this manual step, we will log a reminder)
console.log('\nIMPORTANT: Remember to manually import and add this profile to src/clients/ClientContext.tsx');
