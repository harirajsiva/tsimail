import React, {Component}  from 'react'
import {    Toolbar  } from '@material-ui/core';
import { Modal,ModalManager,Effect } from 'react-dynamic-modal';
import { withStyles } from '@material-ui/core/styles';
import db from '../firebase.config';

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
    constructor(props)
    {
        super(props);

        this.state={
            From:"",
            Subject:"",
            Message:""
        };
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };
     onSubmit(e)
    {
        e.preventDefault();
        let data={
            "From":this.state.From,
            "Subject":this.state.Subject,
            "Message":this.state.Message,
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
             effect={Effect.RotateFromLeft3D}>
            <Toolbar className={classes.subNav}>                
             <h3>Email Message</h3>
            </Toolbar>
            <h2>To : </h2> <input
                type="text"
                className="form-control"
                id="From"
                required
                value={this.state.From}
                onChange={this.handleChange}
                name="From"
              />
            <h2>Subject :</h2><input
                type="text"
                className="form-control"
                id="Subject"
                required
                value={this.state.Subject}
                onChange={this.handleChange}
                name="Subject"
              />
            <h2>Body : </h2><input
                type="text"
                className="form-control"
                id="Message"
                required
                value={this.state.Message}
                onChange={this.handleChange}
                name="Message"
              />
             <button onClick={this.onSubmit}>Send Email</button><button onClick={ModalManager.close}>Close Modal</button>
          </Modal>
       );
    }
  }

  export default withStyles(useStyles)(ComposeEmail);