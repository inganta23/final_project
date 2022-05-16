import {
  Email,
  Instagram,
  LinkedIn,
  LocationOnRounded,
  Phone,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container p-5">
        <div className="row text-light">
          <div className="col-md-12 col-lg-3 footer-column">
            <a href="#" className="text-decoration-none"><h4>GreenStore</h4></a>
          </div>
          <div className="col-md-12 col-lg-3 footer-column">
            <h4>Links</h4>
            <ul className="nav flex-column">
              <Link to="/" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <span className="footer-title">Home</span>
                </li>
              </Link>
              <Link to="collection" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <span className="footer-title">Collection</span>
                </li>
              </Link>
              <Link to="blogs" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <span className="footer-title">Blogs</span>
                </li>
              </Link>
              <Link to="about" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <span className="footer-title">About Us</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3 footer-column">
            <h4>Contact Us</h4>
            <ul className="nav flex-column">
              <a href="#" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <p>
                    <span className="footer-title">
                      <LocationOnRounded />
                    </span>
                    Medan, Indonesia
                  </p>
                </li>
              </a>
              <a href="#" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <p>
                    <span className="footer-title">
                      <Phone />
                    </span>
                    0812 1819 1202
                  </p>
                </li>
              </a>
              <a href="#" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <p>
                    <span className="footer-title">
                      <Email />
                    </span>
                    johanes230500@gmail.com
                  </p>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3 footer-column">
            <h4>Follow Us</h4>
            <ul className="nav flex-column">
              <a href="https://www.linkedin.com/in/johanes-inganta-karo-karo-066193225/" target="_blank" className="text-decoration-none text-light ">
                <li className="nav-item border-0">
                  <p>
                    <span className="footer-title">
                      <LinkedIn />
                    </span>
                    Johanes Inganta Karo Karo
                  </p>
                </li>
              </a>
              <a href="https://www.instagram.com/johanes.karokaro/" target="_blank" className="text-decoration-none text-light">
                <li className="nav-item border-0">
                  <p>
                    <span className="footer-title">
                      <Instagram />
                    </span>
                    johanes.karokaro
                  </p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Product</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Product 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Product 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Plans & Prices
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Frequently asked questions
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Company</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Job postings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              News and articles
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Contact & Support</span>
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <i class="fas fa-phone"></i>+47 45 80 80 80
            </span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-comments"></i>Live chat
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-envelope"></i>Contact us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-star"></i>Give feedback
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center">
      <i class="fas fa-ellipsis-h"></i>
    </div>

    <div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">
          Copyright &copy; Your Website{" "}
          <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline quick-links">
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>; */
}
export default Footer;
