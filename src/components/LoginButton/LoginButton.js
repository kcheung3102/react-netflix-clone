import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MenuItem } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <MenuItem variant="contained" color="secondary" onClick={() => loginWithRedirect()}>Log In</MenuItem>;
};

export default LoginButton;