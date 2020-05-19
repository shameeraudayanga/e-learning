import React, { useState } from 'react';
import { getData } from '../variables/data';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    
}));

const Slide = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const current_data = getData.filter((data) => {
        return data.contents_detail_id === page;
    });

    return (
     <div>
        <div className={classes.root}>
          <Pagination count={getData.length} page={page} onChange={handleChange} />
        </div>  
      </div>
    );
}

export default Slide;