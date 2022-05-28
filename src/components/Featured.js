import { Link } from "react-router-dom";
import Products from "./Products";


const Featured = () => {
  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2>Featured Product</h2>
        </div>
        <div className="row g-0">
          <div className="collection-list mt-4 row gx-0 gy-3">
            <Products />
          </div>
          <div>
            <Link to="collection" className="text-decoration-none">
              <button type="button" className="btn d-block ms-auto me-5">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
