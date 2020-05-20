import React from 'react';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const CardImg = (props) => {

 return(
  <Card>
  <CardMedia>
    <img src = {props.contents}  alt={'ContentsImage'} />
  </CardMedia>
  </Card>
  // <CardMedia>
  //   {props.pictures}
  // </CardMedia>
 );
}

export default CardImg;

