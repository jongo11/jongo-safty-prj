import * as S from "@/styles/components/main/safetyAccidents";
import PropTypes from "prop-types";
import RoundedBox from "@/components/elements/RoundedBox";
import Title from "@/components/elements/Title";
import SelectDate from "@/components/elements/SelectDate";
import { useState } from "react";

function SafetyAccidents(props) {
  const [activeChart, setActiveChart] = useState(0);
  function setActive(val) {
    setActiveChart(activeChart + val);
  }
  return (
    <RoundedBox type="small">
      <S.SafetyAccidents>
        <Title title={props.data.title}>
          <SelectDate
            data={props.data.accdentsData}
            active={activeChart}
            setActive={setActive}
          />
        </Title>
        <div className="contents-area">
          {props.data.accdentsData.map((el, j) => {
            return (
              activeChart === j &&
              <ul key={j} className="contents-list">
                {el.accidentDatas.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="rank">
                        <p>{item.rank}</p>
                        <span>등급</span>
                      </div>
                      <div className="num">
                        <p>{item.num}</p>
                        <span>건</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </S.SafetyAccidents>
    </RoundedBox>
  );
}

SafetyAccidents.propTypes = {
  data: PropTypes.object,
};

export default SafetyAccidents;
