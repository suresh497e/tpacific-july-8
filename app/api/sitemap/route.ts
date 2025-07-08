import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API route that serves the sitemap.xml file
 * This can be used to dynamically generate the sitemap on request
 * Access via: /api/sitemap
 */
export async function GET() {
  try {
    // Path to the sitemap file
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    // Read the sitemap file
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    
    // Return the sitemap with the correct content type
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        // Cache the sitemap for 24 hours
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200'
      }
    });
  } catch (error) {
    console.error('Error serving sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}