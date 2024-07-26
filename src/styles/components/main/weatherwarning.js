// import _svg from "@/styles/svgList";
import _rem from "@/styles/remTransform";
import _color from "@/styles/variable.js";
import styled from "@emotion/styled";

// 기상 특보
export const WeatherWarning = styled.div`
  .contents-area {
    .contents-list {
      padding-top: ${_rem(28)};
      > li {
        padding: ${_rem(13)};
        border: 1px solid #ffffff96;
        border-radius: ${_rem(16)};
        box-shadow: 0 0 ${_rem(10)} 0 #0000001a;
        background: #ffffff4d;
        display: flex;
        min-height: ${_rem(90)};
        & + li {
          margin-top: ${_rem(12)};
        }
        > div:nth-of-type(1) {
          width: ${_rem(40)};
          display: flex;
          flex-direction: column;
          align-items: center;
          > span {
            background: ${_color.secon200};
            border-radius: ${_rem(20)};
            color: ${_color.white};
            font-size: ${_rem(11)};
            text-align: center;
            height: ${_rem(16)};
            line-height: ${_rem(16)};
            width: 100%;
            text-align: center;
            display: block;
            margin-top: ${_rem(4)};
          }
        }
        > div:nth-of-type(2) {
          margin-left: ${_rem(12)};
          > strong,
          > p {
            margin-top: ${_rem(2)};
            font-weight: 400;
            font-size: ${_rem(14)};
            color: ${_color.grey700};
          }
        }
      }
    }
  }
`;
