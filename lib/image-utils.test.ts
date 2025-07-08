import { generateSeoAltText } from './image-utils'

describe('generateSeoAltText', () => {
  test('generates country alt text correctly', () => {
    const altText = generateSeoAltText('country', { country: 'Australia' })
    expect(altText).toBe('Australia study abroad and immigration opportunities for international students')
  })

  test('generates university alt text correctly', () => {
    const altText = generateSeoAltText('university', { 
      name: 'University of Sydney', 
      country: 'Australia' 
    })
    expect(altText).toBe('University of Sydney campus in Australia - leading destination for international education')
  })

  test('generates logo alt text correctly', () => {
    const altText = generateSeoAltText('logo', { 
      name: 'University of Melbourne', 
      country: 'Australia' 
    })
    expect(altText).toBe('University of Melbourne official logo - prestigious Australia education institution')
  })

  test('generates student alt text correctly', () => {
    const altText = generateSeoAltText('student', { 
      university: 'University College Dublin',
      country: 'Ireland' 
    })
    expect(altText).toBe('Indian students at University College Dublin - successful international education journey')
  })

  test('generates hero alt text correctly', () => {
    const altText = generateSeoAltText('hero', { country: 'Canada' })
    expect(altText).toBe('Canada education and immigration pathways with Transpacific Immigration Services')
  })

  test('generates blog alt text correctly', () => {
    const altText = generateSeoAltText('blog', { 
      topic: 'Visa application process',
      country: 'New Zealand' 
    })
    expect(altText).toBe('Visa application process guide for international students seeking New Zealand education and immigration')
  })

  test('generates flag alt text correctly', () => {
    const altText = generateSeoAltText('flag', { country: 'Ireland' })
    expect(altText).toBe('Official flag of Ireland - study abroad destination for international students')
  })

  test('handles missing parameters gracefully', () => {
    const altText = generateSeoAltText('country', {})
    expect(altText).toBe('undefined study abroad and immigration opportunities for international students')
  })

  test('provides default alt text for unknown types', () => {
    // @ts-ignore - Testing invalid type
    const altText = generateSeoAltText('unknown', { name: 'Test' })
    expect(altText).toBe('Test')
  })

  test('provides default alt text when all params are missing', () => {
    // @ts-ignore - Testing with empty params
    const altText = generateSeoAltText('unknown', {})
    expect(altText).toBe('Educational and immigration resources for international students')
  })
})