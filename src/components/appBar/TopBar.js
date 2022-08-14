import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './TopBarStyle.css'
import AddUser from '../addUser/AddUser';
import { useState } from 'react';
import UserList from '../viewUsers/UserList'



export default function ButtonAppBar() {

  const [addUser, setAddUser] = useState(false)
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Button color="inherit" onClick={() => {setAddUser(true)}}>Add User</Button>
          <Button color="inherit" onClick={() => {setAddUser(false)}}>User List</Button>
        </Toolbar>
      </AppBar>
      
     
    </Box>
    {addUser ? <AddUser /> : <UserList />}

    </div>
  );
}
