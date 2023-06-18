import { createSlice } from '@reduxjs/toolkit';

const akun = createSlice({
    name: 'akun',
    initialState: {
        akun: null
    },
    reducers: {
        setAkun: (state, action) => {
            state.akun = action.payload
        }
    }
})

export const { setAkun } = akun.actions;
export default akun.reducer;