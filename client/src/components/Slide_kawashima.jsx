import React, {useState} from 'react';
import {getData} from './variables/data';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';
import './Pagination.css';
import { CardMedia } from '@material-ui/core';
// import Card  from './Card';

const Slide = (props) => {
 return(
  <CardMedia>
    {props.pictures}
  </CardMedia>
 );
}

export default Slide;

