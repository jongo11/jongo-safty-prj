import Navigation from "@/components/main/Navigation"
import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";
// json data list
import NavigationData from "@/data/main/navigationData.json";

function Main() {
  const ContainerWrap = styled.div`
  width: 100%;
  height: 100%;
`
const DashboardWrap = styled.div`
  display: flex;  
  flex-wrap: wrap;
  padding: ${_rem(24)} ${_rem(24)} ${_rem(24)} ${_rem(24)};
`
  return (
    <ContainerWrap>
      <Navigation data={NavigationData.NavigationData}/>
      <DashboardWrap>
        메인컨텐츠 영역
      </DashboardWrap>
    </ContainerWrap>
  );
}

export default Main;

