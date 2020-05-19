import React, { useState } from 'react';
// import './Answer.css'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const Answer = (props) => {  
  
  const [correctness, setCorrectness] = useState("");
  
　const handleClick = (selected) => {
  if (selected === props.answer[0].props.children) {
    setCorrectness("正解です");
  } else {
    setCorrectness("不正解です");
  }};

  return (
    <div>
      <Grid>
        <Button varient="contained" onClick={() => handleClick(1)}>{props.choice1}</Button>
      </Grid>
      <Grid>
        <Button varient="contained" onClick={() => handleClick(2)}>{props.choice2}</Button>
      </Grid>
      <Grid>
        <Button varient="contained" onClick={() => handleClick(3)}>{props.choice3}</Button>
      </Grid>
      <Grid>
        <Button varient="contained" onClick={() => handleClick(4)}>{props.choice4}</Button>
      </Grid>
      <p>{correctness}</p>
    </div>
  );
} 

export default Answer;