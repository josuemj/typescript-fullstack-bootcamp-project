import { useQuery } from '@tanstack/react-query'
type Product = {
  description: string
  name: string
  // Add other product fields as needed
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

  console.log(data)

  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  )
}
