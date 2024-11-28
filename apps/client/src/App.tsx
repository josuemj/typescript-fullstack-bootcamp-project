import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'

import { ProductList } from './components/ProductList'
import { NavBar } from './components/NavBar'
import { AdsContainer } from './components/ad/AdsContainer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <NavBar />
        <AdsContainer />
        <h1>Store</h1>

        <main className="main-content">
          <ProductList />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
