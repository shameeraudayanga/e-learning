import React, {useState} from 'react';
import { data } from './variables/getData';
import Question from './Question_kodama'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
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
    const current_data = data.filter((data) => {
        return data.contents_detail_id === page;
    });
    const handleChange = (event, value) => {
        setPage(value);
      };
    return (
        <div className={classes.root}>
            {current_data.map((data) => (
                <Question key={data.contents_detail_id} 
                contents={data.contents_statement}
                />
            ))}
            <Pagination count={10} Page={page} onChange={handleChange} siblingCount={3} />
        </div>
    );
}
export default S_002;