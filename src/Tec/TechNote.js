import style from './TechNote.module.scss';
import gitLogo from '../resource/gitLogo.png';
import defaultLogo from '../resource/home.png';


function TechNote() {

    const contentList = [
        {
            cTitle: "Empty",
            cThumb: gitLogo,
            cMain: "Empty",
            cLink: ""
        },
        {
            cTitle: "Empty",
            cThumb: "",
            cMain: "Empty",
            cLink: ""
        }
    ]



    return (
        <section className={style.techNote}>

            {contentList.map((content, index) => (
                <ArticleContent
                    key={index}
                    thumb={content.cThumb}
                    title={content.cTitle}
                    main={content.cMain}
                    link={content.cLink}
                />
            ))}


            <ArticleContent />
        </section>
    )
}


function ArticleContent({thumb, title, main, link}) {
    return (
        <article>
            <div className={style.aInner}>
                <div className={style.content}>
                    <div className={style.cLeft}>
                        <div className={style.cThumb}>
                            <img 
                            src={thumb || defaultLogo} 
                            alt="작업 썸네일"
                            />
                        </div>
                    </div>
                    <div className={style.cRight}>
                        <div className={style.cTitle}>
                            {title}
                        </div>
                        <div className={style.cMain}>
                            {main}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}



export default TechNote;