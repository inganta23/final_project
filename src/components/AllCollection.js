import { useState } from "react";
import Products from "./Products";

const AllCollection = () => {
  const [shopCategory, setShopCategory] = useState("None");


  const handleActive = (element) => {
    let group_button = document.getElementsByClassName(
      "filter-button-group"
    )[0];
    let list_button = group_button.getElementsByClassName("btn");
    for (let i = 0; i < list_button.length; i++) {
      list_button[i].classList.remove("active-filter-btn");
    }
    element.className += " active-filter-btn";
  };

  return (
    <section id="collection" className="py-5" style={{marginTop : "100px"}}>
      <div className="container">
        <div className="title text-center">
          <h2>All Collection</h2>
        </div>
        <div className="row g-0">
          <div
            className="d-flex flex-wrap justify-content-center mt-2 filter-button-group"
            id="buttons"
          >
            <button
              type="button"
              className="btn m-2 active-filter-btn"
              onClick={(e) => handleActive(e.target)}
            >
              All
            </button>
            <button
              type="button"
              className="btn m-2"
              onClick={(e) => handleActive(e.target)}
            >
              Best Seller
            </button>
            <button
              type="button"
              className="btn m-2"
              onClick={(e) => handleActive(e.target)}
            >
              Featured
            </button>
            <button
              type="button"
              className="btn m-2"
              onClick={(e) => handleActive(e.target)}
            >
              New Arrival
            </button>
            <select
              className="border-1 category-select"
              value={shopCategory}
              onChange={(e) => setShopCategory(e.target.value)}
            >
              <option value="None">None</option>
              <option value="shirt">Shirt</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="trousers">Trousers</option>
            </select>
          </div>
          <div className="collection-list mt-4 row gx-0 gy-3">
            <Products />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCollection;
