import _svg from "@/styles/svgList";
import _rem from "@/styles/remTransform";
import _mx from "@/styles/mixin.js";
import _svgList from "@/styles/svgList.js";
import _color from "@/styles/variable.js";
import styled from '@emotion/styled';

export const Dashboard = styled.div`
width: 100%; margin-top: ${_rem(-18)};
> .dashboard-contents-area {
  display: flex; flex-wrap: wrap;
  > div {
    padding: ${_rem(24)} ${_rem(20)}; border-radius: ${_rem(20)}; background: ${_color.white};
    .title-area {
      display: flex; justify-content: space-between; align-items: center; position: relative;
      height: ${_rem(24)};
      .title {
        font-weight: 700; font-size: ${_rem(16)}; color: ${_color.secon400};
        span { font-weight: 400; font-size: ${_rem(12)}; color: ${_color.grey700}; margin-left: ${_rem(5)}; }
      }
      .source {
        font-size: ${_rem(11)}; color: ${_color.grey600};
      }
      .select-year {
        display: flex; align-items: center;
        > p { font-weight: 500; font-size: ${_rem(13)}; color: ${_color.grey600}; margin: 0 ${_rem(4)} }
        > button {
          width: ${_rem(24)}; height: ${_rem(24)}; border: none;
          ${_mx.svgMask(_svgList.chevron, `${_color.secon400}`)};
          mask-size: 10px; cursor: pointer;
          &.prev-btn {
            rotate: 90deg;
          }
          &.next-btn {
            rotate: -90deg;
          }
        }
      }
      .select-toggle {
        position: absolute; right: 0; top: 50%; transform: translateY(-50%);
        .toggle-list {
          display: flex; width: ${_rem(128)}; height: ${_rem(28)}; border-radius: ${_rem(99)}; background: ${_color.grey200};
          > li {
            width: 50%; height: 100%;
            > button {
              width: 100%; height: 100%; border: 0; background: none; color: ${_color.grey500}; cursor: pointer;
              font-size: ${_rem(12)}; font-weight: 500;
            }
            &.active {
              > button {
                background: ${_color.secon300}; border-radius: ${_rem(99)}; color: white;
              }
            }
          }
        }
      }
    }
    &:nth-of-type(2) { margin-left: ${_rem(21)}; }
    &:nth-of-type(3) { margin-left: ${_rem(21)}; }
    &:nth-of-type(4) { margin-top: ${_rem(24)}; }
    &:nth-of-type(5) { margin-top: ${_rem(24)}; margin-left: ${_rem(24)}; }
    &:nth-of-type(6) { margin-top: ${_rem(24)}; margin-left: 0; width: calc(50% - (${_rem(24)} / 2)); }
    &:nth-of-type(7) { margin-top: ${_rem(24)}; margin-left: ${_rem(24)}; width: calc(50% - (${_rem(24)} / 2)); }
  }
}
`
// 네비게이션
export const Navigation = styled.div`
width: 100%;
display: flex; align-items: center; padding: 0 0 ${_rem(20)};
> .tab-list {
  display: flex; align-items: center;
  width: calc(100% - ${_rem(100)});
  > li {
    display: flex; align-items: center; max-width: ${_rem(220)}; height: ${_rem(48)};
    background: ${_color.grey50}; border-radius: ${_rem(99)};
    padding: 0 ${_rem(8)};
    & + li { margin-left: ${_rem(8)}; }
    > button {
      background: none; border: none; cursor: pointer;
    }
    > .tab-btn {
      padding: 0 ${_rem(10)} 0 ${_rem(20)}; position: relative; max-width: calc(100% - ${_rem(15)});
      &::before {
        content: ''; width: ${_rem(20)}; height: ${_rem(20)};
        position: absolute; left: 0; top: 50%; transform: translateY(-50%);
        ${_mx.svgMask(_svgList.menuIconThree, _color.grey550)}
      }
      > p {
        ${_mx.ell(1)};
      }
    }
    > .close-btn {
    width: ${_rem(15)}; height: ${_rem(15)}; padding: 0;
    ${_mx.svgMask(_svgList.close, _color.secon200)};
      > span {
        ${_mx.blind};
      }
    }
  }
}
> .tab-close-btn {
  display: flex; align-items: center; cursor: pointer;
  width: ${_rem(100)}; height: ${_rem(48)};
  background: none; border: none; position: relative; font-weight: 500; font-size: ${_rem(14)};
  padding-right: ${_rem(20)};
  &::after {
    content: ''; width: ${_rem(20)}; height: ${_rem(20)};
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23363858'%3E%3C/circle%3E%3Cpath d='M13.5 6.5L6.5 13.5' stroke='white' stroke-width='1.5' stroke-linecap='round'%3E%3C/path%3E%3Cpath d='M6.5 6.5L13.5 13.5' stroke='white' stroke-width='1.5' stroke-linecap='round'%3E%3C/path%3E%3C!-- Code injected by live-server --%3E%3Cscript%3E // &lt;-- For SVG support if ('WebSocket' in window) %7B (function () %7B function refreshCSS() %7B var sheets = %5B%5D.slice.call(document.getElementsByTagName('link')); var head = document.getElementsByTagName('head')%5B0%5D; for (var i = 0; i &lt; sheets.length; ++i) %7B var elem = sheets%5Bi%5D; var parent = elem.parentElement %7C%7C head; parent.removeChild(elem); var rel = elem.rel; if (elem.href &amp;&amp; typeof rel != 'string' %7C%7C rel.length == 0 %7C%7C rel.toLowerCase() == 'stylesheet') %7B var url = elem.href.replace(/(&amp;%7C%5C%3F)_cacheOverride=%5Cd+/, ''); elem.href = url + (url.indexOf('%3F') &gt;= 0 %3F '&amp;' : '%3F') + '_cacheOverride=' + (new Date().valueOf()); %7D parent.appendChild(elem); %7D %7D var protocol = window.location.protocol === 'http:' %3F 'ws://' : 'wss://'; var address = protocol + window.location.host + window.location.pathname + '/ws'; var socket = new WebSocket(address); socket.onmessage = function (msg) %7B if (msg.data == 'reload') window.location.reload(); else if (msg.data == 'refreshcss') refreshCSS(); %7D; if (sessionStorage &amp;&amp; !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) %7B console.log('Live reload enabled.'); sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true); %7D %7D)(); %7D else %7B console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.'); %7D // %3C/script%3E%3C/svg%3E");
    position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  }
}
`

// 기상 특보
export const WeatherWarning = styled.div`
width: calc(100% / 3 - ${_rem(14)});
background: linear-gradient(228.77deg, #C7D6FF 2.47%, #CDFFE8 98.99%) !important;
.title-area {
  display: flex; justify-content: space-between; align-items: center;
}
.contents-area {
  .contents-list {
    padding-top: ${_rem(28)};
    > li {
      padding: ${_rem(13)}; border: 1px solid #FFFFFF96; border-radius: ${_rem(16)};
      box-shadow: 0 0 ${_rem(10)} 0 #0000001A; background: #FFFFFF4D;
      display: flex; min-height: ${_rem(90)};
      & + li { margin-top: ${_rem(12)}; }
      > div:nth-of-type(1) {
        width: ${_rem(40)}; display: flex; flex-direction: column; align-items: center;
        .svg-area {
          width: 100%; height: ${_rem(40)}; display: flex; justify-content: center;
          > i {
            width: ${_rem(32)}; height: ${_rem(23)}; display: block;
            background: ${_svg.cloudIcon}; background-size: contain; background-repeat: no-repeat;
          }
        }
        > span {
          background: ${_color.secon200}; border-radius: ${_rem(20)}; color: ${_color.white};
          font-size: ${_rem(11)}; text-align: center; height: ${_rem(16)}; line-height: ${_rem(16)};
          width: 100%; text-align: center; display: block; margin-top: ${_rem(4)};
        }
      }
      > div:nth-of-type(2) {
        margin-left: ${_rem(12)};
          > strong, > p {
          margin-top: ${_rem(2)}; font-weight: 400;
          font-size: ${_rem(14)}; color: ${_color.grey700};
        }
      }
    }
  }
}
`

// 안전 점검 현황 & 안전보건관리 체계 이행 현황
export const SafetyCurrentSituation = styled.div`
width: calc(100% / 3 - ${_rem(14)});
.contents-area {
  margin-top: ${_rem(28)}; position: relative;
  .contents-list {
    > li {
      & + li { margin-top: ${_rem(13)}; }
      .chart-title-area {
        height: ${_rem(24)};
        display: flex; justify-content: space-between; align-items: center;
        .chart-title {
          font-size: ${_rem(14)}; padding-left: ${_rem(28)}; font-weight: 500;
          position: relative;
          &::before {
            content: ''; width: ${_rem(24)}; height: ${_rem(24)};
            position: absolute; left: 0; top: 50%; transform: translateY(-50%);
            background: ${_svg.ssgLogo};
          }
        }
        .percent {
          display: flex; align-items: center;
          > p {
            font-size: ${_rem(11)}; font-weight: 500;
          }
          > span {
            font-weight: 700; font-size: ${_rem(14)}; margin-left: ${_rem(4)}; font-weight: 500;
          }
        }
      }
      .chart-area {
        margin-top: ${_rem(9)};
        width: 100%; height: ${_rem(20)};
        .full-value {
          display: flex;
          padding: 0 ${_rem(10)};
          width: 100%; height: 100%; background: ${_color.grey250}; border-radius: ${_rem(99)};
          position: relative;
          > span {
            position: absolute; right: ${_rem(15)};
          }
          span {
            font-size: ${_rem(13)}; line-height: ${_rem(20)}; font-weight: 500;
            top: 50%; transform: translateY(-50%); top: 50%; transform: translateY(-50%);
          }
          .value {
            height: 100%; border-radius: ${_rem(99)};
            position: absolute; left: 0; top: 0;
            background: linear-gradient(90deg, #42f091 0%, #f8594d 0.01%, #fb746b 100%);
            box-shadow: 1px 1px 4px rgba(1, 9, 22, 0.36);
            > span {
              position: absolute; right: ${_rem(15)}; color: white;
            }
          }
        }
      }
    }
  }
  .contents-legend-area {
    padding-top: ${_rem(30)}; width: 100%;
    .contents-legend-list {
      display: flex; align-items: center; height: ${_rem(24)};
      > li {
        padding-left: ${_rem(16)}; position: relative;
        & + li { margin-left: ${_rem(12)}; }
        &::before {
          content: ''; width: ${_rem(12)}; height: ${_rem(12)}; border-radius: 50%;
          position: absolute; left: 0; top: 50%; transform: translateY(-50%);
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
          font-size: ${_rem(13)}; font-weight: 500;
        }
      }
    }
  }
  .select-year {
    position: absolute; right: 0; bottom: 0;
    display: flex; align-items: center;
    > p { font-weight: 500; font-size: ${_rem(13)}; color: ${_color.grey600}; margin: 0 ${_rem(4)}; line-height: ${_rem(24)}; }
    > button {
      width: ${_rem(24)}; height: ${_rem(24)}; border: none;
      ${_mx.svgMask(_svgList.chevron, `${_color.secon400}`)};
      mask-size: 10px; cursor: pointer;
      &.prev-btn {
        rotate: 90deg;
      }
      &.next-btn {
        rotate: -90deg;
      }
    }
  }
  &.implementation {
    .contents-list {
    > li {
      .chart-area {
        .full-value {
          .value {
            background: linear-gradient(90deg, #348CF3 1.25%, #6BABF5 100%);
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
`

// 안전 사고
export const SafetyAccidents = styled.div`
width: 17.15%; height: ${_rem(387)};
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

// 월별 안전사고 현황
export const MonthlySafetyAccidents = styled.div`
width: calc(100% - 17.15% - ${_rem(24)});
height: ${_rem(387)};
.title-area {
  .legend-list {
    display: flex;
    > li {
      padding-left: ${_rem(16)}; position: relative;
      font-weight: 500; font-size: ${_rem(13)};
      &:nth-of-type(1) {
        &::before { background: #6DCB86;}
      }
      &:nth-of-type(2) {
        &::before { background: #F9BB00;}
      }
      &:nth-of-type(3) {
        &::before { background: #F96257;}
      }
      &::before {
        content: ''; width: ${_rem(12)}; height: ${_rem(12)};
        position: absolute; left: 0; top: 50%; transform: translateY(-50%); border-radius: 50%;
      }
      & + li { margin-left: ${_rem(12)}; }
    }
  }
}
.chart-area {
  width: 100%; height: ${_rem(299)}; margin-top: ${_rem(24)};
  display: flex; justify-content: center;
}
`
