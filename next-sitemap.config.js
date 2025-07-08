/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://transpacificimmigration.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/test-*',
          '/debug-*',
          '/admin',
          '/dashboard'
        ],
      },
    ],
    additionalSitemaps: [
      'https://transpacificimmigration.com/sitemap.xml',
    ],
  },
  exclude: [
    '/test-*',
    '/debug-*',
    '/admin/*',
    '/dashboard/*',
  ],
  // Change frequency and priority settings
  changefreq: 'monthly',
  priority: 0.7,
  // Custom transform function for specific pages
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Home page gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }
    // Blog pages get higher priority
    else if (path.startsWith('/blog')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Main pages get higher priority
    else if (['about', 'contact', 'countries'].includes(path)) {
      priority = 0.8;
    }
    // Country pages get medium priority
    else if (path.startsWith('/countries/')) {
      priority = 0.7;
    }
    // Legal pages get lower priority
    else if (['privacy', 'terms', 'cookies'].includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};