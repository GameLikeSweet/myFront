import { Link } from 'react-router-dom';
import styles from './scss/Home.module.scss';

export default function Home_News() {
    const articleList = [
        {
            title: "test1",
            thumbnail: "",
            link: "/articles/react-basic"
        },
        {
            title: "test2",
            thumbnail: "",
            link: "/articles/css-flexbox"
        },
        {
            title: "test3",
            thumbnail: "",
            link: "/articles/js-async"
        }
    ];
    const changeLogs = [
        "2025-08-06 - HTML, CSS, JS 기반의 블로그 메인 페이지 News 부분 Node.js 및 React 기반으로 변경"
    ];
    const defaultThumbnail = "https://via.placeholder.com/150";

    return (
        <section>
            <div className={styles.news}>
                <div className={styles.newsTop}>
                    <h2>News</h2>
                </div>
                <div className={styles.newsBottom}>
                    <div className={styles.newArticle}>
                        {articleList.map((article, idx) => (
                            <Link to={article.link} key={idx}>
                                <div className={styles.letter}>
                                    <div className={styles.thumbnail}>
                                        <img
                                            className={styles.thumbnailImg}
                                            src={article.thumbnail || defaultThumbnail}
                                            alt={article.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p>{article.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.changeLog}>
                        <h3>블로그 변경점</h3>
                        <ul className={styles.changelog}>
                            {changeLogs.map((log, idx) => (
                                <li key={idx}>{log}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
