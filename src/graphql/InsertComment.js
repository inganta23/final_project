import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryComments } from "./QueryComments";

const insertComment = gql`
  mutation MyMutation($id_barang: Int!, $komen: String!, $pengarang: String!) {
    insert_kampus_merdeka_comments(
      objects: { id_barang: $id_barang, komen: $komen, pengarang: $pengarang }
    ) {
      affected_rows
    }
  }
`;

const useInsertComment = () => {
  const [insertCommentData, { loading: loadingInsert }] = useMutation(insertComment, {
    refetchQueries: [queryComments],
  });

  return { insertCommentData };
};

export default useInsertComment;
