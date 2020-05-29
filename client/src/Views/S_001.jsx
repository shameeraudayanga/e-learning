import React, { useState, useEffect } from 'react';
//import { getData } from '../Variables/frontA';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import CardGwey from '../Compornent/CardGwey';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
//import SlideView from '../Compornent/slideView_watanabe';
import '../Css/S_001.css';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        // textalign: 'center',
        // marginTop: 20,
        // right: '23%',
        // left: '30%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // maxWidth: 350,
        // minWidth: 350,
        // top: 500,
        // position: "absolute",
        // display: "flex",
    },
   
    // text: {
    //     width: 250,
    //     height: 30,
    //     display: 'block',
    //     marginLeft: '20%',
    //     marginTop: 20,
    // }
}));

const Slide = () => {
    const classes = useStyles();

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // const current_data = getData.filter((data) => {
    //     return data.contents_id === page;
    // });

    const [slide, setSlide] = useState([]);

    useEffect(() => getUserData());

    const getUserData = () => {
        if (slide.length === 0) {
            axios
                .get('/api/slide/3')
                .then(response => {
                    console.log([response.data]);
                    setSlide(response.data);

                })
                .catch(() => {
                    console.log('connected error');
                })
        }
    }

    const current_data = slide.filter((data) => {
        return data.contents_detail_id === page;
    });

    return (
        <div className='body'>
            <Card className='card'>

                {current_data.map((data) => (
                    <Typography className='text' variant="h5" component="h2"
                        key={data.contents_detail_id}
                    >
                        <p>個人情報保護研修①</p>
                        <p>{data.contents_detail_id}</p>
                        <p>{data.contents_name}</p>
                        <p>{data.contents_statement}</p>
                        <p>{data.contents_type}</p>
                    </Typography>
                ))}

                <div>
                    <Pagination className='pagition' count={slide.length} page={page} onChange={handleChange} />
                </div>
            </Card>
        </div>
    );
}

export default Slide;