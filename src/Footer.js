export default function Footer() {

    const url = "https://github.com/GameLikeSweet";
    return (
        <footer>
            <div class="contact">
                <h2>contact</h2>
                <ul>
                    <li>tel : 010-6336-9978</li>
                    <li>E-Mail : tjdgns9978@gmail.com</li>
                    <li><a href={url} target="_blank" rel="noreferrer noopener">Github : https://github.com/GameLikeSweet</a></li>
                    {/*<li><a href='http://shmyblog.com/' target="_blank">site : http://shmyblog.com/</a></li>*/}
                </ul>
            </div>
        </footer>
    )
}