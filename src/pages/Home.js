import Banner from "../components/Banner";
import Collection from "./Collection";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import ShopCategory from "../components/ShopCategory";
import Why from "../components/Why";

const Home = ({ data, favorite }) => {
  let items = [...data];
  items.length = 8;
  return (
    <div className="Home">
      <Banner />
      <Why />
      <Collection data={items} favorite={favorite} />
      <Discount />
      <ShopCategory />
      <Footer />
    </div>
  );
};

export default Home;
