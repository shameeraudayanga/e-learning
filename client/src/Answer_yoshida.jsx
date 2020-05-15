import React, { useState } from 'react';
// import './Answer.css'
import Button from '@material-ui/core/Button';
import { getData } from './variables/data';

const Answer = () => {  
  
  const [correctness, setCorrectness] = useState("");
  const answer = getData.filter((data) => {return data.answer});

  const handleClick = (e,selected) => {
  if (selected === answer[0].props) {
    setCorrectness = ("正解です");
  } else {
    setCorrectness = ("不正解です");
  }};

  const current_data = getData.filter((data) => {
    return data.contents_detail_id});

  const current_choice1 = current_data.map((data) => (
  <li key={data.contents_detail_id}>{data.choice1}</li>));
  const current_choice2 = current_data.map((data) => (
  <li key={data.contents_detail_id}>{data.choice2}</li>));
  const current_choice3 = current_data.map((data) => (
  <li key={data.contents_detail_id}>{data.choice3}</li>));
  const current_choice4 = current_data.map((data) => (
  <li key={data.contents_detail_id}>{data.choice4}</li>));
  
  return (
    <div>
      <p>{correctness}</p>
      <ul>
        <li>
          <Button varient="contained" onClick={e => handleClick(e,1)}>{current_choice1}</Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button varient="contained" onClick={e => handleClick(e,2)}>{current_choice2}</Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button varient="contained" onClick={e => handleClick(e,3)}>{current_choice3}</Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button varient="contained" onClick={e => handleClick(e,4)}>{current_choice4}</Button>
        </li>
      </ul>
    </div>
  );
} 

export default Answer;