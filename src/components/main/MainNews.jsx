// import * as S from "@/styles/components/main/safetyAccidents";
import PropTypes from "prop-types";
import RoundedBox from "@/components/elements/RoundedBox";
import Button from "@/components/elements/Button";
import Title from "@/components/elements/Title";
import * as S from "@/styles/components/main/mainNews";
import "chart.js/auto";
import { useEffect, useState } from "react";

function MainTask(props) {
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    props.data.dataList.forEach((item) => {
      setTotal((total) => (total += item.newsList.length));
    });
  }, [props.data.dataList]);

  return (
    <RoundedBox type="middle">
      <Title
        title={props.data.title}
        total={total}
        source="출처:네이버뉴스"
      ></Title>
      <S.ChartListWrap>
        <div className="hash_wrap">
          {props.data.dataList.map((item, i) => {
            return (
              <p
                key={i}
                className={active === i ? "on" : ""}
                onClick={() => {
                  setActive(i);
                }}
              >
                {item.hashTitle}
              </p>
            );
          })}
        </div>
        {props.data.dataList.map((item, i) => {
          return active === i ? (
            <ul key={i}>
              {item.newsList.map((li, j) => {
                return (
                  <li key={j}>
                    <Button href={li.link}>
                      <p className="txt">{li.txt}</p>
                    </Button>
                  </li>
                );
              })}
            </ul>
          ) : null;
        })}
      </S.ChartListWrap>
    </RoundedBox>
  );
}

MainTask.propTypes = {
  data: PropTypes.object,
};

export default MainTask;
