import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {getData} from './Variables/data';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  size: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  }
  }}));

const Paging = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const current_data = getData.filter((data) => {
    return data.contents_detail_id === page;
  });
  const question_data = getData.filter((data) => {
    return data.contents_detail_id === page;
  });

  console.log(getData.length);
  
  return (
    <div className={classes.root}>
      {/* ここから問題 */}
      <Card className={classes.size}>
        <h3>個人情報保護研修</h3>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Question image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {question_data.map((data) => (
           <li key={data.contents_detail_id}>{data.contents_name}</li>
           ))}
          </Typography>
          <Typography variant="body2" component="p">
          {current_data.map((data) => (
           <ul key={data.contents_detail_id}>
             <li>{data.contents_startment}</li>
             <li>{data.contents_customer}</li>
             </ul>
           ))}
          </Typography>
        </CardContent>
      </Card>
      <Pagination count={getData.length} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
    </div>
  );
}

export default Paging;