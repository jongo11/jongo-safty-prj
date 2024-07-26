import Icon from "@/components/elements/Icon";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

// data:[{ year: value , month: value}, ...]
function PageNation({ now, total, setActive }) {
  const PageNation = styled.div`
    float: right;
    width: 100px;
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
      color: #565c63;
    }
  `;
  const [selectAct, setSelectAct] = useState(0);
  useEffect(() => {
    setSelectAct(now);
  }, [now, selectAct]);
  return (
    <PageNation className="select-year">
      <button
        onClick={() => {
          if (now > 0) setActive(-1);
        }}
      >
        <Icon id="arrow-left" width="20" height="20" />
      </button>
      <p>
        {now + 1} / {total}
      </p>
      <button
        onClick={() => {
          if (total - 1 > now) setActive(1);
        }}
      >
        <Icon id="arrow-right" width="20" height="20" />
      </button>
    </PageNation>
  );
}

PageNation.propTypes = {
  now: PropTypes.number,
  total: PropTypes.number,
  setActive: PropTypes.func,
};

export default PageNation;
