import Banner from "../components/Banner";
import Collection from "../components/Collection";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import ShopCategory from "../components/ShopCategory";
import Why from "../components/Why";

const Home = ({ data, favorite }) => {
  let items = [...data];
  // console.log(data.length)
  // items.length = 5;
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
