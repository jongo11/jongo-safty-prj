import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";
import _color from "@/styles/variable.js";
import _svgList from "@/styles/svgList.js";
import _mx from "@/styles/mixin.js";

const HeaderWrap = styled.header`
  padding: ${_rem(0)} ${_rem(18)};
  height: ${_rem(52)};
  display: flex; align-items: center; justify-content: space-between;
  .header-left-list {
    display: flex;
    align-items: center;
    height: 100%;
    & .logo {
      & h1 {
        display: block;
        width: ${_rem(123)};
        height: ${_rem(24)};
        position: relative;
        & a {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    li {
      margin-left: ${_rem(20)};
      a {
        display: flex;
        align-items: center;
        span {
          font-size: ${_rem(12)};
          font-weight: bold;
          color: ${_color.secon200};
          padding: 0;
        }
        .icons {
          display: block;
          margin-right: ${_rem(1)};
          width: ${_rem(16)};
          height: ${_rem(16)};
        }
      }
      &:nth-of-type(2){
        .icons {
          ${_mx.svgMask(_svgList.dangerous, `${_color.secon300}`)}
        }
      }
      &:nth-of-type(3){
        .icons {
          ${_mx.svgMask(_svgList.alarm, `${_color.secon300}`)}
        }
      }
    }
  }
  .header-right-list {
    display: flex;
    > li {
      position: relative;
      > button {
        background: none; border: none; cursor: pointer;
        font-size: ${_rem(12)}; font-weight: bold; color: ${_color.secon200}; padding: 0 ${_rem(20)} 0 0;
        position: relative;
        &::after {
          content: '';
          width: ${_rem(13)}; height: ${_rem(13)};
          position: absolute; right: 0; top: 50%; transform: translateY(-50%) rotate(180deg);
          ${_mx.svgMask(_svgList.chevron, _color.secon200)};
        }
      }
      & + li {
        margin-left: ${_rem(24)};
      }
      &.active {
        > button {
          &::after {
            transform: translateY(-50%) rotate(0deg);
          }
        }
        .select-area {
          display: block;
        }
      }
      .select-area {
        display: block;
        width: ${_rem(160)};
        position: absolute; right: 0; top: 25px;
        padding: ${_rem(16)} ${_rem(12)};
        background: ${_color.white}; z-index: 2;
        border-radius: ${_rem(10)}; border: 1px solid ${_color.secon200};
        .menu {
          > li {
            height: ${_rem(20)};
            display: flex; align-items: center;
            &.my-info {
              > a {
                &::before {
                  ${_mx.svgMask(_svgList.profile, _color.grey550)}
                }
              }
            }
            &.logout {
              > button {
                &::before {
                  ${_mx.svgMask(_svgList.logout, _color.grey550)}
                }
              }
            }
            a, button {
              line-height: ${_rem(20)};
              display: block; color: ${_color.grey700};
              width: 100%; height: 100%;
              font-weight: 500; font-size: ${_rem(11)}; text-align: left;
              padding: 0 0 0 ${_rem(25)};
              position: relative;
              &::before {
                content: '';
                width: ${_rem(15)}; height: ${_rem(15)};
                position: absolute; left: ${_rem(3)}; top: 50%; transform: translateY(-50%);
              }
            }
            & + li {
              margin-top: ${_rem(7)};
            }
          }
        }
        .profile-info {
          padding-bottom: ${_rem(25)};
          position: relative;
          &::after {
            content: '';
            width: 100%; height: 1px; background: ${_color.grey200};
            position: absolute; left: 50%; bottom: ${_rem(12)};
            transform: translateX(-50%);
          }
          > strong {
            font-size: ${_rem(13)};
            font-weight: 700;
            color: ${_color.secon300};
          }
          > p {
            font-size: ${_rem(11)};
            margin-top: 3px;
            color: ${_color.secon200};
          }
        }
      }
    }
  }
`;

export { HeaderWrap };