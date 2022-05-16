import { gql, useQuery } from "@apollo/client";

const query = gql`
  query MyQuery {
    kampus_merdeka_barang(order_by: { id: asc }) {
      deskripsi
      gambar
      harga
      id
      kategori
      nama
      tipe
      ukuran
    }
  }
`;

const useQueryBarang = () => {
  const { data, loading, error } = useQuery(query);
  return { data, loading, error };
};

export default useQueryBarang;
