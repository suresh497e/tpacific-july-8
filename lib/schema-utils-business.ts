import type { Metadata } from 'next';

/**
 * Interface for LocalBusiness schema
 */
export interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  image?: string | string[];
  logo?: string;
  priceRange?: string; // e.g., "$$$"
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: Array<{
    dayOfWeek: string | string[]; // e.g., "Monday" or ["Monday", "Tuesday"]
    opens: string; // e.g., "09:00"
    closes: string; // e.g., "17:00"
  }>;
  sameAs?: string[]; // Social media profiles
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
}

/**
 * Generates JSON-LD schema for a LocalBusiness
 * @param props LocalBusiness properties
 * @returns LocalBusiness schema object
 */
export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps): Record<string, any> {
  const {
    name,
    description,
    url,
    telephone,
    image,
    logo,
    priceRange,
    address,
    geo,
    openingHours,
    sameAs,
    paymentAccepted,
    currenciesAccepted
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(image && { image: Array.isArray(image) ? image : [image] }),
    ...(logo && { logo }),
    ...(priceRange && { priceRange }),
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    ...(openingHours && openingHours.length > 0 && {
      openingHoursSpecification: openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes
      }))
    }),
    ...(sameAs && { sameAs }),
    ...(paymentAccepted && { paymentAccepted }),
    ...(currenciesAccepted && { currenciesAccepted })
  };
}

/**
 * Interface for Restaurant schema (extends LocalBusiness)
 */
export interface RestaurantSchemaProps extends LocalBusinessSchemaProps {
  servesCuisine?: string | string[];
  menu?: string; // URL to menu
  acceptsReservations?: boolean;
  hasMenu?: Array<{
    name: string;
    description?: string;
    hasMenuSection?: Array<{
      name: string;
      description?: string;
      hasMenuItem?: Array<{
        name: string;
        description?: string;
        price?: number;
        priceCurrency?: string;
      }>;
    }>;
  }>;
}

/**
 * Generates JSON-LD schema for a Restaurant
 * @param props Restaurant properties
 * @returns Restaurant schema object
 */
export function generateRestaurantSchema(props: RestaurantSchemaProps): Record<string, any> {
  const {
    servesCuisine,
    menu,
    acceptsReservations,
    hasMenu,
    ...localBusinessProps
  } = props;
  
  const baseSchema = generateLocalBusinessSchema(localBusinessProps);
  
  return {
    ...baseSchema,
    '@type': 'Restaurant',
    ...(servesCuisine && { servesCuisine }),
    ...(menu && { menu }),
    ...(acceptsReservations !== undefined && { acceptsReservations }),
    ...(hasMenu && hasMenu.length > 0 && {
      hasMenu: hasMenu.map(menuItem => ({
        '@type': 'Menu',
        name: menuItem.name,
        ...(menuItem.description && { description: menuItem.description }),
        ...(menuItem.hasMenuSection && menuItem.hasMenuSection.length > 0 && {
          hasMenuSection: menuItem.hasMenuSection.map(section => ({
            '@type': 'MenuSection',
            name: section.name,
            ...(section.description && { description: section.description }),
            ...(section.hasMenuItem && section.hasMenuItem.length > 0 && {
              hasMenuItem: section.hasMenuItem.map(item => ({
                '@type': 'MenuItem',
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

/**
 * Interface for JobPosting schema
 */
export interface JobPostingSchemaProps {
  title: string;
  description: string;
  datePosted: string; // ISO 8601 format
  validThrough?: string; // ISO 8601 format
  employmentType?: string | string[]; // e.g., "FULL_TIME", "PART_TIME"
  hiringOrganization: {
    name: string;
    url?: string;
    logo?: string;
  };
  jobLocation: {
    name?: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion?: string;
      postalCode: string;
      addressCountry: string;
    };
  } | {
    type: 'TELECOMMUTE';
  };
  baseSalary?: {
    currency: string;
    value: number | string;
    unitText?: string; // e.g., "HOUR", "DAY", "WEEK", "MONTH", "YEAR"
  };
  skills?: string | string[];
  qualifications?: string;
  educationRequirements?: string;
  experienceRequirements?: string;
  jobBenefits?: string | string[];
}

/**
 * Generates JSON-LD schema for a JobPosting
 * @param props JobPosting properties
 * @returns JobPosting schema object
 */
export function generateJobPostingSchema(props: JobPostingSchemaProps): Record<string, any> {
  const {
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization,
    jobLocation,
    baseSalary,
    skills,
    qualifications,
    educationRequirements,
    experienceRequirements,
    jobBenefits
  } = props;
  
  // Determine if job location is remote or physical
  const isRemoteJob = 'type' in jobLocation && jobLocation.type === 'TELECOMMUTE';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    ...(validThrough && { validThrough }),
    ...(employmentType && { employmentType }),
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization.name,
      ...(hiringOrganization.url && { url: hiringOrganization.url }),
      ...(hiringOrganization.logo && { logo: hiringOrganization.logo })
    },
    jobLocation: isRemoteJob
      ? {
          '@type': 'Place',
          jobLocationType: 'TELECOMMUTE'
        }
      : {
          '@type': 'Place',
          ...(jobLocation.name && { name: jobLocation.name }),
          address: {
            '@type': 'PostalAddress',
            ...jobLocation.address
          }
        },
    ...(baseSalary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: baseSalary.currency,
        value: {
          '@type': 'QuantitativeValue',
          value: baseSalary.value,
          ...(baseSalary.unitText && { unitText: baseSalary.unitText })
        }
      }
    }),
    ...(skills && { skills }),
    ...(qualifications && { qualifications }),
    ...(educationRequirements && { educationRequirements }),
    ...(experienceRequirements && { experienceRequirements }),
    ...(jobBenefits && { jobBenefits })
  };
}