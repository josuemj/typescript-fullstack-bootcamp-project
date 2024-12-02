import { useLocation, useNavigate } from 'react-router-dom';
type VariantCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export const VariantInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const variant: VariantCardProps | null = location.state?.variant || null;

  if (!variant) {
    navigate(-1);
    return null;
  }

  return (
    <div className="variantPage">
      <div className="productContainer">
        <img src={variant.image} alt={variant.name} className="productImageInfo" />
        <div className="productDetails">
          <h1>{variant.name}</h1>
          <hr />
          <h2>${variant.price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};
