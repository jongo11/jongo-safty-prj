// import * as S from "@/styles/components/main/safetyAccidents";
import PropTypes from "prop-types";
import RoundedBox from "@/components/elements/RoundedBox";
import Title from "@/components/elements/Title";
import SelectDate from "@/components/elements/SelectDate";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function MonthlySafetyAccidents(props) {
  const [activeChart, setActiveChart] = useState(0);
  function setActive(val) {
    setActiveChart(activeChart + val);
  }
  const options = {
    // responsive: false,
    maxBarThickness: 20,
    datalabels: {
      align: 'end',
      anchor: 'end',
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 14,
        grid: {
          drawTicks: false,
        },
      },
      x: {
        display: false,
        ticks: {
          display: true, //새로운tick을 만들었으니 기존의 tick을 제거
        },
      },
      xAxes: {
        ticks: {
          // autoSkip: false,
          labelOffset: 2,
          padding: 2,
          font: {
            size: 12,
          },
        },
        grid: {
          display: true, //뒷배경 라인 없애기
          drawTicks: false,
        },
      },
    },
  };
  return (
    <RoundedBox type="wide">
      <Title title={props.data.title}>
        <SelectDate
          data={props.data.accdentsData}
          active={activeChart}
          setActive={setActive}
        />
      </Title>
      {props.data.accdentsData.map((chart, i) => {
        return i === activeChart ? (
          <Bar key={i} data={chart.data} options={options} />
        ) : null;
      })}
    </RoundedBox>
  );
}

MonthlySafetyAccidents.propTypes = {
  data: PropTypes.object,
};

export default MonthlySafetyAccidents;
