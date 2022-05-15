import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import axios from "axios";
import useQueryBarang from "./graphql/QueryBarang";
import { useQueryCart, queryCart } from "./graphql/QueryCart";
import { useQueryFavourite } from "./graphql/QueryFavourite";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlogs, setLoadingBlogs } from "./redux/paginate";

function App() {
  // localStorage.clear();
  const { data, loading } = useQueryBarang();
  const { data: dataCart, loading: loadingCart } = useQueryCart();
  const { data: dataFav, loading: loadingFav } = useQueryFavourite();

  const dispatch = useDispatch();

  const { postsPerPage } = useSelector((state) => state.paginate);
  const { loadingBlogs } = useSelector((state) => state.paginate);
  const { dataBlogs } = useSelector((state) => state.paginate);
  const { currentPage } = useSelector((state) => state.paginate);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoadingBlogs(true));
      try {
        const { data: response } = await axios.get(
          "https://newsapi.org/v2/everything?q=reforestation&from=2022-04-15&sortBy=publishedAt&apiKey=329d65419a024a4d9485c4f6137051ec"
        );
        dispatch(setDataBlogs(response.articles));
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoadingBlogs(false));
    };

    fetchData();
  }, []);

  //Get Current Blogs
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataBlogs.slice(indexOfFirstPost, indexOfLastPost);

  if (loading || loadingFav || loadingCart) return <p>Loading</p>;
  //Get Total Biaya
  let totalBiaya = 0;
  const biaya = dataCart?.kampus_merdeka_cart.map(
    (item) => +item.barang.harga * 1000 * item.kuantitas
  );
  //Penambahan titik setiap 3 bilangan dari belakang
  if (biaya[0] !== undefined) {
    totalBiaya = biaya
      .reduce((a, b) => a + b)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="App mx-auto">
      <Navbar cartLength={dataCart?.kampus_merdeka_cart.length} favLength={dataFav?.kampus_merdeka_favorite.length} />
      <Routes>
        <Route
          index
          element={
            <Home
              data={data.kampus_merdeka_barang}
              favorite={dataFav.kampus_merdeka_favorite}
            />
          }
        />
        <Route
          path="collection"
          element={
            <Collection
              data={data.kampus_merdeka_barang}
              favorite={dataFav.kampus_merdeka_favorite}
            />
          }
        >
          <Route
            path=":id"
            element={
              <Detail data={data.kampus_merdeka_barang} queryCart={queryCart} />
            }
          />
        </Route>
        <Route
          path="blogs"
          element={
            loadingBlogs ? (
              <p>Loading</p>
            ) : (
              <Blogs
                blogs={currentPosts}
                postsPerPage={postsPerPage}
                totalPosts={dataBlogs.length}
              />
            )
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="cart"
          element={
            <Cart
              items={dataCart.kampus_merdeka_cart}
              queryCart={queryCart}
              totalBiaya={totalBiaya}
            />
          }
        />
        <Route
          path="favorite"
          element={<Favorite items={dataFav.kampus_merdeka_favorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
