const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Base URL of the website
const BASE_URL = 'https://transpacificimmigration.com';

// Function to generate sitemap
async function generateSitemap() {
  // Get all page files
  const pages = glob.sync('app/**/page.tsx', {
    ignore: ['app/**/\[**\]/**', 'app/test-*/**', 'app/debug-*/**']
  });

  // Create sitemap entries
  const urlSet = pages.map(page => {
    // Convert file path to URL path
    let urlPath = page
      .replace('app/', '')
      .replace('/page.tsx', '')
      .replace(/\/index$/, '');

    // Handle root page
    if (urlPath === '') {
      return {
        loc: BASE_URL,
        changefreq: 'weekly',
        priority: '1.0'
      };
    }

    // Set priority and change frequency based on path
    let priority = '0.7';
    let changefreq = 'monthly';

    if (urlPath.startsWith('blog')) {
      changefreq = 'weekly';
      priority = '0.9';
    } else if (urlPath === 'about' || urlPath === 'contact' || urlPath === 'countries') {
      priority = '0.8';
    } else if (urlPath.includes('countries/')) {
      priority = '0.7';
    } else if (urlPath.includes('privacy') || urlPath.includes('terms') || urlPath.includes('cookies')) {
      changefreq = 'yearly';
      priority = '0.3';
    }

    return {
      loc: `${BASE_URL}/${urlPath}`,
      changefreq,
      priority
    };
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet
    .map(
      url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  // Write sitemap to file
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Run the function
generateSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});