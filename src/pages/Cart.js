import { useEffect } from "react";
import useUpdateCart from "../graphql/UpdateCart";
import useDeleteCart from "../graphql/DeleteCart";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setUpdate,
  setEdit,
  setKuantitas,
} from "../redux/cartRedux";
import Pagination from "../components/Pagination";

const Cart = ({ items, totalBiaya }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setEdit(false));
    if (items[0] !== undefined)
      dispatch(
        setKuantitas(
          items.map((item) => item.kuantitas).reduce((a, b) => a + b)
        )
      );
  }, [items]);
  const { updateCartData } = useUpdateCart();
  const { DeleteCartData } = useDeleteCart();
  // const [edit, setEdit] = useState(false);
  // const [update, setUpdate] = useState({ id: "", kuantitas: "", nama: "" });
  const { kuantitas } = useSelector((state) => state.cartRedux);
  const { update } = useSelector((state) => state.cartRedux);
  const { cartPerPage } = useSelector((state) => state.cartRedux);
  const { currentPage } = useSelector((state) => state.cartRedux);
  const { edit } = useSelector((state) => state.cartRedux);
  const indexOfLastCart = currentPage * cartPerPage;
  const indexOfFirstCart = indexOfLastCart - cartPerPage;
  const carts = items.slice(indexOfFirstCart, indexOfLastCart);

  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };
  const handleClickUpdate = (e) => {
    e.preventDefault();
    updateCartData({
      variables: { kuantitas: update.kuantitas, id: update.id },
    });
    dispatch(setUpdate({ id: "", kuantitas: "" }));
    dispatch(setEdit(false));
  };

  const handleCartDelete = (id) => {
    DeleteCartData({ variables: { id: id } });
  };
  const handleCartEdit = (id, kuantitas, nama) => {
    dispatch(setUpdate({ id: id, kuantitas: kuantitas, nama: nama }));
    dispatch(setEdit(true));
  };

  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        {edit && (
          <form
            onSubmit={handleClickUpdate}
            className="mx-auto mt-5"
            style={{ width: "fit-content" }}
          >
            <h4>Edit Kuantits {update.nama}</h4>
            <label>Masukkan kuantitas : </label>
            <br />
            <input
              type="number"
              value={update.kuantitas}
              onChange={(e) =>
                dispatch(setUpdate({ ...update, kuantitas: e.target.value }))
              }
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
        <table className="mt-5 w-100 cart-table">
          <thead className="bg-primary ">
            <tr>
              {/* <
               */}
              <th>Gambar</th>
              <th>Nama</th>
              <th>Kuantitas</th>
              <th>Ukuran</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id}>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={`${cart.barang.gambar}`}
                    alt="cart"
                  />
                </td>
                <td>{cart.barang.nama}</td>
                <td>{cart.kuantitas}</td>
                <td>{cart.ukuran}</td>
                <td>{cart.barang.harga}</td>
                <td>
                  <button
                    className="border-1 mx-2 bg-light text-dark "
                    onClick={() => handleCartDelete(cart.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="border-1 bg-light text-dark "
                    onClick={() =>
                      handleCartEdit(cart.id, cart.kuantitas, cart.barang.nama)
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          postsPerPage={cartPerPage}
          totalPosts={items.length}
          paginate={paginate}
        />
        <div className="d-flex flex-column border flex-wrap checkout px-5 py-2 position-relative">
          <h4 className="text-center">Summary</h4>
          <hr />
          <p>Total item : {kuantitas}</p>
          <p>Total biaya : {totalBiaya}</p>
          <button
            type="button"
            className="btn"
            onClick={() => alert("Pembayaran Diproses")}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
