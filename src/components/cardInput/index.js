import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components MUI Materail UI
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";

// Functions
import useInput from "../../hooks/useInput";
import { createTodo } from "../../config/API";
import { setModal, setMsg } from "../../store/setting";

const CardInput = () => {
  const dispatch = useDispatch();

  const [todo, onTodoChange] = useInput("");
  const akun = useSelector((state) => state.akun.akun);

  const handleAddBtn = async (e) => {
    e.preventDefault();
    dispatch(setModal(true));
    dispatch(setMsg("Todo berhasil ditambahkan"));

    await createTodo({ todo: todo, uid: akun.uid });
    setTimeout(() => {
      dispatch(setModal(false));
      dispatch(setMsg(""));
    }, 2000);
  };

  return (
    <Paper elevation={0} sx={{ borderRadius: 3, px: 2, py: 2, mt: 2, mx: 2 }}>
      <Grid container justifyContent="center">
        <Typography mb={2} fontWeight="bold" textAlign="center" color="#707070">
          input your todo
        </Typography>
        <TextField
          placeholder="example: reading novel"
          multiline
          fullWidth
          maxRows={4}
          variant="standard"
          value={todo}
          onChange={onTodoChange}
        />
        <Button
          disableElevation
          size="small"
          variant="contained"
          sx={{ mt: 2, width: 120, borderRadius: 5 }}
          onClick={handleAddBtn}
        >
          Add Todo
        </Button>
      </Grid>
    </Paper>
  );
};

export default CardInput;
