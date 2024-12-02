import { useQuery } from '@tanstack/react-query'
import { ProductCard } from './ProductCard'
import './ProductList..css'
type Product = {
  id: number
  description: string
  name: string
  image: string
  price: number
}

type ProductListProps = {
  collectionid: number | string
  searchQuery?: string // Optional search query
}

export const ProductList = ({
  collectionid,
  searchQuery,
}: ProductListProps) => {
  const route = searchQuery
    ? `http://localhost:5001/api/products/search/${encodeURIComponent(searchQuery)}`
    : collectionid === 'all'
      ? 'http://localhost:5001/api/products'
      : `http://localhost:5001/api/products/collection/${collectionid}`

  console.log(`Fetching from route: ${route}`)

  const { status, data, error } = useQuery<Product[]>(
    ['products', collectionid, searchQuery], // Include searchQuery in queryKey
    () => fetch(route).then((res) => res.json()), // Fetch function
    {
      enabled: !!collectionid || !!searchQuery, // Ensure query runs only when valid inputs exist
    },
  )

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error</span>
  }

  if (data.length === 0) {
    return <span>No products found</span>
  }

  return (
    <div className="productList">
      {data.map((item) => (
        <ProductCard
          key={item.id}
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
