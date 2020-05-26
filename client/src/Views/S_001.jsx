import React, { useState,useEffect } from 'react';
import { getData } from '../Variables/frontA';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SlideView from '../Compornent/slideView_watanabe';
import axios from 'axios';




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
        top:550,
    },
    body: {
        backgroundColor:'lightgrey',
        padding:10,
    },
    card: {
        width:'auto',
        height:550,
        marginLeft:'auto',
        marginRight:'auto',
        bottom:10,
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

        // // const bull = <span className={classes.bullet}>•</span>;

        const [page, setPage] = useState(1);

        const handleChange = (event, value) => {
            setPage(value);
        };
        // const current_data = getData.filter((data) => {
        //     return data.contents_id === page;
        // });
    
  const [posts, setPosts] = useState([]);

  useEffect(() => getSlideData() );

  const getSlideData = () => {
    if (posts.length === 0) {
      axios
        .get('/api/slide/1')
        .then(response => {
          setPosts(response.data);
        //   console.log([response.data]);
        })
        .catch(() => {
          console.log('失敗しました');
        })
    }
    }

    
    return (
        <div className={classes.body}>
            <Card className={classes.card}>
            <Typography className={classes.text} variant="h5" component="h2">
                    個人情報保護研修①
                </Typography>
                {posts.map((data) => (
                <SlideView key={data.contents_id}
                contents = {data.contents_name}
                /> 
                ))}
                
                <div className={classes.root}>
                    <Pagination count={getData.length} page={page} onChange={handleChange} />
                </div>
            </Card>
        </div>
    );
}

export default Slide;