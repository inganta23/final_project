import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryCart } from "./QueryCart";

const deleteCart = gql`
  mutation MyMutation($id: Int!) {
    delete_kampus_merdeka_cart(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
const useDeleteCart = () => {
    const [DeleteCartData, { loading: loadingDeleteCart }] = useMutation(
        deleteCart,
        { refetchQueries: [queryCart] }
      );

    return {DeleteCartData}
}

export default useDeleteCart;