import styles from './scss/Home.module.scss';

function Home_Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introMain}>
        <div className={styles.headLine}>
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            Seonghun's<br />Web Blog
          </h1>
        </div>
        <div
          className={styles.introAbout}
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="800"
        >
          <p>
            매일 새로운 것을 배우고, 실천하며 한 걸음씩 성장하는 박성훈의 개인 블로그입니다.
            저의 작은 발자취가 많은 분들께 도움이 되길 바라며, 오늘도 한 걸음 나아갑니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home_Intro;
