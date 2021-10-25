import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from '@mui/material/MenuItem';

const LoginOutButton = () => {
  const { logout } = useAuth0();

  return <MenuItem variant="contained" color="secondary" onClick={() => logout()}>Log Out</MenuItem>;
};

export default LoginOutButton;