import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryFav } from "./QueryFavourite";

const insertFav = gql`
  mutation MyMutation($id_barang: Int!) {
    insert_kampus_merdeka_favorite(objects: { id_barang: $id_barang }) {
      affected_rows
    }
  }
`;

const useInsertFav = () => {
    const [insertFavData, { loading: loadingUpdateCart }] = useMutation(
        insertFav,
        { refetchQueries: [queryFav] }
      );

    return {insertFavData}
}

export default useInsertFav;