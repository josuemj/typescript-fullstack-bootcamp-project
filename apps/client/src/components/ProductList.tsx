import { useQuery } from '@tanstack/react-query'
type Product = {
  id: number
  description: string
  name: string
  imagen: string
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

  console.log(data[0].imagen)
  console.log(data)

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.imagen}
      
          ></img>
          <h1>{item.name}</h1>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  )
}
