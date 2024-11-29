import './VariantList.css';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from '../ProductCard';

type Variant = {
  id: number;
  parent_product_id: number;
  variant_name: string;
  price: number;
  image: string;
  collectionid: string
};

type VariantListProps = {
  parent_product_id: number;
};

export const VariantList = ({ parent_product_id }: VariantListProps) => {
  const { status, data, error } = useQuery<Variant[]>(
    ['variants', parent_product_id],
    () =>
      fetch(`http://localhost:5001/api/variants/product/${parent_product_id}`)
        .then((res) => res.json())
        .then((data) => Array.isArray(data) ? data : []) // Ensure it returns an array
  );

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error' || !Array.isArray(data)) {
    return <span>Error fetching variants or no data available.</span>;
  }

  if (data.length === 0) {
    return <span>No variants available for this product.</span>;
  }

  return (
    <div className="productVariants">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          description=""
          name={item.variant_name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};
