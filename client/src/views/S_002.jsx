import React, { useState, useEffect,} from 'react';
import Question from '../Compornent/Question';
import Answer from '../Compornent/Answer';
import Paper from '@material-ui/core/paper';
// import { getData } from '../Variables/frontB';
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

  const[Questionmap ,setQuestion] = useState([]);

  //正解フラグ追加
  const[correctFlg, setCorrectFlg] = useState(false)
//

  useEffect(() => getQuestionData());

  const getQuestionData = () => {
    if(Questionmap.length === 0){
    axios
      .get('/api/question/1')
      .then(response =>{
        console.log('Accept')
        setQuestion(response.data);
      })
      .catch(() => {
        console.log('connected error');
      })
  }
}
  
  const current_data = Questionmap.filter((data) => {
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

    //正解フラグの更新
    const passed = () => {
      setCorrectFlg(true);
    }
    const faild = () => {
      setCorrectFlg(false);
    }

  if(correctFlg === true && page === 2){
    return (
      <div>
        hello
      </div>
    );
  } else {
  return (
    <Paper elevation={3} className='paper1'>
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
      </div>
      <Pagination className='pagination' count={Questionmap.length} Page={page} onChange={handleChange} siblingCount={3} />
      {console.log(correctFlg)}
    </Paper>
  );
}
}


export default S_002;