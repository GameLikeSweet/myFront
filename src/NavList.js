import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const menuList = [
  { menu: 'Profile', url: '/' },
  { menu: 'TechNote', url: '/techNote' },
  { menu: 'Work Page', url: '/' },
];

export default function NavList() {
  const liRefs = useRef([]);
  const [ready, setReady] = useState(false); // DOM이 준비됐는지 여부

  // 렌더링 직후 ref 세팅
  useLayoutEffect(() => {
    // 모든 요소가 채워졌을 때에만 ready 상태 변경
    const allReady = menuList.every((_, i) => liRefs.current[i]);
    if (allReady) setReady(true);
  });

  useLayoutEffect(() => {
    if (!ready) return; // 준비 안되었으면 패스

    const tl = gsap.timeline();
    liRefs.current.forEach((el, i) => {
      tl.from(el, {
        y: -100,
        opacity: 0,
        duration: 0.6,
      }, i * 0.2);
    });
  }, [ready]); // ready가 true일 때 실행

  return (
    <>
      {menuList.map((item, i) => (
        <li
          key={i}
          ref={(el) => (liRefs.current[i] = el)}
        >
          <Link to={item.url}>{item.menu}</Link>
        </li>
      ))}
    </>
  );
}
