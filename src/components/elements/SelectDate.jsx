import Icon from "@/components/elements/Icon";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

// data:[{ year: value , month: value}, ...]
function SelectDate({ data, active, setActive }) {
	const SelectDate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
		button {
      width: 16px;
      height: 16px;
			background: none;
			border: none;
			cursor: pointer;
		}
		p {
			margin: 0 15px;
			font-size: 14px;
			font-weight: bold;
      color: #565C63;
		}
  `;
  const [selectAct, setSelectAct] = useState(0);
  useEffect(() => {
    setSelectAct(active);
  }, [active, selectAct]);
  return (
    <SelectDate className="select-year">
      <button
        onClick={() => {
          if(active > 0) setActive(-1);
        }}
      >
        <Icon id="arrow-left" width="20" height="20" />
      </button>
      {data.map((item, i) => {
        return selectAct === i ? (
          <p key={i}>
            {item.year} 
            {item.month && ('/ ' + item.month)}
          </p>
        ) : null;
      })}
      <button
        onClick={() => {
          if(data.length-1 > active) setActive(1);
        }}
      >
        <Icon id="arrow-right" width="20" height="20" />
      </button>
    </SelectDate>
  );
}

SelectDate.propTypes = {
  data: PropTypes.any,
  active: PropTypes.number,
  setActive: PropTypes.func,
};

export default SelectDate;
