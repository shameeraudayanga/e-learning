import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
    maxWidth:'80%',
    minWidth:'80%',
    // maxHeight:'auto',
    // minHeight:'auto',
    display: 'flex',
    margin:'auto',
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center',
    marginTop:100,
    width: 300,
    height:300,
    clear:'both',
    flex:1,
    resizeMode:'stretch',
    position:'center',
    
  },
  media: {
    // width:300,
    // height: 300,
    // maxWidth:'auto',
    // minWidth:'auto',
    // maxHeight:'auto',
    // minHeight:'auto',
    // display: 'flex',
    // margin:'auto',
    // justifyContent: 'center',
    // textAlign:'center',
    // alignItems:'center',
    // marginTop:100,
    // width: 700,
    // height:400,
    // clear:'both',
    // flex:1,
    // resizeMode:'stretch',
    // position:'center',
  },
});

const SlideView = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img src={props.contents} className={classes.media}/>
      </CardMedia>
    </Card>
  );
}

export default SlideView;