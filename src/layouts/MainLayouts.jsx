
import Header from "@/layouts/Header";
import Aside from "@/layouts/Aside";
import { Outlet } from 'react-router-dom'
import styled from "@emotion/styled";

function Layouts() {
  const MainWrap = styled.main`
  display: flex;  
  width: 100%;
  height: 100%;
`
  return (
    <>
      <Header />
      <MainWrap>
        <Aside/>
        <Outlet />
        {/* <Main showContent={showContent} isModalOpen={isModalOpen} modalToggle={modalToggle} /> */}
      </MainWrap>
    </>
  );
}

export default Layouts;
