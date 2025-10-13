import styles from './scss/Home.module.scss';

export default function Home_WorkPage() {

    const pageList = [
        {
            href: 'https://zingy-belekoy-ce63e8.netlify.app/',
            thumbNail: 'https://s0.wp.com/mshots/v1/https://zingy-belekoy-ce63e8.netlify.app/',
            pageTitle : '스타벅스 모작'
        },
        {
            href : 'https://lustrous-douhua-752b46.netlify.app/heroes',
            thumbNail : 'https://s0.wp.com/mshots/v1/https://lustrous-douhua-752b46.netlify.app/heroes',
            pageTitle : '오버워치 영웅'
        },
        {
            href : 'https://verdant-sprite-527de9.netlify.app/',
            thumbNail : 'https://s0.wp.com/mshots/v1/https://verdant-sprite-527de9.netlify.app/',
            pageTitle : '홈페이지 제작 연습'
        }
    ]

    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                {pageList.map((page, index) => (
                    <PageDefault
                        key={index}
                        hrefLink={page.href}
                        thumbNailLink={page.thumbNail}
                        pageTitle = {page.pageTitle}
                    />
                ))}
            </div>
        </section >
    )
}


function PageDefault({hrefLink, thumbNailLink, pageTitle}) {
    return (
        <div className={styles.pages}>
            <a href={hrefLink} target="_blank" rel="noreferrer">
                <div className={styles.thumbNail}>
                    <img src={thumbNailLink} alt="작업 썸네일" />
                    <p className={styles.title}>{pageTitle}</p>
                </div>
            </a>
        </div>
    )
}