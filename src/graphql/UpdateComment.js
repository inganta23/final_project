import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryComments } from "./QueryComments";

const updateComment = gql`
mutation MyMutation($id: Int!, $komen: String!, $pengarang: String!) {
  update_kampus_merdeka_comments(where: {id: {_eq: $id}}, _set: {komen: $komen, pengarang: $pengarang}) {
    affected_rows
  }
}`;

const useUpdateComment = () => {
    const [updateCommentData, { loading: loadingUpdateComment }] = useMutation(
        updateComment,
        { refetchQueries: [queryComments] }
      );

    return {updateCommentData}
}

export default useUpdateComment;