
const About = () => {
  return (
    <section id="about" className="py-5" style={{marginTop: "100px"}}>
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
              Mimpi kami cukup besar: menjadi brand sepatu lokal yang keren dan
              ramah lingkungan. Mencapai mimpi tersebut bukan hal yang mudah.
              Namun kami cukup beruntung karena banyak yang mendukung, yang
              selalu membuat kami semangat terus dalam melawan kedigdayaan brand
              sepatu asing yang memiliki segala aspek kehebatan diatas kami.
            </p>
          </div>
          <div className="col-lg-6 order-lg-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mini-project-6b78f.appspot.com/o/about-us.jpg?alt=media&token=35abc7f1-f67c-41a8-b5a2-fdd6f4e91b4e"
              alt="About"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
