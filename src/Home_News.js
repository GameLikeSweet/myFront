import { Link } from 'react-router-dom';
import styles from './scss/Home.module.scss';
import { useState, useEffect } from 'react';


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



    const [dailyIdx, setDailyIdx] = useState(null);



    useEffect(() => {

        const KST_OFFSET = 9 * 60 * 60 * 1000;
        const dailyNum = Math.floor((Date.now() + KST_OFFSET) / 86400000);

        // 2025-10-13 기준 실버~골드 한글 문제
        const koreanProblems = [
            1012, 10814, 10816, 10828, 10845, 11047, 11286, 11659, 11724, 11866,
            1260, 1389, 1406, 1436, 1541, 1620, 1654, 1697, 1715, 17298, 17478,
            1753, 1764, 1780, 18258, 1874, 18870, 1912, 1920, 1927, 1929, 1931,
            1932, 1991, 1992, 2003, 2108, 2178, 2217, 2293, 2294, 2470, 2493,
            2504, 2559, 2579, 2606, 2630, 2667, 2751, 2805, 2839, 5430, 7562,
            7576, 7569, 9012, 9251, 9461, 9663, 1149, 1167, 11726, 11727, 11779,
            12865
        ];

        const idx = dailyNum % koreanProblems.length;
        setDailyIdx(koreanProblems[idx]);
    }, []);

    const [dailyTitle, setDailyTitle] = useState('로딩 중...');

    useEffect(() => {
        if (!dailyIdx) return;

        fetch(`/.netlify/functions/solvedac?id=${dailyIdx}`, { cache: 'no-store' })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => setDailyTitle(data.titleKo || '(제목 없음)'))
            .catch((err) => {
                console.warn('solved.ac fetch 실패:', err.message);
                setDailyTitle('문제 제목 불러오기 실패');
            });
    }, [dailyIdx]);


    if (!dailyIdx) return <p>로딩 중...</p>;

    const dailyLink = `https://www.acmicpc.net/problem/${dailyIdx}`;

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

            <div className={styles.daily}>
                <div className={styles.dailyTop}>
                    <h2>Daily Study</h2>
                </div>
                <div className={styles.dailyBot}>
                    <div className={styles.dailyQuest}>
                        <a href={dailyLink} target="_blank" rel="noreferrer noopener">
                            <div className={styles.questBox}>
                                <p>{dailyIdx} - {dailyTitle}</p>
                                <div className={styles.dailyThumbnail}>

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
