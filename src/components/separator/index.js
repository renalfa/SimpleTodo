import React from "react";

// Components MUI Materail UI
import { Box, Typography, Divider } from "@mui/material";

const Separator = () => {
  return (
    <Box my={5} position="relative" py={0.25} px={2}>
      <Divider />
      <Box
        bgcolor="#fafafa"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <Typography fontWeight="medium" color="#707070">
          your todos
        </Typography>
      </Box>
    </Box>
  );
};

export default Separator;
