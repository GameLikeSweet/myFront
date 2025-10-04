// OffcanvasMenu.jsx
import { Offcanvas } from 'react-bootstrap';

function Menu() {
  return (
    <div
      className="offcanvas offcanvasMain offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      data-bs-scroll="true"
    >
      <div className="offcanvasTop">
        <a href="/index.html">Home</a>
      </div>
      <div className="offcanvasBot">
        <ul className="navigaters">
          <li className="offcanvasProfile">
            <div><a href="/Profile.html">프로필</a></div>
          </li>
          <li className="offcanvasTec">
            <div><a href="/Tec/techNote.html">테크 노트</a></div>
            <ul>
              <li>
                Web
                <ul className="offWeb"></ul>
              </li>
              <li>
                Git
                <ul className="offGit"></ul>
              </li>
              <li>
                라이브러리
                <ul className="offLib"></ul>
              </li>
            </ul>
          </li>
          <li className="offcanvasWorks">
            <div>작업 페이지</div>
            <ul className="offPage"></ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
