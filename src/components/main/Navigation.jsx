import * as S from "@/styles/components/main/navigation";
import PropTypes from "prop-types";
import Icon from "@/components/elements/Icon";
import { useEffect, useRef, useState } from "react";


function Navigation(props) {
  const [newList, setNewList] = useState(props.data)
  const rere = (i) => {
    const restList = newList.filter(data => data !== newList[i])
    setNewList(restList)
  }
  const ref = useRef()
  const closeNav = () => {
    ref.current.remove()
  }
  useEffect(()=>{
    newList.length === 0 ?
    closeNav()
    :
    null
  })
  return (
    <>
      <S.Navigation ref={ref}>
        <ul className="tab-list">
          {newList.map((item, index) => {
            return (
              <li key={index}>
                <button className="tab-btn" type="button">
                  <Icon id={item.icon} width="24" height="24" mgr="3" />
                  <p>{item.title}</p>
                </button>
                <button className="close-btn" type="button" onClick={() => {
                  rere(index)
                }}>
                  <Icon id="close" width="16" height="16" stroke="#808892" />
                  <span>닫기</span>
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="tab-close-btn" onClick={()=>{closeNav()}}>
          모두 닫기&nbsp;
          <Icon id="close" width="18" height="17" stroke="#fff" />
        </button>
      </S.Navigation>
    </>
  );
}

Navigation.propTypes = {
  data: PropTypes.array,
};

export default Navigation;
