import './scss/Default.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'swiper/css';
import Home_Intro from './Home_Intro';
import Home_About from "./Home_About";
import Home_News from "./Home_News";
import Home_WorkPage from './Home_WorkPage';


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
            <Home_Intro />

            {/* About Section */}
            <Home_About />

            {/* News Section */}
            <Home_News />

            {/* Pages Section */}
            <Home_WorkPage />
        </div>

    )
}