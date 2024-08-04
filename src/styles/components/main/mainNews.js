import _rem from "@/styles/remTransform";
import styled from "@emotion/styled";
import _mx from "@/styles/mixin.js";

// 안전 사고
export const ChartListWrap = styled.div `
  margin-top: ${_rem(20)};
  display: flex;
  @media screen and (max-width: ${_rem(1300)}) {
    flex-direction: column;
    .hash_wrap {
      margin: 0;
    }
  }
  .hash_wrap {
    display: flex;
    flex-direction: column;
    width: ${_rem(150)};
    margin-right: ${_rem(20)};
    @media screen and (max-width: ${_rem(1300)}) {
      width: auto;
      flex-direction: row;
      margin-bottom: ${_rem(20)};
    }
    p  {
      display: inline-block;
      margin: ${_rem(4)} ${_rem(8)};
      padding: ${_rem(6)} ${_rem(12)};
      font-size: ${_rem(12)};
      color: #afbfd8;
      background: #fff;
      border: 1px solid #afbfd8;
      border-radius: ${_rem(20)};
      cursor: pointer;
      &.on {
        background: #afbfd8;
        color: #fff;
      }
    }
  }
  >ul {
    width: calc(100% - ${_rem(170)});
    height: ${_rem(240)};
    overflow-y: auto;
    @media screen and (max-width: ${_rem(1300)}) {
      width: 100%;
    }
    >li {
      padding-right: ${_rem(20)};
      & + li{
        margin-top: ${_rem(12)};
      }
      a {
        display: flex;
        flex-wrap: nowrap; 
        align-items: center;
        .txt {
          width: 100%;
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