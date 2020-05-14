import React , { useState } from 'react';
import { getData } from './variables/data';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
tool: {
backgroundColor: "#4791db",
boxShadow: "3px 3px 4px gray"
},
// menuButton: {
// marginRight: theme.spacing(2),
// },
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

const Header = () => {

  const [page, setPage] = useState(1);

    const current_data = getData .filter((data) => {
        if (page === 1) {
         return data.CustomerID === 1;
        } else if (page === 2) {
         return data.CustomerID === 2;
        }
        
    });

export default function ButtonAppBar() {
const classes = useStyles();


return (
<div className={classes.root}>
<AppBar position="static" className={classes.appbar}>
<Toolbar className={classes.tool}>
{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
<MenuIcon />
</IconButton> */}
{current_data.map((data) => (
                <Typography key={data.CustomerID} variant="h5" className={classes.title}>
                    ユーザー：{data.CustomerName}
                </Typography>
             ))}
{/* <Typography variant="h5" className={classes.title}>
e-ラーニング
</Typography> */}
<Typography variant="h6" color="inherit" className={classes.user}>ユーザー：testuser</Typography>
</Toolbar>
</AppBar>
</div>
);
}
}
