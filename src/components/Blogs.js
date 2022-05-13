import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/paginate";
import { useEffect } from "react";

const Blogs = ({ blogs, postsPerPage, totalPosts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);
  return (
    <>
      <section id="blogs" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">
              Our Latest Blog
            </h2>
          </div>
          <div className="row g-3">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="card border-0 col-md-6 col-lg-4 bg-transparent my-3"
              >
                <img
                  style={{ maxHeight: "300px" }}
                  className="img-fluid img-thumbnail rounded"
                  src={blog.urlToImage}
                  alt="Blog"
                />
                <div className="card-body px-0">
                  <h4 className="card-title">{blog.title}</h4>
                  <p className="card-text mt-3 text-muted">{blog.content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <span className="fw-bold">Author: </span>
                      {blog.author}
                    </small>
                  </p>
                  <a href={blog.url} target="_blank" rel="noreferrer" className="btn">
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
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} />
    </>
  );
};

export default Blogs;
