import * as S from "@/styles/components/common/aside.js";
import _color from "@/styles/variable.js";
import _rem from "@/styles/remTransform";
import Button from "@/components/elements/Button";

function Aside({ handleContent, showContent, modalToggle }) {
  const AsideMenuDataList = [
    {
      contentText: "대시보드",
      show: "Dashboard"
    },
    {
      contentText: "대시보드 임직원",
      show: "DashboardExecutives",
    },
    {
      contentText: "위험성 평가",
      show: "RiskAssessment",
    },
    {
      contentText: "강의실",
      show: "SafetyEducation",
    },
    {
      contentText: "게시판",
      show: "NoticeBoard",
    },
    {
      contentText: "공통",
      show: "CommonPage",
    },
  ];

  const buttonClick = (content, index) => {
    handleContent(content);
    window.scrollTo({ top: 0 });
    if(index===2) {
      modalToggle();
    }
  };

  return (
    <S.AsideBar>
      <div className="menu-area">
        <Button className="menu-control"></Button>
        <ul className="AsideMenuList">
          {AsideMenuDataList.map((item, index) => (
            <li key={index}>
              <Button
                contentText={item.contentText}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                paddingTop={_rem(15)}
                paddingBottom={_rem(15)}
                paddingLeft={_rem(19)}
                paddingRight={_rem(19)}
                fontSize={_rem(15)}
                fontWeight="bold"
                width="100%"
                height={_rem(20)}
                background="none"
                outline="none"
                border="none"
                color={_color.secon100}
                isIcons={true}
                onClick={() => buttonClick(item.show, index)}
                className={showContent === item.show ? "active" : ""}
                show={item.show}
              ></Button>
            </li>
          ))}
        </ul>
      </div>
    </S.AsideBar>
  );
}


export default Aside;
