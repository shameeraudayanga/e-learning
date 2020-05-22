import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    width:50,
    height: 50,
    position: 'absolute',
    top:'20%',
    left:'30%',
    margin:'auto',
  },
});

const CardGwey = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.media}>
      <img src = {props.contents} />
    </div>
  );
}

export default CardGwey;