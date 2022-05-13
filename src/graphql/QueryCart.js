import { gql, useQuery } from "@apollo/client";

const queryCart = gql`
  query MyQuery {
    kampus_merdeka_cart {
      id
      kuantitas
      ukuran
      id_barang
      barang {
        nama
        harga
        gambar
      }
    }
  }
`;

const useQueryCart = () => {
  const { data, loading, error } = useQuery(queryCart);
  return { data, loading, error };
};

export { useQueryCart, queryCart };
