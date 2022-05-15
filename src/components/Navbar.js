import { Link } from "react-router-dom";
import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = ({ cartLength, favLength }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
      <div className="container">
        <Link
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
          to="/"
        >
          <h4 className="text-capitalize fw-lighter ms-2">
            Green<span>Store</span>
          </h4>
        </Link>
        <div className="order-lg-2">
          <Link className="nav-btn border-0" to="cart">
            <Badge badgeContent={cartLength} color="primary">
              <ShoppingCart role="button" />
            </Badge>
          </Link>
          <Link to="favorite" className="nav-btn border-0">
            <Badge badgeContent={favLength} color="primary">
              <Favorite className="mx-2" role="button" />
            </Badge>
          </Link>
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
              <Link className="nav-link text-uppercase text-dark" to="/">
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
              <Link className="nav-link text-uppercase text-dark" to="blogs">
                blogs
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="about">
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
