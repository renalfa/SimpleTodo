import React from "react";
import { useNavigate } from "react-router-dom";

// Components MUI Materail UI
import { Grid, AppBar, Typography, IconButton } from "@mui/material";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";

// Firebase
import { signOut } from "firebase/auth";

// Functions
import { auth } from "../../config/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/", { replace: true });
  };

  return (
    <Grid container>
      <AppBar
        elevation={0}
        sx={{
          height: 50,
          width: 480,
          left: 0,
          right: 0,
          mx: "auto",
          bgcolor: "tomato",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          sx={{ px: 2, height: 50 }}
        >
          <Typography variant="h5">Simple Todo List</Typography>
          <IconButton onClick={logout}>
            <MeetingRoomRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
