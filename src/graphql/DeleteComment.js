import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryComments } from "./QueryComments";

const deleteComment = gql`
  mutation MyMutation($id: Int!) {
    delete_kampus_merdeka_comments(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const useDeleteComment = () => {
  const [deleteCommentData] = useMutation(
    deleteComment,
    { refetchQueries: [queryComments] }
  );

  return { deleteCommentData };
};

export default useDeleteComment;
