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
import { VariantInfo } from './components/variantinfo/VariantInfo'

type Collection = {
  collectionid: number
  name: string
  description: string
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [visibleNavVar, setVisibleNavBar] = useState<boolean>(true);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleNavBar(false)
  };

  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | string
  >('all')

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
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <NavBar onSearch={handleSearch}/>
              <main className="main-content">

                {visibleNavVar ?  <SideBar
                  collections={data}
                  onCollectionChange={handleCollectionChange}
                />: <></>} 
               

                <ProductList collectionid={selectedCollectionId} />
              </main>
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/variant/:id" element={<VariantInfo />} />
      </Routes>
    </Router>
  )
}

export default App
