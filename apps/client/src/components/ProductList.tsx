import { useQuery } from '@tanstack/react-query'
import { ProductCard } from './ProductCard'

type Product = {
  id: number
  description: string
  name: string
  image: string
  price: number
}
export const ProductList = () => {
  const { status, data, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => {
      return fetch('http://localhost:5001/api/products/').then((result) =>
        result.json(),
      )
    },
  })

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error</span>
  }

  console.log(data[0].image)
  console.log(data)

  return (
    <div
      className="product-list"
    >
      {data.map((item) => (
        <ProductCard
          id={item.id}
          description={item.description}
          name={item.name}
          image={item.image}
          price={item.price}

        />
      ))}
    </div>
  )
}
