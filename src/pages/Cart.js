import { useState } from "react";
import useUpdateCart from "../graphql/UpdateCart";
import useDeleteCart from "../graphql/DeleteCart";

const Cart = ({ items, totalBiaya }) => {
  const { updateCartData } = useUpdateCart();
  const { DeleteCartData } = useDeleteCart();
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState({ id: "", kuantitas: "", nama: "" });
  let kuantitas = 0
  if(items[0] !== undefined) kuantitas = (items.map(item => item.kuantitas)).reduce((a,b) => a+b)

  const handleClickUpdate = (e) => {
    e.preventDefault();
    updateCartData({
      variables: { kuantitas: update.kuantitas, id: update.id },
    });
    setUpdate({ id: "", kuantitas: "" });
    setEdit(false);
  };

  const handleCartDelete = (id) => {
    DeleteCartData({ variables: { id: id } });
  };
  const handleCartEdit = (id, kuantitas, nama) => {
    setUpdate({ id: id, kuantitas: kuantitas, nama: nama });
    setEdit(true);
  };

  return (
    <div
      className=" d-flex flex-column justify-content-center"
      style={{ marginTop: "200px" }}
    >
      {edit && (
        <form
          onSubmit={handleClickUpdate}
          className="mx-auto"
          style={{ width: "fit-content" }}
        >
          <h4>Edit Kuantits {update.nama}</h4>
          <label>Masukkan kuantitas : </label>
          <br />
          <input
            type="number"
            value={update.kuantitas}
            onChange={(e) =>
              setUpdate({ ...update, kuantitas: e.target.value })
            }
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      <table cellPadding="5px" cellSpacing="0" className="mt-5 w-75 mx-auto">
        <thead bgcolor="red">
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  style={{ width: "100px" }}
                  src={`${item.barang.gambar}`}
                  alt="cart"
                />
              </td>
              <td>{item.barang.nama}</td>
              <td>{item.kuantitas}</td>
              <td>{item.ukuran}</td>
              <td>{item.barang.harga}</td>
              <td>
                <button onClick={() => handleCartDelete(item.id)}>
                  Delete
                </button>
                <button onClick={() => handleCartEdit(item.id, item.kuantitas, item.barang.nama)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total item : {kuantitas}</p>
      <p>Total biaya : {totalBiaya}</p>
    </div>
    // <h1 style={{marginTop: "150px"}}>Hak</h1>
  );
};

export default Cart;
