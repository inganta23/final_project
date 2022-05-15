import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShopCategory } from "../redux/collectionRedux";

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
                src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/shirt.jpg?alt=media&token=a4dcc101-8515-4c54-bdaf-4c60513920b8"
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
                src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/t-shirt.jpg?alt=media&token=005277f2-da3e-4c57-becd-b0fd90459ccd"
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
                src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/trousers.jpg?alt=media&token=38fbc3d7-74f8-4b9f-9552-962027d26188"
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
