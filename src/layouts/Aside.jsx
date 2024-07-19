import { AsideBar } from "@/styles/layouts/aside.js";
import { AsideMenuDataList } from "@/data/layout/asideData.json";
import Button from "@/components/elements/Button";
import { useRef, useEffect, useState } from "react";
import Icon from "@/components/elements/Icon";
import useOutSideRef from "@/hooks/useOutSideRef.js";

function Aside() {
  const [isFold, setFold] = useState(false);
  const [active, setActive] = useState(0);
  const [subActive, setSubActive] = useState(-1);
  const [menuArr, setMenuArr] = useState(AsideMenuDataList);
  const changeActive = (i) => {
    setActive(i);
    return i;
  };
  // 메인버튼 눌렀을때 동작
  useEffect(() => {
    let result = [];
    AsideMenuDataList.map((list, i) => {
      result[i] = list;
      active === i ? (result[i].color = "#fff") : (result[i].color = "#AFBFD8");
    });
    setMenuArr(result);
    setSubActive(-1);
  }, [active]);
  const ref = useRef([]);
  useOutSideRef(ref, active, setActive);
  return (
    <AsideBar>
      <div className={`menu-area ${isFold && "fold"}`}>
        <button
          onClick={() => {
            setFold(!isFold);
          }}
          className="menu-control"
        ></button>
        <ul className="AsideMenuList">
          {menuArr.map((item, i) => (
            <li key={i}>
              <Button
                txt={item.name}
                className={`aside-menu ${active === i && "active"}`}
                clickHandler={() => {
                  changeActive(i);
                }}
              >
                <Icon
                  id={item.icon}
                  width="24"
                  height="24"
                  mgr="10"
                  fill={item.color}
                />
                {item.list ? (
                  <Icon
                    className="arrow"
                    id="arrowRight"
                    width="24"
                    height="24"
                    mgr="10"
                    stroke={item.color}
                  />
                ) : null}
              </Button>
              {active === i && item.list ? (
                <ul
                  ref={(el) => {
                    ref.current[i] = el;
                  }}
                >
                  {item.list.map((item, j) => (
                    <li key={j}>
                      <Button
                        txt={item.name}
                        className={ item.type +
                          (subActive === j ? " active" : '')
                        }
                        clickHandler={() => {
                          setSubActive(j);
                        }}
                      >
                        { item.type && <Icon
                          id="setting"
                          width="14"
                          height="14"
                          fill="#fff"
                        /> }
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </AsideBar>
  );
}

export default Aside;
