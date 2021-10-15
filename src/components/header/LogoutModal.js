import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Stripe from '../Cart/Stripe';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 35 + rand();
  const left = 45 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LogOutModal({total}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id="simple-modal-title">Are you sure you want to log out?</p>
     <button className="add-to-cart" style={{"padding":"15px","marginRight":"5px"}} onClick={() => {
       localStorage.clear()
       window.location.reload(false)
     }}>Yes</button>
     <button className="add-to-cart" style={{"padding":"15px","marginRight":"5px"}} onClick={handleClose}>No</button>
      
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
      <Link to="/login" onClick={ (event) => event.preventDefault() }>
      <LogoutIcon />
      <p style={{"fontSize":"9px"}}>Log Out</p>
      </Link> 
      </div>
      {/* </div> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
