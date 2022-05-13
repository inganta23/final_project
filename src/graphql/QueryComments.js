import { gql, useQuery } from "@apollo/client";

const queryComments = gql`
  query MyQuery($id_barang: Int!) {
    kampus_merdeka_comments(where: { id_barang: { _eq: $id_barang } }) {
      id
      komen
      pengarang
      tanggal
    }
  }
`;

const useQueryComments = (id) => {
  const { data, loading, error } = useQuery(queryComments, {variables: {id_barang: id}});
  return { data, loading, error };
};

export { useQueryComments, queryComments };
