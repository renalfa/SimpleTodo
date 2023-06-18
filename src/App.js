import React from "react";
import { Route, Routes } from "react-router-dom";

// Components MUI Materail UI
import { Box } from "@mui/material";

// Views
import Home from "./views/Home";
import Login from "./views/Login";

const App = () => {
  return (
    <Box sx={{ maxWidth: 480, width: 480, margin: "auto" }}>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Box>
  );
};
export default App;
