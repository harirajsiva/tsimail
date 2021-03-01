import React, {useState,useEffect}  from 'react'
import {
  makeStyles,
  Toolbar,
  IconButton
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import db from '../firebase.config';
import {List,ListItem,ListItemText,Divider,ListItemAvatar,Avatar} from '@material-ui/core';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';

const useStyles=makeStyles((theme)=>({
  root:{
  paddingTop:55,
  width: '100%',
  marginLeft:-84
  },
  subNav:
  {
    fontSize:14
  },
  list:{
    marginLeft:200
  }
}));


const Home = () => {  
  const classes = useStyles();
  const [blogs,setBlogs]=useState([]);
  const [currentMail, setCurrentMail]=useState([]);

const FetchBlogs=async()=>{
  
  const response=db.collection('Inbox');
  const data=await response.get();
  data.docs.forEach(item=>{
   setBlogs(blogs=>[...blogs,item.data()])
  })
  
}
useEffect(() => {
  FetchBlogs(); 
}, [])

const Check=(event, data)=>
{
  console.log("Check"+data.Subject)
  setCurrentMail(...currentMail,data);
}

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
        <Grid item xs={4}>

        <List>

        {blogs.map((mail, index) => {
                return (
                  
                    // <p key={index}>
                    //     <b>First Name:</b> {users.From} <br />
                    //     <b>Email:</b> {users.Subject}
                    // </p>
                    <div key={index}>

      <Divider/>      <ListItem button onClick={(event) => Check(event, mail)}>
          
      <ListItemAvatar>
                    <Avatar>
                      <AccountCircleRounded />
                    </Avatar>
                  </ListItemAvatar>
        <ListItemText primary={mail.From} secondary={mail.Subject} />
        <ListItemText primary="20:11" />
      
      </ListItem>
      </div>

                )
            })
            }
 
       
      <Divider/>
      </List>     

    
        </Grid>
        <Grid item xs={8} container className={classes.root}>
       {
           <h1>{currentMail.Subject}</h1>
       }
        </Grid>
    </Grid>
  </div>
  );
  }

export default Home
