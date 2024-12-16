import ProductSection from "./ProductSection";
import SportsCategory from "./SportsCategory";


const AllSportsSection = () => {
    return (
        <>
            
            <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3 p-4 rounded-md">

                <SportsCategory></SportsCategory>
                <ProductSection></ProductSection>
            </div>
        </>
    );
};

export default AllSportsSection;