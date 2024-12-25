
const Banner = () => {
    return (
        <div>
            <div className="carousel mt-16 w-full  sm:h-[60vh] lg:h-[70vh] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="https://d153a5wkap3yqn.cloudfront.net/cms/2881/4790-main.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle"></a>
                        <a href="#slide2" className="btn btn-circle"></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src="https://admin.dailycricket.com.bd/storage/posts/10219/Bangladesh-qualify-2022-T20-WC.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src="https://c8.alamy.com/comp/2M59AHP/bangabandhu-asian-central-zone-u-23-mens-international-volleyball-championship-at-the-shaheed-suhrawardy-indoor-stadium-in-mirpur-dhaka-bangladesh-2M59AHP.jpg"
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