import styles from './scss/Home.module.scss';

export default function Home_WorkPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.pages}></div>
                <div className={styles.pages}></div>
                <div className={styles.pages}></div>
            </div>
        </section>
    )
}
