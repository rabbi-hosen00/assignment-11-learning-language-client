
const Banner = () => {
    return (
        <div>
            <div className="carousel mt-16 w-full  sm:h-[60vh] lg:h-[70vh] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                    src="https://topteacher.com.au/wp-content/uploads/2023/12/tt-home-page-header.jpg"
                        // src="https://png.pngtree.com/thumb_back/fh260/background/20230216/pngtree-female-high-school-teacher-taking-class-image_1564825.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle"></a>
                        <a href="#slide2" className="btn btn-circle"></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src="https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q="
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src="https://media.istockphoto.com/id/1470810742/photo/kindergarten-students-with-their-teacher.jpg?s=612x612&w=0&k=20&c=11OzDQwQY1683ictafKGI4KObiEHbmvoUWCS9D8SDNA="
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