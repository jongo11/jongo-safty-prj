// import * as S from "@/styles/components/main/safetyAccidents";
import PropTypes from "prop-types";
import RoundedBox from "@/components/elements/RoundedBox";
import Button from "@/components/elements/Button";
import Title from "@/components/elements/Title";
import * as S from "@/styles/components/main/mainTask";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function MainTask(props) {
  const options = {
    plugins: {
      legend: false,
      tooltip: false,
    },
  };

  return (
    <RoundedBox type="middle">
      <Title title={props.data.title} />
      <S.ChartListWrap>
        <div className="chart_wrap" style={{ width: 150}}>
          <Doughnut data={props.data.chartData} options={options} />
          <ul>
            {props.data.chartData.labels.map((item, i) => {
              return(
                <li key={i}>
                  <span style={{background:props.data.chartData.datasets[0].backgroundColor[i]}}></span>
                  {item} {props.data.chartData.datasets[0].data[i]}
                </li>
              )
            })}
          </ul>
        </div>
        <ul>
          {props.data.dataList.map((item, i) => {
            return (
              <li key={i}>
                <Button href={item.link}>
                  <p className={"tip " + (item.warn ? "warn" : "")}>
                    {item.warn ? "고위험" : "일반"}
                  </p>
                  <p className="date">
                    {item.min} ~ {item.max}
                  </p>
                  <p className="txt">{item.txt}</p>
                </Button>
              </li>
            );
          })}
        </ul>
      </S.ChartListWrap>
    </RoundedBox>
  );
}

MainTask.propTypes = {
  data: PropTypes.object,
};

export default MainTask;
