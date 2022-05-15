import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section id="about" className="py-5 mt-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">
                  About Us
                </h2>
              </div>
              <p>
                Semua brand pasti berawal dari mimpi, begitu juga dengan kami.
                Mimpi kami cukup besar: menjadi brand sepatu lokal yang keren dan ramah lingkungan. Mencapai mimpi tersebut bukan hal yang
                mudah. Namun kami cukup beruntung karena banyak yang mendukung,
                yang selalu membuat kami semangat terus dalam melawan
                kedigdayaan brand sepatu asing yang memiliki segala aspek
                kehebatan diatas kami.
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img
                src={require("../assets/images/about-us.jpg")}
                alt="About"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
