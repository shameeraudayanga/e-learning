import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

// const useStyles = makeStyles (()=> ({
//   resize: {
//     height: 300,
//     width: 'auto',
//   },
// }));

const CardImg = (props) => {
  // const classes = useStyles();
 return(
  <Card>
  <CardMedia>
    <img src = {props.contents}  alt={'ContentsImage'} />
    {/* <img src = {props.contents}  alt={'ContentsImage'} classname={classes.resize} /> */}
  </CardMedia>
  </Card>
  // <CardMedia>
  //   {props.pictures}
  // </CardMedia>
 );
}

export default CardImg;
