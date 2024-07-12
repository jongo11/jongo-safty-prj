import * as S from "@/styles/components/common/header.js";
import { useEffect, useRef, useState } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  // 헤더 왼쪽메뉴 리스트
  const topLeftMenu = [
    {
      name: "위험상황신고",
      link: " ",
    },
    {
      name: "알림",
      link: " ",
    },
  ];
  // 헤더 오른쪽메뉴 리스트
  const topRightMenu = [
    {
      name: "신세계아이엔씨본사",
      sub: [
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "로그아웃",
          link: " ",
        },
      ],
    },
    {
      name: "김세계",
      discription: "신세계아이엔씨",
      sub: [
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "내정보",
          link: " ",
        },
        {
          name: "로그아웃",
          link: " ",
        },
      ],
    },
  ];
  const [subHandle, setSubHandle] = useState(-1);
  const ref = useRef([]);
  // 해당ref 외부 클릭 감지 후 
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current[subHandle] && !ref.current[subHandle].contains(event.target)) {
        // console.log('외부눌림');
        setSubHandle(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [subHandle]);
  return (
    <S.HeaderWrap>
      <ul className="header-left-list">
        <li className="logo">
          <h1>
            <Link to="">
              <img
                src="/images/layouts/logo-white.png"
                alt="메인 로고 이미지"
              ></img>
            </Link>
          </h1>
        </li>
        {topLeftMenu.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.link}>
                <i className="icons"></i>
                <span type="span">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="header-right-list">
        {topRightMenu.map((item, i) => {
          return (
            <li key={i}>
              <button type="button" onClick={() => setSubHandle(i)}>
                {item.name}
              </button>
              {
                subHandle === i ?
                <div className="select-area" ref={el => {
                  ref.current[i] = el
                  console.log(ref)
                  }}>
                  {item.discription ? (
                    <div className="profile-info">
                      <strong>{item.name}</strong>
                      <p>{item.discription}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <ul className="menu">
                    {item.sub.map((sub, j) => {
                      return (
                        <li key={j}>
                          <Link to={sub.link}>{sub.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                :
                ''
              }

            </li>
          );
        })}
      </ul>
    </S.HeaderWrap>
  );
}

export default Header;
