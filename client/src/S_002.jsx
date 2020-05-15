import React from 'react';
import Question from './quetions';
import Answer from './Answer_yoshida';
import Paper from '@material-ui/core/paper';

const S_002 = () => {
  return (
    <Paper elevation={3}>
      <Question />
      <Answer />
    </Paper>
  );
}

export default S_002;