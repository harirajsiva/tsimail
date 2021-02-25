import React, {Component}  from 'react'
import {
    Container,
    Typography,
    GridList,
    AppBar,
    Toolbar,
    IconButton
  } from '@material-ui/core';
import { Modal,ModalManager,Effect } from 'react-dynamic-modal';
import { withStyles } from '@material-ui/core/styles';

const useStyles= theme =>({
    root:{
    paddingTop:55,
    width: '100%',
    height:'1000px',
    marginLeft:-84
    },
    subNav:
    {
      backgroundColor:'gray',
      height:10
    },
    list:{
      marginLeft:200
    },
});

class ComposeEmail extends Component{
    render(){
       const { onRequestClose } = this.props;
       const { classes } = this.props;
       return (
          <Modal
             onRequestClose={onRequestClose}
             effect={Effect.RotateFromLeft3D}>
            <Toolbar className={classes.subNav}>                
             <h3>Email Message</h3>
            </Toolbar>
            <h2>To : </h2>
            <h2>Subject :</h2>
            <h2>Body : </h2>
             <button onClick={ModalManager.close}>Close Modal</button>
          </Modal>
       );
    }
  }

  export default withStyles(useStyles)(ComposeEmail);