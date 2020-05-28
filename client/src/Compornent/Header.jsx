import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
tool: {
backgroundColor: "#4791DB",
boxShadow: "3px 3px 4px gray"
},
title: {
flexGrow: 1,
fontWeight: 900,
fontFamily: "Meiryo UI"
},
user: {
flexGrow: 1,
fontWeight: 900,
fontFamily: "Meiryo UI",
textAlign: "right",
}
}));
const Header = (props) => {
  const classes = useStyles();
return (
  <div className={classes.root}>
    <AppBar position = 'fixed' className={classes.appbar}>
      <Toolbar className={classes.tool}>
        <Typography variant="h5" className={classes.title}>
        e-ラーニング
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.user}>
        ユーザー：{props.contents}
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
);
}
export default Header;