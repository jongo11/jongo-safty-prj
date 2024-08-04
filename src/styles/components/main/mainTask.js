import _rem from "@/styles/remTransform";
import styled from "@emotion/styled";
import _mx from "@/styles/mixin.js";

// 안전 사고
export const ChartListWrap = styled.div `
  margin-top: ${_rem(20)};
  display: flex;
  align-items: center;
  .chart_wrap {
    position: relative;
    display: inline-block;
    margin-left: ${_rem(20)};
    margin-right: ${_rem(40)};
    ul {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      li {
        display: flex;
        align-items: center;
        font-size: ${_rem(12)};
        font-weight: bold;
        color: #565C63;
        span {
          margin-right: 5px;
          display: block;
          width: ${_rem(7)};
          height: ${_rem(7)};
          border-radius: 50%;
        }
      }
    }
    @media screen and (max-width: ${_rem(1300)}) {
      display: none;
    }
  }
  >ul {
    width: 100%;
    height: ${_rem(240)};
    overflow-y: auto;
    >li {
      padding-right: ${_rem(20)};
      & + li{
        margin-top: ${_rem(12)};
      }
      a {
        display: flex;
        flex-wrap: nowrap; 
        align-items: center;
        .tip {
          width: ${_rem(40)};
          height: ${_rem(20)};
          border: ${_rem(1)} solid #6babf5;
          color: #6babf5;
          text-align: center;
          font-size: ${_rem(10)};
          font-weight: bold;
          border-radius: ${_rem(3)};
          &.warn {
            border-color:#f96257;
            color: #f96257;
          }
        }
        .date {
          width: ${_rem(140)};
          color: #343a3f;
          margin-left: ${_rem(10)};
          font-size: ${_rem(12)};
        }
        .txt {
          width: calc(100% - (${_rem(193)} + ${_rem(10)}));
          margin-left: ${_rem(10)};
          ${_mx.ell(1)};
          font-size: ${_rem(12)};
        }
      }
    }
    &::-webkit-scrollbar {
      width: ${_rem(6)};
    }
    &::-webkit-scrollbar-track { 
        background-color: #EBEFF5;
    }
    &::-webkit-scrollbar-thumb { 
        background-color: #d4dae5;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    /* hover 효과 */
    &::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
        transition: all 0.2s; /* 작동 안 됨 */
    }
    /* 코너에 라운드 효과 */
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-radius: ${_rem(5)};
    }
  }
`