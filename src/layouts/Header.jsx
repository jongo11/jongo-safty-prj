import * as S from "@/styles/layouts/header.js";
import { useRef, useState } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import useOutSideRef from "@/hooks/useOutSideRef.js";
import { topLeftMenu, topRightMenu } from "@/data/layout/headerData.json";
import Icon from "@/components/elements/Icon";

function Header() {
  const [subHandle, setSubHandle] = useState(-1);
  const ref = useRef([]);
  // 해당ref 외부 클릭 감지 hook 사용
  useOutSideRef(ref, subHandle, setSubHandle);
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
                <Icon
                  id={item.icon}
                  width="10"
                  height="10"
                  fill="#26273C"
                  mgr="4"
                />
                {item.name}
              </button>
              {subHandle === i ? (
                <div
                  className="select-area"
                  ref={(el) => {
                    ref.current[i] = el;
                  }}
                >
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
                        <li key={j} className={sub.icon}>
                          <Link to={sub.link}>
                            <Icon
                              id={sub.icon}
                              width="15"
                              height="15"
                              fill={sub.color}
                              mgr="10"
                            />
                            {sub.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </S.HeaderWrap>
  );
}

export default Header;
