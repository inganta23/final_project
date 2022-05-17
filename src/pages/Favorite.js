import { useDeleteFav } from "../graphql/DeleteFavourite";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/favoriteRedux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Favorite = ({ items }) => {
  const { deleteFavData } = useDeleteFav();
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.favoriteRedux);
  const { favoritePerPage } = useSelector((state) => state.favoriteRedux);
  const indexOfLastFavorite = currentPage * favoritePerPage;
  const indexOfFirstFavorite = indexOfLastFavorite - favoritePerPage;
  const favorites = items.slice(indexOfFirstFavorite, indexOfLastFavorite);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  const paginate = (number) =>{
    dispatch(setCurrentPage(number));
  };
  const handleFavDelete = (id) => {
    deleteFavData({ variables: { id: id } });
  };

  return (
    <>
      <table className="w-75 favorite-table" style={{ margin: "auto", marginTop: "150px" }}>
        <thead className="bg-primary">
          <tr>
            {/* <
             */}
            <th>Gambar</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  style={{ width: "100px" }}
                  src={`${item.barang.gambar}`}
                  alt="cart"
                />
              </td>
              <td>{item.barang.nama}</td>
              <td>{item.barang.harga}</td>
              <td>
                <button className="border-1 bg-light text-dark me-2" onClick={() => handleFavDelete(item.id)}>Delete</button>
                <Link to={`/collection/${item.barang.id}`}><button className="border-1 bg-light text-dark ">Detail</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination postsPerPage={favoritePerPage} totalPosts={items.length} paginate={paginate} />
    </>
  );
};

export default Favorite;
