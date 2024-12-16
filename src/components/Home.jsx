import AllSportsSection from "./AllSportsSection";
import Banner from "./Banner";


import Testimonials from "./Testimonials";
import WeeklyDeals from "./WeeklyDeals";
// import FeaturedProducts from "./FeatureProducts";



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AllSportsSection></AllSportsSection>
            <Testimonials></Testimonials>
            <WeeklyDeals></WeeklyDeals>
        </div>
    );
};

export default Home;