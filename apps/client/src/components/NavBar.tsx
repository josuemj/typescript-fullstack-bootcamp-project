import './NavBar.css';

type NavBarProps = {
  onSearch: (query: string) => void;
};

export const NavBar = ({ onSearch }: NavBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            onChange={handleInputChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </nav>
  );
};
