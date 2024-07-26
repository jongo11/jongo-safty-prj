import * as S from "@/styles/components/main/weatherwarning";
import PropTypes from "prop-types";
import Icon from "@/components/elements/Icon";
import RoundedBox from "@/components/elements/RoundedBox";
import Title from "@/components/elements/Title";

// import { useState } from "react";

function WeatherWarning(props) {
  // const [newList, setNewList] = useState(props.data.data)
  return (
    <RoundedBox type="normal" className="weather" >
      <S.WeatherWarning>
        <Title title={props.data.title} subTitle={props.data.date} source={props.data.source} />
        <div className="contents-area">
          <ul className="contents-list">
            {props.data.data.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <Icon id={item.weather} width="40" height="40" mgr="3" />
                    <span>{item.mark}</span>
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    {item.contents === false ? null : <p>{item.contents}</p>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </S.WeatherWarning>
    </RoundedBox>
  );
}

WeatherWarning.propTypes = {
  data: PropTypes.object,
};

export default WeatherWarning;
