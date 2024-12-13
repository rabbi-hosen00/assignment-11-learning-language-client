
const Banner = () => {
    return (
        <div>
            <div className="carousel  w-full  sm:h-[60vh] lg:h-[70vh] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="https://www.brookdalecc.edu/wp-content/uploads/2023/05/legal2.webp"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle"></a>
                        <a href="#slide2" className="btn btn-circle"></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src="https://c8.alamy.com/comp/2NJ169B/career-counseling-text-word-on-white-paper-on-gray-background-2NJ169B.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src="https://www.manipal.edu/content/dam/manipal/mu/kmc-manipal/images/galleryImage/KMCMpltrial/CareerCounseling.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;