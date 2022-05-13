import { useState } from "react";
import { useQueryComments, queryComments } from "../graphql/QueryComments";
import useInsertComment from "../graphql/InsertComment";
import useUpdateComment from "../graphql/UpdateComment";

const Comment = ({ id }) => {
  const [editId, setEditId] = useState("");
  const { insertCommentData } = useInsertComment();
  const { updateCommentData } = useUpdateComment();
  const {
    data: dataComments,
    loading: loadingComments,
    error: errorComments,
  } = useQueryComments(id);

  const [insert, setInsert] = useState({
    komen: "",
    pengarang: "",
  });

  const [editComment, setEditComment] = useState({
    komen: "",
    pengarang: "",
  });

  const handleInsert = (e) => {
    e.preventDefault();
    insertCommentData({
      variables: {
        id_barang: id,
        komen: insert.komen,
        pengarang: insert.pengarang,
      },
    });
    setInsert({
      komen: "",
      pengarang: "",
    });
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
    setEditId("");
    setEditComment({
      komen: "",
      pengarang: "",
    });
  };

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
              onChange={(e) => setInsert({ ...insert, komen: e.target.value })}
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
                setInsert({ ...insert, pengarang: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 px-3 py-1">
            Submit
          </button>
        </form>
      </div>

      <div className="list-group w-75 mx-auto mb-5">
        {loadingComments ? (
          <p>Loading</p>
        ) : (
          dataComments.kampus_merdeka_comments.map((comment) =>
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
                      value={editComment.komen || comment.komen}
                      onChange={(e) =>
                        setEditComment({
                          ...editComment,
                          komen: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="comment-author"
                      placeholder="Edit Author"
                      value={editComment.pengarang || comment.pengarang}
                      onChange={(e) =>
                        setEditComment({
                          ...editComment,
                          pengarang: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 px-3 py-1"
                  >
                    Submit
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
                <button type="button" className="border-1 my-2 bg-light text-dark " onClick={() => setEditId(comment.id)}>
                  Edit Comment
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Comment;
