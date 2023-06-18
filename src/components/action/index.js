import React from "react";

// Components MUI Materail UI
import { Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";

// Functions
import { deleteTodo, updateTodo } from "../../config/API";
import { useDispatch } from "react-redux";
import { setModal, setMsg } from "../../store/setting";

const Action = ({ todoId, status }) => {
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    if (status === false) {
      await updateTodo(todoId, { status: true });
    } else {
      await updateTodo(todoId, { status: false });
    }
    dispatch(setModal(true));
    dispatch(setMsg("Todo berhasil diupdate"));
    setTimeout(() => {
      dispatch(setModal(false));
      dispatch(setMsg(""));
    }, 2000);
  };

  const handleDelete = async () => {
    await deleteTodo(todoId);
    dispatch(setModal(true));
    dispatch(setMsg("Todo berhasil dihapus"));
    setTimeout(() => {
      dispatch(setModal(false));
      dispatch(setMsg(""));
    }, 2000);
  }

  return (
    <Stack direction="row">
      <IconButton size="small">
        {status ? (
          <RestoreRoundedIcon onClick={handleUpdate} color="warning" />
        ) : (
          <CheckCircleRoundedIcon onClick={handleUpdate} color="success" />
        )}
      </IconButton>
      <IconButton onClick={handleDelete} size="small">
        <DeleteIcon color="error" />
      </IconButton>
    </Stack>
  );
};

export default Action;
