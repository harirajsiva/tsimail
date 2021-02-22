import React from 'react'
import {
  Container,
  Typography,
  makeStyles,
  GridList,
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SelectAllRounded from '@material-ui/icons/SelectAllRounded';

const useStyles=makeStyles((theme)=>({
  root:{
  paddingTop:55,
  width: '100%',
  height:'1000px',
  marginLeft:-84
  },
  subNav:
  {
    fontSize:14
  }
}));

const Home = () => {
  const classes = useStyles();
  return(
  <div>
     <Grid container className={classes.root} >
       <Grid item xs={12}>
           <Toolbar>              
             <IconButton className={classes.subNav}>Forward</IconButton>
             <IconButton className={classes.subNav}>Delete</IconButton>
             <IconButton className={classes.subNav}>Spam</IconButton>
             <IconButton className={classes.subNav}>Unread</IconButton>
             <IconButton className={classes.subNav}>Label</IconButton>
             <IconButton className={classes.subNav}>To folder</IconButton>
             <IconButton className={classes.subNav}>Pin</IconButton>
           </Toolbar>
       </Grid>
        <Grid item xs={3}> Test
        </Grid>
        <Grid item xs={9}>Test2
        </Grid>
    </Grid>
  </div>
  );
  }

export default Home
