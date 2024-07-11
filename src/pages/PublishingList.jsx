import React from "react";
import { useState, useRef } from "react";
import { PubHeader,RedBox,BlueBox } from "../styles/pub.js";

const PublishingList = () => {
  const [title, setTitle] = useState('스파로스 안전관리 시스템 웹 퍼블리싱 목록')
  const tabs = ['페이지 목록','SVG 목록'];
  const tabRef = useRef([])
  const [toggle, setToggle ] = useState(0)
  const [inputVal, setValue] = useState('');
  return (
    <>
      <PubHeader>
        <h1>{title}</h1>
        <ul>
          {tabs.map((t, i) => (
            <li key={i}>
              <button className={toggle === i ? 'on' : '' } ref={el => tabRef.current[i] = el} type="button" onClick={ (e) => {e.stopPropagation(); setToggle(i) }}>
                { t }
              </button>
            </li>
          ))}
        </ul>
        <p>
          <input type="text" onChange={(e) => {
            setValue(e.target.value);
          }} />
          <button onClick={() => {
            inputVal && setTitle(inputVal)
          }}>발행</button>
        </p>
      </PubHeader>
      <main>
        { toggle === 0 ? <RedBox/> : <BlueBox/> }
      </main>
    </>
  );
};


export default PublishingList;
