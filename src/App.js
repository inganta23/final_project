import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
import Special from "./components/Special";
import Discount from "./components/Discount";
import Blogs from "./components/Blogs";
import About from "./components/About";
import { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import All from "./components/All";
import StarIcon from "@mui/icons-material/Star";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

const query = gql`
  query MyQuery {
    kampus_merdeka_barang {
      id
      nama
      tipe
      harga
      ukuran
    }
  }
`;

const queryCart = gql`
  query MyQuery {
    kampus_merdeka_cart {
      kuantitas
      ukuran
      id_barang
      barang {
        nama
        harga
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(query);
  const {
    data: dataCart,
    loading: loadingCart,
    error: errorCart,
  } = useQuery(queryCart);
  const [cart, setCart] = useState([]);
  if (loading) return <p>Loading</p>;
  return (
    <div className="App mx-auto">
       <Navbar />
      <Routes>
        <Route index element={<Home data={data.kampus_merdeka_barang} />} />
        {/* <Route
          path=":id"
          element={<Detail data={data.kampus_merdeka_barang} />}
        /> */}
        <Route path="collection" element={<Collection data={data.kampus_merdeka_barang} />} >
          <Route path=":id" element={<Detail data={data.kampus_merdeka_barang} queryCart={queryCart}/>}/>
        </Route>
        <Route path="blogs" element={<Blogs/>} />
        <Route path="about" element={<About/>} />
        <Route path="cart" element={loadingCart ? <p>Loading</p> : <Cart items={dataCart.kampus_merdeka_cart}/>} />
      </Routes>
      {/* {loading ? <p>Loading</p> : <Home data={data.kampus_merdeka_barang} />} */}
    </div>
  );
}

export default App;
