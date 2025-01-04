
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import Faq from "./Faq";
import StartsSection from "./StartsSection";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <StartsSection></StartsSection>
            <CategorySection></CategorySection>
            <Testimonials></Testimonials>
            <Faq></Faq>
           
        </div>
    );
};

export default Home;