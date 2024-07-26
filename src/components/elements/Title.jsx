import PropTypes from "prop-types";
import _rem from "@/styles/remTransform";
import styled from "@emotion/styled";


function Title({ title, subTitle, source, children }) {
  const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
    font-size: ${_rem(16)};
    font-weight: bold;
    span {
        margin-left: ${_rem(4)};
        font-size: ${_rem(12)};
        font-weight: normal;
    }
    }
    .source {
    font-size: ${_rem(12)};
    font-weight: normal;
    color: #565c63;
    }
  `;
  return (
    <TitleBox>
      <strong className="title">
        {title}
        <span>{subTitle}</span>
      </strong>
      {source && <p className="source">{source}</p>}
      {children}
    </TitleBox>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
