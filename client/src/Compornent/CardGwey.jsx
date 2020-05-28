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
    position: 'absolute',
    top:'7%',
    left:'5%',
    margin:'auto',
  },

  slideCard: {
      display:'block',
      position:'absolute',
      height:450,
      width:550,
      padding:10,
      top:'10%',
      left:'28%',
  },
});


const CardGwey = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.slideCard}>
    <div className={classes.media}>
      <img src = {props.contents} />
    </div>
    </Card>
  );
}

export default CardGwey;