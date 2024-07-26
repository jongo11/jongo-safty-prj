import PropTypes from "prop-types";
import styled from "@emotion/styled";
import _color from "@/styles/variable.js";
import _rem from "@/styles/remTransform";

// type : wide, normal, small
function RoundedBox({ className, type, children }) {
  // 타입크기에 맞춘 반응형 스타일
  const RoundBox = styled.div`
    padding: ${_rem(24)} ${_rem(20)};
    border-radius: ${_rem(20)};
    background: ${_color.white};
    margin: ${_rem(24)} 0 0 ${_rem(12)};
    &.rounded_box[type="wide"] {
      width: calc(100% * 0.75 - ${_rem(14)});
      @media screen and (max-width: ${_rem(1270)}) {
        width: 100%;
      }
      @media screen and (max-width: ${_rem(920)}) {
        width: 100%;
      }
    }
    &.rounded_box[type="normal"] {
      width: calc(100% / 3 - ${_rem(14)});
      @media screen and (max-width: ${_rem(1270)}) {
        width: calc(100% / 2 - ${_rem(14)});
      }
      @media screen and (max-width: ${_rem(920)}) {
        width: 100%;
      }
    }
    &.rounded_box[type="small"] {
      width: calc(100% * 0.25 - ${_rem(14)});
      @media screen and (max-width: ${_rem(1270)}) {
        width: calc(100% / 2 - ${_rem(14)});
      }
      @media screen and (max-width: ${_rem(920)}) {
        width: 100%;
      }
    }
    &.weather {
      background: linear-gradient(
        228.77deg,
        #c7d6ff 2.47%,
        #cdffe8 98.99%
      ) !important;
    }
  `;
  return (
    <RoundBox className={"rounded_box " + className} type={type}>
      {children}
    </RoundBox>
  );
}

RoundedBox.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default RoundedBox;
