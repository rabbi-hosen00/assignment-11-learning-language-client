// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import BookTutors from "../components/BookTutors";
import useAxiosSecur from "../components/useAxiosSecur";


const BookedTutor = () => {

    // const bookedTutors = useLoaderData();
    // console.log(bookedTutors)
  
    const [bookedTutors, setBookedTutors] = useState([]);
  const [, setLoading] = useState(true);

  const axiosSecure = useAxiosSecur()

  // Fetch tutorials
  useEffect(() => {
    axiosSecure
      .get("/booked-tutor")
      .then((response) => {
        setBookedTutors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tutorials:", error);
        setLoading(false);
      });
  }, []);
 



    return (
        <div className="mt-20 w-11/12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {
                bookedTutors?.map((tutors, idx) => <BookTutors key={idx} tutors={tutors}></BookTutors>)
            }
        </div>
    );
};

export default BookedTutor;
