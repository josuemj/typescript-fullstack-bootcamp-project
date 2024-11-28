import './ProductCard.css'

type ProductCardProps = {
  id: number
  description: string
  name: string
  image: string
  price: number
}

export const ProductCard = (product: ProductCardProps) => {
  return (
    <>
      <div key={product.id} className="productCard">
      <h1>{product.name}</h1>

        <img src={product.image}></img>
        <span style={{fontSize: "10px"}}>{product.description}</span>
        <strong>
            {product.price}
        </strong>
      </div>
    </>
  )
}
