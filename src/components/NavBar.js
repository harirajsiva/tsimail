import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  InputBase,
  colors,
  Avatar,
  ListItemAvatar
} from '@material-ui/core';
import Add from '@material-ui/icons/Add'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SyncTwoTone from '@material-ui/icons/SyncTwoTone';

// The Header creates links that can be used to navigate
// between routes.
const useStyles=makeStyles((theme)=>({
    root:{
    paddingTop:50,
    width: '100%',
    maxWidth: 300,
    background: 'linear-gradient(45deg, #d4d6e0 100%, #FF8E53 0%)',
    marginLeft:-8,
    height:'1000px'
    },
    buttonIcon:
    {      
    border: 2,
    borderRadius: 50,
    background:'linear-gradient(45deg, #5c6fda 100%, #FF8E53 0%)',
    color: 'Black',
    fontSize:16,
    width:'100%',
    maxWidth:225,
    marginTop:20,
    marginLeft:10
    },
    syncIcon:
    {      
    borderRadius:100,
    background:'linear-gradient(45deg, #5c6fda 100%, #FF8E53 0%)',
    marginLeft:20,
    position:'absolute',
    marginTop:20,
    width:40,
    height:40
    }
}));

const NavBar = ()=>{
    const classes = useStyles();
    return(
        <List component="nav" className={classes.root} aria-label="mailbox folders">
        <IconButton className={classes.buttonIcon}>Compose</IconButton>
        <SyncTwoTone className={classes.syncIcon}/>
        <ListItem button>
          <ListItemText primary="Inbox" />
          <ListItemText primary="200/300" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Send" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <Add style={{ fontSize: 25 }} />
          <ListItemText>Create folder</ListItemText>
        </ListItem>
        <ListItem button>          
          <Add style={{ fontSize: 25 }} />
          <ListItemText primary="Create label"/>
        </ListItem>
      </List>
    );
};

export default NavBar;
