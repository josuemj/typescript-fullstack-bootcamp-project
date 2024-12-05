import './ProductInfo.css';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { VariantList } from './VariantList';

export type ProductCardProps = {
  id: number;
  description: string;
  name: string;
  image: string;
  price: number;
};

export const ProductInfo = () => {
  const location = useLocation();
  const { id } = useParams(); // Get ID from the route
  const [product, setProduct] = useState<ProductCardProps | null>(
    location.state?.product || null // Check if product exists in state
  );

  useEffect(() => {
    if (!product) {
      // Fetch product details if state is missing
      fetch(`http://localhost:5001/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error('Error fetching product:', err));
    }
  }, [id, product]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <>
      <div className="productPage">
        <div className="productContainer">
          <img src={product.image} alt={product.name} className="productImageInfo" />
          <div className="productDetails">
            <h1 className="productTitle">{product.name}</h1>
            <hr className="divider" />
            <h2 className="productPrice">${product.price.toFixed(2)}</h2>
            <p className="productDescription">{product.description}</p>
          </div>
        </div>
        <VariantList parent_product_id={product.id} />
      </div>
    </>
  );
};
