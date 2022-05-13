import { useDeleteFav } from "../graphql/DeleteFavourite";

const Favorite = ({ items }) => {
  const { deleteFavData } = useDeleteFav();

  const handleFavDelete = (id) => {
    deleteFavData({ variables: { id: id } });
  };

  return (
    <table
      cellPadding="5px"
      cellSpacing="0"
      className="w-75"
      style={{ margin: "auto", marginTop: "150px" }}
    >
      <thead bgcolor="red">
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
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                style={{ width: "100px" }}
                src={require(`../assets/images/c_${item.barang.id}.png`)}
                alt="cart"
              />
            </td>
            <td>{item.barang.nama}</td>
            <td>{item.barang.harga}</td>
            <td>
              <button onClick={() => handleFavDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Favorite;
