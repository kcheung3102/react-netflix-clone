import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MenuItem from '@mui/material/MenuItem';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    }

    
      return (
        isAuthenticated && (
          <div>
            <MenuItem onClick={handleClickOpenDialog}>Profile</MenuItem>
        <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Profile Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <img src={user?.picture} alt={user?.name} />
          <h2>Username: {user?.name}</h2>
          <p>Email: {user?.email}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
          </div>
        )
      );
}

export default Profile;
