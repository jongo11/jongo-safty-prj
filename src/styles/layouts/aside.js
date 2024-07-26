import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";
import _color from "@/styles/variable.js";
import _svgList from "@/styles/svgList.js";
import _mx from "@/styles/mixin.js";

const AsideBar = styled.aside`  
  position:relative;
  z-index: 9;
  flex: 0 0 auto;    
  min-height: 100vh;
  border-radius: 0 ${_rem(25)} ${_rem(25)} 0;
  background: ${_color.secon400};
  .menu-area {
    width: ${_rem(220)};
    position: relative;
    transition: .25s all;
    &.fold {
      width: ${_rem(65)};
      transition: .25s all;
      .AsideMenuList >li >button svg {
        margin-right: 0 !important;
      }
      .AsideMenuList >li >button span {
        font-size: 0;
        width: 0;
      }
      .arrow {
        display: none;
      }
    }
    & .menu-control {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width:  ${_rem(48)};
      height: ${_rem(48)};
      background: #f9bb00;
      border: solid ${_rem(4)} #ebeff5;
      right: ${_rem(-20)};
      top: 0;
      border-radius: 50%;
      z-index: 10;
      z-index: 1;
      cursor: pointer;
      &::before {
        content: '';
        display: block;
      width:  ${_rem(20)};
      height: ${_rem(18)};
        ${_mx.svgMask(_svgList.dashboard, `${_color.black}`)}
      }
    }
    & .AsideMenuList {
      padding-top: ${_rem(20)};
      width: 100%;      
      position: relative;
      >li {
        position: relative;
        display: flex;
        box-align:center;
        align-items:center;
        
        &:nth-of-type(n + 7) {
          ul {
            top: auto;
            bottom: 0;
          }
        }
        >button {
          display: flex;
          align-items: center;
          padding: ${_rem(15)} ${_rem(12)};
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right:0;
          }
          span {
            width: calc(100% - ${_rem(40)} );
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden; 
            font-size : ${_rem(14)};
            color: ${_color.secon100};
            transition: 0.25s all;
          }
          &.active {
            background-color: ${_color.secon300};
            span {
              color: ${_color.white};
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: ${_rem(4)};
              height: 100%;
              background-color: ${_color.primary100};
            }
          }
        }
        & span {
          display: inline-block;
          width: 100%;
          text-align: left;
        }
        i {
          display: inline-block;
          ${_mx.svgMask(_svgList.dashboard, `${_color.secon100}`)}
          width: ${_rem(23)};
          height: ${_rem(23)};
          background-position: center;
          background-repeat: no-repeat;
          margin-right: ${_rem(14)};
        }
        ul {
          position:absolute;
          top: 0;
          right: 0;
          transform: translateX(100%);
          width: 160px;
          border-radius: 0 ${_rem(20)} ${_rem(20)} 0;
          overflow: hidden;          
          li {
            background-color: ${_color.secon300};
            margin: 0;
            button {
              position:relative;
              display: flex;
              align-items: center;
              padding: ${_rem(15)} ${_rem(12)};
              width: 100%;
              background: none;
              border: none;
              cursor: pointer;
              span{
                color: ${_color.secon100};
                font-size: ${_rem(14)}
              }
              &.active {
                background-color: ${_color.secon500};
                span {
                  color: ${_color.white};
                }
                &::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: ${_rem(4)};
                  height: 100%;
                  background-color: ${_color.primary100};
                }
              }
              &.favorite{
                position: relative;
                border-top: ${_rem(1)} solid #4A4C69;
                span {
                  color: ${_color.white};
                }
                svg {
                  position: absolute;
                  right: ${_rem(20)};
                }
              }
            }
          }
        }
      }
      & li + li {
        margin-top: 6px;
      }
    }
  }
`;

export { AsideBar };