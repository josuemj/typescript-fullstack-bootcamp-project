import { VariantCardProps } from './VariantCard';

describe('VariantCardProps behavior', () => {
  it('should correctly define the structure of a VariantCardProps object', () => {
    const mockVariant: VariantCardProps = {
      id: 1,
      name: 'Sample Product',
      image: 'sample-image.jpg',
      price: 49.99,
    };

    expect(mockVariant.id).toBe(1);
    expect(mockVariant.name).toBe('Sample Product');
    expect(mockVariant.image).toBe('sample-image.jpg');
    expect(mockVariant.price).toBe(49.99);
  });

  it('should ensure the price is a number', () => {
    const mockVariant: VariantCardProps = {
      id: 2,
      name: 'Another Product',
      image: 'another-image.jpg',
      price: 19.99,
    };

    expect(typeof mockVariant.price).toBe('number');
  });

  it('should ensure the name is a string', () => {
    const mockVariant: VariantCardProps = {
      id: 3,
      name: 'Yet Another Product',
      image: 'yet-another-image.jpg',
      price: 29.99,
    };

    expect(typeof mockVariant.name).toBe('string');
  });

  it('should ensure the image is a valid string', () => {
    const mockVariant: VariantCardProps = {
      id: 4,
      name: 'Last Product',
      image: 'last-image.jpg',
      price: 99.99,
    };

    expect(mockVariant.image).toMatch(/\.(jpg|jpeg|png|gif)$/);
  });
});
