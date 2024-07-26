import * as S from "@/styles/components/main/safetycurrentsituation2";
import PropTypes from "prop-types";
import Icon from "@/components/elements/Icon";
import RoundedBox from "@/components/elements/RoundedBox";
import Title from "@/components/elements/Title";
import PageNation from "@/components/elements/PageNation";

import { useState } from "react";

function SafetyCurrentSituation2(props) {
  const [activeChart, setActiveChart] = useState(0);
  function setActive(val) {
    setActiveChart(activeChart + val);
  }
  return (
    <RoundedBox type="normal">
      <S.SafetyCurrentSituation2>
        <Title title={props.data.title}>
          <ul className="top-switch">
            {props.data.label.map((item, i) => {
              return (
                <li key={i}
                  onClick={() => {
                    setActiveChart(i);
                  }}
                  className={activeChart === i ? "active" : ""}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </Title>
        <div className="contents-area">
          {props.data.chartData.map((el, j) => {
            return (
              activeChart === j && (
                <ul key={j} className="contents-list">
                  {el.value.map((item, index) => {
                    const chartRatio = Math.ceil(
                      (item.value / item.fullValue) * 100
                    );
                    const chartStyle = {
                      width: chartRatio + "%",
                    };
                    return (
                      <li key={index}>
                        <div className="chart-title-area">
                          <strong className="chart-title">
                            <Icon
                              id="safeIcon"
                              width="24"
                              height="24"
                              mgr="5"
                            />
                            {item.title}
                          </strong>
                          <div className="percent">
                            <p>
                              {props.data.label1}/{props.data.label2}
                            </p>{" "}
                            <span>{chartRatio}%</span>
                          </div>
                        </div>
                        <div className="chart-area">
                          <div className="full-value">
                            <div style={chartStyle} className="value">
                              <span>{item.value}</span>
                            </div>
                            <span>{item.fullValue}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )
            );
          })}
          <div className="contents-legend-area">
            <ul className="contents-legend-list">
              {props.data.label.map((label, i) => {
                return (
                  <li key={i}>
                    <p>{label}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <PageNation
            now={activeChart}
            total={props.data.chartData.length}
            setActive={setActive}
          />
        </div>
      </S.SafetyCurrentSituation2>
    </RoundedBox>
  );
}

SafetyCurrentSituation2.propTypes = {
  data: PropTypes.object,
};

export default SafetyCurrentSituation2;
