import { useParams } from "react-router";
import Comment from "../components/Comment";
import { useState } from "react";
import useInsertCart from "../graphql/InsertCart";
import swal from "sweetalert";

const Detail = ({ data }) => {
  const { insertCartData } = useInsertCart();
  const { id } = useParams();
  const detail = data.filter((dat) => dat.id === +id)[0];
  let size = ["S", "M", "L", "XL"];
  size.length = size.indexOf(detail.ukuran) + 1;

  const [check, setCheck] = useState("");
  const [quantity, setQuantity] = useState();

  const handleSubmitCart = (e) => {
    e.preventDefault();
    insertCartData({
      variables: { id_barang: id, kuantitas: quantity, ukuran: check },
    });
    setQuantity("");
    setCheck("");
    swal("Berhasil", "Barang ditambahkan", "success");
  };

  return (
    <>
      <div className="detail container my-5">
        <div className="title pt-3 pb-5">
          <h2 className="position-relative d-inline-block ms-4">Product</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 me-2">
            <img src={`${detail.gambar}`} alt="detail"/>
          </div>
          <div className="col-lg-5 col-md-6">
            <h2>{detail.nama}</h2>
            <p className="desc">
              {detail.deskripsi}
            </p>
            <p className="price"> Rp. {detail.harga}</p>
            <form onSubmit={handleSubmitCart}>
              <div className="size my-3">
                <span className="me-2">Size :</span>
                {size.map((siz) => (
                  <>
                    <input
                      type="radio"
                      value={siz}
                      checked={check === siz}
                      onChange={(e) => setCheck(e.target.value)}
                      name="size selector"
                      id={`radio ${siz}`}
                    />
                    <label htmlFor={`radio ${siz}`}>{siz}</label>
                  </>
                ))}
              </div>
              <div className="quantity my-3">
                <span className="me-2">Quantity :</span>
                <input
                  className="w-25"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <button className="btn m-2 text-dark" type="submit">
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
      <Comment id={id} />
    </>
  );
};

export default Detail;
