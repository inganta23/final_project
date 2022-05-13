import logo from "../assets/tailwind.svg";
import { Link } from "react-router-dom";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  const handleClick = () => {
    let navLink = document.getElementsByClassName("nav-link");
    console.log(navLink);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
      <div className="container">
        <a
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
          href="index.html"
        >
          <img src={logo} alt="site icon" />
          <span className="text-uppercase fw-lighter ms-2">Shop</span>
        </a>
        <div className="order-lg-2 nav-btns">
          <Badge badgeContent={4} color="primary">
            <Link to="cart"><ShoppingCart role="button" /></Link>
          </Badge>
          <Badge badgeContent={2} color="primary">
            <Link to="favorite"><Favorite className="mx-2" role="button" /></Link>
          </Badge>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-dark"
                
                to="/"
                onClick={handleClick}
              >
                home
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-dark"
                
                to="collection"
              >
                collection
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-dark"
                
                to="blogs"
              >
                blogs
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-dark"
                
                to="about"
              >
                about us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
