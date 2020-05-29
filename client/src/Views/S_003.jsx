import React, { useState, useEffect,} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/paper';
import { makeStyles } from '@material-ui/core/styles';
import Answerjudg from '../Compornent/Answerjudg';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const S_003 = () => {

    const classes = useStyles();

    const[Answerjudgmap ,setAnswerjudg] = useState([]);

    useEffect(() => getjudgData());

  const getjudgData = () => {
    if(Answerjudgmap.length === 0){
    axios
      .get('/api/question/1')
      .then(response =>{
        console.log('Accept')
        setAnswerjudg(response.data);
      })
      .catch(() => {
        console.log('connected error');
      })
  }
}

const current_data = Answerjudgmap.filter((data) => (<div key={data.contents_detail_id}></div>));

    return(
    <div>
        <Paper elevation={3} className='paper'>
       <div className={classes.root} >
            {current_data.map((data) => (
                <Answerjudg key={data.contents_detail_id} 
                contentsquestion={data.contents_name}
              />
            ))}
      </div>
    </Paper>
    </div>
    );
}

export default S_003;