import React, {Component,PropTypes}  from 'react'
import { Toolbar ,IconButton } from '@material-ui/core';
import { Modal,ModalManager,Effect } from 'react-dynamic-modal';
import { withStyles } from '@material-ui/core/styles';
import { CloseOutlined} from '@material-ui/icons';
import db from '../firebase.config';
import Grid from '@material-ui/core/Grid';
import RichTextEditor from 'react-rte';

const useStyles= theme =>({
    root:{
      paddingLeft:20,
      paddingBottom:20
    },
    subNav:
    {
      backgroundColor:'gray',
      height:10
    },
    list:{
      marginLeft:200
    },
    closeIcon:
    {
      right:10,
      position:'absolute'
    }
});

class ComposeEmail extends Component{
 
    constructor(props)
    {
        super(props);

        this.state={
            From:"",
            Subject:"",
            Message:RichTextEditor.createEmptyValue(),
            Body:""

        };
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange = ({ target }) => {
            
        this.setState({ [target.name]: target.value });
     }
     
     handleChange1  = (Message) => {
       let check=Message.toString('html');
       
      console.log("Check");
      console.log(check);  
      this.setState({
        Body:check,
        Message:Message
      });
      let a=this.state.Message;
      console.log(a);  
     
     };
     
     onSubmit(e)
    {
        e.preventDefault();
        let data={
            "From":this.state.From,
            "Subject":this.state.Subject,
            "Message":this.state.Body,
            uid: new Date().getTime()
        }
        console.log("data");
        console.log(data)
        db.collection("Inbox")
    .doc(data.uid.toString())
    .set(data)
    .then(() => {
      alert("Email send successfully");
      window.location = "/";
    })
    .catch(error => {
      alert("Email Send failed");
      window.location="/";
    });
    }
    render(){
       const { onRequestClose } = this.props;
       const { classes } = this.props;
       return (
          <Modal
             onRequestClose={onRequestClose}
             effect={Effect.RotateFromLeft3D}
          >
          <Toolbar
             className={classes.subNav}
          > 
             <h3>Compose Email</h3> 
             <IconButton  className={classes.closeIcon} onClick={ModalManager.close} ><CloseOutlined /></IconButton>
          </Toolbar>
          <Grid container className={classes.root} >
            <Grid item xs={2}>
                    <h2>To :</h2>
            </Grid>
            <Grid item xs={10} > <h2><input
                      type="text"
                      id="From"
                      value={this.state.From}
                      onChange={this.handleChange}
                      name="From"
                    /></h2> 
              </Grid>
                <Grid item xs={2}>
                <h2>Subject : </h2>
              </Grid>
              <Grid item xs={10} > <h2><input
                          type="text"
                          id="Subject"
                          required
                          value={this.state.Subject}
                          onChange={this.handleChange}
                          name="Subject"
                         /></h2> 
              </Grid>
              <Grid item xs={2}>
                <h2>Body : </h2>
              </Grid>
              <Grid item xs={10} > 
                        <RichTextEditor
                        value={this.state.Message}
                        onChange={this.handleChange1}
                        name="Message"
                        id="Message"
                      />
              </Grid>
              <Grid item xs={2}>
                  <button onClick={this.onSubmit}>Send Email</button>
              </Grid>
              <Grid item xs={10}>
                  <button onClick={ModalManager.close}>Close Modal</button>
              </Grid>              
            </Grid>
          </Modal>
       );
    }
  }

  export default withStyles(useStyles)(ComposeEmail);