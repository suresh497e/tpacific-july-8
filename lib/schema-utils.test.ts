import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBlogSchema,
  generateBlogPostingSchema,
  generateContactPageSchema,
  generatePlaceSchema,
  generateEducationalOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbListSchema,
  schemaToScriptTag,
  addSchemaToMetadata
} from './schema-utils';

describe('Schema Utils', () => {
  describe('generateOrganizationSchema', () => {
    it('should generate valid Organization schema', () => {
      const schema = generateOrganizationSchema({
        name: 'Test Organization',
        url: 'https://example.com',
        logo: 'https://example.com/logo.png'
      });

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Organization');
      expect(schema.name).toBe('Test Organization');
      expect(schema.url).toBe('https://example.com');
      expect(schema.logo).toBe('https://example.com/logo.png');
    });

    it('should include optional properties when provided', () => {
      const schema = generateOrganizationSchema({
        name: 'Test Organization',
        url: 'https://example.com',
        logo: 'https://example.com/logo.png',
        address: {
          streetAddress: '123 Test St',
          addressLocality: 'Test City',
          addressRegion: 'Test Region',
          postalCode: '12345',
          addressCountry: 'Test Country'
        },
        contactPoint: {
          telephone: '+1-123-456-7890',
          email: 'test@example.com',
          contactType: 'customer service'
        },
        sameAs: ['https://facebook.com/test', 'https://twitter.com/test']
      });

      expect(schema.address).toBeDefined();
      expect(schema.address.streetAddress).toBe('123 Test St');
      expect(schema.contactPoint).toBeDefined();
      expect(schema.contactPoint.telephone).toBe('+1-123-456-7890');
      expect(schema.sameAs).toHaveLength(2);
      expect(schema.sameAs[0]).toBe('https://facebook.com/test');
    });
  });

  describe('generateWebsiteSchema', () => {
    it('should generate valid WebSite schema', () => {
      const schema = generateWebsiteSchema({
        name: 'Test Website',
        url: 'https://example.com',
        description: 'Test description'
      });

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('WebSite');
      expect(schema.name).toBe('Test Website');
      expect(schema.url).toBe('https://example.com');
      expect(schema.description).toBe('Test description');
    });
  });

  describe('generateBlogSchema', () => {
    it('should generate valid Blog schema', () => {
      const schema = generateBlogSchema({
        name: 'Test Blog',
        url: 'https://example.com/blog',
        description: 'Test blog description'
      });

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('Blog');
      expect(schema.name).toBe('Test Blog');
      expect(schema.url).toBe('https://example.com/blog');
      expect(schema.description).toBe('Test blog description');
    });
  });

  describe('generateBlogPostingSchema', () => {
    it('should generate valid BlogPosting schema', () => {
      const schema = generateBlogPostingSchema({
        headline: 'Test Post',
        description: 'Test post description',
        image: 'https://example.com/image.jpg',
        datePublished: '2023-01-01T00:00:00Z',
        dateModified: '2023-01-02T00:00:00Z',
        author: {
          name: 'Test Author',
          url: 'https://example.com/author'
        },
        publisher: {
          name: 'Test Publisher',
          logo: 'https://example.com/publisher-logo.png'
        },
        url: 'https://example.com/blog/test-post'
      });

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('BlogPosting');
      expect(schema.headline).toBe('Test Post');
      expect(schema.image).toBe('https://example.com/image.jpg');
      expect(schema.datePublished).toBe('2023-01-01T00:00:00Z');
      expect(schema.author).toBeDefined();
      expect(schema.author.name).toBe('Test Author');
      expect(schema.publisher).toBeDefined();
      expect(schema.publisher.name).toBe('Test Publisher');
    });
  });

  describe('schemaToScriptTag', () => {
    it('should convert schema object to React script element', () => {
      const schema = { '@context': 'https://schema.org', '@type': 'Test', name: 'Test Name' };
      const scriptElement = schemaToScriptTag(schema);

      // Verify it's a React element with the right properties
      expect(scriptElement.type).toBe('script');
      expect(scriptElement.props.type).toBe('application/ld+json');
      
      // Check the dangerouslySetInnerHTML content
      const htmlContent = scriptElement.props.dangerouslySetInnerHTML.__html;
      expect(htmlContent).toContain('"@context":"https://schema.org"');
      expect(htmlContent).toContain('"@type":"Test"');
      expect(htmlContent).toContain('"name":"Test Name"');
    });
  });

  describe('addSchemaToMetadata', () => {
    it('should add schema to metadata', () => {
      const metadata = {
        title: 'Test Page',
        description: 'Test description'
      };
      const schema = { '@context': 'https://schema.org', '@type': 'Test', name: 'Test Name' };
      const updatedMetadata = addSchemaToMetadata(metadata, [schema]);

      expect(updatedMetadata.title).toBe('Test Page');
      expect(updatedMetadata.description).toBe('Test description');
      expect(updatedMetadata.other).toBeDefined();
      expect(updatedMetadata.other['application/ld+json']).toBeDefined();
    });

    it('should handle multiple schemas', () => {
      const metadata = { title: 'Test Page' };
      const schema1 = { '@context': 'https://schema.org', '@type': 'Test1', name: 'Test Name 1' };
      const schema2 = { '@context': 'https://schema.org', '@type': 'Test2', name: 'Test Name 2' };
      const updatedMetadata = addSchemaToMetadata(metadata, [schema1, schema2]);

      expect(updatedMetadata.other['application/ld+json']).toContain('"@type":"Test1"');
      expect(updatedMetadata.other['application/ld+json']).toContain('"@type":"Test2"');
    });
  });
});