import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { setTodos } = todos.actions;
export default todos.reducer;