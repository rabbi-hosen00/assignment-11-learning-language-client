import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LottieAndTypewriter from "../components/LottieAndTypewriter";
import LottieAnimation from "../components/LottieAnimation";
import AnimationReact from "../components/AnimationReact";


const Mainlayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <LottieAndTypewriter></LottieAndTypewriter>
            <LottieAnimation></LottieAnimation>
            <AnimationReact></AnimationReact>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;