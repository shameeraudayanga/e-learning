import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {getData} from '../variables/data';

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
    bottom: 50,
    right: '20%',
    left: '20%',
    maxWidth:350,
    minWidth:350,
},
  size: {
  marginLeft:'auto',
  marginRight:'auto',
  maxWidth: 500,
},
  media: {
  height: 400,
},
}));

const Paging = () => {
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
    <div>
      {/* ここから問題 */}
      <Card className={classes.size}>
        <h3>個人情報保護研修</h3>
        <CardMedia className={classes.media}>
          {image_data.map((data) => (
            <li key={data.contents_detail_id} style={{listStyle: 'none'}}>
              {data.contents_img}</li>
          ))}
        </CardMedia>
      </Card>
      <Pagination className={classes.root} count={getData.length} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
    </div>
  );
}

export default Paging;