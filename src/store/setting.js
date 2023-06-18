import { createSlice } from '@reduxjs/toolkit';

const setting = createSlice({
    name: 'setting',
    initialState: {
        modal: false,
        msg: "",
    },
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        },
        setMsg: (state, action) => {
            state.msg = action.payload
        }
    }
})

export const { setModal, setMsg } = setting.actions;
export default setting.reducer;