import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    // maxWidth:5,
    // minWidth:4,
    width:500,
    height: 400,
    // display: 'flex',
    margin:'auto',
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    marginTop:10,
    clear:'both',
    flex:1,
    resizeMode:'stretch',
    position:'center',
    
  },
  media: {
    width:500,
    height: 400,
    // maxWidth:5,
    // minWidth:4,
    margin:'auto',
    textAlign:'center',
    alignItems:'center',
    resizeMode:'stretch',
    position:'center',
  },
});

const SlideView = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img src={props.contents} 
        className={classes.media} 
        width="500" 
        height="400"
        alt=""
         />
      </CardMedia>
    </Card>
  );
}

export default SlideView;