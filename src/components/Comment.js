import { useEffect } from "react";
import { useQueryComments } from "../graphql/QueryComments";
import useDeleteComment from "../graphql/DeleteComment";
import useInsertComment from "../graphql/InsertComment";
import useUpdateComment from "../graphql/UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setEditId,
  setInsert,
  setEditComment,
} from "../redux/commentRedux";
import Pagination from "../components/Pagination";

const Comment = ({ id }) => {
  const { insertCommentData } = useInsertComment();
  const { updateCommentData } = useUpdateComment();
  const { deleteCommentData } = useDeleteComment();
  const { currentPage } = useSelector((state) => state.commentRedux);
  const { commentPerPage } = useSelector((state) => state.commentRedux);
  const { editId } = useSelector((state) => state.commentRedux);
  const { insert } = useSelector((state) => state.commentRedux);
  const { editComment } = useSelector((state) => state.commentRedux);
  const {
    data: dataComments,
    loading: loadingComments,
    error: errorComments,
  } = useQueryComments(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  const paginate = (number) => {
    dispatch(setCurrentPage(number));
  };
  const handleInsert = (e) => {
    e.preventDefault();
    insertCommentData({
      variables: {
        id_barang: id,
        komen: insert.komen,
        pengarang: insert.pengarang,
      },
    });
    dispatch(
      setInsert({
        komen: "",
        pengarang: "",
      })
    );
    alert("Berhasil");
  };

  const handleUpdateComment = (e) => {
    e.preventDefault();
    updateCommentData({
      variables: {
        id: editId,
        komen: editComment.komen,
        pengarang: editComment.pengarang,
      },
    });
    dispatch(setEditId(""));
    dispatch(
      setEditComment({
        komen: "",
        pengarang: "",
      })
    );
  };

  if (loadingComments) return <p>Loading Comments</p>;
  let indexOfLastComment = currentPage * commentPerPage;
  let indexOfFirstComment = indexOfLastComment - commentPerPage;
  let comments = dataComments.kampus_merdeka_comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  return (
    <div className="comment container">
      <div className="form w-75 mx-auto my-5">
        <h2 className="text-center">Leave Us a Comment</h2>
        <form onSubmit={handleInsert}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="comment"
              placeholder="Add Your Comment"
              value={insert.komen}
              onChange={(e) =>
                dispatch(setInsert({ ...insert, komen: e.target.value }))
              }
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author"
              value={insert.pengarang}
              onChange={(e) =>
                dispatch(setInsert({ ...insert, pengarang: e.target.value }))
              }
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 px-3 py-1">
            Submit
          </button>
        </form>
      </div>

      <div className="list-group w-75 mx-auto mb-5">
        {comments.map((comment) =>
          comment.id === editId ? (
            <>
              <form
                key={`${comment.id} editComment`}
                className="my-4"
                onSubmit={handleUpdateComment}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="comment-edit"
                    placeholder="Edit Comment"
                    value={editComment.komen}
                    onChange={(e) =>
                      dispatch(
                        setEditComment({
                          ...editComment,
                          komen: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="comment-author"
                    placeholder="Edit Author"
                    value={editComment.pengarang}
                    onChange={(e) =>
                      dispatch(
                        setEditComment({
                          ...editComment,
                          pengarang: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 me-1 px-3 py-1"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-primary mt-3 px-3 py-1"
                  onClick={() => dispatch(setEditId(""))}
                >
                  Close
                </button>
              </form>
            </>
          ) : (
            <div
              className="comment-answer list-group-item flex-column align-items-start"
              key={comment.id}
            >
              <div className="d-flex w-100 justify-content-end">
                <small>{comment.tanggal}</small>
              </div>
              <p className="mb-1">{comment.komen}</p>
              <small className="d-block">{comment.pengarang}</small>
              <button
                type="button"
                className="border-1 border-dark bg-transparent my-2 me-2 bg-light text-dark "
                onClick={() => {
                  dispatch(setEditId(comment.id));
                  dispatch(
                    setEditComment({
                      komen: comment.komen,
                      pengarang: comment.pengarang,
                    })
                  );
                }}
              >
                <small>Edit Comment</small>
              </button>
              <button
                type="button"
                className="border-1 bg-transparent border-dark my-2 bg-light text-dark "
                onClick={() =>
                  deleteCommentData({
                    variables: {
                      id: comment.id,
                    },
                  })
                }
              >
                <small>Delete Comment</small>
              </button>
            </div>
          )
        )}
        <Pagination
          postsPerPage={commentPerPage}
          totalPosts={dataComments.kampus_merdeka_comments.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Comment;
