import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setShopCategory,
  setFilter,
} from "../redux/collectionRedux";
import All from "../components/All";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Collection = ({ data, favorite }) => {
  const dispatch = useDispatch();
  const collectionClass = "position-relative d-inline-block";
  const { filter } = useSelector((state) => state.collectionRedux);
  const { barangPerPage } = useSelector((state) => state.collectionRedux);
  const { shopCategory } = useSelector((state) => state.collectionRedux);
  const { currentPage } = useSelector((state) => state.collectionRedux);
  const [favId, setFavId] = useState();
  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };
  useEffect(() => {
    setFavId(new Set(favorite.map((fav) => fav.barang.id)));
    dispatch(setCurrentPage(1));
  }, []);

  const path = window.location.pathname;
  const indexOfLastBarang = currentPage * barangPerPage;
  const indexOfFirstBarang = indexOfLastBarang - barangPerPage;
  const rating = [];
  let filteredData;
  let categoryData;

  //Filter Awal
  filter === "all"
    ? (filteredData = data)
    : (filteredData = data.filter((dat) => dat.tipe === filter));

  //Filter kategori
  shopCategory === "None"
    ? (categoryData = filteredData)
    : (categoryData = filteredData.filter(
        (dat) => dat.kategori === shopCategory
      ));
  const currentBarang = categoryData.slice(
    indexOfFirstBarang,
    indexOfLastBarang
  );

  for (let i = 0; i < 5; i++) {
    rating.push(<StarIcon className="icon" />);
  }
  const handleActive = (element) => {
    let group_button = document.getElementsByClassName(
      "filter-button-group"
    )[0];
    let list_button = group_button.getElementsByClassName("btn");
    for (let i = 0; i < list_button.length; i++) {
      list_button[i].classList.remove("active-filter-btn");
    }
    element.className += " active-filter-btn";
    dispatch(setFilter(element.innerText.toLowerCase()));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2
              className={
                path === "/"
                  ? collectionClass
                  : collectionClass + " addedMargin"
              }
            >
              {path === "/" ? "Collection" : "All Collection"}
            </h2>
          </div>
          <div className="row g-0">
            <div
              className="d-flex flex-wrap justify-content-center mt-5 filter-button-group"
              id="buttons"
            >
              <button
                type="button"
                className="btn m-2 active-filter-btn"
                data-filter="*"
                onClick={(e) => handleActive(e.target)}
              >
                All
              </button>
              <button
                type="button"
                className="btn m-2"
                data-filter=".best"
                onClick={(e) => handleActive(e.target)}
              >
                Best Seller
              </button>
              <button
                type="button"
                className="btn m-2"
                data-filter=".feat"
                onClick={(e) => handleActive(e.target)}
              >
                Featured
              </button>
              <button
                type="button"
                className="btn m-2"
                data-filter=".new"
                onClick={(e) => handleActive(e.target)}
              >
                New Arrival
              </button>
              {path !== "/" && (
                <select
                  className="border-1 category-select"
                  value={shopCategory}
                  onChange={(e) => {
                    dispatch(setShopCategory(e.target.value));
                    dispatch(setCurrentPage(1));
                  }}
                >
                  <option value="None">None</option>
                  <option value="shirt">Shirt</option>
                  <option value="t-shirt">T-Shirt</option>
                  <option value="trousers">Trousers</option>
                </select>
              )}
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">
              <Outlet />
              <All
                data={path === "/" ? filteredData : currentBarang}
                rating={rating}
                favId={favId}
              />
            </div>
            <div>
              {path === "/" ? (
                <Link to="collection" className="text-decoration-none">
                  <button type="button" className="btn d-block ms-auto me-5">
                    View More{" "}
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>
            <div>
              {path !== "/" && (
                <Pagination
                  postsPerPage={barangPerPage}
                  totalPosts={categoryData.length}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {path !== "/" && <Footer />}
    </>
  );
};

export default Collection;
