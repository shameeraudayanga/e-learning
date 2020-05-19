import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateIcon from '@material-ui/icons/Create';
import { getData } from '../variables/UserData';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
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
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listtop: {
    top: 60,
  }
}));
export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const Slider_data = getData.filter((UserData) => {
    return UserData.CustomerName === "testuser";
  })
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className = {classes.listtop}>
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