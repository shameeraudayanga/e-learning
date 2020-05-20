import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
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

const CardGwey = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia>
        <img src={props.contents} />
      </CardMedia>
    </Card>
  );
}

export default CardGwey;