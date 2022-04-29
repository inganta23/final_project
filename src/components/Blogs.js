const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing",
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing",
    },
    {
      id: 3,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing",
    },
  ];
  return (
    <section id="blogs" className="py-5">
      <div className="container">
        <div className="title text-center py-5">
          <h2 className="position-relative d-inline-block">Our Latest Blog</h2>
        </div>
        <div className="row g-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
              <img
                src={require(`../assets/images/blog_${blog.id}.jpg`)}
                alt="Blog Picture"
              />
              <div className="card-body px-0">
                <h4 className="card-title">
                  {blog.title}
                </h4>
                <p className="card-text mt-3 text-muted">
                  {blog.paragraph}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <span className="fw-bold">Author: </span>John Doe
                  </small>
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
          {/* <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
            <img
              src={require("../assets/images/blog_1.jpg")}
              alt="Blog Picture"
            />
            <div className="card-body px-0">
              <h4 className="card-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing
              </h4>
              <p className="card-text mt-3 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit
                adipisci omnis quia itaque ratione iusto sapiente reiciendis,
                numquam officiis aliquid ipsam fuga.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <span className="fw-bold">Author: </span>John Doe
                </small>
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
          <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
            <img src={require("../assets/images/blog_2.jpg")} alt="" />
            <div className="card-body px-0">
              <h4 className="card-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing
              </h4>
              <p className="card-text mt-3 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit
                adipisci omnis quia itaque ratione iusto sapiente reiciendis,
                numquam officiis aliquid ipsam fuga.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <span className="fw-bold">Author: </span>John Doe
                </small>
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
          <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
            <img src={require("../assets/images/blog_3.jpg")} alt="" />
            <div className="card-body px-0">
              <h4 className="card-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing
              </h4>
              <p className="card-text mt-3 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit
                adipisci omnis quia itaque ratione iusto sapiente reiciendis,
                numquam officiis aliquid ipsam fuga.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <span className="fw-bold">Author: </span>John Doe
                </small>
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
