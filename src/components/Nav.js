import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h1>Movie Search</h1>
      <div className="nav-links">
        <Link to="/">Search</Link>
        <Link to="discover">Discover</Link>
        <Link to="trending">Trending</Link>
      </div>
    </nav>
  );
}

export default Nav;
