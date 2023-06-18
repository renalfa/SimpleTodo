import React from "react";

// components MUI Materail UI
import { Grid, Paper, Typography } from "@mui/material";

// Components
import Action from "../action";

const CardTodos = ({ todo }) => {
  return (
    <Paper elevation={0} sx={{ borderRadius: 3, px: 2, py: 2, mt: 2, mx: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography maxWidth={320} fontSize={14} fontStyle="italic" color="#707070">
            {todo.todo}
        </Typography>
        <Action todoId={todo.id} status={todo.status} />
      </Grid>
    </Paper>
  );
};

export default CardTodos;
