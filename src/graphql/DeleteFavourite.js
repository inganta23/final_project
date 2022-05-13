import { gql, useMutation, refetchQueries } from "@apollo/client";
import { queryFav } from "./QueryFavourite";

const deleteFav = gql`
  mutation MyMutation($id: Int!) {
    delete_kampus_merdeka_favorite(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const deleteFavBarang = gql`
  mutation MyMutation($id_barang: Int!) {
    delete_kampus_merdeka_favorite(where: { id_barang: { _eq: $id_barang } }) {
      affected_rows
    }
  }
`;

const useDeleteFav = () => {
  const [deleteFavData, { loading: loadingDeleteCart }] = useMutation(
    deleteFav,
    { refetchQueries: [queryFav] }
  );

  return { deleteFavData };
};

const useDeleteFavBarang = () => {
  const [deleteFavDataBarang, { loading: loadingDeleteCart }] = useMutation(
    deleteFavBarang,
    { refetchQueries: [queryFav] }
  );

  return { deleteFavDataBarang };
};

export { useDeleteFav, useDeleteFavBarang };
