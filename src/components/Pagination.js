import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/paginate";

const Pagination = ({ postsPerPage, totalPosts, path }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {path === "/collection"}
            <button
              onClick={() => dispatch(setCurrentPage(number))}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
