import React from 'react';
import type { Metadata } from 'next';

/**
 * Interface for Organization schema
 */
export interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    areaServed?: string | string[];
  };
}

/**
 * Interface for Website schema
 */
export interface WebsiteSchemaProps {
  url: string;
  name: string;
  description?: string;
  searchUrl?: string;
  potentialAction?: {
    target: string;
  };
}

/**
 * Interface for BlogPosting schema
 */
export interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: OrganizationSchemaProps;
  url: string;
  mainEntityOfPage?: string;
  keywords?: string[];
  articleSection?: string;
}

/**
 * Interface for ContactPage schema
 */
export interface ContactPageSchemaProps {
  url: string;
  name?: string;
  description?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    areaServed?: string | string[];
  };
}

/**
 * Interface for EducationalOrganization schema
 */
export interface EducationalOrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  image?: string;
  sameAs?: string[];
}

/**
 * Interface for Place schema
 */
export interface PlaceSchemaProps {
  name: string;
  url: string;
  description?: string;
  image?: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
  address?: {
    addressCountry: string;
  };
}

/**
 * Interface for Service schema
 */
export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider: OrganizationSchemaProps;
  serviceType: string;
  areaServed?: string | string[];
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
}

/**
 * Interface for BreadcrumbList schema
 */
export interface BreadcrumbListSchemaProps {
  itemListElement: Array<{
    name: string;
    item: string;
    position: number;
  }>;
}

/**
 * Generates JSON-LD schema for an Organization
 * @param props Organization properties
 * @returns Organization schema object
 */
export function generateOrganizationSchema(props: OrganizationSchemaProps): Record<string, any> {
  const { name, url, logo, description, sameAs, address, contactPoint } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    ...(description && { description }),
    ...(sameAs && { sameAs }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...contactPoint
      }
    })
  };
}

/**
 * Generates JSON-LD schema for a Website
 * @param props Website properties
 * @returns Website schema object
 */
export function generateWebsiteSchema(props: WebsiteSchemaProps): Record<string, any> {
  const { url, name, description, searchUrl, potentialAction } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    ...(description && { description }),
    ...(searchUrl && { potentialAction: {
      '@type': 'SearchAction',
      'target': searchUrl,
      'query-input': 'required name=search_term_string'
    }}),
    ...(potentialAction && { potentialAction: {
      '@type': 'SearchAction',
      ...potentialAction
    }})
  };
}

/**
 * Generates JSON-LD schema for a BlogPosting
 * @param props BlogPosting properties
 * @returns BlogPosting schema object
 */
export function generateBlogPostingSchema(props: BlogPostingSchemaProps): Record<string, any> {
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author,
    publisher,
    url,
    mainEntityOfPage,
    keywords,
    articleSection
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url })
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo
      }
    },
    url,
    ...(mainEntityOfPage && { mainEntityOfPage }),
    ...(keywords && { keywords }),
    ...(articleSection && { articleSection })
  };
}

/**
 * Generates JSON-LD schema for a Blog
 * @param props Blog properties and posts
 * @returns Blog schema object
 */
export function generateBlogSchema(props: {
  name: string;
  description: string;
  url: string;
  posts?: Array<{ url: string; headline: string; }>;
}): Record<string, any> {
  const { name, description, url, posts } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    description,
    url,
    ...(posts && posts.length > 0 && {
      blogPost: posts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.headline,
        url: post.url
      }))
    })
  };
}

/**
 * Generates JSON-LD schema for a ContactPage
 * @param props ContactPage properties
 * @returns ContactPage schema object
 */
export function generateContactPageSchema(props: ContactPageSchemaProps): Record<string, any> {
  const { url, name, description, contactPoint } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url,
    ...(name && { name }),
    ...(description && { description }),
    ...(contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...contactPoint
      }
    })
  };
}

/**
 * Generates JSON-LD schema for an EducationalOrganization
 * @param props EducationalOrganization properties
 * @returns EducationalOrganization schema object
 */
export function generateEducationalOrganizationSchema(
  props: EducationalOrganizationSchemaProps
): Record<string, any> {
  const { name, url, logo, description, address, image, sameAs } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name,
    url,
    logo,
    ...(description && { description }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(image && { image }),
    ...(sameAs && { sameAs })
  };
}

/**
 * Generates JSON-LD schema for a Place
 * @param props Place properties
 * @returns Place schema object
 */
export function generatePlaceSchema(props: PlaceSchemaProps): Record<string, any> {
  const { name, url, description, image, geo, address } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name,
    url,
    ...(description && { description }),
    ...(image && { image }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    })
  };
}

/**
 * Generates JSON-LD schema for a Service
 * @param props Service properties
 * @returns Service schema object
 */
export function generateServiceSchema(props: ServiceSchemaProps): Record<string, any> {
  const { name, description, url, provider, serviceType, areaServed, offers } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
      logo: provider.logo
    },
    serviceType,
    ...(areaServed && { areaServed }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers
      }
    })
  };
}

/**
 * Generates JSON-LD schema for a BreadcrumbList
 * @param props BreadcrumbList properties
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbListSchema(props: BreadcrumbListSchemaProps): Record<string, any> {
  const { itemListElement } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item
    }))
  };
}

/**
 * Converts a schema object to a JSON-LD script element
 * @param schema The schema object to convert
 * @returns A script element with the JSON-LD schema
 */
export function schemaToScriptTag(schema: Record<string, any>): JSX.Element {
  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
  });
}

/**
 * Adds schema to Next.js metadata
 * @param metadata The metadata object
 * @param schemas Array of schema objects to add
 * @returns Updated metadata with schema
 */
export function addSchemaToMetadata(metadata: Metadata, schemas: Record<string, any>[]): Metadata {
  const updatedMetadata = { ...metadata };
  
  // Initialize other if it doesn't exist
  if (!updatedMetadata.other) {
    updatedMetadata.other = {};
  }
  
  // If only one schema, add it directly
  if (schemas.length === 1) {
    updatedMetadata.other['application/ld+json'] = JSON.stringify(schemas[0]);
    return updatedMetadata;
  }
  
  // For multiple schemas, create an array of schema objects
  updatedMetadata.other['application/ld+json'] = JSON.stringify(schemas);
  
  return updatedMetadata;
}