import styled from "@emotion/styled";
import _rem from "@/styles/remTransform";

// components
import Navigation from "@/components/main/Navigation"
import WeatherWarning from "@/components/main/WeatherWarning"
import SafetyCurrentSituation from "@/components/main/SafetyCurrentSituation"
import SafetyCurrentSituation2 from "@/components/main/SafetyCurrentSituation2"
import SafetyAccidents from "@/components/main/SafetyAccidents"
import MonthlySafetyAccidents from "@/components/main/MonthlySafetyAccidents"

// json data list
import NavigationData from "@/data/main/navigationData.json";
import WeatherData from "@/data/main/weatherData.json";
import SafetyCurrentSituationData from "@/data/main/SafetyCurrentSituationData.json";
import SafetyCurrentSituation2Data from "@/data/main/SafetyCurrentSituation2Data.json";
import SafetyAccidentsData from "@/data/main/SafetyAccidentsData.json";
import MonthlySafetyAccidentsData from "@/data/main/MonthlySafetyAccidentsData.json";

function Main() {
  const ContainerWrap = styled.div`
  width: 100%;
  height: 100%;
`
const DashboardWrap = styled.div`
  display: flex;  
  flex-wrap: wrap;
  padding: 0 ${_rem(24)} ${_rem(24)} ${_rem(12)};
`
  return (
    <ContainerWrap>
      <Navigation data={NavigationData}/>
      <DashboardWrap>
        <WeatherWarning data={WeatherData}/>
        <SafetyCurrentSituation data={SafetyCurrentSituationData} />
        <SafetyCurrentSituation2 data={SafetyCurrentSituation2Data} />
        <SafetyAccidents data={SafetyAccidentsData} />
        <MonthlySafetyAccidents data={MonthlySafetyAccidentsData} />
      </DashboardWrap>
    </ContainerWrap>
  );
}

export default Main;

