import type { Metadata } from 'next';

/**
 * Interface for FAQ schema
 */
export interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generates JSON-LD schema for a FAQ Page
 * @param props FAQ properties
 * @returns FAQ schema object
 */
export function generateFAQSchema(props: FAQSchemaProps): Record<string, any> {
  const { questions } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

/**
 * Interface for HowTo schema
 */
export interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT2H30M")
  estimatedCost?: {
    currency: string;
    value: string | number;
  };
  supply?: string[];
  tool?: string[];
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}

/**
 * Generates JSON-LD schema for a HowTo
 * @param props HowTo properties
 * @returns HowTo schema object
 */
export function generateHowToSchema(props: HowToSchemaProps): Record<string, any> {
  const {
    name,
    description,
    image,
    totalTime,
    estimatedCost,
    supply,
    tool,
    steps
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(image && { image }),
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: estimatedCost.currency,
        value: estimatedCost.value
      }
    }),
    ...(supply && supply.length > 0 && {
      supply: supply.map(item => ({
        '@type': 'HowToSupply',
        name: item
      }))
    }),
    ...(tool && tool.length > 0 && {
      tool: tool.map(item => ({
        '@type': 'HowToTool',
        name: item
      }))
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url })
    }))
  };
}

/**
 * Interface for Event schema
 */
export interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string; // ISO 8601 format
  endDate?: string; // ISO 8601 format
  location: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion?: string;
      postalCode: string;
      addressCountry: string;
    };
  } | {
    url: string; // For virtual events
    name?: string;
  };
  image?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability?: string;
    validFrom?: string;
    url?: string;
  };
  performer?: {
    name: string;
    url?: string;
  };
  organizer?: {
    name: string;
    url?: string;
  };
  eventStatus?: string; // e.g., "https://schema.org/EventScheduled"
  eventAttendanceMode?: string; // e.g., "https://schema.org/OfflineEventAttendanceMode"
}

/**
 * Generates JSON-LD schema for an Event
 * @param props Event properties
 * @returns Event schema object
 */
export function generateEventSchema(props: EventSchemaProps): Record<string, any> {
  const {
    name,
    description,
    startDate,
    endDate,
    location,
    image,
    offers,
    performer,
    organizer,
    eventStatus,
    eventAttendanceMode
  } = props;
  
  // Determine if location is physical or virtual
  const isVirtualLocation = 'url' in location;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: isVirtualLocation
      ? {
          '@type': 'VirtualLocation',
          url: location.url,
          ...(location.name && { name: location.name })
        }
      : {
          '@type': 'Place',
          name: location.name,
          address: {
            '@type': 'PostalAddress',
            ...location.address
          }
        },
    ...(image && { image }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        ...(offers.availability && { availability: offers.availability }),
        ...(offers.validFrom && { validFrom: offers.validFrom }),
        ...(offers.url && { url: offers.url })
      }
    }),
    ...(performer && {
      performer: {
        '@type': 'Person',
        name: performer.name,
        ...(performer.url && { url: performer.url })
      }
    }),
    ...(organizer && {
      organizer: {
        '@type': 'Organization',
        name: organizer.name,
        ...(organizer.url && { url: organizer.url })
      }
    }),
    ...(eventStatus && { eventStatus }),
    ...(eventAttendanceMode && { eventAttendanceMode })
  };
}