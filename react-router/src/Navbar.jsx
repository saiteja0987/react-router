import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kavlium ❤️
      </Link>
      <ul>
        <Link to="/Concats">Concats</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  )
}