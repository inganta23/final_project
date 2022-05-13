import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryCart } from "./QueryCart";

const insertCart = gql`
  mutation MyMutation($ukuran: String!, $kuantitas: Int!, $id_barang: Int!) {
    insert_kampus_merdeka_cart(
      objects: { id_barang: $id_barang, kuantitas: $kuantitas, ukuran: $ukuran }
    ) {
      affected_rows
    }
  }
`;


const useInsertCart = () => {
    const [insertCartData, { loading: loadingCart }] = useMutation(insertCart, {refetchQueries: [queryCart]});

    return {insertCartData}
}

export default useInsertCart;