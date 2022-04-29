
import About from "../components/About";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Collection from "../components/Collection";
import Discount from "../components/Discount";
import Navbar from "../components/Navbar";
import Special from "../components/Special";

const Home = ({data}) => {
    let items = [...data];
    // console.log(data.length)
    // items.length = 5;
    return ( 
        <div className="Home">
            <Banner />
            <Collection data={items}/>
            {/* <Special /> */}
            <Discount />
        </div>
     );
}
 
export default Home;