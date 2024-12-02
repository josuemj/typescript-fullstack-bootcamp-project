import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img from './storeIcon.png'
type NavBarProps = {
  onSearch: (query: string) => void
  onBack: () => void
}

export const NavBar = ({ onSearch, onBack }: NavBarProps) => {
  const [inputValue, setInputValue] = useState('') // Local state for input

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value) // Update local input value
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(inputValue) // Trigger search with the current input value
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="store-icon-link">
          <img
            src={img}
            alt="Store Icon"
            className="storeIcon"
            onClick={onBack}
          />
        </Link>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            onChange={handleInputChange} // Update state on input change
            onKeyDown={handleKeyDown} // Trigger search on Enter key
          />
        </div>
      </div>
    </nav>
  )
}
