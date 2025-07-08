import type { Metadata } from 'next';

/**
 * Interface for Product schema
 */
export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string | string[];
  url: string;
  sku?: string;
  mpn?: string;
  brand?: {
    name: string;
    url?: string;
  };
  offers?: {
    price: number;
    priceCurrency: string;
    availability?: string;
    validFrom?: string;
    priceValidUntil?: string;
    itemCondition?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  reviews?: Array<{
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: {
      ratingValue: number;
    };
  }>;
}

/**
 * Generates JSON-LD schema for a Product
 * @param props Product properties
 * @returns Product schema object
 */
export function generateProductSchema(props: ProductSchemaProps): Record<string, any> {
  const {
    name,
    description,
    image,
    url,
    sku,
    mpn,
    brand,
    offers,
    aggregateRating,
    reviews
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    url,
    ...(sku && { sku }),
    ...(mpn && { mpn }),
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand.name,
        ...(brand.url && { url: brand.url })
      }
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        ...(offers.availability && { availability: offers.availability }),
        ...(offers.validFrom && { validFrom: offers.validFrom }),
        ...(offers.priceValidUntil && { priceValidUntil: offers.priceValidUntil }),
        ...(offers.itemCondition && { itemCondition: offers.itemCondition })
      }
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount
      }
    }),
    ...(reviews && reviews.length > 0 && {
      review: reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.reviewRating.ratingValue
        }
      }))
    })
  };
}

/**
 * Interface for Course schema
 */
export interface CourseSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  url: string;
  image?: string;
  courseCode?: string;
  hasCourseInstance?: Array<{
    name: string;
    description?: string;
    startDate: string;
    endDate?: string;
    location?: {
      name: string;
      address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
      };
    };
    price?: number;
    priceCurrency?: string;
  }>;
}

/**
 * Generates JSON-LD schema for a Course
 * @param props Course properties
 * @returns Course schema object
 */
export function generateCourseSchema(props: CourseSchemaProps): Record<string, any> {
  const {
    name,
    description,
    provider,
    url,
    image,
    courseCode,
    hasCourseInstance
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url
    },
    url,
    ...(image && { image }),
    ...(courseCode && { courseCode }),
    ...(hasCourseInstance && hasCourseInstance.length > 0 && {
      hasCourseInstance: hasCourseInstance.map(instance => ({
        '@type': 'CourseInstance',
        name: instance.name,
        ...(instance.description && { description: instance.description }),
        startDate: instance.startDate,
        ...(instance.endDate && { endDate: instance.endDate }),
        ...(instance.location && {
          location: {
            '@type': 'Place',
            name: instance.location.name,
            ...(instance.location.address && {
              address: {
                '@type': 'PostalAddress',
                ...instance.location.address
              }
            })
          }
        }),
        ...(instance.price && instance.priceCurrency && {
          offers: {
            '@type': 'Offer',
            price: instance.price,
            priceCurrency: instance.priceCurrency
          }
        })
      }))
    })
  };
}