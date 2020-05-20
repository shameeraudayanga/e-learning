import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';
import { getData } from '../variables/data';
import CardImg from '../components/Card_kawashima'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginLeft:'auto',
    marginRight:'auto',
    display: 'flex',
    textalign: 'center',
    position: 'absolute',
    bottom: 30,
    right: '20%',
    left: '20%',
    maxWidth:350,
    minWidth:350,
},
  main: {
    marginTop: 30,
  },
  size: {
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth: 700,
},
  media: {
    marginLeft:'auto',
    marginRight:'auto', 
    height: 400,
    width: 'auto',
},
}));

const Slide = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const image_data = getData.filter((data) => {
    return data.contents_detail_id === page;
  });

  console.log(getData.length);
  
  return (
    <div className={classes.main}>
      {/* ここから問題 */}
      <Card className={classes.size}>
        <h3>個人情報保護研修</h3>
        <CardMedia className={classes.media}>
         {image_data.map((data) => (
            <CardImg key={data.contents_detail_id} style={{listStyle: 'none'}}
              contents={data.contents_img} />
          ))} 
        </CardMedia>
      </Card>
      <Pagination className={classes.root} count={getData.length} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
    </div>
  );
}

export default Slide;