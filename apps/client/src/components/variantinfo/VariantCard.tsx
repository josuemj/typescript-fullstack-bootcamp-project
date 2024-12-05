import { Link } from 'react-router-dom'

export type VariantCardProps = {
  id: number
  name: string
  image: string
  price: number
}

export const VariantCard = (variant: VariantCardProps) => {
  return (
    <Link
      to={`/variant/${variant.id}`}
      state={{ variant }} // Pass the entire product object as state
      className="product-card-link"
    >
      <>
        <div key={variant.id} className="productCard">
          <img src={variant.image} className="productImage"></img>

          <h1 className="productTitle">{variant.name}</h1>
          <h3 className="cardPrice">${variant.price}</h3>
        </div>
      </>
    </Link>
  )
}
