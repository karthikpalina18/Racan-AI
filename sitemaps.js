const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    createWriteStream('./public/sitemap.xml').end(data);
  }); 

  const Sitemap = require('react-router-sitemap').default;
const router = require('./src/router').default; // your React Router config

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://racan-ai.vercel.app')
      .save('./public/sitemap.xml')
  );
}

generateSitemap();

