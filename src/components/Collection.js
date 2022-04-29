import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import All from "./All";


const Collection = ({data}) => {
  const [filter, setFilter] = useState("all");

  let rating = [];
  for (let i = 0; i < 5; i++) {
    rating.push(<StarIcon className="icon" />);
  };
   

  const handleActive = (element) => {
    let group_button = document.getElementsByClassName(
      "filter-button-group"
    )[0];
    let list_button = group_button.getElementsByClassName("btn");
    for (let i = 0; i < list_button.length; i++) {
      list_button[i].classList.remove("active-filter-btn");
    }
    element.className += " active-filter-btn";
    setFilter((element.innerText).toLowerCase());
  };

  // console.log(window.location.pathname);
  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">New Collection</h2>
        </div>
        <div className="row g-0">
          <div
            className="d-flex flex-wrap justify-content-center mt-5 filter-button-group"
            id="buttons"
          >
            <button
              type="button"
              className="btn m-2 text-dark active-filter-btn"
              data-filter="*"
              onClick={(e) => handleActive(e.target)}
            >
              All
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".best"
              onClick={(e) => handleActive(e.target)}
            >
              Best Seller
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".feat"
              onClick={(e) => handleActive(e.target)}
            >
              Featured
            </button>
            <button
              type="button"
              className="btn m-2 text-dark"
              data-filter=".new"
              onClick={(e) => handleActive(e.target)}
            >
              New Arrival
            </button>
          </div>
          <div className="collection-list mt-4 row gx-0 gy-3">
              <Outlet />
              <All data={data} rating={rating} filter={filter}/>
              
          </div>
          <div>
            {window.location.pathname === "/" ? <Link to="collection" ><button type="button" className="d-block ms-auto me-5">
              View More{" "}
            </button></Link> : <></>}
            {/* <button type="button" className="d-block ms-auto me-5">
              View More{" "}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
