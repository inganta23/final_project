import { useState } from "react";
import { gql, useQuery, useMutation, refetchQueries } from "@apollo/client"

const insertComment = gql`
mutation MyMutation($id_barang: Int!, $komen: String!, $pengarang: String!) {
  insert_kampus_merdeka_comments(objects: {id_barang: $id_barang, komen: $komen, pengarang: $pengarang}) {
    affected_rows
  }
}`;

const queryComments =gql`
query MyQuery($id_barang: Int!) {
  kampus_merdeka_comments(where: {id_barang: {_eq: $id_barang}}) {
    komen
    pengarang
    tanggal
  }
}`;

const Comment = ({id}) => {
  const [insertData, { loading: loadingInsert }] = useMutation(insertComment, {refetchQueries: [queryComments]});
  const { data:dataComments, loading:loadingComments, error:errorComments } = useQuery(queryComments, {variables: {id_barang: id}});
  
  const [insert, setInsert] = useState({
    komen: '', pengarang: ''
  });



  const handleInsert = (e) =>{
    e.preventDefault();
    insertData({variables: {id_barang: id, komen: insert.komen, pengarang: insert.pengarang}});
    setInsert({
      komen: '', pengarang: ''
    });
    alert('Berhasil');
  } 

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
              onChange={(e) => setInsert({...insert, komen: e.target.value})}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author"
              value={insert.pengarang}
              onChange={(e) => setInsert({...insert, pengarang: e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 px-3 py-1">
            Submit
          </button>
        </form>
      </div>

      <div className="list-group w-75 mx-auto mb-5">
        {loadingComments ? <p>Loading</p> 
        : 
        dataComments.kampus_merdeka_comments.map(comment =>(
          <div className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-end">
            {/* <h5 className="mb-1">List group item heading</h5> */}
            <small>{comment.tanggal}</small>
          </div>
          <p className="mb-1">
            {comment.komen}
          </p>
          <small>{comment.pengarang}</small>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Comment;
