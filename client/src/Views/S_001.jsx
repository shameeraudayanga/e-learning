import React, { useState } from 'react';
// import { getData } from '../Variables/frontA';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import CardSasaki from "../Compornent/CardSasaki";
import CardGwey from '../Compornent/CardGwey';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useRadioGroup, Typography } from '@material-ui/core';
import { useRef } from 'react';
import { response } from 'express';





const useStyles = makeStyles((theme) => ({

    body: {
        backgroundcolor: 'skyblue',
    },
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        textalign: 'center',
        position: 'absolute',
        bottom: 50,
        right: '19%',
        left: '28%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 350,
        minWidth: 350,
    },

    ContentsName: {
        fontSize: 25,
        padding: 10,
        margin: 15,
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    },

    Card: {
        display: 'block',
        // textalign: 'center',
        position: 'absolute',
        right: '24%',
        left: '18%',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 20,
        width: 1200,
        height: 600,
        //     maxWidth:950,
        //     minWidth:950, 
    },
}));






const Slide = () => {
    const classes = useStyles();

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [user, setUser] = useState([]);
    
    useEffect(() => getUserData());

    const getUserData = () => {
    if (user.length === 0) {
        axios
            .get('/api/slide/1')
            .then(response => {
                console.log([response.data]);
                setUser(response.data);
            
    })
    .catch (() => {
    console.log('connnected error')
})
}
}
const current_data = user.filter((data)=>{
    return data.contents_detail_id === page;

});


    return (
        <div><Card className={classes.Card}>
             {current_data.map((data) =>(
                 <Typography className={classes.text} variant="h5" component="h2" key={data.contents_detail_id}>
                  <p>個人情報保護研修①</p>
                 <p>{data.contents_detail_id}</p>
                 <p>{data.contents_name}</p>
                 <p>{data.contents_statement}</p>
                 <p>{data.contents_type}</p>
                     
                 </Typography>
             ))}


            <div className={classes.root}>
                <Pagination count={user.length} page={page} onChange={handleChange} />
            </div>
        </Card>
        </div>

    );
}


export default Slide;