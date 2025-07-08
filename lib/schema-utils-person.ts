import type { Metadata } from 'next';

/**
 * Interface for Person schema
 */
export interface PersonSchemaProps {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: {
    name: string;
    url?: string;
  };
  description?: string;
  birthDate?: string; // ISO 8601 format (YYYY-MM-DD)
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  email?: string;
  telephone?: string;
  sameAs?: string[]; // Social media profiles
  alumniOf?: Array<{
    name: string;
    url?: string;
  }>;
  knowsLanguage?: string[];
  knowsAbout?: string[];
}

/**
 * Generates JSON-LD schema for a Person
 * @param props Person properties
 * @returns Person schema object
 */
export function generatePersonSchema(props: PersonSchemaProps): Record<string, any> {
  const {
    name,
    url,
    image,
    jobTitle,
    worksFor,
    description,
    birthDate,
    address,
    email,
    telephone,
    sameAs,
    alumniOf,
    knowsLanguage,
    knowsAbout
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    ...(url && { url }),
    ...(image && { image }),
    ...(jobTitle && { jobTitle }),
    ...(worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: worksFor.name,
        ...(worksFor.url && { url: worksFor.url })
      }
    }),
    ...(description && { description }),
    ...(birthDate && { birthDate }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(sameAs && { sameAs }),
    ...(alumniOf && alumniOf.length > 0 && {
      alumniOf: alumniOf.map(org => ({
        '@type': 'Organization',
        name: org.name,
        ...(org.url && { url: org.url })
      }))
    }),
    ...(knowsLanguage && { knowsLanguage }),
    ...(knowsAbout && { knowsAbout })
  };
}

/**
 * Interface for Author schema (extends Person)
 */
export interface AuthorSchemaProps extends PersonSchemaProps {
  affiliation?: Array<{
    name: string;
    url?: string;
  }>;
  award?: string[];
  publications?: Array<{
    name: string;
    url?: string;
    datePublished?: string; // ISO 8601 format
  }>;
}

/**
 * Generates JSON-LD schema for an Author
 * @param props Author properties
 * @returns Author schema object (as Person with additional properties)
 */
export function generateAuthorSchema(props: AuthorSchemaProps): Record<string, any> {
  const {
    affiliation,
    award,
    publications,
    ...personProps
  } = props;
  
  const baseSchema = generatePersonSchema(personProps);
  
  return {
    ...baseSchema,
    ...(affiliation && affiliation.length > 0 && {
      affiliation: affiliation.map(org => ({
        '@type': 'Organization',
        name: org.name,
        ...(org.url && { url: org.url })
      }))
    }),
    ...(award && { award }),
    ...(publications && publications.length > 0 && {
      publications: publications.map(pub => ({
        '@type': 'CreativeWork',
        name: pub.name,
        ...(pub.url && { url: pub.url }),
        ...(pub.datePublished && { datePublished: pub.datePublished })
      }))
    })
  };
}

/**
 * Interface for ProfessionalService schema
 */
export interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  provider: {
    name: string;
    url?: string;
  };
  areaServed?: string | string[];
  hasOfferCatalog?: Array<{
    name: string;
    description?: string;
    hasOfferCatalog?: Array<{
      name: string;
      description?: string;
      itemOffered?: Array<{
        name: string;
        description?: string;
        price?: number;
        priceCurrency?: string;
      }>;
    }>;
  }>;
}

/**
 * Generates JSON-LD schema for a ProfessionalService
 * @param props ProfessionalService properties
 * @returns ProfessionalService schema object
 */
export function generateProfessionalServiceSchema(props: ProfessionalServiceSchemaProps): Record<string, any> {
  const {
    name,
    description,
    url,
    serviceType,
    provider,
    areaServed,
    hasOfferCatalog
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      ...(provider.url && { url: provider.url })
    },
    ...(areaServed && { areaServed }),
    ...(hasOfferCatalog && hasOfferCatalog.length > 0 && {
      hasOfferCatalog: hasOfferCatalog.map(catalog => ({
        '@type': 'OfferCatalog',
        name: catalog.name,
        ...(catalog.description && { description: catalog.description }),
        ...(catalog.hasOfferCatalog && catalog.hasOfferCatalog.length > 0 && {
          hasOfferCatalog: catalog.hasOfferCatalog.map(subCatalog => ({
            '@type': 'OfferCatalog',
            name: subCatalog.name,
            ...(subCatalog.description && { description: subCatalog.description }),
            ...(subCatalog.itemOffered && subCatalog.itemOffered.length > 0 && {
              itemOffered: subCatalog.itemOffered.map(item => ({
                '@type': 'Service',
                name: item.name,
                ...(item.description && { description: item.description }),
                ...(item.price !== undefined && item.priceCurrency && {
                  offers: {
                    '@type': 'Offer',
                    price: item.price,
                    priceCurrency: item.priceCurrency
                  }
                })
              }))
            })
          }))
        })
      }))
    })
  };
}