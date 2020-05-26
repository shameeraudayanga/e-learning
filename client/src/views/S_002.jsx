import React, { useState, useEffect } from 'react';
import Question from '../Compornent/Question';
import Answer from '../Compornent/Answer';
import Paper from '@material-ui/core/paper';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../Assets/S_002.css';
import axios from 'axios';

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

  const [posts,setPosts] = useState([]);

  useEffect(() => getData());

  const getData = () => {
    if (posts.length === 0) {
      axios
        .get('/api/question/1')
        .then(response => {
          setPosts(response.data);
          console.log([response.data]);
        })
        .catch(() => {
          console.log('失敗しました');
        })
    }
  }

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const current_answer = posts.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>));
  
  const current_choice1 = posts.map((data) => (
    <li key={data.contents_detail_id}>{data.choice1}</li>));
  const current_choice2 = posts.map((data) => (
    <li key={data.contents_detail_id}>{data.choice2}</li>));
  const current_choice3 = posts.map((data) => (
    <li key={data.contents_detail_id}>{data.choice3}</li>));
  const current_choice4 = posts.map((data) => (
    <li key={data.contents_detail_id}>{data.choice4}</li>));
  
  return (
    <body>
    <Paper elevation={3} className="paper">
       <div className={classes.root} >
            {posts.map((data) => (
                <Question key={data.contents_detail_id} 
                contentstext={data.contents_statement}
                contentsquestion={data.contents_name}
                />
            ))}
      {posts.map((data) => (
      <Answer key={data.contents_detail_id}
         answer={current_answer}
         choice1={current_choice1}           
         choice2={current_choice2}           
         choice3={current_choice3}           
         choice4={current_choice4}           
      />))}
      <div className="pagination">
      <Pagination count={10} Page={page} onChange={handleChange} siblingCount={3} />
      </div>
      </div>
    </Paper>
    </body>
  );
}

export default S_002;