import { Favorite} from "@mui/icons-material";

const Special = () => {

    return ( 
        <section id= "special" className="py-5">
            <div className="container">
                <div className="title text-center py-5">
                    <h2 className="position-relative d-inline-block">Special Selection</h2>
                </div>

                <div className="special-list row g-0">
                    <div className="col-md-6 col-lg-4 col-xl-3 p-2 mb-4">
                        <div className="special-img position-relative overflow-hidden">
                            <img src={require("../assets/images/special_product_1.jpg")} alt="Special Product" />
                            {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
                            <span class = "position-absolute d-flex align-items-center justify-content-center" >
                                <Favorite sx={{fontSize: '25px'}}/>
                            </span>
                        </div>
                        <div class = "text-center">
                            <p class = "text-capitalize mt-3 mb-1">gray shirt</p>
                            <span class = "fw-bold d-block">$ 45.50</span>
                            <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 p-2 mb-4">
                        <div className="special-img position-relative overflow-hidden">
                            <img src={require("../assets/images/special_product_2.jpg")} alt="Special Product" />
                            {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
                            <span class = "position-absolute d-flex align-items-center justify-content-center" >
                                <Favorite sx={{fontSize: '25px'}}/>
                            </span>
                        </div>
                        <div class = "text-center">
                            <p class = "text-capitalize mt-3 mb-1">gray shirt</p>
                            <span class = "fw-bold d-block">$ 45.50</span>
                            <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 p-2 mb-4">
                        <div className="special-img position-relative overflow-hidden">
                            <img src={require("../assets/images/special_product_3.jpg")} alt="Special Product" />
                            {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
                            <span class = "position-absolute d-flex align-items-center justify-content-center" >
                                <Favorite sx={{fontSize: '25px'}}/>
                            </span>
                        </div>
                        <div class = "text-center">
                            <p class = "text-capitalize mt-3 mb-1">gray shirt</p>
                            <span class = "fw-bold d-block">$ 45.50</span>
                            <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 p-2 mb-4">
                        <div className="special-img position-relative overflow-hidden">
                            <img src={require("../assets/images/special_product_4.jpg")} alt="Special Product" />
                            {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
                            <span class = "position-absolute d-flex align-items-center justify-content-center" >
                                <Favorite sx={{fontSize: '25px'}}/>
                            </span>
                        </div>
                        <div class = "text-center">
                            <p class = "text-capitalize mt-3 mb-1">gray shirt</p>
                            <span class = "fw-bold d-block">$ 45.50</span>
                            <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Special;