import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for: ${search}`);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a href="#" className="navbar-brand fw-bold">
          <i className="bi bi-basket-fill me-2"></i>
          GreenMarket
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#benefits" className="nav-link">
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button className="btn btn-light">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
