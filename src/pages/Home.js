import Banner from "../components/Banner";
import Collection from "../components/Featured";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import ShopCategory from "../components/ShopCategory";
import Why from "../components/Why";

const Home = () => {
 
  return (
    <div className="Home">
      <Banner />
      <Why />
      <Collection />
      <Discount />
      <ShopCategory />
      <Footer />
    </div>
  );
};

export default Home;
