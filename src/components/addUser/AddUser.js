import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./AddUserStyle.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {AddUserAction} from '../../store/actions/AddUserAction'

function AddUser() {
  const store = useSelector(store => store)
  // console.log('store', store.AddUserReducer)

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState('');
  const dispatch = useDispatch()


  function ctaHandler() {
    if(userName === '' || email === '' || mobile === '' || age < 18 || age > 60){
      alert('All the fields are required. Age should be between 18 to 60');
    }
else{
  var user = {
    name: userName,
    email: email,
    mobile: mobile,
    age: age
  }
  dispatch(AddUserAction(user));
 
    setUserName("");
    setEmail("");
    setMobile("");
    setAge("");
}
  }
  return (
    <div>
      <form className="form">
        <Typography variant="h3" color='primary'>Sign Up Form</Typography>
        <TextField
          className="text-field"
          label="Name"
          value={userName}
          margin="normal"
          type="text"
          variant="outlined"
          required
          fullWidth
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          className="text-field"
          label="Email"
          value={email}
          margin="normal"
          type="email"
          variant="outlined"
          required
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          className="text-field"
          label="Mobile"
          value={mobile}
          margin="normal"
          type="text"
          variant="outlined"
          required
          fullWidth
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <TextField
          className="text-field"
          label="Age"
          value={age}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 18, max: 60 } }}
          variant="outlined"
          required
          fullWidth
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <br />
        <Button variant="contained" fullWidth onClick={ctaHandler}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddUser;