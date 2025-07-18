// import type { Metadata } from 'next';

// /**
//  * Maximum allowed length for metadata tags
//  */
// export const MAX_TAG_LENGTH = 20;

// /**
//  * Interface for metadata validation options
//  */
// export interface MetadataValidationOptions {
//   /**
//    * Whether to throw an error when validation fails
//    * @default false
//    */
//   throwOnError?: boolean;
  
//   /**
//    * Whether to log validation errors to the console
//    * @default true
//    */
//   logErrors?: boolean;
  
//   /**
//    * Whether to validate schema markup
//    * @default true
//    */
//   validateSchema?: boolean;
// }

// /**
//  * Validates that all metadata tags are within the maximum length
//  * @param metadata The metadata object to validate
//  * @param options Validation options
//  * @returns An object containing validation results
//  */
// export function validateMetadataTagLength(
//   metadata: Metadata,
//   options: MetadataValidationOptions = {}
// ): { isValid: boolean; errors: string[]; metadata: Metadata } {
//   const { throwOnError = false, logErrors = true, validateSchema = true } = options;
//   const errors: string[] = [];
  
//   // Create a copy of the metadata object to modify
//   const updatedMetadata = { ...metadata };
  
//   // Check and truncate title
//   if (typeof updatedMetadata.title === 'string' && updatedMetadata.title.length > MAX_TAG_LENGTH) {
//     errors.push(`Title exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.title}" (${updatedMetadata.title.length} chars)`);
//     updatedMetadata.title = updatedMetadata.title.substring(0, MAX_TAG_LENGTH);
//   }
  
//   // Check and truncate description
//   if (typeof updatedMetadata.description === 'string' && updatedMetadata.description.length > MAX_TAG_LENGTH) {
//     errors.push(`Description exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.description}" (${updatedMetadata.description.length} chars)`);
//     updatedMetadata.description = updatedMetadata.description.substring(0, MAX_TAG_LENGTH);
//   }
  
//   // Check and truncate keywords
//   if (updatedMetadata.keywords) {
//     const keywords = Array.isArray(updatedMetadata.keywords) 
//       ? updatedMetadata.keywords 
//       : [updatedMetadata.keywords];
      
//     const truncatedKeywords = keywords.map((keyword, index) => {
//       if (typeof keyword === 'string' && keyword.length > MAX_TAG_LENGTH) {
//         errors.push(`Keyword at index ${index} exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${keyword}" (${keyword.length} chars)`);
//         return keyword.substring(0, MAX_TAG_LENGTH);
//       }
//       return keyword;
//     });
    
//     updatedMetadata.keywords = Array.isArray(updatedMetadata.keywords) 
//       ? truncatedKeywords 
//       : truncatedKeywords[0];
//   }
  
//   // Check and truncate OpenGraph tags
//   if (updatedMetadata.openGraph) {
//     if (typeof updatedMetadata.openGraph.title === 'string' && updatedMetadata.openGraph.title.length > MAX_TAG_LENGTH) {
//       errors.push(`OpenGraph title exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.openGraph.title}" (${updatedMetadata.openGraph.title.length} chars)`);
//       updatedMetadata.openGraph = {
//         ...updatedMetadata.openGraph,
//         title: updatedMetadata.openGraph.title.substring(0, MAX_TAG_LENGTH)
//       };
//     }
    
//     if (typeof updatedMetadata.openGraph.description === 'string' && updatedMetadata.openGraph.description.length > MAX_TAG_LENGTH) {
//       errors.push(`OpenGraph description exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.openGraph.description}" (${updatedMetadata.openGraph.description.length} chars)`);
//       updatedMetadata.openGraph = {
//         ...updatedMetadata.openGraph,
//         description: updatedMetadata.openGraph.description.substring(0, MAX_TAG_LENGTH)
//       };
//     }
    
//     // Check for OpenGraph images
//     if (!updatedMetadata.openGraph.images || 
//         (Array.isArray(updatedMetadata.openGraph.images) && updatedMetadata.openGraph.images.length === 0)) {
//       errors.push(`OpenGraph images are missing. Each page should have at least one OpenGraph image for optimal social sharing.`);
//     }
//   } else {
//     errors.push(`OpenGraph metadata is missing. Each page should have OpenGraph metadata for optimal social sharing.`);
//   }
  
//   // Check and truncate Twitter tags
//   if (updatedMetadata.twitter) {
//     if (typeof updatedMetadata.twitter.title === 'string' && updatedMetadata.twitter.title.length > MAX_TAG_LENGTH) {
//       errors.push(`Twitter title exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.twitter.title}" (${updatedMetadata.twitter.title.length} chars)`);
//       updatedMetadata.twitter = {
//         ...updatedMetadata.twitter,
//         title: updatedMetadata.twitter.title.substring(0, MAX_TAG_LENGTH)
//       };
//     }
    
//     if (typeof updatedMetadata.twitter.description === 'string' && updatedMetadata.twitter.description.length > MAX_TAG_LENGTH) {
//       errors.push(`Twitter description exceeds maximum length of ${MAX_TAG_LENGTH} characters: "${updatedMetadata.twitter.description}" (${updatedMetadata.twitter.description.length} chars)`);
//       updatedMetadata.twitter = {
//         ...updatedMetadata.twitter,
//         description: updatedMetadata.twitter.description.substring(0, MAX_TAG_LENGTH)
//       };
//     }
    
//     // Check for Twitter card type and images
//     if (updatedMetadata.twitter.card !== 'summary_large_image') {
//       errors.push(`Twitter card type should be 'summary_large_image' for optimal display on Twitter.`);
//     }
    
//     if (!updatedMetadata.twitter.images) {
//       errors.push(`Twitter images are missing. Each page should have at least one Twitter image for optimal social sharing.`);
//     }
//   } else {
//     errors.push(`Twitter metadata is missing. Each page should have Twitter metadata for optimal social sharing.`);
//   }
  
//   // Check for schema markup
//   if (validateSchema && updatedMetadata.other) {
//     const schemaScript = updatedMetadata.other['application/ld+json'];
    
//     if (!schemaScript) {
//       errors.push(`Schema markup is missing. Each page should have structured data for better search engine understanding.`);
//     } else {
//       try {
//         // If it's a string, try to parse it to validate JSON structure
//         if (typeof schemaScript === 'string') {
//           const parsedSchema = JSON.parse(schemaScript);
          
//           // Check for required schema properties
//           if (!parsedSchema['@context'] || parsedSchema['@context'] !== 'https://schema.org') {
//             errors.push(`Schema markup is missing required @context property or it's not set to 'https://schema.org'.`);
//           }
          
//           if (!parsedSchema['@type']) {
//             errors.push(`Schema markup is missing required @type property.`);
//           }
//         }
//       } catch (error) {
//         errors.push(`Schema markup contains invalid JSON: ${error.message}`);
//       }
//     }
//   }
  
//   const isValid = errors.length === 0;
  
//   // Log errors if specified
//   if (!isValid && logErrors) {
//     console.error('Metadata validation errors:');
//     errors.forEach(error => console.error(`- ${error}`));
//   }
  
//   // Throw error if specified
//   if (!isValid && throwOnError) {
//     throw new Error(`Metadata validation failed:\n${errors.join('\n')}`);
//   }
  
//   return { isValid, errors, metadata: updatedMetadata };
// }

// /**
//  * Higher-order function that wraps a metadata object and validates its tag lengths
//  * @param metadata The metadata object to validate
//  * @param options Validation options
//  * @returns The validated and truncated metadata object
//  */
// export function withMetadataValidation(
//   metadata: Metadata,
//   options: MetadataValidationOptions = {}
// ): Metadata {
//   const { metadata: validatedMetadata } = validateMetadataTagLength(metadata, options);
//   return validatedMetadata;
// }