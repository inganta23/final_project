



const Cart = ({items}) => {
  
 
  return (
    <table
      cellPadding="5px"
      cellSpacing="0"
      style={{ margin: "auto", marginTop: "100px" }}
    >
      <thead bgcolor="red">
        <tr>
          {/* <
           */}
          <th>Gambar</th>
          <th>Nama</th>
          <th>Kuantitas</th>
          <th>Ukuran</th>
        </tr>
      </thead>
      {items.map((item) => (
        <tbody>
          <tr>
            <td>
              <img
                style={{ width: "100px" }}
                src={require(`../assets/images/c_${item.id_barang}.png`)}
                alt="cart"
              />
            </td>
            <td>{item.barang.nama}</td>
            <td>{item.kuantitas}</td>
            <td>{item.ukuran}</td>

            {/* <td>
            <button></button>
          </td> */}
          </tr>
        </tbody>
      ))}
    </table>
    // <h1 style={{marginTop: "150px"}}>Hak</h1>
  );
};

export default Cart;
