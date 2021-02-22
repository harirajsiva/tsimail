import React from 'react'
import Home from './components/Home'
import Main from './components/main'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import Grid from '@material-ui/core/Grid';
const App = () => (
  <div>
    <TopBar/>

    <Grid container >
        <Grid item xs={3}>  
          <NavBar/>
        </Grid>
        <Grid item xs={9}>
          <Home/>
        </Grid>
    </Grid>
    <Main />
  </div>
)

export default App
