import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryCart } from "./QueryCart";

const updateCart = gql`
  mutation MyMutation($kuantitas: Int!, $id: Int!) {
    update_kampus_merdeka_cart(
      where: { id: { _eq: $id } }
      _set: { kuantitas: $kuantitas }
    ) {
      affected_rows
    }
  }
`;

const useUpdateCart = () => {
    const [updateCartData, { loading: loadingUpdateCart }] = useMutation(
        updateCart,
        { refetchQueries: [queryCart] }
      );

    return {updateCartData}
}

export default useUpdateCart;