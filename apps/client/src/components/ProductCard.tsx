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
        <img src={product.image} className="productImage"></img>

        <h1 className="productTitle">{product.name}</h1>
        <h3 className="cardPrice">${product.price}</h3>
        <p className='cardDescription'>{product.description}</p>
      </div>
    </>
  )
}
