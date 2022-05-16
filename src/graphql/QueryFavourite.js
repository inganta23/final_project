import { gql, useQuery } from "@apollo/client";

const queryFav = gql`
  query MyQuery {
    kampus_merdeka_favorite {
      id
      barang {
        nama
        harga
        id
        gambar
      }
    }
  }
`;

const useQueryFavourite = () => {
  const { data, loading, error } = useQuery(queryFav);
  return { data, loading, error };
};

export { useQueryFavourite, queryFav };
