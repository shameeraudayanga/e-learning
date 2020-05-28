import React from 'react';
<<<<<<< HEAD
import { Link , Route } from 'react-router-dom'
=======
import { Link , Route } from 'react-router-dom';
>>>>>>> 7f4c8a0645873dd1cdbd419e1f98605453b68a1a
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateIcon from '@material-ui/icons/Create';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { ListItemText } from '@material-ui/core';
<<<<<<< HEAD
import { getContentsData } from '../Variables/M_Contents';
import S_001 from '../Views/S_001'
import S_002 from '../Views/S_002'
=======
import S_001 from '../Views/S_001';
import S_002 from '../Views/S_002';
import axios from 'axios';
import { useState , useEffect } from 'react';

>>>>>>> 7f4c8a0645873dd1cdbd419e1f98605453b68a1a
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    top: 80,
    position: "fixed",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: 67,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export default function PersistentDrawerLeft (props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
<<<<<<< HEAD
=======

  const [user, setUser] = useState([]);

  useEffect(() => getContentsData());

  const getContentsData = () => {
    if(user.length === 0) {
      axios
        .get('/api/menu/1')
        .then(response => {
          setUser(response.data);
          
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

>>>>>>> 7f4c8a0645873dd1cdbd419e1f98605453b68a1a
  return (
    <div className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
<<<<<<< HEAD
        {getContentsData.map((data) => (
           <Link to={data.contents_type === 1 ? "/s_001" : "/s_002"} style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-serif'}}>
=======
        {user.map((data) => (
           <Link to={data.contents_type == 1 ? "/s_001" : "/s_002"} style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-serif'}}>
>>>>>>> 7f4c8a0645873dd1cdbd419e1f98605453b68a1a
            <ListItem button key={data.contents_id}>
              <ListItemIcon>{data.contents_type == 1 ? <ImportContactsIcon /> : <CreateIcon />}</ListItemIcon>
              <ListItemText primary={data.contents_name} />
            </ListItem>
          </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
        [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        <Route path="/s_001" component={S_001} />
        <Route path="/s_002" component={S_002} />
      </main>
    </div>
  );
}