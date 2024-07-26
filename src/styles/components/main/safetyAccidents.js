import _rem from "@/styles/remTransform";
import styled from "@emotion/styled";

// 안전 사고
export const SafetyAccidents = styled.div`
height: ${_rem(387)};
.contents-area {
  margin-top: ${_rem(40)};
  .contents-list {
    > li {
      width: 100%; height: ${_rem(80)}; border-radius: ${_rem(99)};
      display: flex; align-items: center; justify-content: center;
      .rank {
        text-align: center; padding-right: ${_rem(28)}; position: relative;
        &::after, &::before {
          content: ''; width: 1px; height: 100%; position: absolute; top: 0;
        }
        &::after {
          background: #070707; opacity: 10%;
          right: 1px;
        }
        &::before {
          background: white; opacity: 30%;
          right: 0;
        }
        > p, > span { color: white; }
        > p {
          display: block; font-weight: 700; font-size: ${_rem(32)};
        }
        > span {
          display: block; font-weight: 700; font-size: ${_rem(14)};
          margin-top: ${_rem(4)};
        }
      }
      .num {
        width: ${_rem(80)};
        display: flex; align-items: center; justify-content: flex-end;
        > p {
          font-weight: 700; font-size: ${_rem(32)}; color: white;
        }
        > span {
          font-weight: 500; font-size: ${_rem(20)}; color: white; margin-left: ${_rem(4)};
        }
      }
      & + li { margin-top: ${_rem(12)}; }
      &:nth-of-type(1) { background: #6DCB86; }
      &:nth-of-type(2) { background: #F9BB00; }
      &:nth-of-type(3) { background: #F96257; }
    }
  }
}
`