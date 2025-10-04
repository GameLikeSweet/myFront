import './scss/Default.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'swiper/css';
import HomeIntro from './Home_Intro';
import HomeAbout from "./Home_About";
import HomeNews from "./Home_News";
import HomeWorkPage from './Home_WorkPage';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div id="Home" >
            {/* Intro Section */}
            <HomeIntro />

            {/* About Section */}
            <HomeAbout />

            {/* News Section */}
            <HomeNews />

            {/* Pages Section */}
            <HomeWorkPage />
        </div>

    )
}