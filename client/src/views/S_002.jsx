import React, { useState, useEffect } from 'react';
import Question from '../Compornent/Question';
import Answer from '../Compornent/Answer';
import Paper from '@material-ui/core/paper';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../Assets/S_002.css';
import axios from 'axios';
import S_003 from './S_003';

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

  const [correctFlg, setCorrectFlg] = useState(false);

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
          console.log('connected error');
        })
    }
  }

  const current_data = posts.filter((data) => {
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
  
  const passed = () => {
    setCorrectFlg(true);
  }
  const faild = () => {
    setCorrectFlg(false);
  }
  
  if(correctFlg === true && page === posts.length + 1) {
    return (
      <S_003 />
    );
  } else {

  return (
    <body>
    <Paper elevation={3} className="paper1">
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
         passed={passed}
         faild={faild}               
      />))}
      <div className='pagination'>
      <Pagination count={posts.length + 1} Page={page} onChange={handleChange} siblingCount={3} />
      </div>
      </div>
      <Pagination className='pagination' count={posts.length + 1} Page={page} onChange={handleChange} siblingCount={3} />
      {console.log(correctFlg)}
    </Paper>
    </body>
  );
}}

export default S_002;