
import Header from "@/layouts/Header";
// import Aside from "@/layouts/Aside";
import { Outlet } from 'react-router-dom'

function Layouts() {


  return (
    <>
      <Header />
      <Outlet />
      {/* <MainWrap>
        <Aside handleContent={(content) => setShowContent(content)} showContent={showContent} modalToggle={modalToggle} />
        <Main showContent={showContent} isModalOpen={isModalOpen} modalToggle={modalToggle} />
      </MainWrap> */}
    </>
  );
}

export default Layouts;
