import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="">
      <div className="navbar-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          ></input>
          <button className="search-button">Search</button>
        </div>
      </div>
    </nav>
  )
}
