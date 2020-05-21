import React, { useState } from 'react';
import Question from '../Components/Question';
import Answer from '../Components/Answer';
import Paper from '@material-ui/core/paper';
import { getData } from '../variables/getData';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../Assets/S_002.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const S_002 = () => {
  const classes = useStyles();
  
  const [page,setPage] = useState(1);
  
  const current_data = getData.filter((data) => {
    return data.contents_detail_id === page;
  });

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const current_answer = current_data.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>));
  
  const current_choice1 = current_data.map((data) => (
    <li key={data.contents_detail_id}>{data.choice1}</li>));
  const current_choice2 = current_data.map((data) => (
    <li key={data.contents_detail_id}>{data.choice2}</li>));
  const current_choice3 = current_data.map((data) => (
    <li key={data.contents_detail_id}>{data.choice3}</li>));
  const current_choice4 = current_data.map((data) => (
    <li key={data.contents_detail_id}>{data.choice4}</li>));
  
  return (
    <body>
    <Paper elevation={3} className='paper'>
       <div className={classes.root} >
            {current_data.map((data) => (
                <Question key={data.contents_detail_id} 
                contentstext={data.contents_statement}
                contentsquestion={data.contents_name}
                />
            ))}
      {current_data.map((data) => (
      <Answer key={data.contents_detail_id}
         answer={current_answer}
         choice1={current_choice1}           
         choice2={current_choice2}           
         choice3={current_choice3}           
         choice4={current_choice4}           
      />))}
      <div className='pagination'>
      <Pagination count={getData.length} Page={page} onChange={handleChange} siblingCount={3} />
      </div>
      </div>
    </Paper>
    </body>
  );
}

export default S_002;