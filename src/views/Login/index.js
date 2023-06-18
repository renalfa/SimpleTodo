import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components MUI Materail UI
import { Box, Button, Grid, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

// Lotte Animation
import Lottie from "lottie-react";
import anime from "../../assets/login.json";

// Config Firebase
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";

// Functions
import { setAkun } from "../../store/akun";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      const { displayName, email, uid, photoURL, phoneNumber } = user;

      dispatch(setAkun({ displayName, email, uid, photoURL, phoneNumber }));
      navigate("home", { replace: true });
    });
  };

  return (
    <Box
      minHeight={window.innerHeight}
      bgcolor="tomato"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt={-2}>
        <Lottie animationData={anime} loop autoPlay />
        <Typography
          variant="h3"
          mt={-6}
          color="white"
          textAlign="center"
          fontWeight="bold"
        >
          Welcome,
        </Typography>
        <Typography color="white" textAlign="center">
          please login first
        </Typography>
        <Grid container justifyContent="center" mt={2}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ color: "white", borderRadius: 5 }}
            startIcon={<GoogleIcon />}
            onClick={handleLogin}
          >
            Login with Google
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
