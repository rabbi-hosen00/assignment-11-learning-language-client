import { useLoaderData } from "react-router-dom";
import BookTutors from "../components/BookTutors";


const BookedTutor = () => {

    const BookedTutors = useLoaderData();
    

      

    return (
        <div className="mt-20 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {
                BookedTutors.map((tutors,idx)=> <BookTutors key={idx} tutors={tutors}></BookTutors>)
            }
        </div>
    );
};

export default BookedTutor;
