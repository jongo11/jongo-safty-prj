import ReactDOM from 'react-dom/client'
import "./assets/fonts/fonts.css"
import GlobalStyle from "./styles/reset";
import Router from "./router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* 전역 스타일 적용 */}
    <GlobalStyle />
    <Router />
  </>
)
