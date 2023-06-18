import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Lottie from "lottie-react";
import anime from "../../assets/empty.json";

// Components MUI Materail UI
import { Box, FormControl, MenuItem, Select } from "@mui/material";

// Functions
import { getTodos } from "../../config/API";
import { setTodos } from "../../store/todos";

// Components
import CardTodos from "../../components/cardTodos";
import Separator from "../../components/separator";
import Navbar from "../../components/navbar";
import CardHello from "../../components/cardHello";
import CardInput from "../../components/cardInput";
import Modals from "../../components/modals";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos.todos);
  const akun = useSelector((state) => state.akun.akun);

  const [filter, setFilter] = useState(false);

  const fetchTodos = async () => {
    const res = await getTodos(akun?.uid);
    dispatch(setTodos(res));
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter todos
  const todosFiltered = todos.filter((todo) => todo.status === filter);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  useEffect(() => {
    if (akun === null) {
      navigate("/", { replace: true });
    }
  }, [akun, navigate]);

  return (
    <Box
      sx={{
        maxWidth: 480,
        width: 480,
        margin: "auto",
        minHeight: window.innerHeight,
        bgcolor: "#fafafa",
        py: 2,
      }}
    >
      <Navbar />
      <CardHello />
      <CardInput />
      <Box>
        <Separator />
        <FormControl sx={{ minWidth: 120, mx: 2 }} size="small">
          <Select
            displayEmpty
            value={filter}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={true}>Done</MenuItem>
            <MenuItem value={false}>Proccess</MenuItem>
          </Select>
        </FormControl>
        {todosFiltered.map((todo, i) => (
          <CardTodos key={i} todo={todo} />
        ))}
      </Box>
      <Modals />
    </Box>
  );
};

export default Home;
