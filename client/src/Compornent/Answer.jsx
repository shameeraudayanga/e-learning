import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const propTypes = {
  passed: PropTypes.func,
  faild: PropTypes.func,
};

const Answer = (props) => {  
  
  const [correctness, setCorrectness] = useState("");
  
　const handleClick = (selected) => {
  if (selected === props.answer[0].props.children) {
    setCorrectness("正解です");
    props.passed();
  } else {
    setCorrectness("不正解です");
    props.faild();
  }};

  return (
    <div>
      <Grid>
        <Button variant="contained" onClick={() => handleClick(1)}>{props.choice1}</Button>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => handleClick(2)}>{props.choice2}</Button>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => handleClick(3)}>{props.choice3}</Button>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => handleClick(4)}>{props.choice4}</Button>
      </Grid>
      <p>{correctness}</p>
    </div>
  );
} 

Answer.propTypes = propTypes;
export default Answer;