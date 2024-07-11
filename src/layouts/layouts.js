import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";

const MainWrap = styled.main`
  display: flex;  
  width: 100%;
  height: 100%;
`
const ContainerWrap = styled.div`
  padding: ${_rem(18)} ${_rem(18)};  
  width: 100%;  
`
export { MainWrap, ContainerWrap };