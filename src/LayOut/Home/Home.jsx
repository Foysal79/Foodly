import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import TrendingProducts from './../../Components/TrendingProducts/TrendingProducts';
import TopRatedProduct from "../../Components/TopRatedProduct/TopRatedProduct";
import OurBlog from "../../Components/OurBlog/OurBlog";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <TrendingProducts></TrendingProducts>
            <TopRatedProduct></TopRatedProduct>
            <OurBlog></OurBlog>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;