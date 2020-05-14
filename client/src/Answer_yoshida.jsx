import React, { useState } from 'react';
import { getData } from './variables/data'

const Answer = () => {

  const [correct, setCorrect] = useState("");
  const answer = getData.map((data) => {<li key={data.contents_detail_id}>{data.answer}</li>})
  
  const handleClick = (?) => {
  if (? === answer) {
    setCorrect = ("正解です");
  } else {
    setCorrect = ("不正解です");
  }}
};

export default Answer;