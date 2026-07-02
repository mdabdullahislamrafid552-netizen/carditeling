const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'About', 'Services', 'ServiceDetail', 'Gallery', 'GalleryDetail',
  'Packages', 'Contact', 'Process', 'Reviews', 'FAQ', 'ServiceAreas',
  'Blog', 'BlogArticle'
];

const dir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

pages.forEach(page => {
  const file = path.join(dir, `${page}.tsx`);
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, `import React from 'react';\n\nconst ${page} = () => {\n  return (\n    <div className="min-h-screen pt-24 px-margin-mobile md:px-margin-desktop">\n      <h1 className="text-headline-xl">{ '${page}' }</h1>\n    </div>\n  );\n};\n\nexport default ${page};\n`);
  }
});

const componentsDir = path.join(__dirname, 'src', 'components', 'layout');
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

const layoutFile = path.join(componentsDir, 'Layout.tsx');
if (!fs.existsSync(layoutFile)) {
  fs.writeFileSync(layoutFile, `import React from 'react';\nimport { Outlet } from 'react-router-dom';\n\nconst Layout = () => {\n  return (\n    <>\n      <Outlet />\n    </>\n  );\n};\n\nexport default Layout;\n`);
}
