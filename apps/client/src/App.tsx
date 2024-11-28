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
import { SideBar } from './components/sidebar/SideBar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <SideBar />
          <ProductList />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
