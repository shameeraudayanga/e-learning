import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
    maxWidth:500,
    minWidth:400,
    // maxHeight:'auto',
    // minHeight:'auto',
    display: 'flex',
    margin:'auto',
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    marginTop:70,
    // bottom:10,
    // width: 450,
    // height:450,
    clear:'both',
    flex:1,
    resizeMode:'stretch',
    position:'center',
    
  },
  media: {
    width:500,
    height: 400,
    // maxWidth:450,
    // minWidth:'auto',
    // maxHeight:450,
    // minHeight:'auto',
    // display: 'flex',
    margin:'auto',
    // justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    // marginTop:100,
    // width: 700,
    // height:400,
    // clear:'both',
    // flex:1,
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