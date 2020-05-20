import React, { useState } from 'react';
import { getData } from '../variables/data';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card_Gwey from '../Compornent/Card_Gwey';

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
            {current_data.map((data) => (
             <Card_Gwey key={data.contents_detail_id} 
                contents={data.contents_statement}
             />      
            ))}
            
            <div className={classes.root}>
                <Pagination count={getData.length} page={page} onChange={handleChange} />
            </div>
        </div>
    );
}

export default Slide;