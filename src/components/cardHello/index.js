import React from "react";
import { useSelector } from "react-redux";

// Components MUI Materail UI
import { Paper, Typography } from "@mui/material";

const CardHello = () => {
  const akun = useSelector((state) => state.akun.akun);

  return (
    <Paper elevation={0} sx={{ borderRadius: 3, px: 2, py: 2, mt: 6, mx: 2 }}>
      <Typography fontStyle="italic" textAlign="center" color="#707070">
        Hey,{" "}
        <span style={{ fontWeight: 700 }}>
          {akun?.displayName ? akun?.displayName : "Anonymous"}
        </span>
        , <br></br>Welcome to simple todo list website
      </Typography>
    </Paper>
  );
};

export default CardHello;
