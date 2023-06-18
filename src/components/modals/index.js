import React from "react";
import { IconButton, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setModal, setMsg } from "../../store/setting";
import CloseIcon from '@mui/icons-material/Close';

const Modals = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.setting.modal);
  const msg = useSelector((state) => state.setting.msg);

  const handleClose = () => {
    dispatch(setModal(false));
    dispatch(setMsg(""));
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={modal}
      autoHideDuration={2000}
      onClose={handleClose}
      message={msg}
      action={action}
    />
  );
};

export default Modals;
