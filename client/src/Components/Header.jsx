import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getData } from '../variables/UserData';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
tool: {
backgroundColor: "#4791db",
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

export default function ButtonAppBar() {
  const classes = useStyles();

  const current_data = getData.filter((UserData) => {
    return UserData.CustomerID === 1;
    });

return (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.tool}>
        <Typography variant="h5" className={classes.title}>
        e-ラーニング
        </Typography>
        {current_data.map((UserData) => (
        <Typography key={UserData.CustomerID} variant="h6" color="inherit" className={classes.user}>
        ユーザー：{UserData.CustomerName}
        </Typography>
        ))}
      </Toolbar>
    </AppBar>
    </div>
);
}
