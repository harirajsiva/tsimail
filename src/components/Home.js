import React, {useState,useEffect}  from 'react'
import {
  makeStyles,
  Toolbar,
  IconButton
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import db from '../firebase.config';

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
  },
  list:{
    marginLeft:200
  }
}));


const Home = () => {  
  const classes = useStyles();
  const [blogs,setBlogs]=useState([])
const FetchBlogs=async()=>{
  const response=db.collection('Inbox');
  const data=await response.get();
  console.log(data)
  data.docs.forEach(item=>{
   setBlogs([...blogs,item.data()])
   console.log(item.data())
  })
  
}
useEffect(() => {
  FetchBlogs();
}, [])


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
        <Grid item xs={3}>
    <div className={classes.list}>
      {
        blogs && blogs.map(blog=>{
          return(
            <div>
              <h4>{blog.From}</h4>
              <h4>{blog.Subject}</h4>
              <h4>{blog.Message}</h4>
            </div>
          )
        })
      }
    </div>
        </Grid>
        <Grid item xs={9}>
          test2
       
        </Grid>
    </Grid>
  </div>
  );
  }

export default Home
