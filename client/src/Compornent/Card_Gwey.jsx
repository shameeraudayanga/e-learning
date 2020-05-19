import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    width:300,
    height: 300,
  },
});

const Card_Gwey = (props) => {
  const classes = useStyles();

  return (
    <Card>
       <CardMedia
          className={classes.media}
          // image={require('../Assets/img/page1.jpg')}
          image={require(props.contents)}
        />
    </Card>
  );
}

export default Card_Gwey;