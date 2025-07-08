import { validateMetadataTagLength, withMetadataValidation, MAX_TAG_LENGTH } from './metadata-utils';

/**
 * This is a simple test suite for the metadata validation utilities.
 * In a real project, you would use a testing framework like Jest or Vitest.
 * 
 * To run these tests, you can add a script to package.json:
 * "test:metadata": "ts-node lib/metadata-utils.test.ts"
 */

// Mock console.error to capture logs
const originalConsoleError = console.error;
let consoleErrorCalls: string[] = [];

function setupMocks() {
  consoleErrorCalls = [];
  console.error = (...args: any[]) => {
    consoleErrorCalls.push(args.join(' '));
  };
}

function restoreMocks() {
  console.error = originalConsoleError;
}

function runTest(name: string, testFn: () => void) {
  try {
    setupMocks();
    testFn();
    console.log(`✅ ${name} passed`);
  } catch (error) {
    console.error(`❌ ${name} failed:`, error);
  } finally {
    restoreMocks();
  }
}

function assertEqual(actual: any, expected: any, message?: string) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  
  if (actualStr !== expectedStr) {
    throw new Error(`${message || 'Assertion failed'}: expected ${expectedStr}, got ${actualStr}`);
  }
}

// Test valid metadata
runTest('validateMetadataTagLength should pass valid metadata', () => {
  const validMetadata = {
    title: 'Short Title', // 11 chars
    description: 'Short Description', // 17 chars
    keywords: ['tag1', 'tag2'],
    openGraph: {
      title: 'OG Title', // 8 chars
      description: 'OG Description', // 14 chars
    },
    twitter: {
      title: 'Twitter Title', // 13 chars
      description: 'Twitter Desc', // 12 chars
    },
  };
  
  const result = validateMetadataTagLength(validMetadata, { logErrors: false });
  assertEqual(result.isValid, true, 'Should be valid');
  assertEqual(result.errors.length, 0, 'Should have no errors');
});

// Test invalid metadata
runTest('validateMetadataTagLength should fail invalid metadata', () => {
  const invalidMetadata = {
    title: 'This title is way too long and exceeds the limit', // 46 chars
    description: 'This description is also too long for the validation to pass', // 56 chars
    keywords: ['short', 'this keyword is definitely too long for the validation'], // 2nd is 49 chars
    openGraph: {
      title: 'This OpenGraph title is too long as well', // 39 chars
      description: 'And this OpenGraph description is also too long', // 45 chars
    },
    twitter: {
      title: 'This Twitter title exceeds the character limit too', // 47 chars
      description: 'Finally, this Twitter description is also too long', // 48 chars
    },
  };
  
  const result = validateMetadataTagLength(invalidMetadata, { logErrors: false });
  assertEqual(result.isValid, false, 'Should be invalid');
  assertEqual(result.errors.length, 7, 'Should have 7 errors');
});

// Test logging behavior
runTest('validateMetadataTagLength should log errors when logErrors is true', () => {
  const invalidMetadata = {
    title: 'This title is way too long and exceeds the limit', // 46 chars
  };
  
  validateMetadataTagLength(invalidMetadata, { logErrors: true });
  assertEqual(consoleErrorCalls.length > 0, true, 'Should log errors');
});

// Test throwing behavior
runTest('validateMetadataTagLength should throw when throwOnError is true', () => {
  const invalidMetadata = {
    title: 'This title is way too long and exceeds the limit', // 46 chars
  };
  
  let errorThrown = false;
  try {
    validateMetadataTagLength(invalidMetadata, { throwOnError: true, logErrors: false });
  } catch (error) {
    errorThrown = true;
  }
  
  assertEqual(errorThrown, true, 'Should throw an error');
});

// Test withMetadataValidation
runTest('withMetadataValidation should return the metadata', () => {
  const validMetadata = {
    title: 'Short Title', // 11 chars
  };
  
  const result = withMetadataValidation(validMetadata, { logErrors: false });
  assertEqual(result, validMetadata, 'Should return the same metadata object');
});

// Test MAX_TAG_LENGTH constant
runTest('MAX_TAG_LENGTH should be 20', () => {
  assertEqual(MAX_TAG_LENGTH, 20, 'MAX_TAG_LENGTH should be 20');
});

// Test extremely long tag truncation
runTest('validateMetadataTagLength should truncate extremely long tags', () => {
  const veryLongString = 'a'.repeat(100);
  const metadata = {
    title: veryLongString,
    description: veryLongString,
    keywords: [veryLongString],
    openGraph: {
      title: veryLongString,
      description: veryLongString
    },
    twitter: {
      title: veryLongString,
      description: veryLongString
    }
  };
  
  const result = validateMetadataTagLength(metadata, { logErrors: false });
  
  // Check that all fields were truncated to MAX_TAG_LENGTH
  assertEqual(result.metadata.title, 'a'.repeat(MAX_TAG_LENGTH), 'Title should be truncated');
  assertEqual(result.metadata.description, 'a'.repeat(MAX_TAG_LENGTH), 'Description should be truncated');
  assertEqual(result.metadata.keywords[0], 'a'.repeat(MAX_TAG_LENGTH), 'Keyword should be truncated');
  assertEqual(result.metadata.openGraph.title, 'a'.repeat(MAX_TAG_LENGTH), 'OG title should be truncated');
  assertEqual(result.metadata.openGraph.description, 'a'.repeat(MAX_TAG_LENGTH), 'OG description should be truncated');
  assertEqual(result.metadata.twitter.title, 'a'.repeat(MAX_TAG_LENGTH), 'Twitter title should be truncated');
  assertEqual(result.metadata.twitter.description, 'a'.repeat(MAX_TAG_LENGTH), 'Twitter description should be truncated');
});

// Test undefined and null metadata fields
runTest('validateMetadataTagLength should handle undefined and null fields', () => {
  const metadata = {
    title: undefined,
    description: null,
    keywords: [undefined, null, 'valid'],
    openGraph: {
      title: undefined,
      description: null
    },
    twitter: {
      title: undefined,
      description: null
    }
  };
  
  const result = validateMetadataTagLength(metadata, { logErrors: false });
  
  // Check that undefined and null fields are not modified
  assertEqual(result.metadata.title, undefined, 'Undefined title should remain undefined');
  assertEqual(result.metadata.description, null, 'Null description should remain null');
  assertEqual(result.metadata.keywords[0], undefined, 'Undefined keyword should remain undefined');
  assertEqual(result.metadata.keywords[1], null, 'Null keyword should remain null');
  assertEqual(result.metadata.keywords[2], 'valid', 'Valid keyword should remain unchanged');
  assertEqual(result.metadata.openGraph.title, undefined, 'Undefined OG title should remain undefined');
  assertEqual(result.metadata.openGraph.description, null, 'Null OG description should remain null');
  assertEqual(result.metadata.twitter.title, undefined, 'Undefined Twitter title should remain undefined');
  assertEqual(result.metadata.twitter.description, null, 'Null Twitter description should remain null');
});

// Test withMetadataValidation options passing
runTest('withMetadataValidation should pass options to validateMetadataTagLength', () => {
  const invalidMetadata = {
    title: 'This title is way too long and exceeds the limit', // 46 chars
  };
  
  // Mock validateMetadataTagLength to track calls
  const originalValidateMetadataTagLength = validateMetadataTagLength;
  let optionsPassedToValidate = null;
  
  try {
    // Replace with mock
    (global as any).validateMetadataTagLength = (metadata: any, options: any) => {
      optionsPassedToValidate = options;
      return originalValidateMetadataTagLength(metadata, options);
    };
    
    // Call withMetadataValidation with custom options
    const customOptions = { throwOnError: true, logErrors: false, validateSchema: false };
    withMetadataValidation(invalidMetadata, customOptions);
    
    // Check that options were passed correctly
    assertEqual(optionsPassedToValidate, customOptions, 'Options should be passed to validateMetadataTagLength');
  } finally {
    // Restore original function
    (global as any).validateMetadataTagLength = originalValidateMetadataTagLength;
  }
});

// Test tag length validation
runTest('validateMetadataTagLength should enforce maximum tag length of 20 characters', () => {
  const metadata = {
    keywords: ['short', 'this-is-exactly-twenty', 'this-is-way-too-long-for-a-tag']
  };
  
  const result = validateMetadataTagLength(metadata, { logErrors: false });
  assertEqual(result.metadata.keywords, ['short', 'this-is-exactly-twenty', 'this-is-way-too-lon'], 'Should truncate tags to 20 characters');
});

// Test OpenGraph and Twitter images validation
runTest('validateMetadataTagLength should validate presence of OpenGraph and Twitter images', () => {
  // Valid metadata with images
  const validMetadata = {
    title: 'Test Title',
    description: 'Test Description',
    openGraph: {
      title: 'OG Title',
      description: 'OG Description',
      images: [{ url: '/test-image.jpg', width: 1200, height: 630, alt: 'Test Image' }],
    },
    twitter: {
      title: 'Twitter Title',
      description: 'Twitter Description',
      card: 'summary_large_image',
      images: ['/test-image.jpg'],
    },
  };
  
  const validResult = validateMetadataTagLength(validMetadata, { logErrors: false });
  assertEqual(validResult.isValid, true, 'Should be valid with images');
  assertEqual(validResult.errors.length, 0, 'Should have no errors with images');
  
  // Invalid metadata without images
  const invalidMetadata = {
    title: 'Test Title',
    description: 'Test Description',
    openGraph: {
      title: 'OG Title',
      description: 'OG Description',
    },
    twitter: {
      title: 'Twitter Title',
      description: 'Twitter Description',
      card: 'summary_large_image',
    },
  };
  
  const invalidResult = validateMetadataTagLength(invalidMetadata, { logErrors: false });
  assertEqual(invalidResult.isValid, false, 'Should be invalid without images');
  assertEqual(invalidResult.errors.length, 2, 'Should have 2 errors for missing images');
});

// Test schema validation
runTest('validateMetadataTagLength should validate schema markup when validateSchema is true', () => {
  const validSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Test Organization'
  };
  
  const metadata = {
    title: 'Test Title',
    other: {
      'application/ld+json': JSON.stringify(validSchema)
    }
  };
  
  const result = validateMetadataTagLength(metadata, { validateSchema: true, logErrors: false });
  assertEqual(result.isValid, true, 'Should be valid with valid schema');
  assertEqual(result.errors.length, 0, 'Should have no errors with valid schema');
});

runTest('validateMetadataTagLength should detect invalid schema markup', () => {
  const invalidSchema = {
    // Missing required @context and @type
    'name': 'Test Organization'
  };
  
  const metadata = {
    title: 'Test Title',
    other: {
      'application/ld+json': JSON.stringify(invalidSchema)
    }
  };
  
  const result = validateMetadataTagLength(metadata, { validateSchema: true, logErrors: false });
  assertEqual(result.isValid, false, 'Should be invalid with invalid schema');
  assertEqual(result.errors.length > 0, true, 'Should have errors with invalid schema');
});

runTest('validateMetadataTagLength should validate multiple schema objects in an array', () => {
  const validSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Test Organization'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Test Website'
    }
  ];
  
  const metadata = {
    title: 'Test Title',
    other: {
      'application/ld+json': JSON.stringify(validSchemas)
    }
  };
  
  const result = validateMetadataTagLength(metadata, { validateSchema: true, logErrors: false });
  assertEqual(result.isValid, true, 'Should be valid with valid schema array');
  assertEqual(result.errors.length, 0, 'Should have no errors with valid schema array');
});

console.log('All tests completed!');