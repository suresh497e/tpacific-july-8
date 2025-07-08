# Sitemap Generation for Transpacific Immigration

## Overview

This document explains how the sitemap generation works for the Transpacific Immigration website. The sitemap is essential for search engines to efficiently crawl and index the website's content.

## Files

1. **public/sitemap.xml** - The generated sitemap file that is served to search engines
2. **public/robots.txt** - Instructions for search engine crawlers
3. **scripts/generate-sitemap.js** - Script to dynamically generate the sitemap

## How It Works

The sitemap generation process works as follows:

1. The `generate-sitemap.js` script scans the `app` directory for all `page.tsx` files
2. It excludes test and debug pages (those with paths starting with `test-` or `debug-`)
3. It also excludes dynamic route pages (those with paths containing `[` and `]`)
4. For each valid page, it creates a sitemap entry with:
   - `loc`: The full URL of the page
   - `changefreq`: How often the page is likely to change
   - `priority`: The relative importance of the page (0.0 to 1.0)

## Usage

Two npm scripts have been added to package.json:

```json
"scripts": {
  "sitemap": "node scripts/generate-sitemap.js",
  "build:sitemap": "npm run sitemap && npm run build"
}
```

### Generating the Sitemap

To generate or update the sitemap:

```bash
npm run sitemap
```

### Building with Sitemap Generation

To generate the sitemap and then build the site:

```bash
npm run build:sitemap
```

## Maintenance

### Adding New Pages

When adding new pages to the website:

1. Run `npm run sitemap` to update the sitemap
2. Commit the updated sitemap.xml file

### Excluding Pages from the Sitemap

To exclude a page from the sitemap:

1. Use a naming convention that starts with `test-` or `debug-`
2. Or modify the `ignore` patterns in `generate-sitemap.js`

### Customizing Page Priority and Change Frequency

The script assigns priority and change frequency based on the page path. To customize these values for specific pages, modify the logic in `generate-sitemap.js`.

## SEO Best Practices

1. Keep the sitemap up to date by running the generation script after adding new pages
2. Submit the sitemap URL to search engines through their webmaster tools
3. Ensure the sitemap is referenced in robots.txt
4. Use descriptive metadata (title, description) for all pages
5. Regularly check for crawl errors in search engine webmaster tools

## Troubleshooting

If you encounter issues with the sitemap generation:

1. Ensure the glob package is installed: `npm install glob --save-dev`
2. Check that the script has the correct file paths for your project structure
3. Verify that the BASE_URL in the script matches your production domain