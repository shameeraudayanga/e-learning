  
import React, { useState } from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Pagination from './node_modules/@material-ui/lab/Pagination';
import {getData2} from '../Variables/Data_watanabe';
import SlideView from './SlideView';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
            display: 'flex',
            textalign: 'center',
            position: 'absolute',
            bottom: 50,
            right: '23%',
            left: '23%',
            marginLeft:'auto',
            marginRight:'auto',
            maxWidth:350,
            minWidth:350,
            // backgroundColor:'green',
    },
    
}));

const SlideShow = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const current_data = getData2.filter((data) => {
        return data.Pic_ID === page;
    });
    
    
    return (
        <div>
            {current_data.map((data) => (
             <SlideView key={data.Pic_ID} 
                contents={data.Picture}
             />      
            ))}              
                <Pagination className={classes.root} 
                count={getData2.length} 
                page={page} onChange={handleChange} 
                />
        </div>
    );
}

export default SlideShow;