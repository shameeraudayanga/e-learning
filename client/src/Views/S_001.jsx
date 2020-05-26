import React, { useState,useEffect } from 'react';
//import { getData } from '../Variables/frontA';
import { makeStyles } from '@material-ui/core/styles';
//import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//import CardGwey from '../Compornent/CardGwey';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import SlideView from '../Compornent/slideView_watanabe';
//import Header from '../Compornent/Header';



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

    // const [page, setPage] = useState(1);

    // const handleChange = (event, value) => {
    //     setPage(value);
    // };
   
    // const current_data = getData.filter((data) => {
    //     return data.contents_id === page;
    // });

    const [slide, setSlide] = useState([]);

    useEffect(() => getUserData());
  
    const getUserData = () => {
      if(slide.length === 0) {
        axios
          .get('/api/slide/1')
          .then(response => {
            console.log(response.data);
            setSlide(response.data);
            
          })
          .catch(() => {
            console.log('connected error');
          })
      }
    }

  
    // return (
    //     <div className="Slide">
             
    //         {user.map((data) => (
    //         <Header key={data.user_id} 
    //         contents={data.user_name} />  
    //         ))}
    //     </div>
    // );

    return (
        <div className={classes.body}>
            <Card className={classes.card}>
                <Typography className={classes.text} variant="h5" component="h2">
                    個人情報保護研修①
                </Typography>
                
                <div className="Slide">
                    {slide.map((data) => (
                    <SlideView key={data.contents_id}
                     contents = {data.contents_statement}
                    />
                    ))}
                </div>

                {/* <div>
                   <Pagination count={getData.length} page={page} onChange={handleChange} />
                </div> */}
             </Card>
            
         </div>
     );
}

export default Slide;