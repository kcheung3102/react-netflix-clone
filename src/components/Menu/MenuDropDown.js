import React, { useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../LoginButton/LoginButton';
import LogOutButton from '../LogoutButton/LogoutButton';

function MenuDropDown() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { loginWithRedirect ,isAuthenticated } = useAuth0();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
    return (
        <div>
         <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <img
                className="profile__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Profile Logo"
              ></img>
            </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        { isAuthenticated ? <LogOutButton /> : <LoginButton />}
              <MenuItem onClick={() => loginWithRedirect({
                  screen_hint: 'signup',
              })}>Sign Up</MenuItem> 
      </Menu>
        </div>
    )
}

export default MenuDropDown;
