import './ProductInfo.css'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
type ProductCardProps = {
  id: number
  description: string
  name: string
  image: string
  price: number
}

export const ProductInfo = () => {
  const location = useLocation()
  const { id } = useParams() // Get ID from the route
  const [product, setProduct] = useState<ProductCardProps | null>(
    location.state?.product || null, // Check if product exists in state
  )

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
          <img src={product.image} className="productImageInfo"></img>
          <div className="productDetails">
            <h1>{product.name}</h1>
            <hr></hr>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="productVariants"></div>
      </div>
    </>
  )
}