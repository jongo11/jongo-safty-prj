import _rem from "@/styles/remTransform";
import _color from "@/styles/variable.js";
import styled from "@emotion/styled";

// 안전 점검 현황 & 안전보건관리 체계 이행 현황
export const SafetyCurrentSituation = styled.div`
  .title-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: ${_rem(16)};
      font-weight: bold;
      span {
        margin-left: ${_rem(4)};
        font-size: ${_rem(12)};
        font-weight: normal;
      }
    }
    .source {
      font-size: ${_rem(12)};
      font-weight: normal;
      color: #565c63;
    }
  }
  .contents-area {
    margin-top: ${_rem(28)};
    position: relative;
    .contents-list {
      > li {
        & + li {
          margin-top: ${_rem(13)};
        }
        .chart-title-area {
          height: ${_rem(24)};
          display: flex;
          justify-content: space-between;
          align-items: center;
          .chart-title {
            font-size: ${_rem(14)};
            font-weight: bold;
            position: relative;
            display: flex;
            align-items: center;
          }
          .percent {
            display: flex;
            align-items: center;
            > p {
              font-size: ${_rem(11)};
              font-weight: 500;
            }
            > span {
              font-weight: 700;
              font-size: ${_rem(14)};
              margin-left: ${_rem(4)};
              font-weight: 500;
            }
          }
        }
        .chart-area {
          margin-top: ${_rem(9)};
          width: 100%;
          height: ${_rem(20)};
          .full-value {
            display: flex;
            padding: 0 ${_rem(10)};
            width: 100%;
            height: 100%;
            background: ${_color.grey250};
            border-radius: ${_rem(99)};
            position: relative;
            > span {
              position: absolute;
              right: ${_rem(15)};
            }
            span {
              font-size: ${_rem(13)};
              line-height: ${_rem(20)};
              font-weight: 500;
              top: 50%;
              transform: translateY(-50%);
              top: 50%;
              transform: translateY(-50%);
            }
            .value {
              height: 100%;
              border-radius: ${_rem(99)};
              position: absolute;
              left: 0;
              top: 0;
              background: linear-gradient(
                90deg,
                #42f091 0%,
                #f8594d 0.01%,
                #fb746b 100%
              );
              box-shadow: 1px 1px 4px rgba(1, 9, 22, 0.36);
              > span {
                position: absolute;
                right: ${_rem(15)};
                color: white;
              }
            }
          }
        }
      }
    }
    .contents-legend-area {
      padding-top: ${_rem(30)};
      width: 100%;
      .contents-legend-list {
        float: left;
        display: flex;
        align-items: center;
        height: ${_rem(24)};
        > li {
          padding-left: ${_rem(16)};
          position: relative;
          & + li {
            margin-left: ${_rem(12)};
          }
          &::before {
            content: "";
            width: ${_rem(12)};
            height: ${_rem(12)};
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          &:first-of-type {
            &::before {
              background: #f35f54;
            }
          }
          &:last-of-type {
            &::before {
              background: ${_color.grey250};
            }
          }
          > p {
            font-size: ${_rem(13)};
            font-weight: 500;
          }
        }
      }
    }
    
    &.implementation {
      .contents-list {
        > li {
          .chart-area {
            .full-value {
              .value {
                background: linear-gradient(90deg, #348cf3 1.25%, #6babf5 100%);
              }
            }
          }
        }
      }
      .contents-legend-area {
        padding-top: ${_rem(30)};
        .contents-legend-list {
          > li {
            &:first-of-type {
              &::before {
                background: #6babf5;
              }
            }
          }
        }
      }
    }
  }
`;
