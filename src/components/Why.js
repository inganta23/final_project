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
              src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/shipped.png?alt=media&token=c4897d47-e873-4db0-a526-0f259e90eb4d"
              className="card-img-top mb-4"
              alt="ship"
            />
            <div className="text-center text-light p-2  bg-primary">
              <h4 className="mb-0">Free Shipping</h4>
            </div>
          </div>
          <div className="d-flex flex-column my-2 mx-2" style={{ width: "14rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/planet-earth.png?alt=media&token=90787e61-e897-4287-b537-f20ee524e93c"
              className="card-img-top mb-4"
              alt="ship"
            />
            <div className="text-center text-light p-2  bg-primary">
              <h4 className="mb-0">Natural Material</h4>
            </div>
          </div>
          <div className="d-flex flex-column my-2" style={{ width: "14rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/customer-service.png?alt=media&token=9481c35c-d765-4485-9f92-86078a089da1"
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
