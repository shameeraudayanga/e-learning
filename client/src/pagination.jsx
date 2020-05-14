import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {getData} from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  
  return (
    <div className={classes.root}>
      {/* ここに問題 */}
      <Typography>
        Page: {page}
      </Typography> 
      <Pagination count={getData.length} page={page} variant="outlined" shape="rounded" onChange={handleChange} />

    </div>
  );
}
