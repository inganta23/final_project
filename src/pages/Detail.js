import { useParams } from "react-router";
import Comment from "../components/Comment";
import { gql, useQuery, useMutation, refetchQueries } from "@apollo/client";
import { useState } from "react";

const insertCart = gql`
  mutation MyMutation($ukuran: String!, $kuantitas: Int!, $id_barang: Int!) {
    insert_kampus_merdeka_cart(
      objects: { id_barang: $id_barang, kuantitas: $kuantitas, ukuran: $ukuran }
    ) {
      affected_rows
    }
  }
`;

const Detail = ({ data, queryCart }) => {
  const [insertCartData, { loading: loadingCart }] = useMutation(insertCart, {refetchQueries: [queryCart]});
  let { id } = useParams();
  let detail = data.filter((dat) => dat.id === +id)[0];
  let size = ["S", "M", "L", "XL"];
  size.length = size.indexOf(detail.ukuran) + 1;

  const [check, setCheck] = useState('');
  const [quantity, setQuantity] = useState();
  const handleSubmitCart = (e) => {
    e.preventDefault();
    // let trueSize;
    // for (let key in check) {
    //   if (check[key] === true) {
    //     trueSize = key;
    //     break;
    //   }
    // }

    insertCartData({
      variables: { id_barang: id, kuantitas: quantity, ukuran: check},
    });
    setQuantity("");
    setCheck('');
    // setCheckSize('');
    // console.log(checkSize);
    // alert("Berhasil");
  };

  const handleChecked = (siz) => {
    let tempCheck = { ...check };
    tempCheck[siz] = !check[siz];
    setCheck(tempCheck);
  };


  return (
    <>
      <div className="detail container my-5">
        <div className="title pt-3 pb-5">
          <h2 className="position-relative d-inline-block ms-4">Product</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 me-2">
            <img src={require(`../assets/images/c_${id}.png`)} alt="" />
          </div>
          <div className="col-lg-5 col-md-6">
            <h2>{detail.nama}</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptate veniam corporis iusto tempore nobis ut pariatur
              asperiores architecto neque.
            </p>
            <p className="price"> Rp. {detail.harga}</p>
            <form onSubmit={handleSubmitCart}>
              <div className="size my-3">
                <span className="me-2">Size :</span>

                {size.map((siz) => (
                  // <button
                  //   className="me-2"
                  //   style={{
                  //     backgroundColor: "transparent",
                  //     padding: "5px 15px",
                  //   }}
                  //   type="button"
                  // >
                  //   {siz}
                  // </button>
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
              <button
                className="btn m-2 text-dark"
                type="submit"
              >
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
