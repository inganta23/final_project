const Why = () => {
  return (
    <section id="why" className="my-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Why Us</h2>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap my-5">
          <div className="d-flex flex-column my-2" style={{ width: "14rem" }}>
            <img
              src={require("../assets/shipped.png")}
              className="card-img-top mb-4"
              alt="ship"
            />
            <div className="text-center text-light p-2  bg-primary">
              <h4 className="mb-0">Free Shipping</h4>
            </div>
          </div>
          <div className="d-flex flex-column my-2 mx-2" style={{ width: "14rem" }}>
            <img
              src={require("../assets/planet-earth.png")}
              className="card-img-top mb-4"
              alt="ship"
            />
            <div className="text-center text-light p-2  bg-primary">
              <h4 className="mb-0">Natural Material</h4>
            </div>
          </div>
          <div className="d-flex flex-column my-2" style={{ width: "14rem" }}>
            <img
              src={require("../assets/customer-service.png")}
              className="card-img-top mb-4"
              alt="ship"
            />
            <div className="text-center text-light p-2  bg-primary">
              <h4 className="mb-0">24/7 Support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
