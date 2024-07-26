import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: [
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01",
      "22.01 23.01"
    ],
    datasets: [
      {
        data: [0, 0, 1, 1, 0, 1, 0, 3, 3, 2, 4, 0],
        backgroundColor: ["#f96257"],
        borderRadius: 10,
        stack: "22",
      },
      {
        data: [0, 1, 0, 1, 0, 0, 1, 1, 1, 4, 2, 2],
        backgroundColor: ["#f9bb00"],
        borderRadius: 10,
        stack: "22",
      },
      {
        data: [0, 0, 2, 1, 2, 1, 2, 2, 2, 3, 7, 1],
        backgroundColor: ["#6dcb86"],
        borderRadius: 10,
        stack: "22",
      },
      {
        data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ["#f96257"],
        borderRadius: 10,
        stack: "23",
      },
      {
        data: [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ["#f9bb00"],
        borderRadius: 10,
        stack: "23",
      },
      {
        data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ["#6dcb86"],
        borderRadius: 10,
        stack: "23",
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: function (value) {
          if (value == 0) return "";
        },
        align: "center",
        anchor: "center",
        color: "white",
        font: {
          family: "Noto Sans KR",
          size: "14",
        },
      },
      tooltip: {
        enabled: false,
      },
      responsive: true,
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 14,
      },
      x: {
				display: false,
        ticks: {
          display: true, //새로운tick을 만들었으니 기존의 tick을 제거
        },
      },
			xAxes: {
        ticks: {
          autoSkip: false,
          labelOffset: 2,
          padding: 2,
          font: {
            size: 12,
          },
        },
        grid: {
          display: false, //뒷배경 라인 없애기
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
