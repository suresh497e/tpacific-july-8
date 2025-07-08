import type { Metadata } from 'next';

/**
 * Interface for Article schema
 */
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string | string[];
  datePublished: string; // ISO 8601 format
  dateModified?: string; // ISO 8601 format
  author: {
    name: string;
    url?: string;
  } | Array<{
    name: string;
    url?: string;
  }>;
  publisher: {
    name: string;
    logo: string;
    url?: string;
  };
  url: string;
  mainEntityOfPage?: string;
  keywords?: string[];
  articleSection?: string;
  isAccessibleForFree?: boolean;
  wordCount?: number;
}

/**
 * Generates JSON-LD schema for an Article
 * @param props Article properties
 * @returns Article schema object
 */
export function generateArticleSchema(props: ArticleSchemaProps): Record<string, any> {
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
    articleSection,
    isAccessibleForFree,
    wordCount
  } = props;
  
  // Process authors (single or multiple)
  const processedAuthors = Array.isArray(author)
    ? author.map(a => ({
        '@type': 'Person',
        name: a.name,
        ...(a.url && { url: a.url })
      }))
    : {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url })
      };
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: Array.isArray(image) ? image : [image],
    datePublished,
    ...(dateModified && { dateModified }),
    author: processedAuthors,
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo
      },
      ...(publisher.url && { url: publisher.url })
    },
    url,
    ...(mainEntityOfPage && { mainEntityOfPage }),
    ...(keywords && { keywords }),
    ...(articleSection && { articleSection }),
    ...(isAccessibleForFree !== undefined && { isAccessibleForFree }),
    ...(wordCount && { wordCount })
  };
}

/**
 * Interface for NewsArticle schema (extends Article)
 */
export interface NewsArticleSchemaProps extends ArticleSchemaProps {
  dateline?: string; // Location where the article was written
  printEdition?: string;
  printPage?: string;
  printSection?: string;
}

/**
 * Generates JSON-LD schema for a NewsArticle
 * @param props NewsArticle properties
 * @returns NewsArticle schema object
 */
export function generateNewsArticleSchema(props: NewsArticleSchemaProps): Record<string, any> {
  const {
    dateline,
    printEdition,
    printPage,
    printSection,
    ...articleProps
  } = props;
  
  const baseSchema = generateArticleSchema(articleProps);
  
  return {
    ...baseSchema,
    '@type': 'NewsArticle',
    ...(dateline && { dateline }),
    ...(printEdition && { printEdition }),
    ...(printPage && { printPage }),
    ...(printSection && { printSection })
  };
}

/**
 * Interface for TechArticle schema (extends Article)
 */
export interface TechArticleSchemaProps extends ArticleSchemaProps {
  dependencies?: string;
  proficiencyLevel?: string; // e.g., "Beginner", "Expert"
}

/**
 * Generates JSON-LD schema for a TechArticle
 * @param props TechArticle properties
 * @returns TechArticle schema object
 */
export function generateTechArticleSchema(props: TechArticleSchemaProps): Record<string, any> {
  const {
    dependencies,
    proficiencyLevel,
    ...articleProps
  } = props;
  
  const baseSchema = generateArticleSchema(articleProps);
  
  return {
    ...baseSchema,
    '@type': 'TechArticle',
    ...(dependencies && { dependencies }),
    ...(proficiencyLevel && { proficiencyLevel })
  };
}

/**
 * Interface for VideoObject schema
 */
export interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string; // ISO 8601 format
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 duration format (e.g., "PT1H30M")
  publisher: {
    name: string;
    logo?: string;
    url?: string;
  };
  author?: {
    name: string;
    url?: string;
  };
  potentialAction?: {
    startOffset?: number;
  };
  interactionStatistic?: {
    userInteractionCount: number;
    interactionType: string; // e.g., "https://schema.org/WatchAction"
  };
}

/**
 * Generates JSON-LD schema for a VideoObject
 * @param props VideoObject properties
 * @returns VideoObject schema object
 */
export function generateVideoObjectSchema(props: VideoObjectSchemaProps): Record<string, any> {
  const {
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl,
    duration,
    publisher,
    author,
    potentialAction,
    interactionStatistic
  } = props;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: Array.isArray(thumbnailUrl) ? thumbnailUrl : [thumbnailUrl],
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo
        }
      }),
      ...(publisher.url && { url: publisher.url })
    },
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url })
      }
    }),
    ...(potentialAction && {
      potentialAction: {
        '@type': 'SeekToAction',
        target: `${contentUrl || embedUrl}?t={seek_to_second_number}`,
        'startOffset-input': 'required name=seek_to_second_number',
        ...(potentialAction.startOffset !== undefined && { startOffset: potentialAction.startOffset })
      }
    }),
    ...(interactionStatistic && {
      interactionStatistic: {
        '@type': 'InteractionCounter',
        userInteractionCount: interactionStatistic.userInteractionCount,
        interactionType: interactionStatistic.interactionType
      }
    })
  };
}