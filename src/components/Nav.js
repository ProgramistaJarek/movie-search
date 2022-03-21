import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h1>Movie Search</h1>
      <Link to="/">Home</Link>
      <Link to="discover">Discover</Link>
      <Link to="trending">Trending</Link>
    </nav>
  );
}

export default Nav;
