// Home_intro.jsx
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './scss/Home.module.scss';

import slide1 from './resource/homeSlide1.png';
import slide2 from './resource/homeSlide2.png';
import slide3 from './resource/homeSlide3.png';
import reactLogo from './resource/reactLogo.png';
import nodeLogo from './resource/nodejsLogo.png';
import aosLogo from './resource/aosLogo.png';
import swiperLogo from './resource/swiperLogo.png';
import jqueryLogo from './resource/jqueryLogo.png';

function Home_Intro() {
  const slides = [slide1, slide2, slide3, reactLogo, nodeLogo, aosLogo, swiperLogo, jqueryLogo];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutMe}>
        <h2>나에 대해서</h2>
        <p>
          웹 퍼블리셔로 <b>HTML, CSS, JS</b>을 기반으로한 다양한 <b>Jquery, AOS , Swiper</b> 같은
          라이브러리를 다루고 있습니다. 프론트 엔지니어까지 성장 할 수 있도록 <b>React, Node.js</b>등을 공부하고 있습니다.
        </p>
      </div>

      <div className={styles.swiperBox} data-aos="fade-up" data-aos-delay="500">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={15}
          slidesPerView={5}
          loop={true}
          speed={400}
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 8 },
            801: { slidesPerView: 5, spaceBetween: 15 },
          }}
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <img className={styles.slideImg} src={img} alt={`slide-${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Home_Intro;
