import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import AppsIcon from '@material-ui/icons/Apps';
import { getData } from '../variables/UserData';
import { Slide, Slider } from '@material-ui/core';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const drawerWidth = 240;
const drawertop = 72;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    top: drawertop,
  },
  drawerPaper: {
    width: drawerWidth,
    top: drawertop,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
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
export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Slider_data = getData.filter((UserData) => {
    return UserData.CustomerName === "testuser";
  })
  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > */}
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
          {/* <Typography variant="h6" noWrap>
            仮メニュー
          </Typography> */}
        </Toolbar>
      {/* </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div> */}
        {/* <Divider />
        <List>
          <Link to="/app" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-serif'}}>
            <ListItem button>
              <ListItemIcon><AppsIcon /></ListItemIcon>
              <ListItemText primary="メニュー" />
            </ListItem>
          </Link>
        </List>
        <Divider /> */}
        <List>
        {Slider_data.map((UserData) => (
          <ListItem button>
          <ListItemIcon><ImportContactsIcon /></ListItemIcon>
            <li key = {UserData.CustomerName}>{UserData.CurriculumName}</li>
            </ListItem>
          ))}
          {Slider_data.map((UserData) => (
          <ListItem button>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <li key = {UserData.CustomerName}>{UserData.TestName}</li>
            </ListItem>
            ))}
          
          {/* <Link to="/app" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-serif'}}>
            <ListItem button>
              <ListItemIcon><SlideshowIcon /></ListItemIcon>
              <ListItemText primary="個人情報研修" />
            </ListItem>
          </Link>
          <Link to="/counterapp" style={{boxShadow:'none',textDecoration:'none',color:'inherit',fontFamily:'Montserrat, sans-serif'}}>
            <ListItem button>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <ListItemText primary="個人情報テスト" />
             </ListItem>
          </Link> */}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}