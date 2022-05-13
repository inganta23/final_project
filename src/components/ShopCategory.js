import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShopCategory } from "../redux/paginate";

const ShopCategory = () => {
  const dispatch = useDispatch();
  return (
    <section className="my-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Shop By Category</h2>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap my-5">
          <Link to="collection" onClick={() => dispatch(setShopCategory("shirt"))}>
            <div className="card shop-category my-2">
              <img
                className="card-img img-fluid"
                src={require(`../assets/images/shirt.jpg`)}
                alt="shirt"
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="ps-5 card-title">Shirt</h4>
              </div>
            </div>
          </Link>
          <Link to="collection" onClick={() => dispatch(setShopCategory("t-shirt"))}>
            <div className="card shop-category my-2">
              <img
                className="card-img img-fluid"
                src={require(`../assets/images/t-shirt.jpg`)}
                alt="t-shirt"
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="ps-5 card-title">T-Shirt</h4>
              </div>
            </div>
          </Link>
          <Link to="collection" onClick={() => dispatch(setShopCategory("trousers"))}>
            <div className="card shop-category my-2">
              <img
                className="card-img img-fluid"
                src={require(`../assets/images/trousers.jpg`)}
                alt="trousers"
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="ps-5 card-title">Trousers</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
