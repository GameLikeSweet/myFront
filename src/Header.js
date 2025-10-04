import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './resource/logo.png';
import './scss/Default.scss';
import NavList from './NavList';

export default function Header() {
  const [show, setShow] = useState(false);

  // 한 버튼으로 토글
  const toggleMenu = () => setShow(prev => !prev);

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
            <p>My Blog</p>
          </Link>
        </div>
        <nav>
          <ul id="nav">
            <NavList />
          </ul>
        </nav>
        <Button className="btn btn-primary" onClick={toggleMenu}>
          ☰
        </Button>
      </header>

      <Offcanvas
        show={show}
        onHide={toggleMenu} // 바깥 클릭 시에도 동일 토글
        scroll={true}
        backdrop={true}
        placement="start"
        className="offcanvasMain"
      >
        {/* 헤더 제거 또는 커스터마이징 */}
        <Offcanvas.Body>
          <div className="offcanvasTop">
            <Link to="/">Home</Link>
          </div>
          <div className="offcanvasBot">
            <ul className="navigaters">
              <li className="offcanvasProfile">
                <div><Link to="/profile">프로필</Link></div>
              </li>
              <li className="offcanvasTec">
                <div><Link to="/Tec/techNote.html">테크 노트</Link></div>
                <ul>
                  <li>Web<ul className="offWeb"></ul></li>
                  <li>Git<ul className="offGit"></ul></li>
                  <li>라이브러리<ul className="offLib"></ul></li>
                </ul>
              </li>
              <li className="offcanvasWorks">
                <div>작업 페이지</div>
                <ul className="offPage"></ul>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
