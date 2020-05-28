import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    Width:500,
    height:400,
    display: 'flex',
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
    margin:'auto',
    textAlign:'center',
    alignItems:'center',
    resizeMode:'stretch',
    position:'center',
  },
});

// const propTypes = {
//   passed: PropTypes.func,
//   faild: PropTypes.func,
// };

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

// SlideView.propTypes = propTypes;
export default SlideView;