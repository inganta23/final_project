import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const All = ({ data, rating, filter }) => {
  let newItems = data.filter((dat) => dat.tipe === filter);
  let path = window.location.pathname;

  return (
    <>
      {filter === "all"
        ? data.map((item) => (
            <div
              key={item.id}
              className="col-md-6 col-lg-4 col-xl-3 p-2 collect"
            >
              <div className="collection-img position-relative">
                <img
                  src={require(`../assets/images/c_${item.id}.png`)}
                  alt="collection"
                  className="w-100"
                />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
                <div className="cart position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <div className="icons rounded-circle d-flex justify-content-center align-items-center mx-3">
                    {path === "/" ? (
                      <Link to={`collection/${item.id}`}>
                        <SearchOutlined />
                      </Link>
                    ) : (
                      <Link to={`${item.id}`}>
                        <SearchOutlined />
                      </Link>
                    )}
                  </div>
                  <div className="icons rounded-circle d-flex justify-content-center align-items-center">
                    <FavoriteBorderOutlined />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="rating mt-3">{rating}</div>
                <p className="text-capitalize my-1">{item.nama}</p>
                <span>Rp {item.harga}</span>
              </div>
            </div>
          ))
        : newItems.map((item) => (
            <div
              key={item.id}
              className="col-md-6 col-lg-4 col-xl-3 p-2 collect"
            >
              <div className="collection-img position-relative">
                <img
                  src={require(`../assets/images/c_${item.id}.png`)}
                  alt="collection"
                  className="w-100"
                />
                <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                  sale
                </span>
                <div className="cart position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <div className="icons rounded-circle d-flex justify-content-center align-items-center mx-3">
                    {path === "/" ? (
                      <Link to={`collection/${item.id}`}>
                        <SearchOutlined />
                      </Link>
                    ) : (
                      <Link to={`${item.id}`}>
                        <SearchOutlined />
                      </Link>
                    )}
                  </div>
                  <div className="icons rounded-circle d-flex justify-content-center align-items-center">
                    <FavoriteBorderOutlined />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="rating mt-3">{rating}</div>
                <p className="text-capitalize my-1">{item.nama}</p>
                <span>Rp {item.harga}</span>
              </div>
            </div>
          ))}
    </>
  );
};

export default All;
