/**
 * Utility functions for image handling and SEO optimization
 */

/**
 * Generates SEO-optimized alt text for different types of images
 * @param type - The type of image (country, university, logo, student, hero, blog, flag)
 * @param params - Parameters specific to the image type
 * @returns SEO-optimized alt text string
 */
export function generateSeoAltText(
  type: 'country' | 'university' | 'logo' | 'student' | 'hero' | 'blog' | 'flag',
  params: {
    name?: string
    country?: string
    location?: string
    topic?: string
    university?: string
  }
): string {
  const { name, country, location, topic, university } = params

  switch (type) {
    case 'country':
      return `${country} study abroad and immigration opportunities for international students`

    case 'university':
      return `${name} campus in ${country || location || ''} - leading destination for international education`

    case 'logo':
      return `${name} official logo - prestigious ${country || ''} education institution`

    case 'student':
      return `Indian students at ${university || country || ''} - successful international education journey`

    case 'hero':
      return `${country || name || ''} education and immigration pathways with Transpacific Immigration Services`

    case 'blog':
      return `${topic || ''} guide for international students seeking ${country || ''} education and immigration`

    case 'flag':
      return `Official flag of ${country} - study abroad destination for international students`

    default:
      return name || country || 'Educational and immigration resources for international students'
  }
}