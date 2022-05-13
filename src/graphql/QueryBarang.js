import { gql, useQuery } from "@apollo/client";

const query = gql`
  query MyQuery {
    kampus_merdeka_barang {
      id
      nama
      tipe
      harga
      ukuran
      kategori
      gambar
    }
  }
`;

const useQueryBarang = () => {
    const { data, loading, error } = useQuery(query);
    return {data, loading, error};
}

export default useQueryBarang;