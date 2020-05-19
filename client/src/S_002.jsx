import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/paper';
import { QuestionTable } from './variables/QuestionTable';
import Question from './Question';
import Pagination from '@material-ui/lab/Pagination';

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const S_002 = () => {
    const classes = useStyles();
    const [page,setPage] = useState(1);

    const current_data = QuestionTable.filter((data) => {
      return data.Contents_datail_id === page;
    });
  

  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <Paper elevation={3}>
      <div>
           <div className={classes.root}>
            {current_data.map((data) => (
                <Question key={data.Contents_detail_id} 
                contents={data.Contents_statement}
                />
            ))}
            </div>
            <Pagination count={QuestionTable.length} page={page} onChange={handleChange} />
   </div>
    </Paper>
  );
}
export default S_002;