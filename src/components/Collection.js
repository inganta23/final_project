import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShopCategory, setCurrentPage } from "../redux/paginate";
import All from "./All";
import Pagination from "./Pagination";

const Collection = ({ data, favorite }) => {
  const collectionClass = "position-relative d-inline-block";
  const [filter, setFilter] = useState("all");
  const barangPerPage = 4;
  const dispatch = useDispatch();
  const { shopCategory } = useSelector((state) => state.paginate);
  const { currentPage } = useSelector((state) => state.paginate);
  const [favId, setFavId] = useState();

  useEffect(() => {
    setFavId(new Set(favorite.map((fav) => fav.barang.id)));
    dispatch(setCurrentPage(1));
  }, []);
  let path = window.location.pathname;
  let indexOfLastBarang = currentPage * barangPerPage;
  let indexOfFirstBarang = indexOfLastBarang - barangPerPage;

  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<StarIcon className="icon" />);
  }

  let filteredData;
  let categoryData;
  filter === "all"
    ? (filteredData = data)
    : (filteredData = data.filter((dat) => dat.tipe === filter));
  shopCategory === "None"
    ? (categoryData = filteredData)
    : (categoryData = filteredData.filter(
        (dat) => dat.kategori === shopCategory
      ));

  let currentBarang = categoryData.slice(indexOfFirstBarang, indexOfLastBarang);
  const handleActive = (element) => {
    let group_button = document.getElementsByClassName(
      "filter-button-group"
    )[0];
    let list_button = group_button.getElementsByClassName("btn");
    for (let i = 0; i < list_button.length; i++) {
      list_button[i].classList.remove("active-filter-btn");
    }
    element.className += " active-filter-btn";
    setFilter(element.innerText.toLowerCase());
    dispatch(setCurrentPage(1));
  };

  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2
            className={
              path === "/" ? collectionClass : collectionClass + " addedMargin"
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
              favorite={favorite}
              favId={favId}
              setFavId={setFavId}
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
                path={path}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
