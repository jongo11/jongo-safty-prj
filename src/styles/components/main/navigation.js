// import _svg from "@/styles/svgList";
import _rem from "@/styles/remTransform";
import _mx from "@/styles/mixin.js";
import _color from "@/styles/variable.js";
import styled from '@emotion/styled';

// 네비게이션
export const Navigation = styled.div`
padding: 0 ${_rem(24)};
width: 100%;
display: flex; align-items: center; justify-content:space-between; padding: 0 ${_rem(20)} ${_rem(24)};
> .tab-list {
  display: flex; align-items: center;
  width: calc(100% - ${_rem(100)});
  > li {
    display: flex; align-items: center; max-width: ${_rem(220)}; height: ${_rem(48)};
    background: ${_color.grey50}; border-radius: ${_rem(99)};
    padding: 0 ${_rem(8)};
    & + li { margin-left: ${_rem(8)}; }
    > button {
      display: flex; align-items: center;
      background: none; border: none; cursor: pointer;
      &:first-of-type {
        p{width: calc( 100% - ${_rem(24)});}
        
      }
    }
    > .tab-btn {
      position: relative; max-width: calc(100% - ${_rem(16)});
      > p {
        ${_mx.ell(1)};
        font-size: ${_rem(14)};
        font-weight: bold;
        color: ${_color.secon200};
      }
    }
    > .close-btn {
      > span {
        ${_mx.blind};
      }
    }
  }
}
> .tab-close-btn {
  display: flex; flex-direction: column;align-items: center; cursor: pointer;background:none;
  border: none; position: relative; font-weight: bold; font-size: ${_rem(14)};
  svg{
    background: ${_color.black}; border-radius:50%;
  }
}
`