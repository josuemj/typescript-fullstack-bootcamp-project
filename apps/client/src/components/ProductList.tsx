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
  collectionid : number | string
}
export const ProductList = ({collectionid} : ProductListProps) => {

  //This fetches all products when collectionid = 'all '
  // this fetcehd a product by id http://localhost:5001/api/products/1 (id = 1) this will use the
  const route =
    collectionid === 'all'
      ? 'http://localhost:5001/api/products'
      : `http://localhost:5001/api/products/collection/${collectionid}`;

  console.log(`Fetching from route: ${route}`);

  const { status, data, error } = useQuery<Product[]>(
    ['products', collectionid], // Include collectionid in the queryKey
    () => fetch(route).then((res) => res.json()), // Fetch function
    {
      enabled: !!collectionid, // Ensure query is only run when collectionid is defined
    }
  );
  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error</span>
  }

  console.log(data)

  return (
    <div className="productList">
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
