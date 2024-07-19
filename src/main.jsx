import ReactDOM from 'react-dom/client'
import "./assets/fonts/fonts.css"
import GlobalStyle from "./styles/reset";
import Router from "./router";
import GlobalSVGProvider from '@/components/elements/GlobalSvgProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* 전역 스타일 적용 */}
    <GlobalStyle />
    <GlobalSVGProvider />
    <Router />
  </>
)
