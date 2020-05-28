import React, { useState } from 'react';
// import { getData } from '../Variables/frontA';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SlideView from '../Compornent/slideView_watanabe';

import axios from 'axios';
import {useEffect} from 'react';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        textalign: 'center',
        marginTop:20,
        right: '23%',
        left: '23%',
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:350,
        minWidth:350,
        margin:20,
    },
    body: {
        backgroundColor:'lightgrey',
        // backgroundColor: '#f2f2f2',
        padding:15,
        width:'auto',
        height:'70%',
        margin:0,
        // bottom:0,
    },
    card: {
        width:'auto',
        height:'100%',
        // paddingTop:'25%',
        // marginLeft:'auto',
        // marginRight:'auto',
        // margin:'5%',
        // bottom:10,
    },
    text: {
        width:250,
        height:30,
        display:'block',
        marginLeft:'20%',
        marginTop:20,
    }
}));

const Slide = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    // const current_data = getData.filter((data) => {
    //     return data.contents_id === page;
    // });



    const [text, setText] = useState([]);

    useEffect(() => getData() );
  
    const getData = () => {
      if (text.length === 0) {
        axios
          .get('/api/slide/3')
          .then(response => {
            setText(response.data);
            console.log([response.data]);
          })
          .catch(() => {
            console.log('失敗しました');
          })
      }
    }

    const current_data = text.filter((data) => {
        return data.contents_detail_id === page;
    });

    
    if(page === text.length + 1) {
        return (
            <Typography className={classes.text} 
                variant="h5" component="h2">
                終わり～！！！！！
            </Typography>
        )
    } else {

        return (
            <div className={classes.body}>
                <Card className={classes.card}>

                    {current_data.map((data) => (
                        <Typography className={classes.text} variant="h5" component="h2" 
                        key={data.contents_detail_id}
                        >
                                {/* 個人情報保護研修① */}
                                {data.contents_detail_id}
                                {data.contents_name}
                            </Typography>
                    ))}

                    {current_data.map((data) => (
                    <SlideView key={data.contents_id}
                    contents = {data.contents_name}
                    /> 
                    ))}
                    
                    <div className={classes.root}>
                        <Pagination count={text.length +1} page={page} onChange={handleChange} />
                    </div>
                </Card>
            </div>
        );
    }
}

export default Slide;