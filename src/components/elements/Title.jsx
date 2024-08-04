import PropTypes from "prop-types";
import _rem from "@/styles/remTransform";
import styled from "@emotion/styled";


function Title({ title, subTitle, source, total, children }) {
  const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: ${_rem(16)};
      font-weight: bold;
      display: flex;
      align-items: center;
      .sub {
          margin-left: ${_rem(4)};
          font-size: ${_rem(12)};
          font-weight: normal;
      }
      .total {
        margin-left: ${_rem(4)};
        display: inline-block;
        vertical-align: middle;
        font-size: ${_rem(10)};
        padding: ${_rem(0)} ${_rem(4)} ${_rem(2)};
        color: #fff;
        background: #363858;
        border-radius:  ${_rem(10)};
        letter-spacing: 0;
        font-weight: 400;
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
        {
          subTitle && <span className="sub">{subTitle}</span>
        }
        {
          total && <span className="total">{total}</span>
        }
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
  total: PropTypes.number,
  children: PropTypes.node,
};

export default Title;
