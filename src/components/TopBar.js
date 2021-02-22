import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  InputBase,
  colors
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'Black',
    fontSize:16
  },
  contact:
  {
    marginLeft:25,
    marginRight:10,
    color: 'gray',
    fontSize:18
  },
  navSpace:
  {
    marginLeft:10,
    color: 'gray',
    fontSize:18
  },
  search:{
    marginBottom:2,
    border:0,
    background: 'linear-gradient(45deg, #d1d2d7 100%, #FF8E53 0%)',   
    borderRadius: 5,
    color:'black',    
    width: '100%',
    maxWidth: 350,
  },
  searchIcon: {
    marginLeft:133,
    position:'absolute',
    marginTop:4
  },
  appBar:
  {    
    background: 'linear-gradient(45deg, #d4d6e0 100%, #FF8E53 0%)'
  },
  navRight:{
    position:'absolute',
     right:0
  }
});

const TopBar = ()=>{
const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>    
      <IconButton>Yandex Mail</IconButton>
      <IconButton className={classes.contact}>Contacts</IconButton> 
      <div className={classes.search}>                          
            <InputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} className={classes.root}/>
            <SearchIcon className={classes.searchIcon}/>
      </div>
    
      <RouterLink to="/Home"><IconButton className={classes.navSpace}>Telemost</IconButton></RouterLink>
      <RouterLink to="/NavBar"><IconButton className={classes.navSpace}>Disk</IconButton></RouterLink>
      <IconButton className={classes.navSpace}>Calender</IconButton>
      <IconButton className={classes.navSpace}>  <AppIcon /> More </IconButton>
      <IconButton className={classes.navSpace}><SettingsIcon/></IconButton>
      <div className={classes.navRight}>
      <IconButton className={classes.root}><Badge badgeContent={4} color="secondary"><NotificationsIcon /></Badge></IconButton>  
      <IconButton className={classes.root}><AccountCircleIcon/></IconButton>
      <IconButton className={classes.root}><InputIcon/></IconButton>
      </div>

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
