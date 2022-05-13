import { Favorite, SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useInsertFav from "../graphql/InsertFavourite";
import { useDeleteFavBarang } from "../graphql/DeleteFavourite";


const All = ({
  data,
  rating,
  favorite,
  favId,
  setFavId
}) => {
  const { insertFavData } = useInsertFav();
  const { deleteFavDataBarang } = useDeleteFavBarang();
  let path = window.location.pathname;

  const handleFavorite = (id) => {
    let element = document.getElementsByClassName(`favorite${id}`)[0];
    if (favId.has(id)) {
      deleteFavDataBarang({
        variables: { id_barang: id },
      });
      favId.delete(id);
    } else {
      insertFavData({
        variables: { id_barang: id },
      });
      favId.add(id);
    }
    element.classList.toggle("active");
  };

  // console.log(favId)
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="col-md-6 col-lg-4 col-xl-3 p-2 collect"
        >
          <div className="collection-img position-relative">
            <img
              src={`${item.gambar}`}
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
              {favId?.has(item.id) ? (
                <div
                  className={`icons favorite${item.id} rounded-circle d-flex justify-content-center align-items-center active`}
                >
                  <Favorite onClick={() => handleFavorite(item.id)} />
                </div>
              ) : (
                <div
                  className={`icons favorite${item.id} rounded-circle d-flex justify-content-center align-items-center`}
                >
                  <Favorite onClick={() => handleFavorite(item.id)} />
                </div>
              )}
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
