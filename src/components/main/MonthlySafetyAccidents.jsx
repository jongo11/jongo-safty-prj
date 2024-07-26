// import * as S from "@/styles/components/main/safetyAccidents";
import PropTypes from "prop-types";
import RoundedBox from "@/components/elements/RoundedBox";
import Title from "@/components/elements/Title";
import SelectDate from "@/components/elements/SelectDate";
import BarChart from "@/components/elements/BarChart";
import { useState } from "react";

function SafetyAccidents(props) {
  const [activeChart, setActiveChart] = useState(0);
  function setActive(val) {
    setActiveChart(activeChart + val);
  }
  return (
    <RoundedBox type="wide">
      <div>
        <Title title={props.data.title}>
          <SelectDate
            data={props.data.accdentsData}
            active={activeChart}
            setActive={setActive}
          />
        </Title>
				<BarChart />
        {/* <div className="chart-area">
					
				</div> */}
      </div>
    </RoundedBox>
  );
}

SafetyAccidents.propTypes = {
  data: PropTypes.object,
};

export default SafetyAccidents;
