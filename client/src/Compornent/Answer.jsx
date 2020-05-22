import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../assets/Answer.css'

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
      <Grid className="choice" container spacing={5}>
        <Grid className="button" item xs={6}> 
          <Button variant="contained" size="large" onClick={() => handleClick(1)}>{props.choice1}</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="large" onClick={() => handleClick(2)}>{props.choice2}</Button>
        </Grid>
        <Grid className="button" item xs={6}>
          <Button variant="contained" size="large" onClick={() => handleClick(3)}>{props.choice3}</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="large" onClick={() => handleClick(4)}>{props.choice4}</Button>
        </Grid>
      </Grid>
      <p className="correctness">{correctness}</p>
    </div>
  );
}

export default Answer;