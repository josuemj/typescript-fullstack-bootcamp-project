import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import { ProductList } from './components/ProductList'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/sidebar/SideBar'
import { ProductInfo } from './components/productinfo/ProductInfo'
const queryClient = new QueryClient()

type Collection = {
  collectionid: number
  name: string
  description: string
}

function App() {
  const [selectedCollectionId, setSelectedCollectionId] = useState<number | string>('all')

  const handleCollectionChange = (collectionId: number | string) => {
    setSelectedCollectionId(collectionId) // Update selected collection ID
  }

  const { status, data, error } = useQuery<Collection[]>({
    queryKey: ['collections'],
    queryFn: () => {
      return fetch('http://localhost:5001/api/collections/').then((result) =>
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
  console.log(`Ill pass to list --> ${selectedCollectionId}`)

  return (
    <Router>
      {/* <div className="app-container">
        <NavBar />
        <main className="main-content">
          <SideBar
            collections={data}
            onCollectionChange={handleCollectionChange}
          />
          <ProductList collectionid={selectedCollectionId} />
        </main>
      </div> */}
      <Routes>
        <Route path="/" element={
          <div className="app-container">
          <NavBar />
          <main className="main-content">
            <SideBar
              collections={data}
              onCollectionChange={handleCollectionChange}
            />
            <ProductList collectionid={selectedCollectionId} />
          </main>
        </div>
        } />
        <Route path="/product/:id" element={<ProductInfo />} /> Dynamic route for product details
      </Routes>
    </Router>
  )
}

export default App
