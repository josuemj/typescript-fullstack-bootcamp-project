import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { VariantCard } from './VariantCard';

describe('VariantCard Component', () => {
  const mockVariant = {
    id: 1,
    name: 'Sample Product',
    image: 'sample-image.jpg',
    price: 49.99,
  };

  it('should render the product details correctly', () => {
    render(
      <BrowserRouter>
        <VariantCard {...mockVariant} />
      </BrowserRouter>
    );

    // Check for product name
    const nameElement = screen.getByText('Sample Product');
    expect(nameElement).not.toBeNull();

    // Check for product price
    const priceElement = screen.getByText('$49.99');
    expect(priceElement).not.toBeNull();

    // Check for product image
    const imageElement = screen.getByRole('img');
    expect(imageElement.getAttribute('src')).toBe('sample-image.jpg');
  });

  it('should create a link with the correct URL', () => {
    render(
      <BrowserRouter>
        <VariantCard {...mockVariant} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement.getAttribute('href')).toBe('/variant/1');
  });
});
